# Introduction 
- A simple webpack 5 template with typescript and babel but without a web framework such as React or Vue.js
- `@babel/preset-typescript` is used to compile Typescript instead of `tsc`, so there is no `ts-loader` but only `babel-loader`

# Usages
1. Run `npm install` to install all dependencies
2. Run `./build.sh` to build
2. Run `./run.sh` to start a local http server, this automatically opens a browser tab with URL http://127.0.0.1/3000
3. Modify files under `src` and you can see changes automatically reflected in the browser

# Tech stack
- Webpack 5
- Typescript
- Babel
- RxJS
- Sass