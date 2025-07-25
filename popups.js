// Image picker popup and functionality
const radioButtons = document.querySelectorAll('input[name="image-choice"]');
const currentBackground = document.querySelector('.background-image-container');
const imagePickerButton = document.getElementById('background-options');


radioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            const newBackground = radio.value;
            currentBackground.style.backgroundImage = `url('${newBackground}')`;
        }
    });
});


function imagePickerToggle() {
    imagePickerButton.style.visibility = imagePickerButton.style.visibility === 'hidden'? 'visible' : 'hidden';
}