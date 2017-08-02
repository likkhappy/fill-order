import vue from 'vue';
import banner from './components/banner/banner'

console.log(banner);

new vue ({
	el: '#app',
	data: {
		a: 1
	},

	created: function () {
		console.log('a is: ' + this.a)
	},

	components: {
		bar: banner
	}
})