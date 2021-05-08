const fs = require("fs");
const chalk = require("chalk");

class Phonebook {
  constructor() {
    this.Load();
    this.contacts = [...this.parsedData];
  }

  Add(name, phone) {
    const isAlreadyContact = this.contacts.find(
      (contact) => contact.name === name && contact.phone === phone
    );

    if (isAlreadyContact) {
      console.log("User already exists!");
      return;
    }

    const newContact = {
      name,
      phone,
    };

    this.contacts.push(newContact);
    this.Save();
  }

  Remove(name) {
    this.contacts = this.contacts.filter((contact) => contact.name !== name);
    this.Save();
  }

  Save() {
    const JSONdata = JSON.stringify(this.contacts);
    fs.writeFileSync("phonebook.json", JSONdata);
  }

  Load() {
    const data = fs.readFileSync("phonebook.json");
    this.parsedData = JSON.parse(data);
  }

  Show() {
    console.log(this.contacts);
  }
}

module.exports = Phonebook;
