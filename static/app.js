const form = document.querySelector('form');
        const responseDiv = document.querySelector('#response');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const response = await fetch('/chat', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            const botResponse = data.response;
            responseDiv.innerHTML = `<p>Bot: ${botResponse}</p>`;
            form.reset();
        });