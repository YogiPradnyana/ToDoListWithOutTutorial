const todo = document.getElementById('todo');

function showAlert(message, className) {
  const div = document.createElement('div');
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));

  const container = document.querySelectorAll('.container')[1];
  const form = document.querySelector('.form-todo');
  container.insertBefore(div, form);

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 2000);
}

function add() {
  // 1. Mengambil nilai pada input
  let newText = document.getElementById('new_text');

  // Validated
  if (newText.value == '') {
    showAlert('Input kosong tidak diterima', 'danger');
  } else {
    // 2. Menambahkan li baru
    let newTodo = '<li><span onclick="beriGaris(this)">' + newText.value + '</span>' + '<span onclick="removeBtn(this)">[x]</span>' + '</li>';
    todo.insertAdjacentHTML('afterbegin', newTodo);
    // 3. Menghapus isi fieldnya
    newText.value = '';
  }
}

function beriGaris(el) {
  el.classList.toggle('done');
}

function removeBtn(el) {
  el.parentElement.remove();
}
