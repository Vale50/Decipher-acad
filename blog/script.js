document.addEventListener('DOMContentLoaded', function () {
    // Add JavaScript to make the page more dynamic.

    // Animate the banner text on load
    const bannerText = document.querySelector('.overlay h2');
    bannerText.style.opacity = 0;
    bannerText.style.transform = 'translateY(-20px)';

    setTimeout(() => {
        bannerText.style.transition = 'opacity 1s ease, transform 1s ease';
        bannerText.style.opacity = 1;
        bannerText.style.transform = 'translateY(0)';
    }, 500);

    // Add click animation to colored boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.remove('animate-up');
            void box.offsetWidth; // Trigger a reflow to reset the animation
            box.classList.add('animate-up');
        });
    });
});

// JavaScript for handling the modal popup and box animation
document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.card button');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalText = document.getElementById('modal-text');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            modalText.textContent = "Here is more information about this topic."; // Update this text as needed
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const colorBoxes = document.querySelectorAll('.box');
    
    colorBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.add('animate-up');
            setTimeout(() => {
                box.classList.remove('animate-up');
            }, 500); // Duration should match the CSS animation duration
        });
    });
});
