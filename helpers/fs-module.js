/**
 * Title: FS-Module
 * Description: Fs-module using (read, write, update, delete) data testing purpose
 * Author: Md. Samiur Rahman Mukul
 * Date: 21 July 2021
 *
 */

// * dependencies
const data = require("./../lib/data");

// ? write data to - using fs-module
data.create(
  "test",
  "newFile",
  { name: "Bangladesh", language: "Bangla" },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

// ? read data from - using fs-module
data.read("test", "newFile", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// ? update data from - using fs-module
data.update(
  "test",
  "newFile",
  { name: "England", language: "English" },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

// ? delete data from - using fs-module
data.delete("test", "newFile", (err) => {
  if (err) {
    console.log(err);
  }
});

module.exports = data;
