$('.column-c').sortable({
  connectWith: '.column-c',
  items: '.card'
});

$('.edit-board').on('click', function(){
  $('.edit-board-modal').addClass('is-active');
  var text = $('.board-title').text();
  $('#e-b-t').val(text);
});

$('.cancel,.modal-background').on('click', function(){
  $('.modal').removeClass('is-active');
  $('.modal').removeAttr('id');
});

$('.cancel-add-card').on('click', function(){
  $(this).parent().parent().parent().find('.column-c').removeAttr('style');
  $(this).parent().removeClass('is-active');
});

$(document).on('click', '.edit-card', function(){
  var id = $(this).parent().attr('id');
  var idnum = id.replace(/[^0-9^\.]/g,"");
  idnum = parseInt(idnum, 10);
  $('.edit-card-modal').addClass('is-active');
  $('.edit-card-modal').attr('id', idnum);
  var text = $(this).prev().text();
  $('#e-ca-t').val(text);
});

$('.add-card').on('click', function(){
  $(this).parent().find('.column-modal').addClass('is-active');
  $(this).parent().parent().find('.column-c').css('height','calc(100% - 172px)')
});

$('.add-column').on('click', function(){
  $('.add-column-modal').addClass('is-active');
});

$('.edit-column').on('click', function(){
  var id = $(this).parent().parent().attr('id');
  var idnum = id.replace(/[^0-9^\.]/g,"");
  idnum = parseInt(idnum, 10);
  $('.edit-column-modal').addClass('is-active');
  $('.edit-column-modal').attr('id', idnum);
  var text = $(this).prev().text();
  $('#e-co-t').val(text);
})

$(document).on({
  'mouseenter' : function(){
    $(this).addClass('is-active')
  },'mouseleave' : function(){
    $(this).removeClass('is-active')}
  },'.card');
