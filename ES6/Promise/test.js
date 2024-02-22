// new Promise((resolve, reject) => {
//   console.log("promise1");
//   resolve();
// })
//   .then(() => {
//     console.log("then11");
//     new Promise((resolve, reject) => {
//       console.log("promise2");
//       resolve();
//     })
//       .then(() => {
//         console.log("then21");
//       })
//       .then(() => {
//         console.log("then23");
//       });
//   })
//   .then(() => {
//     console.log("then12");
//   });

new Promise((resolve, reject) => {
  console.log("log: 外部promise");
  resolve();
})
  .then(() => {
    console.log("log: 外部第一个then");
    new Promise((resolve, reject) => {
      console.log("log: 内部promise");
      resolve();
    })
      .then(() => {
        console.log("log: 内部第一个then");
      })
      .then(() => {
        console.log("log: 内部第二个then");
      });
  })
  .then(() => {
    console.log("log: 外部第二个then");
  });
