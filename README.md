看书手动写一个React-Redux 案列并记录下全过程。

1. 创建工程目录：执行 create-react-app demo-mc-test 生成工程目录，删除App.* 文件，删除logo.svg, 删除registerServiceWorker.js 文件，修改package.json
"devDependencies": {
    "react-scripts": "0.8.4",
    "redux-immutable-state-invariant": "^1.2.4"
  },
  "dependencies": {
    "react": "^15.4.1",
    "react-addons-perf": "^15.4.1",
    "react-dom": "^15.4.1",
    "react-redux": "^5.0.1",
    "redux": "^3.6.0"
  },
  npm install(安装dependencies).

  2. 添加constants.js 文件， Store.js 文件 ，ToDoApp.js 文件

  3. 添加todos 和 filter 模块
  
  4. 修改（2）添加的文件

  总结：用模块的index.js 暴露接口，通过创建 Store.js 来作为context 来组织组建合并（TODOApp.js)。
  

