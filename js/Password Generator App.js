function generatePassword(lengthPassword) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const arrPassword = [];
    for (let i = 0; i < +lengthPassword; i++) {
        arrPassword.push(characters[Math.floor(Math.random() * characters.length)]);
    }
    return arrPassword.join("");
}

const password = generatePassword(30);
console.log(`Generated password: ${password}`);