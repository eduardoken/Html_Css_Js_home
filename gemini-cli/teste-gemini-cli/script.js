function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) {
        console.error('Form not found:', formId);
        return false;
    }

    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = ''; // Reset border color
        }
    });

    if (!isValid) {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }

    return isValid;
}

// Exemplo de uso (adicione um event listener ao seu formulário)
// document.addEventListener('DOMContentLoaded', () => {
//     const myForm = document.getElementById('myForm'); // Substitua 'myForm' pelo ID do seu formulário
//     if (myForm) {
//         myForm.addEventListener('submit', function(event) {
//             if (!validateForm('myForm')) {
//                 event.preventDefault(); // Impede o envio do formulário se a validação falhar
//             }
//         });
//     }
// });