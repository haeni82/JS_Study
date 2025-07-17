// postcssrc.js 
// nodejs에선 CommonJS이기 때문에 import 대신 require()을 export 대신 module.exports을 사용해야 한다.
module.exports = {
  plugins: [
    require('autoprefixer') // 간소화
  ]
}