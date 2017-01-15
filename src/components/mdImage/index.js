import mdImage from './mdImage.vue';

export default function install(Vue) {
  Vue.component('md-image', Vue.extend(mdImage));
}
