
function deletFile(fileName) {
  return new Promise((resolve) => {
    fs.unlink("./" + fileName, (err) => {
      if (err) resolve(0);
      resolve(1);
    })
  })

}

