<h1 align="center"> Frontend development setup with Webpack </h1>

### Quick Start

Go to the project directory and run the following command:

```shell
run npm i
```

### NPM scripts

```shell
npm run dev
npm run build
npm run all
```

<h2 align="center">Install the latest version of dev dependencies</h2>

If you want to install new versions of the packages then **remove the devDependencies object** from the **package.json** file and run the following command.

```shell
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser autoprefixer css-loader eslint eslint-config-airbnb-base eslint-webpack-plugin file-loader glob html-webpack-plugin mini-css-extract-plugin npm-run-all postcss-loader purgecss-webpack-plugin sass sass-loader sass-migrator ts-loader typescript webpack webpack-cli webpack-dev-server -D
```

<h2 align="center">Webpack configurations</h2>

### One file(CSS and JavaScript) for the entire project

Generally, used for small landing page websites.

```js
    entry: './src/index.ts'
```

### Code splitting CSS and JS files

```js
    entry: {
        'base': './src/typescript/pages/base.ts',
        'index': './src/typescript/pages/index.ts',
        'about': './src/typescript/pages/about.ts',
    }
```

### Defining destination directory

How to link the CSS and JavaScript files is determined by the ```publicPath: 'auto'``` attribute.

For example, in this configuration CSS and js files will be created inside of ```src/CSS/... and src/js/...``` If I add 'new_path' here then it'll link like this ```new_path/src/CSS/... and new_path/src/js/...```

```clean: true``` attribute automatically cleans the output directory before making new changes. This attribute replaces the need for an external plugin called ```CleanWebpackPlugin()```

```js
    output: {
        filename: 'src/js/[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'auto',
        clean: true,
    }
```

### Webpack loader category

```enforce: 'pre'``` specifies the category of the loader.

```js
    {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        enforce: 'pre' // To solve TS2304: Cannot find name '__webpack_public_path__' problem.
    }
```

### Change the TypeScript extension to JavaScript after compiling the file

```js
    resolve: {
        extensions: ['.ts', '.js']
    },
```

### MiniCssExtractPlugin Webpack plugin

It is used to build the CSS files in the specified directory of the destination directory.

```js
    new MiniCssExtractPlugin({
        filename: 'src/CSS/[name].CSS'
    }),
```

### HtmlWebpackPlugin Webpack plugin

It is used to build the HTML files in the destination directory from a template file.

NOTE: You can use this plugin to create multiple HTML files. Use once for single/landing page websites and use multiple times to create multi-page websites.

- ```filename: 'index.html'``` The filename of the destination directory HTML file.

- ```template: 'src/templates/index.html'``` The template file to generate the destination directory HTML file.

- ```chunks: ['base', 'index']``` Specify which CSS and JS files as well as images this HTML file should use.

For example, in this case, it only uses those CSS, JS, and images that are imported into the home (home is the key of the entry object).

NOTE: USE THIS OPTION ONLY IF YOU USE CODE SPLITTING

```js
module.exports = {
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['base', 'index'],
            title: 'Home page title',
            description: 'Home page description',
            template: 'src/templates/index.html',
            publicPath: ''
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['base', 'about'],
            title: 'About page title',
            description: 'About page description.',
            template: 'src/templates/about.html',
            publicPath: ''
        })
};
```

### ESLintPlugin Webpack plugin

```fix: true``` Automatically fix linting errors. It changes file content. Don't use it in production.

```js
    new ESLintPlugin({
        extensions: ['.js', '.ts'],
        exclude: ['node_modules', 'dist'],
        fix: true
    })
```
