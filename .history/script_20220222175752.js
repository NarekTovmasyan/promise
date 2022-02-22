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
const button = document.getElementById("button");
const p1Text = document.querySelector(".p1");
let p2Text = document.querySelector(".p2");
const sum = document.querySelector(".sum");
let showText = document.getElementById("show-text");
let totalCount = 0;

function randomNum(max) {
    return Math.floor(Math.random() * max) + 1;
}

button.addEventListener("click", function() {
    let random = randomNum(6);
    //let inputValue = "";
    if (Number(value.value) > 6 || Number(value.value) < 1) {
        showText.innerText = "";
        alert("enter chisht number, 1-6")
    } else {
        inputValue = Number(value.value);
        p1Text.innerText = "random number: " + random;
    }

    totalCount += count;
    p2Text.innerText = `count number: ${count}`;
    sum.innerText = `total: ${totalCount}`;
})

let a = new Promise(function(resolve, reject) {
    let count = 0;
    if (inputValue === random) {
        count += 2;
    } else if (Math.abs(inputValue - random) === 1) {
        count += 1;
    } else {
        count += 0;
    }
})