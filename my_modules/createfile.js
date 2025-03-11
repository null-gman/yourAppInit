const fs = require("node:fs");
const Print = require ("./print");

async function createFile(fileName, containt) {
  
  
  if (!fileName) {
    throw new Error("fileName are empty");
  }

  const fileExistCode = await fileExist(fileName);

  if (fileExistCode === 0) {
    return 1;
  }

  
  return new Promise((resolve) => {
    containt = containt ? containt : "";
    fs.writeFile("./"+fileName, containt, (err) => {
      if (err) resolve(0);
      Print.green(`file '${fileName}' was created .`)
      resolve(1);
    })
  })
}



function fileExist(fileName) {
  return new Promise((resolve) => {
    fs.readdir("./", (err, files) => {
      if (err) {
        resolve(null);
      }
      if (files.indexOf(fileName) !== -1) {
        Print.warn(`file '${fileName}' was found will not be replaced .`)
        resolve(0)
      }
      else {
        resolve(1)
      }
    })
  })
}


module.exports = {createFile};