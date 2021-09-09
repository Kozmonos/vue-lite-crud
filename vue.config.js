module.exports = {
	css: { extract: false },
	chainWebpack: config => {
		config.module
			.rule('vue')
			.use("vue-svg-inline-loader")
			.loader("vue-svg-inline-loader")
		config.module
			.rule('css')
			.use("vue-style-loader")
			.loader("vue-style-loader")

	}
}