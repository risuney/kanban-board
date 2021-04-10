var url = location.href;
var index = url.indexOf('?');
var tn = url.slice(index + 1);

$(function(){
  for (var i = 0; i < 5; i++) {
    var id = '#column'+i;
    var column = localStorage.getItem('column'+i+'+'+tn);
    $(id).find('.column-c').html(column);
    var column_class = localStorage.getItem('column'+i+'_class+'+tn);
    $(id).addClass(column_class);
    var column_t = localStorage.getItem('column'+i+'_t+'+tn);
    $(id).find('.column-opt').find('.column-title').text(column_t);
    var board_t = localStorage.getItem('board_t+'+tn);
    $('.board-title').text(board_t);
    $('title').text(board_t + ' / Kanban');
  };
});

setInterval(function(){
  for (var i = 0; i < 5; i++) {
    var id = '#column'+i;
    var column = $(id).find('.column-c').html();
    localStorage.setItem('column'+i+'+'+tn, column);
    var column_class = $(id).attr('class').replace('column','');
    localStorage.setItem('column'+i+'_class+'+tn, column_class);
    var column_t = $(id).find('.column-opt').find('.column-title').text();
    localStorage.setItem('column'+i+'_t+'+tn, column_t);
    var board_t = $('.board-title').text();
    localStorage.setItem('board_t+'+tn, board_t);
    localStorage.setItem('cardid+'+tn, cardid);
    localStorage.setItem('columnid+'+tn, columnidnum);
  }
},1000);
