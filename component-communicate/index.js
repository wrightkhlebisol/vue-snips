Vue.component('coupon', {
	template: `<input placeholder="Enter your coupon code" @blur="$emit('applied')">`,

	methods: {
		
	},
})

new Vue({
	el: "#app",
	data: {
		alertNote: '',
	},

	methods: {
		onCouponApplied(){
			this.alertNote = 'Your coupon was applied'
		}
	},
});