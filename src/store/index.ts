import { createStore, ModuleTree } from 'vuex';
const modulesFiles = require.context('./modules', true, /\.ts$/)
const modules = modulesFiles
  .keys()
  .reduce((module: ModuleTree<{ [key: string]: any}>, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    module[moduleName] = value.default
    return module
  }, {})
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules
});
