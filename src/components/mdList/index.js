import mdList from './mdList.vue';
import mdListItem from './mdListItem.vue';
import mdListExpand from './mdListExpand.vue';

export default function install(Vue) {
  Vue.component('md-list', Vue.extend(mdList));
  Vue.component('md-list-item', Vue.extend(mdListItem));
  Vue.component('md-list-expand', Vue.extend(mdListExpand));
}
