'use strict';

//console.log($('.entry-author').attr('href'))

console.log('Amk a')
//For user messages
// /biri/paradigm-shift/blockauthorindextitle?id=1434091

// For user
// biri/paradigm-shift/addrelation?id=1434091&r=blocked

//removerelation
//addrelation

$(function(){

  var amk = ['1158231', '1358077' , '1177077', '1434091']


  for (var i = 0; i < amk.length; i++) {

    $.ajax({
       url: 'https://eksisozluk.com/biri/rolandmicrocube/blockauthorindextitle?id='+amk[i]+'&r=blocked',
       success: function(data) {
          console.log('%c akTroll detected! ', 'background:red;color:#fff;font-weight:bold;font-size:12px;');
       },
       type: 'POST'
    });
  }
});
