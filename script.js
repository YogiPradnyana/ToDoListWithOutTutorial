const todo = document.getElementById('todo');

function add() {
  // 1. Mengambil nilai pada input
  let newText = document.getElementById('new_text');

  // 2. Menambahkan li baru
  let newTodo = '<li><span onclick="beriGaris(this)">' + newText.value + '</span>' + '<span onclick="removeBtn(this)">[x]</span>' + '</li>';
  todo.insertAdjacentHTML('afterbegin', newTodo);

  // 3. Menghapus isi fieldnya
  newText.value = '';
}

function beriGaris(el) {
  el.classList.toggle('done');
}

function removeBtn(el) {
  el.parentElement.remove();
}
