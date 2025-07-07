document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.querySelector('.explore-button');

    exploreButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents the default link behavior
        console.log('Explore button clicked!');
        // You can add animations or other effects here before redirecting
        window.location.href = exploreButton.href;
    });
});