const whichSchool = function (age) {
  if (age < 13) {
    console.log("Go to Elementary School.");
  }
  else if (age <= 18) {
    console.log("Go to Secondary School.");
  }
  else {
    console.log("Go to Lighthouse Labs.");
  }
}
console.log(whichSchool(18));

