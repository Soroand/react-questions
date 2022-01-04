// In cases of number 44, 66 etc., which are devisible by 2, 11 and 22 we print all 3 values
// This is how I understood the question. The rest, where values after devision do not
// overlap with eachother we print either the number or the value from "if" statement


function foo(num: number): any{
  if (!num) {
    return "Invalid value";
  }
  let defVal = true;

  if (num % 2 === 0) {
    defVal = false;
    console.log("candy");
  }
  if (num % 11 === 0) {
    defVal = false;
    console.log("bar");
  }
  if (num % 22 === 0) {
    defVal = false;
    console.log("candybar");
  }

  return defVal && console.log(num);
}

foo(22);