// Command line receive at least two arguments:
// argv[0] = path to node.js executable
// argv[1] = path to the javascript file that was executed.
// everything after that is a comand line argument!

console.log({
  argument: {
    pathToExecutable: process.argv[0],
    executedJsFile: process.argv[1],
    command: process.argv[2],
  },
});
