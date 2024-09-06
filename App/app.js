import {nextButtonComponent} from '../Files/next-button.js';
import {selectcomponent} from '../Files/selectcomponent.js';

// Register custom A-Frame component
AFRAME.registerComponent('model-loaded-check', {
    init: function () {
        const el = this.el;

        // Listen for the model-loaded event
        el.addEventListener('model-loaded', () => {
            console.log(`Model ${el.id} loaded`);
            checkAllModelsLoaded();
        });
    }
});

// Track the loading of all models
let modelsLoaded = 0;
const totalModels = document.querySelectorAll('.cantap').length;

function checkAllModelsLoaded() {
    modelsLoaded++;
    if (modelsLoaded === totalModels) {
        console.log("All models loaded, initializing interactions...");
        selectcomponent(); // Initialize interactions
    }
}

// Popup and Welcome Message Handling
document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startbutton');
    const message = document.getElementById('message');

    // Show welcome message on load
    message.style.display = 'block';

    startButton.onclick = () => {
        message.style.display = 'none';
    };
});

AFRAME.registerComponent('next-button', nextButtonComponent());
