
function setActive(element) {
    // Remove 'active' class from all links
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    element.classList.add('active');
}

