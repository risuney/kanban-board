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
  var list_item = '<a href="'+url+'"><div class="list-item"><p class="l-i-t">'+text+'</p></div></a>';
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
    var list_item = '<a href="board.html?'+i+'"><div class="list-item"><p class="l-i-t">'+text+'</p></div></a>';
    $('.list').append(list_item);
  }
});

$('.set-icon').on('click', function(){
  $('#setting').addClass('is-active')
});

$('#delete-data').on('click', function(){
  confirm('Are you sure you want to delete all the data?');
  if (true) {
    localStorage.clear();
    $('#setting').removeClass('is-active');
    location.reload();
  } else {
    $('#setting').removeClass('is-active')
  }
});
