'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base');

const webpackConfigDev = webpackMerge(webpackConfigBase, {
  devtool: 'inline-module-source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});

module.exports = webpackConfigDev;
