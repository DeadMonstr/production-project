// @ts-ignore
import webpack , {RuleSetRule,DefinePlugin} from 'webpack'
import { type BuildPaths } from '../build/types/config'
import * as path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import {buildBabelLoader} from "../build/loaders/buildBabelLoader";
import {buildSvgLoader} from "../build/loaders/buildSvgLoader";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {...rule,exclude: /\.svg$/i}
        }
        return rule
    })
    config.module.rules.push(buildSvgLoader())
    config.module.rules.push(buildCssLoader(true))
    config.module.rules.push(buildBabelLoader())
    config.plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: true
    }))


    return config
}
