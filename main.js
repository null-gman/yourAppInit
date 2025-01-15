const Print = require("./my_modules/print");
const FILES = require("./my_modules/files");


async function main() {

  const Flages = FILES.getFlages();


  FILES.addFile("c", "main", "c", () => {
    return `#include <stdio.h>\n#include <stdlib.h>\n\nvoid main()\n{\n\n\tprintf("hello c");\n\n}`;
  });
  FILES.addFile("h", "my_libs", "h", () => {
    return `//hello world`;
  });
  FILES.addFile("b", "run", "bat", () => {
    return `gcc -o ${Flages["o"] || "app"}.exe ${Flages["c"] || "main"}.c && ${Flages["o"] || "app"}.exe`;
  });


//   FILES.addFile("js", "mainCompile", "js", () => {
//     return `
//     const { exec } = require("child_process");\n
//     const files = ["main.c"];\n
//     files.push("your C file ");\n
//     let fullCommand = "gcc -o app.exe";
//     function setGcc(files) {for (let file of files) {fullCommand += " " + file;}return fullCommand;}\n
//     function execFun() {let cmdCommnd = setGcc(files);console.log(\`command : \'runing\'\n\n\`);exec(cmdCommnd, (error) => {if (error) {console.error(\`\nexec error:\n -> \${error} ~~END\n\n\`);return; }console.log(\`end of exec .\`);});}\nexecFun();
// `;
//   });


  FILES.start()



}

main();