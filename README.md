# vuex-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
types.js -> 一般用于存储mutation里面变量
mutations-> 方法函数 回调函数 改变值状态
Action 类似于 mutation 不同的是 action 提交的是 mutation 而不是直接改变状态 action可以包含任意异步操作
getters -> 起到了过滤store 中的state的作用
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
