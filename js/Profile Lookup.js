let contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];


function lookUpProfile(valueFind, keyReturn) {
    if (!contacts.find(contact => JSON.stringify(contact).includes(valueFind))) {
        return 'No such contact';
    }
    if (!contacts.find(contact => JSON.stringify(contact).includes(keyReturn))) {
        return 'No such property';
    }

    for (let i = 0; i < contacts.length; i++) {
        for (const contactsKey in contacts[i]) {
            if (contacts[i][contactsKey] === valueFind) {
                return contacts[i][keyReturn];
            }
        }
    }
}

console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"))
console.log(lookUpProfile("Bob", "number"))
console.log(lookUpProfile("Bob", "potato"))
console.log(lookUpProfile("Akira", "address"))