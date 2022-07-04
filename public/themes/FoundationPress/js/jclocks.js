/*
 * jClocksGMT
 * London - New York - Hong Kong
 * Homepage + Contact Page
 * The offset values is used to define the correct time zone for each city.
 */

$(document).ready(function(){

    $('#TimeLondon').jClocksGMT( { dst:true });

    $('#TimeNewYork').jClocksGMT({ offset: '-5', dst:true });

    $('#TimeHongKong').jClocksGMT({ offset: '+8', dst:false });

    $('#TimeShanghai').jClocksGMT({ offset: '+8', dst:false });

    $('#TimeIstanbul').jClocksGMT({ offset: '+3', dst:false });

    $('#TimeSingapore').jClocksGMT({ offset: '+8', dst:false  });

});