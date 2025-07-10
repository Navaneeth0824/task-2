document.getElementById('contactForm').addEventListener('submit', function (e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    e.preventDefault();
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    e.preventDefault();
  }
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">✕</button>`;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}
