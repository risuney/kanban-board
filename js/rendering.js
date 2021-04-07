Vue.component('column-opt', {
  template: '<div class="column-opt"><p class="column-title"></p><button type="button" class="edit-column right" title="Edit column"><img src="./icon/option.svg" class="icon-16"></button><button type="button" class="add-card right" title="Add card"><img src="./icon/plus.svg" class="icon-16"></button><div class="column-modal"><textarea name="name" rows="8" cols="10" class="add-card-text"></textarea><button type="button" class="ok modal-add-card">Add card</button><button type="button" class="cancel-add-card">Cancel</button></div></div>'
});

Vue.component('column-c', {
  template: '<div class="column-c"></div>'
});

var columnopt = new Vue ({
  el: '.bord'
})

var columnc = new Vue ({
  el: '.bord'
})
