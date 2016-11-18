'use strict';
function getId(path) {
  var match = RegExp('[?&]id=([^&]*)').exec(path);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

$(function(){

  var arr = [];
  $('.parse').on('click',function(){
    var urls = $('.trollList').val().split("\n");
    for (var i = 0; i < urls.length; i++) {

      $.get(urls[i], function( data ) {
        var listArr = [];
        listArr.push(getId($(data).find('.relation-link').data('removeUrl')))
        listArr.push($(data).find('#user-profile-title a').text());
        arr.push(listArr);
      });
    }
    debugger;
    console.log(arr.toString);

  })
})
