document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username.length < 8) {
        alert('Username must be at least 8 characters long.');
        return;
    }
    // Password validation: at least 8 characters, uppercase, lowercase, digit, special character
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.');
        return;
    }

    // Storing data in local storage
    let user = {
        name: document.getElementById('name').value,
        username: username,
        email: document.getElementById('email').value,
        password: password 
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Account created successfully!');
});
