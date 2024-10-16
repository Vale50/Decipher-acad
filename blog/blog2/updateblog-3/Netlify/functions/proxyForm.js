const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const formData = JSON.parse(event.body);

    try {
        // Forward the request to Google Apps Script
        const response = await fetch('https://script.google.com/macros/s/AKfycbykHibvrZ2JEUuE82oXiIKDJ-qSkbir-nkl-Kg6KBn6t01B8SNUcCjT4-crqRSpNk0eaw/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const responseBody = await response.json();
        
        // Return the response from Google Apps Script
        return {
            statusCode: 200,
            body: JSON.stringify(responseBody)
        };
    } catch (error) {
        // Handle errors
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error: Unable to submit form', error: error.message })
        };
    }
};
