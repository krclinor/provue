module.exports = {
	devServer: {
		proxy: {
			"/api": {
				target: "http://localhost:3500",
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/' // remove base path
				},
				secure: false
			}
		}
	}
  };