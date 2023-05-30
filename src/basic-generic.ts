// Code goes here!
const names: Array<string> = []

// console.log(names[0].split(" "))

const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve("biji")
    },1500)
})

// promise.then ((data)=> console.log(data.split("")))

// TYPE 
type Calculator = (x: number, y: number) => number;

const add: Calculator = (x, y) => {
  return x + y;
};

// generic
const identity: <T>(arg: T) => T = (arg) => {
    return arg;
  };

  console.log(identity(1))