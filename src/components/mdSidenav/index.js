import mdSidenav from './mdSidenav.vue';

export default function install(Vue) {
  Vue.component('md-sidenav', Vue.extend(mdSidenav));
}
