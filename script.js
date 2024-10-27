document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const errorMessage = document.getElementById('errorMessage')

    if (!email || !password) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.'
        return
    }
    
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Por favor, insira um e-mail válido.'
        return
    }

    if (email === 'usuario@example.com' && password === '123456') {
        errorMessage.style.color = 'green'
        errorMessage.textContent = 'Login bem-sucedido!'
    } else {
        errorMessage.textContent = 'Credenciais inválidas. Tente novamente.'
    }
})

const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    return emailPattern.test(email)
}