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

  const phoneRegExp = /^\d{10,12}$/;

  if (name === '' || phone === '' || message === '') {
    alert('Заполните все поля формы!');
    return;
  }

  if (!phoneRegExp.test(phone)) {
    alert('Номер телефона введен некорректно!');
    return;
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


const toggleMenu = document.getElementById('toggleMenu');
const headerMenu = document.querySelector('.headerMenu');
const wrapper = document.querySelector('header .wrapper');
const overlay = document.querySelector('.overlay');

toggleMenu.addEventListener('click', () => {
  if (toggleMenu.checked) {
    wrapper.style.position = 'fixed';
    wrapper.style.width = '100%';
    wrapper.style.backgroundColor = 'white';
    wrapper.style.zIndex = '4';
    headerMenu.style.display = 'block';
    wrapper.style.padding = '0 15px';
    setTimeout(() => {
      overlay.style.display = 'block';
      overlay.style.opacity = '0.5';
    }, 250);
  } else {
    headerMenu.style.display = 'none';
    wrapper.style.position = '';
    wrapper.style.width = '';
    wrapper.style.backgroundColor = '';
    wrapper.style.zIndex = '';
    wrapper.style.padding = '';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 200);
  }
});
