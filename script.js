function generatePassword() {
    const length = document.getElementById('length').value;

    if(length <= 3){
        document.getElementById('password').value = `Password must been big, than ${length} (minimum: 4)`           
    }
    else{
        const includeUppercase = document.getElementById('uppercase').checked;
        const includeNumbers = document.getElementById('numbers').checked;
        const includeSpecialChars = document.getElementById('specialChars').checked;

        let chars = 'abcdefghijklmnopqrstuvwxyz';
        let uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let numbers = '0123456789';
        let specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        if (includeUppercase) chars += uppercaseChars;
        if (includeNumbers) chars += numbers;
        if (includeSpecialChars) chars += specialChars;

        const passwordArray = Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]);
        const password = passwordArray.join('');

        document.getElementById('password').value = password;
    }
}