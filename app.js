const btn = document.getElementById('btn');
const erremail = document.getElementById('erremail');
const inputf = document.getElementById('inputf');

btn.addEventListener('click', () => {
  if (inputf.value == '') {
    erremail.classList.remove('hidden');
  }
  inputf.value = '';
});

const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

inputf.addEventListener('keyup', () => {
  if (!inputf.value.match(emailRegex)) {
    erremail.classList.remove('hidden');
  } else {
    erremail.classList.add('hidden');
  }
});

const firstbuttongetstart = document.getElementById('first-button-getstart');

const getStartedForm = document.getElementById('get-started-form');

firstbuttongetstart.addEventListener('click', () => {
  getStartedForm.scrollIntoView({behavior: 'smooth', block: "center"});
  // inputf.focus();
});
