/*  my_modules/getFlages.js */

function getFlages() {
  const ARGV = [...process.argv] ;
  const ARGV_LEN = ARGV.length;
  const FlagesObj = {};

  let flageName = "";
  let flageValue = "";
  for (let index = 0; index < ARGV_LEN; index++) {

    if ( ARGV[index][0] !== '-'  ) {
      continue;
    }
    
    if ( ARGV[index] === "-"  ) {
      continue;
    }

    if (!ARGV[index + 1]) {
      continue;
    }
    
    if (ARGV[index + 1][0] === '-') {
      continue;
    }

    flageName = (String(ARGV[index])).slice(1);
    flageName = flageName.toLocaleLowerCase();
    
    flageValue = ARGV[index + 1];

    FlagesObj[flageName] = flageValue;
  }

  return FlagesObj;
  
}



module.exports = {getFlages};
