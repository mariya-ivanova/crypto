var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
       info: [
       {
          code: 'Code',
          symbol: 'Symbol',
          rate: 'Rate',
          description: 'Description'
       },
      ],
    },  
	filters: {
	  currencydecimal (value) {
	  	if(value) {
	    	return value.toFixed(2)
	  	}
	  }
	},
 created () {
    axios
     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
     .then(response => {
            // console.log(response.data.bpi);
            this.info = response.data.bpi
        })
     .catch(error => console.log(error))
    }  
});
