const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,


  devServer: {
    port:8080,
    open: true,
      proxy:{
        "/apis": {
          target: "http://api.daicuo.cc",
          changeOrigin: true,
          ws: true,
      }
}

}
})


