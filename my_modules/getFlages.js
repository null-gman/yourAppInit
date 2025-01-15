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
    
    if ( ARGV[index][1] === '-'  ) {
      continue;
    }

    if (! ARGV[index + 1]) {
      continue;
    }
    if (ARGV[index + 1][0] === '-') {
      continue;
    }

    flageName = remove0char(ARGV[index]);
    flageName = flageName.toLocaleLowerCase();
    
    flageValue = ARGV[index + 1];

    FlagesObj[flageName] = flageValue;
  }

  return FlagesObj;
  
}


function remove0char(string) {
  let res = "";
  for (let i = 1; i < string.length ; i++) {
    res += string[i];
  }
  return res;

}


module.exports = {getFlages};