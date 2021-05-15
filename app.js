const fs = require("fs");
const { usage } = require("yargs");
const yargs = require("yargs");

yargs.usage("\nUsage: $0 [cmd] <args>").alias("h", "help");
yargs.version("1.0.0").alias("v", "version");
"h", "help";

yargs
  .command({
    command: "add",
    describe: "Add contact to the phonebook",
    builder: {
      name: {
        type: "string",
        demandOption: true,
        describe: "contact name",
      },
      phone: {
        type: "string",
        describe: "Contact number",
      },
    },
    handler: () => {
      console.log("Add");
    },
  })
  .example(`node $0 add --name='John Dow' --phone='0123456789'`);

yargs
  .command({
    command: "remove",
    describe: "Remove contact from the phonebook",
    builder: {
      name: {
        type: "string",
        demandOption: true,
        describe: "contact name",
      },
    },
    handler: () => {
      console.log("Remove");
    },
  })
  .example(`node $0 add --name='John Dow' --phone='0123456789'`);

console.log(yargs.argv);
