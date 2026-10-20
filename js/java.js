// valid js
        document.getElementById('regForm').addEventListener('submit', function(e) {
            let isValid = true;

            // Clear previous errors
            document.getElementById('nameError').innerText = '';
            document.getElementById('emailError').innerText = '';
            document.getElementById('passwordError').innerText = '';
            document.getElementById('confirmError').innerText = '';
            document.getElementById('ageError').innerText = '';

            // Name check
            const name = document.getElementById('name').value.trim();
            if (name === '') {
                document.getElementById('nameError').innerText = 'Name cannot be empty.';
                isValid = false;
            }

            // Email check
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('emailError').innerText = 'Please enter a valid email address.';
                isValid = false;
            }

            // Password check
            const password = document.getElementById('password').value;
            if (password.length < 8) {
                document.getElementById('passwordError').innerText = 'Password must be at least 8 characters.';
                isValid = false;
            }

            // Confirm Password check
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (password !== confirmPassword) {
                document.getElementById('confirmError').innerText = 'Passwords do not match.';
                isValid = false;
            }

            // Age check
            const age = document.getElementById('age').value;
            if (age === '' || age <= 0) {
                document.getElementById('ageError').innerText = 'Please enter a valid age.';
                isValid = false;
            }

            // Stop form from submitting if invalid
            if (!isValid) {
                e.preventDefault();
            }
        });

        
