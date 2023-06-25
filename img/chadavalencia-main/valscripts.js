const form = document.getElementById('my_form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  // 👇️ Send data to the server here

  // 👇️ Reset the form here
  form.reset();
});

