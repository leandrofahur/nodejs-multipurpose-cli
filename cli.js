const yargs = require("yargs");
const Phonebook = require("./phonebook");

yargs.usage("\nUsage: $0 [cmd] <args>").alias("h", "help");
yargs.version("1.0.0").alias("v", "version");

const phonebook = new Phonebook();

yargs
  .command({
    command: "add",
    describe: "Add a contact",
    builder: {
      name: {
        type: "string",
        demandOption: true,
        describe: "Contact name",
      },
      phone: {
        type: "string",
        describe: "Contact phone",
      },
    },
    handler: function (argv) {
      phonebook.Add(argv.name, argv.phone);
    },
  })
  .example("node $0 add --name='John Doe' --phone='0123456789'");

yargs
  .command({
    command: "search",
    describe: "Search a contact",
    builder: {
      name: {
        describe: "Contact name",
        type: "string",
        demandOption: true,
      },
    },
    handler: function () {
      console.log("Write...");
    },
  })
  .example("node $0 search --name='John Doe'");

yargs
  .command({
    command: "remove",
    describe: "Remove a contact",
    builder: {
      name: {
        describe: "Contact name",
        type: "string",
        demandOption: true,
      },
    },
    handler: function (argv) {
      phonebook.Remove(argv.name);
    },
  })
  .example("node $0 remove --name='John Doe'");

yargs
  .command({
    command: "show",
    describe: "Remove a contact",
    handler: function () {
      phonebook.Show();
    },
  })
  .example("node $0 show");

console.log(yargs.argv);
