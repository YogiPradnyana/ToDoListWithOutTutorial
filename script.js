const todo = document.getElementById('todo');

function showAlert(message, className) {
  const div = document.createElement('div');
  div.className = `alert alert-${className} mt-2 col-5`;
  div.appendChild(document.createTextNode(message));

  const container = document.querySelectorAll('.container')[1];
  // const form = document.querySelector('.form-todo');
  const ul = document.getElementById('todo');
  container.insertBefore(div, ul);

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
    let newTodo = `<li style="margin-left: -32px;">
    <span>${newText.value}</span>
    <span onclick="beriGaris(this)">[v]</span>
    <span onclick="removeBtn(this)">[x]</span>
    </li>`;
    todo.insertAdjacentHTML('afterbegin', newTodo);
    // 3. Menghapus isi fieldnya
    newText.value = '';
  }
}

function beriGaris(el) {
  el.previousElementSibling.classList.toggle('done');
}

function removeBtn(el) {
  el.parentElement.remove();
}
