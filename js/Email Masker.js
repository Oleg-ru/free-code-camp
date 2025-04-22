const maskEmail = (email) => {
    const index = email.indexOf("@");
    return `${email[0]}${"*".repeat(index - 2)}${email[index - 1]}${email.slice(index, email.length)}`
}
const email = "apple.pie@example.com";
console.log(maskEmail(email));