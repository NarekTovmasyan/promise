// const myBirthday = (isSick) => {
//     return new Promise(function (resolve, reject) {
//       if (!isSick) {
//         setTimeout(() => resolve(2), 2000);
//       } else {
//         reject("I dont have cake :разочарование_облегчение:");
//       }
//     });
//   };
//   const handleCake = async () => {
//     try {
//       let result = await myBirthday(true); // result = 2
//       console.log(`I have ${result} cakes :день_рождения:`);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       console.log("Party");
//     }
//   };
//   handleCake();



// myBirthday(true)
//   .then((result) => console.log(`I have ${result} cakes :день_рождения:`))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Party"));


// let number = 5;

// function compare(argument) {
//     return new Promise(function(resolve, reject) {
//         if (number > argument) {
//             resolve(number)
//         } else {
//             reject(new Error("oops"))
//         }
//     })
// };
// compare(6).then(function(number) {
//     console.log(number);
// }).catch(function(error) {
//     console.log(error);
// }).finally(() => {
//     console.log("barlus");
// })