import mdProgress from './mdProgress.vue';

export default function install(Vue) {
  Vue.component('md-progress', Vue.extend(mdProgress));
}
