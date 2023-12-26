import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
    const scssLoader = buildCssLoader(isDev)
    const babelLoader = buildBabelLoader()
    const svgLoader = buildSvgLoader()

    return [
        scssLoader,
        babelLoader,
        typescriptLoader,
        svgLoader,
        fileLoader
    ]
}
