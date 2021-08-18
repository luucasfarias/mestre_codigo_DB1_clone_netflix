const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    nav.classList.add('nav-black');
  } else {
    nav.classList.remove('nav-black');
  }
});

function myClick() {
  const isShow = document.getElementById('dropdown-content');
  if (isShow.style.display === 'none') {
    return (isShow.style.display = 'block');
  }

  return (isShow.style.display = 'none');
}
