document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');


    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.innerText = '');

        let isValid = true;

       
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            nameInput.nextElementSibling.innerText = 'Por favor, insira seu nome.';
            isValid = false;
        }

      
        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.nextElementSibling.innerText = 'Por favor, insira um email válido.';
            isValid = false;
        }

    
        const phoneInput = document.getElementById('phone');
        const phoneRegex = /^[0-9]{10,}$/; 
        if (!phoneRegex.test(phoneInput.value.trim())) {
            phoneInput.nextElementSibling.innerText = 'Por favor, insira um telefone válido com pelo menos 10 dígitos.';
            isValid = false;
        }

        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '') {
            messageInput.nextElementSibling.innerText = 'Por favor, insira uma mensagem.';
            isValid = false;
        }

        if (isValid) {
            form.submit(); 
        }
    });
});

  