const FILES = require("./my_modules/files");

// Flags should follow this format: 
//   -<flag> value  or  -<flag> "value value"  
// 
// Note: 
//   - "- flag" (with a space between '-' and the flag name) is NOT allowed.
//   - "--flag" (without space) is allowed.
//   - "-- flag" (with space between '--' and flag name) is NOT allowed.


/* 
 * This object contains methods to add files and initialize (build or start) your app.
 *
 * Methods:
 * 
 *  - FILES.getFlags()  
 *      // Retrieves the flags passed as arguments when running the app.
 * 
 *  - FILES.addFile(flag: string, defaultName: string, extension: string, callBackFun: function) 
 *      // Adds a file to the system.
 *      // Parameters:
 *      //   - flag: If this flag exists, the file name will use its value; otherwise, the default name is used.
 *      //   - defaultName: The default file name.
 *      //   - extension: The file extension.
 *      //   - callBackFun: A callback function that provides the file's content.
 *      //                 This function will be executed when FILES.start() is called 
 *      //                 or with the specified flags to generate content dynamically.
 * 
 *      // Do not call this method after invoking FILES.start().
 *
 *  - FILES.start() 
 *      // Initializes your app in the current directory.
 */


async function main() {
  const Flages = FILES.getFlages();

  // Example:
  // -main_c <fileName> 
  // If no flag or no value is provided, "main" will be used as the default.

  FILES.addFile("main_c", "main", "c", () => {
    return `#include <stdio.h>\n#include <stdlib.h>\n\nvoid main()\n{\n\tprintf("hello c");\n}`;
  });

  FILES.addFile("compile_bat", "run", "bat", () => {
    return `gcc -o ${Flages.exe || "app"}.exe ${Flages["main_c"] || "main"}`;
  });

  // Cool, right?!
  // You can use flags to customize the content. 
  // That's why it's designed as a callback. :> 

  FILES.start();
}

main();
