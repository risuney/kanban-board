var llen = localStorage.getItem('board_num');
if (llen == null) {
  var llen = 0;
}

$('.add-board').on('click', function(){
  $('#add-board').addClass('is-active')
});

$('.cancel,.modal-background').on('click', function(){
  $('.modal').removeClass('is-active');
});

$('#modal-add-board').on('click', function(){
  var text = $(this).prev().val();
  localStorage.setItem('board_t+'+llen, text);
  var url = 'board.html?'+llen
  var list_item = '<div class="list-item"><a class="l-i-t" href="'+url+'">'+text+'</a></div>';
  $('.list').append(list_item);
  $(this).prev().val('');
  $('.edit-column-modal').removeClass('is-active');
  llen++;
  localStorage.setItem('board_num', llen);
  window.location.href = url
});

$(function(){
  var bnum = localStorage.getItem('board_num');
  for ( var i = 0; i<bnum ; i++) {
    var text = localStorage.getItem('board_t+'+i);
    var list_item = '<div class="list-item"><a class="l-i-t" href="board.html?'+i+'">'+text+'</a></div>';
    $('.list').append(list_item);
  }
});
