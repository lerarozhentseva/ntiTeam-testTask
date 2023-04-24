//№1 slider
$(document).ready(function () {
  $('.introSlider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });
});

//№2 form validation
function formValidation(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value.trim();
  const phone = document.querySelector('input[name="phone"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();
  const file = document.querySelector('input[type="file"]').files[0];

  const phoneRegExp = /^\d{10,12}$/;

  if (name === '' || phone === '' || message === '') {
    alert('Заполните все поля формы!');
    return;
  }

  if (!phoneRegExp.test(phone)) {
    alert('Номер телефона введен некорректно!');
    return;
  }

  const formData = new FormData();
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('message', message);
  if (file) {
    formData.append('file', file, file.name);
  }
}
const submitButton = document.querySelector('.submitForm');
submitButton.addEventListener('click', formValidation);

//№3 drop-down menu
const iconProfile = document.querySelector('.iconProfile');
const menu = document.querySelector('.menu');

iconProfile.addEventListener('mouseenter', () => {
  menu.style.display = 'block';
});

iconProfile.addEventListener('mouseleave', () => {
  menu.style.display = 'none';
});
