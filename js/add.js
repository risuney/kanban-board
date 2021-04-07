// Add card
var url = location.href;
var index = url.indexOf('?');
var tn = url.slice(index + 1);
var cardid = localStorage.getItem('cardid+'+tn);
var columnidnum = localStorage.getItem('columnid+'+tn);

if (cardid == undefined) {
  cardid = 1;
  columnidnum = 1;
}

$(document).on('click', '.modal-add-card', function(){
  var text = $(this).prev().val();
  var card = '<div class="card" id="card' + cardid + '"><p class="card-c">' + text + '</p><button type="button" class="edit-card right" title="Edit card"><img src="./icon/option.svg" class="icon-16"></button></div>'
  $(this).parent().parent().parent().find('.column-c').prepend(card);
  cardid++;
  $(this).prev().val('');
});

// Edit card
// Delete card

$('#edit-card-delete').on('click', function(){
  var idnum = $('.edit-card-modal').attr('id');
  var id = '#card' + idnum;
  $(id).remove();
  $('.edit-card-modal').removeClass('is-active');
  $('.edit-card-modal').removeAttr('id');
});

// Save

$('#edit-card-save').on('click', function(){
  var text = $(this).prev().val();
  var idnum = $('.edit-card-modal').attr('id');
  var id = '#card' + idnum;
  $(id).find('p').text(text);
  $(this).prev().val('');
  $('.edit-card-modal').removeClass('is-active');
  $('.edit-card-modal').removeAttr('id');
});

// Add column

$('#modal-add-column').on('click', function(){
  var text = $(this).prev().val();
  var columnid = '#column'+columnidnum;
  $(columnid).removeClass('hidden');
  $(columnid).find('.column-opt').find('.column-title').text(text);
  columnidnum++;
  $(this).prev().val('');
  $('.add-column-modal').removeClass('is-active');
});

// Edit column

// Save

$('#edit-column-save').on('click', function(){
  var text = $(this).prev().val();
  var idnum = $('.edit-column-modal').attr('id');
  var id = '#column' + idnum;
  $(id).find('.column-title').text(text);
  $(this).prev().val('');
  $('.edit-column-modal').removeClass('is-active');
  $('.edit-column-modal').removeAttr('id');
});

// Delete card

$('#edit-column-delete').on('click', function(){
  var idnum = $('.edit-column-modal').attr('id');
  var id = '#column' + idnum;
  $(id).addClass('hidden');
  $('.edit-column-modal').removeClass('is-active');
  $('.edit-column-modal').removeAttr('id');
});

$(function(){
  if (cardid == 1) {
    $('.column').addClass('hidden')
  }
})
