const todo = document.getElementById('todo');

function add() {
  // 1. Mengambil nilai pada input
  let newText = document.getElementById('new_text');

  // 2. Menambahkan li baru
  let newTodo = '<li><span>' + newText.value + '</span></li>';
  todo.insertAdjacentHTML('afterbegin', newTodo);

  // 3. Menghapus isi fieldnya
  newText.value = '';
}
