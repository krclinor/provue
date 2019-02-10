export default{
	currency: function(value){
		return Intl.NumberFormat("en-US",{style: "currency", currency: "USD"})
			.format(value)
	},
	noDecimal: function(value){
		return Number(value).toFixed(0)
	}
}