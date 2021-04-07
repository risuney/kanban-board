Vue.component('column-opt', {
  template: '<div class="column-opt"><p class="column-title"></p><button type="button" class="edit-column right" title="Edit column"><img src="./icon/option.svg" class="icon-16"></button><button type="button" class="add-card right" title="Add card"><img src="./icon/plus.svg" class="icon-16"></button><div class="column-modal"><textarea name="name" rows="8" cols="10" class="add-card-text"></textarea><button type="button" class="ok modal-add-card">Add card</button><button type="button" class="cancel-add-card">Cancel</button></div></div>'
});

Vue.component('edit-card-modal', {
  template: '<div class="modal edit-card-modal"><div class="modal-background"></div><div class="modal-content"><p class="modal-title">Edit card</p><textarea name="name" rows="8" cols="80"></textarea><button type="button" class="ok" id="edit-card-save">Save</button><button type="button" class="cancel">Cancel</button><button type="button" class="delete" id="edit-card-delete">Delete this card</button></div></div>'
});

Vue.component('edit-column-modal', {
  template: '<div class="modal edit-column-modal"><div class="modal-background"></div><div class="modal-content"><p class="modal-title">Edit column</p><textarea name="name" rows="8" cols="80"></textarea><button type="button" class="ok" id="edit-column-save">Save</button><button type="button" class="cancel">Cancel</button><button type="button" class="delete" id="edit-column-delete">Delete this column</button></div></div>'
});
Vue.component('add-column-modal', {
  template: '<div class="modal add-column-modal"><div class="modal-background"></div><div class="modal-content"><p class="modal-title">Add column</p><textarea name="name" rows="8" cols="80"></textarea><button type="button" class="ok" id="modal-add-column">Add column</button><button type="button" class="cancel">Cancel</button></div></div>'
});

Vue.component('column-c', {
  template: '<div class="column-c"></div>'
});

var columnopt = new Vue ({
  el: '.bord'
});

var columnc = new Vue ({
  el: '.bord'
});

var modal = new Vue ({
  el: '#modal'
});
