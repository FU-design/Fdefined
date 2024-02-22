function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

const showLight = (fun, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fun());
    }, time);
  });
};

const runTrafficLight = () => {
  Promise.resolve()
    .then(() => {
      return showLight(red, 3000);
    })
    .then(() => {
      return showLight(green, 1000);
    })
    .then(() => {
      return showLight(yellow, 2000);
    })
    .then(() => {
      runTrafficLight();
    });
};

runTrafficLight();
