// Henter universale elementer

const coloredElements = {
    popups: {
        imagePicker: document.querySelector('.popup-image-picker'),
        soundPicker: document.querySelector('.popup-ambient-noise'),
        colorPicker: document.querySelector('.popup-color-picker'),
        // settingsBtn: "document.querySelector('.popup-settings-container');"
    },
    navbar: {
        background: document.querySelector('.navbar'),
        links: document.querySelectorAll('.navbar_link'),
    }
    // taskUi: document.querySelector('.task-ui'),
}


// Image picker popup and functionality

    // Henter alle elementer
const radioButtonsImage = document.querySelectorAll('input[name="image-choice"]');
const currentBackground = document.querySelector('.background-image-container');
const imagePickerButton = document.getElementById('background-options');


    // Eventlistener og funksjon som endrer bakgrunnsbilde
radioButtonsImage.forEach((radio) => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            const newBackground = radio.value;
            currentBackground.style.backgroundImage = `url('${newBackground}')`;
        }
    });
});


    // Funksjon som åpner vindu for valg av bakgrunnsbilde
function imagePickerToggle() {
    imagePickerButton.style.visibility = imagePickerButton.style.visibility === 'hidden'? 'visible' : 'hidden';
}


// Sound picker popup og funksjonalitet

    // Henter alle elementer
const soundPickerButton = document.getElementById('sound-options');


    // Funksjon som åpner vindu for valg av lyder
function soundPickerToggle() {
    soundPickerButton.style.visibility = soundPickerButton.style.visibility === 'hidden'? 'visible' : 'hidden';
}


// Color picker popup og funksjonalitet

    // Henter alle elementer
const radioButtonsColor = document.querySelectorAll('input[name="color-choice"]');
const colorPickerButton = document.getElementById('color-options');


    // Eventlistener og funksjon som endrer farge
radioButtonsColor.forEach((radio) => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            const newColor = radio.value;
            const shadowColor = radio.dataset.shadow;
            coloredElements.navbar.background.style.backgroundColor = newColor;
            coloredElements.navbar.background.style.boxShadow = `inset 15px 15px 30px ${shadowColor}, 10px 10px 30px black`;
            coloredElements.popups.imagePicker.style.backgroundColor = newColor;
            coloredElements.popups.imagePicker.style.boxShadow = `inset 15px 15px 30px ${shadowColor}, 10px 10px 30px black`;
            coloredElements.popups.soundPicker.style.backgroundColor = newColor;
            coloredElements.popups.soundPicker.style.boxShadow = `inset 15px 15px 30px ${shadowColor}, 10px 10px 30px black`;
            coloredElements.popups.colorPicker.style.backgroundColor = newColor;
            coloredElements.popups.colorPicker.style.boxShadow = `inset 15px 15px 30px ${shadowColor}, 10px 10px 30px black`;
            // coloredElements.popups.settingsBtn.style.backgroundColor = newColor;
            // coloredElements.taskUi.style.backgroundColor = newColor;
        }
    });
});


    // Funksjon som åpner vindu for valg av farge
function colorPickerToggle() {
    colorPickerButton.style.visibility = colorPickerButton.style.visibility === 'hidden'? 'visible' : 'hidden';
}
