const {getFlages} = require("./getFlages");
const {createFile} = require ("./createfile");

class _FILES {
  constructor() {
    const FLAGES = getFlages();
    const Files = [];

    this.getfiles =  () => {
      return [...Files];
    }


    this.getFlages = () => {
      return {...FLAGES};
    }


    this.addFile = (flage,name,exe,containt) => {
      if (!flage || !name ) {
        throw new Error("");
      }
      let file = new _FILE(flage,name,exe,containt);
      Files.push(file);
    }


    this.start = () => {
      for (const fileObj of Files) {
        fileObj.create();
      }
    }

    Object.freeze(this);
  }
}
const FILES = new _FILES();


function getValueFormFlage(flage) {
  const Flages = FILES.getFlages();
  return Flages[flage];
}

function isFileOverwrite(flage, fileName) {
  const Files = FILES.getfiles();
  for (const file of Files) {
    if (file.name == fileName) {
      Print.err(`fileName is dublacited : '${fileName}'`);
      process.exit();
      return false;
    }

    if (file.flage == flage) {
      Print.warn(`flage is dublacited : '${fileName}' and his flage ${flage}`);
      return false;
    }
  }
  return true;
}


class _FILE {
  constructor(flage, name, exe, getContaint) {
    let fileName = getValueFormFlage(flage) || name;

    this.flage = flage;
    this.name = fileName;
    if (exe) {
      this.name += "." + exe;
    }

    isFileOverwrite(flage, this.name)

    this.create = () => {
      createFile(this.name, getContaint());
    }

    Object.freeze(this);
  }
}


module.exports = FILES;

