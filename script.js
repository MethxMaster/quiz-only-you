const axios = require('axios'); // You can install axios with `npm install axios`

function sendLineNotify(message, token) {
    const url = 'https://notify-api.line.me/api/notify';

    const headers = {
        'Authorization': `Bearer ${token}`
    };

    const data = new URLSearchParams();
    data.append('message', message);

    axios.post(url, data, { headers })
        .then(response => {
            console.log('Message sent successfully:', response.data);
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
}

// Example usage:
// Replace 'YOUR_ACCESS_TOKEN' with your LINE Notify access token
const accessToken = 'txet1AOGpjHs1A5dtfaRS9g6hQjsU3BnGsYjVwF1ePe';
const message = 'Hello from JavaScript!';
sendLineNotify(message, accessToken);
