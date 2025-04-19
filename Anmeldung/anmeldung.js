document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', () => {
        const username = document.getElementById('user').value;
        const password = document.getElementById('pass').value;

        const validUsername = '123';
        const validPassword = '123';

        if (username === validUsername && password === validPassword) {
            alert('Login erfolgreich!');
            window.location.href = '../bilder.html'; // << ggf. anpassen
        } else {
            alert('Ungültige Anmeldedaten!');
        }
    });
});
