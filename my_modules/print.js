const Print = {};

const log = console.log;
const ResetColor = "\x1b[0m";
const RedColor = "\x1b[38;2;255;90;50m";
const YellowColor = "\x1b[38;2;255;255;50m";
const GreenColor = "\x1b[38;2;0;205;205m";


Print.err = (string) => {
  log(RedColor+string+ResetColor);
}

Print.warn = (string) => {
  log(YellowColor+string+ResetColor);
}

Print.green = (string) => {
  log(GreenColor+string+ResetColor);
}

module.exports = Print;
