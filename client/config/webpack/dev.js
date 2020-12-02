const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');           //html 문서에 자동으로 번들파일을 추가해주는 플러그인
const MiniCssExtractPlugin = require('mini-css-extract-plugin');    //bundle.js에 컴파일된 css를 포함시키지 않고 별도의 css 파일로 분리해서 하나의 파일로 번들링
const {CleanWebpackPlugin} = require("clean-webpack-plugin");       //사용안하는 파일을 자동으로 삭제
const BundleTracker = require('webpack-bundle-tracker');
const Dotenv = require('dotenv-webpack');

const buildPath = path.resolve(__dirname, '../../build');

module.exports = {
    mode: "development",
    entry: ['./src/index.tsx'],             //처음 시작할 파일을 지정. default: ./src/index.js
    module: {
        rules: [
            {
                test: /\.tsx?$/,            // .tsx 확장자로 끝나는 파일
                use: 'ts-loader',           // ts-loader 가 컴파일(트랜스파일 ts -> js)
                exclude: /node_modules/     // node_modules 디렉토리에 있는 파일들 제외
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",           // translates CSS into CommonJS
                    "sass-loader"           // compiles Sass to CSS, using Node Sass by default
                ],
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader" // 배포용으로 빌드한 파일과 원본 파일 연결
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']      // resolve 순서 여기서는 .tsx가 가장 우선 resolve 된다. 만약 같은 이름의 3개파일이 있다면 .tsx확장자로 된 파일만 처리하고 그다음은 스킵한다.
    },
    output: {
        filename: 'bundle.js',                          // build시 만들어질 번들 파일 이름
        // publicPath: 'http://0.0.0.0:6000/',
        // publicPath: 'http://202.8.174.146:7008/',       // 중첩된 React router 빈페이지 해결
        path: buildPath                                 // 번들 파일 경로
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }), // './src/index.html' 경로에 html 파일에 번들 파일을 넣어준다.
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),  // 컴파일 + 번들링 css 파일이 저장될 경로와 이름 지정
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build']
        }),
        new BundleTracker({
            path: path.resolve(buildPath, './tracker'),
            filename: 'webpack-stats.dev.json'
        }), //번들파일의 경로 지정(django에서 사용하기 위해)
        new Dotenv({
            path: './config/env/.dev'
        }), //환경변수 셋팅
    ],
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        contentBase: buildPath,       //정적파일을 제공할 경로 (default 웹팩 아웃풋)
        publicPath: "/",              //브라우져를 통해 접근하는 경로 (default /)
        overlay: true,                //빌드시 에러나 경고를 브라우져 화면에 표시한다.
        stats: "errors-only",         // 메세지 수준결정 ('none', 'erros-only' 등등)
        proxy: {
            //서버의 URL이 틀리거나 PORT가 다르면 PROXY가 적용되지 않는다!
            //모든 요청에 대해 검사하기 때문에 /apiOne 도 /api proxy적용 ?
            // '/api': {
            //     target:'http://0.0.0.0:7009'
            // },
            '/chatbot/api':{
                target: 'http://202.8.174.146:7006'
            }
        },
        historyApiFallback: true                        // 히스토리 API를 사용하는 SPA 개발시 설정. 404발생하면 index.html로 리다이렉트
    }
};