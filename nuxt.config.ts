// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  routeRules: {
    '/': { ssr: false },
  },
  // vue: {  
  //   compilerOptions: {
  //     isCustomElement: (tag: string) => ['baklava-editor'].includes(tag),
  //   },
  // },
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  }
})
