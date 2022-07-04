(function( $ ) {

	'use strict';

	// Format number as a currency. 
	//CAUTION: This will break any field that is an integer and turn it to a String.
	var format = function(num) {
		var str = num.toString().replace("$", ""), parts = false, output = [], i = 1, formatted = null;
		if(str.indexOf(".") > 0) {
			parts = str.split(".");
			str = parts[0];
		}
		str = str.split("").reverse();
		for(var j = 0, len = str.length; j < len; j++) {
			if(str[j] != ",") {
				output.push(str[j]);
				if(i%3 == 0 && j < (len - 1)) {
					output.push(",");
				}
				i++;
			}
		}
		formatted = output.reverse().join("");
		return("$" + formatted + ((parts) ? "." + parts[1].substr(0, 2) : ""));
	};

	// Calculate based on commission calculator spreadsheet provided by Image Property.
    $("#calculate").on("click", function() {

		$("#calculate").hide();

        let cgi = $('input[name="total_gci_per_annum"]').val();
        let sales_per_annum = $('input[name="sales_per_annum"]').val();
	console.log(cgi);
        let gci_70 = 0;
        let gci_80 = 0;
        let gci_100 = 0;

		// Calculate the Commission Brackets:
		// 	* 70% for every dollar under $100k (gci_70).
		// 	* 80% for every dollar between $100k - $200k (gci_80).
		// 	* 100% commission for every dollar above $200k.

        if ( cgi >= 100000 ) { gci_70 = 70000; } else {  gci_70 = cgi * .7; }

        if ( cgi >= 100000 && cgi <= 200000 ) { 
			
			gci_80 = (cgi - 100000 ) * .8;
		
		} else if (cgi >= 200000 ) { 
			
			gci_80 = 80000; 

		} 

        if ( cgi >= 200000 ) {  
			
			gci_100 = cgi - 200000; 
		
		} else { 
			
			gci_100 = (cgi - 200000 ) * .8; 
			
			if (gci_100 <= 0 ) { 
				
				gci_100 = 0; 
			
			} 
		}

        let gross_commission = gci_70 + gci_80 + gci_100;
		let total_sub_fee = 295 * 12;
		let settlement_fee = 649 * sales_per_annum;
		let net_commission =  gross_commission - (settlement_fee + total_sub_fee);

        $('input[name="gross_commission"]').val(gross_commission);
        $('input[name="Sub_fee"]').val( total_sub_fee );
        $('input[name="settlement_fee"]').val(settlement_fee);
        $('#total_commission').html( format(net_commission) );
    
    });

	$("#show").on("click", function() { $("#calculate").show(); });

})( jQuery );

