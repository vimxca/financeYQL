(function(){

	// Get reference to the ticker text and submit button
	const textTickerSymbol = document.getElementById('tickerSymbol');
	const buttonSubmitTicker = document.getElementById('submitTicker');

	// Add event for submit button
	buttonSubmitTicker.addEventListener('click', e=> {
		// Set ticker symbol
		var stock = textTickerSymbol.value;
		// Set YQL statement
		var yql = 'select * from yahoo.finance.quote where symbol in ("' + stock + '")';
		// Set REST query
		var url_1 = 'https://query.yahooapis.com/v1/public/yql?q=';
		var url_2 = 'select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22' + stock + '%22)';
		var url_3 = '&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
		var url = url_1 + url_2 + url_3;
		// jquery
		$.getJSON(url, function(data) {
			console.log(data);
			// Reference the stock information
			var AverageDailyVolume = data.query.results.quote.AverageDailyVolume;
			var Change = data.query.results.quote.Change;
			var DaysHigh = data.query.results.quote.DaysHigh;
			var DaysLow = data.query.results.quote.DaysLow;
			var DaysRange = data.query.results.quote.DaysRange;
			var LastTradePriceOnly = data.query.results.quote.LastTradePriceOnly;
			var MarketCapitalization = data.query.results.quote.MarketCapitalization;
			var Name = data.query.results.quote.Name;
			var StockExchange = data.query.results.quote.StockExchange;
			var Symbol = data.query.results.quote.Symbol;
			var Volume = data.query.results.quote.Volume;
			var YearHigh = data.query.results.quote.YearHigh;
			var YearLow = data.query.results.quote.YearLow;
			var symbol = data.query.results.quote.symbol;
			// Display stock information
			var displayAverageDailyVolume = 'The Average Daily Volume is: ' + AverageDailyVolume + '<br>';
			var displayChange = 'The Change is: ' + Change + '<br>';
			var displayDaysHigh = 'The Days High is: ' + DaysHigh + '<br>';
			var displayDaysLow = 'The Days Low is: ' + DaysLow + '<br>';
			var displayDaysRange = 'The Days Range is: ' + DaysRange + '<br>';
			var displayLastTradePriceOnly = 'The Last Trade Price Only is: ' + LastTradePriceOnly + '<br>';
			var displayMarketCapitalization = 'The Market Capitalization is: ' + MarketCapitalization + '<br>';
			var displayName = 'The Name is: ' + Name + '<br>';
			var displayStockExchange = 'The Stock Exchange is: ' + StockExchange + '<br>';
			var displaySymbol = 'The Symbol is: ' + Symbol + '<br>';
			var displayVolume = 'The Volume is: ' + Volume + '<br>';
			var displayYearHigh = 'The Year High is: ' + YearHigh + '<br>';
			var displayYearLow = 'The Year Low is: ' + YearLow + '<br>';
			var displaysymbol = 'The symbol is: ' + symbol + '<br>';
			var display = displayAverageDailyVolume + displayChange + displayDaysHigh + displayDaysLow +
			displayDaysRange + displayLastTradePriceOnly + displayMarketCapitalization + displayName +
			displayStockExchange + displaySymbol + displayVolume + displayYearHigh + displayYearLow +
			displaysymbol;
			document.getElementById('display').innerHTML = display;
		});
	});

}());
