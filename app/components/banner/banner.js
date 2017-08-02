import tpl from './banner.vue';
import vue from 'vue';


var banner = vue.extend({
	template: tpl,

	created: function () {
		console.log('banner created function');
	}
});

export default banner;