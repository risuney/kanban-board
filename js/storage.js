var url = location.href;
var index = url.indexOf('?');
var tn = url.slice(index + 1);

// ループ
// for ( var i = 0; i<5 ; i++) {
// }


$(function(){
  for (var i = 0; i < 5; i++) {
    // columnのid
    var id = '#column'+i;
    // カラムの内容取得
    var column = localStorage.getItem('column'+i+'+'+tn);
    // カラム内に反映(#column0~4)
    $(id).find('.column-c').html(column);
    // カラムのクラス取得
    var column_class = localStorage.getItem('column'+i+'_class+'+tn);
    // カラムにクラスをaddClass
    $(id).addClass(column_class);
    // カラムのタイトル取得
    var column_t = localStorage.getItem('column'+i+'_t+'+tn);
    // カラムに.text()
    $(id).find('.column-opt').find('.column-title').text(column_t);
    // ボードのタイトル取得
    var board_t = localStorage.getItem('board_t+'+tn);
    // .text()
    $('.board-title').text(board_t);
    // <title></title>にぶち込む
    $('title').text(board_t + ' / Kanban');
  };
});

// setIntervalで1000ms間隔に変更

setInterval(function(){
  for (var i = 0; i < 5; i++) {
    var id = '#column'+i;
    // カラムの内容取得
    var column = $(id).find('.column-c').html();
    // 反映
    localStorage.setItem('column'+i+'+'+tn, column);

    // カラムのクラス取得(columnは省く)
    var column_class = $(id).attr('class').replace('column','');
    // 反映
    localStorage.setItem('column'+i+'_class+'+tn, column_class);
    // カラムのタイトル取得
    var column_t = $(id).find('.column-opt').find('.column-title').text();
    // 反映
    localStorage.setItem('column'+i+'_t+'+tn, column_t);

    // ボードのタイトル取得
    var board_t = $('.board-title').text();
    // 反映
    localStorage.setItem('board_t+'+tn, board_t);
    // カードの現在のid
    localStorage.setItem('cardid+'+tn, cardid);
    // カラムのid
    localStorage.setItem('columnid+'+tn, columnidnum);
  }
},1000);
