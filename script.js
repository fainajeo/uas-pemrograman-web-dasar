document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    document.getElementById('result').textContent = `Nama: ${name}, Email: ${email}, Pesan: ${message}`;
});