'use strict';


//http://media2.giphy.com/media/3pv7BSaanxWyQ/giphy.gif
//console.log($('.entry-author').attr('href'))

var list = "https://raw.githubusercontent.com/arifcakiroglu/trollblock/master/app/data/list.json";


var blocktype = {
  user : "addrelation",
  messages: "blockauthorindextitle"
}
var sync = localStorage.getItem('tbsync');
var user =  $('#top-navigation .not-mobile a').attr('href');

try {
  user = user.split(/[/ ]+/).pop();
} catch (e) {

}

// var block = function() {
//   list = window.trollList;
//   $('.process').text('Troller siliniyor...');
//
//   $.ajax({
//      url: 'https://eksisozluk.com/biri/'+user+'/'+type+'?id='+troll+'&r=blocked',
//      success: function(data) {
//        if(type == user){
//          $('.process').text(troll+ ' trolü engellendi', )
//        }else{
//          $('.process').text(troll+ ' trolünün başlıkları engellendi')
//        }
//         console.log('%c troll detected! troll: %s type: %s', 'background:red;color:#fff;font-weight:bold;font-size:12px;',troll , type);
//      },
//      type: 'POST'
//   });
//
//   localStorage.setItem('tbsync', true);
// }


var timeOutId = 0;
var trollList = window.trollList;
var i = 0;

var block = function () {

  $.ajax({
    url: 'https://eksisozluk.com/biri/'+user+'/'+blocktype.messages+'?id='+trollList[i][0]+'&r=blocked',
    success: function (response) {},
    type: 'POST'
  });

  $.ajax({
    url: 'https://eksisozluk.com/biri/'+user+'/'+blocktype.user+'?id='+trollList[i][0]+'&r=blocked',
    success: function (response) {

      $('.process b').text('☞ '+trollList[i][1] +' trolü silindi ☠');

      i++;
      if(i < trollList.length){
        timeOutId = setTimeout(block, 1000);

      }else{
        clearTimeout(timeOutId);
        setTimeout(function(){
          $('.process b').html('<b>Tüm trollerden kurtuldun!☠</b>')
        }, 3000)
      }

    },
    type: 'POST'
  });
}




$(function(){



  //!sync && user
  if(true){
    $.getJSON( list, {
      format: "json"
    })
      .done(function( data ) {
        $('#top-bar').before('<div class="process"><img src="http://www.sherv.net/cm/emoticons/rage/troll-typing-by-feet-smiley-emoticon.gif"> <b>	⚠ Troller siliniyor...</b></div>');

        window.trollList = data.troll
        block();
      });
  }





});





//For user messages
// /biri/paradigm-shift/blockauthorindextitle?id=1434091

// For user
// biri/paradigm-shift/addrelation?id=1434091&r=blocked

//removerelation
//addrelation

// $(function(){

//   $('.entry-author').before('<a href="#" style="color:red">⚑</a>');
//   var amk = ['1158231', '1358077' , '1177077', '1434091']
//
//
//   for (var i = 0; i < amk.length; i++) {
//
    // $.ajax({
    //    url: 'https://eksisozluk.com/biri/rolandmicrocube/blockauthorindextitle?id='+amk[i]+'&r=blocked',
    //    success: function(data) {
    //       console.log('%c akTroll detected! ', 'background:red;color:#fff;font-weight:bold;font-size:12px;');
    //    },
    //    type: 'POST'
    // });
//   }
// });
