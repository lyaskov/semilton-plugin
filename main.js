function($){
function ajaxStart(){
  $('#progress').show();
}
function ajaxStop(){
  $('#progress').hide();
}
function parserGo(){
  ajaxStart();
  var b = $.ajax('http://xdan.ru');
  b.done(function (d) {
    analysisSite(d);
    ajaxStop();
  });
  b.fail(function (e, g, f) {
    alert('Epic Fail');
    ajaxStop();
  })
}
function analysisSite(data){
  var res = '';
  $(data).find('a').each(function(){
    res+=$(this).text()+'=>'+$(this).attr('href')+'';
  })
  $('#resultbox').html(res);
}
$(function(){
  $('#progress').hide();
  $('#starter').click(parserGo);
});
})(jQuery);