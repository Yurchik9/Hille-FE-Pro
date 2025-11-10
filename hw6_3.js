const contactBook = {
    contacts: [
        { name: "mom", phone: "380671234567", email: "mom@example.com" },
        { name: "dad", phone: "380631112233", email: "dad@example.com" },
        { name: "brother", phone: "380501234111", email: "brother@example.com" }
    ],

    findContact(name) {
        const contact = this.contacts.find((contact) => contact.name === name)
        return contact ? contact : "No such contact"
    },
    addContact(name, phone, email) {
        this.contacts.push({name, phone, email})
        console.log("Contact added")
    }
}

console.log(contactBook.findContact("mom"))
contactBook.addContact("grandma", "38093211221", "grandma@example.com")
console.log(contactBook.contacts)
