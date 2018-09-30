import side from './side'

const components = {
  side
}
const install = function (Vue, opts = {}) {
  if (install.installed) return;

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default install
