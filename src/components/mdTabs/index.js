import mdTabs from './mdTabs.vue';
import mdTab from './mdTab.vue';

export default function install(Vue) {
  Vue.component('md-tabs', Vue.extend(mdTabs));
  Vue.component('md-tab', Vue.extend(mdTab));
}
