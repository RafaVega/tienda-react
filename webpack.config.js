const path = require('path'); //Permite saber donde esta ubicado el proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Variabla que usara el plugin html-webpack-plugin instalado con npm
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Plugin para minimizar css
const { parsePath } = require('react-router-dom');


//Objeto para añadir cada configuracion necesaria para nuestro proyecto
module.exports = {
  entry: './src/index.js', //Punto de entrada de nuestra aplicacion
  output: { //Dónde va a vivir el proyecto una vez este preparado
    path: path.resolve(__dirname, 'dist'), //Para buscar donde se encuentra el archivo y crear ahi la carpeta dist
    filename: 'bundle.js', //Nombre del empaquetado que se va a crear
    publicPath: '/', //Para no tener problemas con las rutas (Routes)
  },
  mode: 'development',
  resolve: {
    extensions: ['.js','.jsx'], //Para reconocer las extensiones con las que vamos a trabajar
    alias : {
      '@components' : path.resolve(__dirname,'src/components/'),
      '@containers' : path.resolve(__dirname,'src/containers/'),
      '@pages' : path.resolve(__dirname,'src/pages/'),
      '@styles' : path.resolve(__dirname,'src/styles/'),
      '@icons' : path.resolve(__dirname,'src/assets/icons/'),
      '@logos' : path.resolve(__dirname,'src/assets/logos/'),
      '@routes' : path.resolve(__dirname,'src/assets/routes/'),
    }
  },
  module: { //Reglas para trabajar con nuestros loaders y plugins
    rules : [
        {//Primera regla para javascripts
            test: /\.(js|jsx)$/, //cuales son los elementos con los que vamos a trabjar
            exclude: /node_modules/, //Elementos que vamos a excluir
            use : { //loaders
                loader: 'babel-loader'
            },
        },
        {//Segunda regla para HTML
            test: /\.html$/, //Lee todos los archivos html
            use : [
                {
                    loader: 'html-loader'
                }
            ]      
        },
        {//Tercera regla para CSS
          test: /\.(css|scss)$/,
          use : [
            "style-loader",
            "css-loader",
            "sass-loader",
          ]
        },{
          test : /\.(png|svg|jpg|gif)$/,
          type : 'asset'
        }

    ]
  },
  plugins: [ //Agregamos los plugins que instalamos para poder usarlos
      new HtmlWebpackPlugin({
          template: './public/index.html', //Donde esta el template
          filename: './index.html' //Archivo de salida una vez hagamos el paquete
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
  ],
  devServer: {
    static: path.join(__dirname,'dist'),
    compress: true,
    port: 3005,
    historyApiFallback: true,
  }
};