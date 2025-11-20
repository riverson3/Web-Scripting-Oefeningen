let allMenuItems = document.querySelectorAll('ul');

allMenuItems.forEach(ul => {
    ul.parentNode.removeChild(ul);
});