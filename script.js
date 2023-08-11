let barsIcon = document.querySelector('.fa-bars');
let dropdownContainer = document.querySelector('.dropdown-container');
let dropdown = document.querySelector('.dropdown');

barsIcon.addEventListener('click', toggleDropdown);

//Toggle dropdown on clicking the bars icon
function toggleDropdown(e) {
  console.log('bars clicked: ', e);
  // e.stopPropagation()
  if(dropdownContainer.style.display === 'flex') {
    dropdownContainer.style.display = 'none';
    dropdown.style.display = 'none';
  } else {
    dropdownContainer.style.display = 'flex';
    dropdown.style.display = 'flex';
  }
}