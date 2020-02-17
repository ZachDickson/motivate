export default class Quote {
  constructor(data){
    this.quote = data.quote.body
  }

get quoteTemplate (){
  return /*html*/`
	<h4>${this.quote}</h4>	`
}

}
