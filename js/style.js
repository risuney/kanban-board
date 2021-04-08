$('.column-c').sortable({
  connectWith: '.column-c',
  items: '.card'
});

$('.edit-bord').on('click', function(){
  $('.edit-board-modal').addClass('is-active');
});


$(document).on('click', '.cancel,.modal-background', function(){
  $('.modal').removeClass('is-active');
  $('.modal').removeAttr('id');
});

$(document).on('click', '.cancel-add-card', function(){
  $(this).parent().parent().parent().find('.column-c').removeAttr('style');
  $(this).parent().removeClass('is-active');
})

$(document).on('click', '.edit-card', function(){
  var id = $(this).parent().attr('id');
  var idnum = id.replace(/[^0-9^\.]/g,"");
  idnum = parseInt(idnum, 10);
  $('.edit-card-modal').addClass('is-active');
  $('.edit-card-modal').attr('id', idnum);
});

$(document).on('click','.add-card', function(){
  $(this).parent().find('.column-modal').addClass('is-active');
  $(this).parent().parent().find('.column-c').css('height','calc(100% - 172px)')
});

$('.add-column').on('click', function(){
  $('.add-column-modal').addClass('is-active');
});

$(document).on('click', '.edit-column', function(){
  var id = $(this).parent().parent().attr('id');
  var idnum = id.replace(/[^0-9^\.]/g,"");
  idnum = parseInt(idnum, 10);
  $('.edit-column-modal').addClass('is-active');
  $('.edit-column-modal').attr('id', idnum);
})

$(document).on({
  'mouseenter' : function(){
    $(this).addClass('is-active')
  },'mouseleave' : function(){
    $(this).removeClass('is-active')}
  },'.card');
