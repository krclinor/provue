export default{
	sumValues(...vals){
		return vals.reduce((value, total) => total += value, 0)
	},
	getSymbol(op){
		switch(op.toLowerCase()){
			case "add" : return "+"
			case "subtract" : return "-"
			case "multiply" : return "*"
			default: return "/"
		}
	}
}