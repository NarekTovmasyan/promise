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

const value = document.getElementById("value");
const button = document.getElementById("button")
const showText = document.getElementById("show-text");

function randomNum(max) {
    return Math.floor(Math.random() * max) + 1;
}

button.addEventListener("click", function() {
    let random = randomNum(6);
    showText.innerText = "random number: " + random;

    let inputValue;
    if (Number(value.value) > 6 || Number(value.value) < 1) {
        alert("enter chisht number, 1-6")
    } else {
        inputValue = Number(value.value);
    }
    let count = 0;
    if (inputValue === random) {
        count += 2;
    } else if (Math.abs(inputValue - random) === 1) {
        count += 1;
    } else {
        count += 0;
    }
    showText.innerText = "count number: " + count;
})