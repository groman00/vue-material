import mdSnackbar from './mdSnackbar.vue';

export default function install(Vue) {
  Vue.component('md-snackbar', Vue.extend(mdSnackbar));
}
