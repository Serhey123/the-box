import refs from './refs';
export default function menuBtnHandler(e) {
  e.target.classList.toggle('nav__menu-active');

  refs.menuRef.classList.toggle('menu__active-display');

  document.body.classList.toggle('overflow-hidden');

  refs.menuRef.addEventListener('click', closeMenu);
}

function closeMenu(e) {
  if (e.target.nodeName === 'A' || e.target.nodeName === 'BUTTON') {
    refs.menuRef.classList.remove('menu__active-display');

    document.body.classList.remove('overflow-hidden');

    refs.menuBtnRef.classList.remove('nav__menu-active');
  }
}
