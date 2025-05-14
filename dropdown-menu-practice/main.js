function openDropdownMenu() {
    dropdownBtn.style.height = '90px';
}

function closeDropdownMenu() {
    dropdownBtn.style.height = '30px';
}

const dropdownBtn = document.querySelector('#dropdown-btn');
const dropDownDots = document.querySelector('#dropdown-dots-container');
dropDownDots.addEventListener('click', () => {
    const dropdownContentContainer = document.querySelector('#dropdown-content-container');
    if (dropdownContentContainer.classList.contains('invisible')) {
        openDropdownMenu();
        dropdownContentContainer.classList.toggle('invisible');
    } else {
        closeDropdownMenu();
        dropdownContentContainer.classList.toggle('invisible');
    }

})

const dropdownContent = document.querySelectorAll('#dropdown-content');
dropdownContent.forEach((dropdownArea) => {
    dropdownArea.addEventListener('click', () => {
        console.log('Do something');
    })
})
