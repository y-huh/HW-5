//1
// function nameList() {
//     let size = prompt("Olchamini kiriting: ");
//     let arr = [];

//     for (let i = 0; i < size; i++) {
//         let id = i + 1;
//         let name = prompt("Ism kiriting:");
//         let obj = {
//             userId: id,
//             userName: name,
//         };
//         arr.push(obj);
//     }

//     console.log(arr);
//     return arr;
// }
// nameList();

//2
// function dublicateFn(arr) {
//     let notReturnNum = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (!notReturnNum.includes(arr[i])) {
//             notReturnNum.push(arr[i]);
//         }
//     }
    
//     return notReturnNum;
// }
// let arr = [1,1,2,2,3,3,4,4,5,5];
// let notReturnNum = dublicateFn(arr);
// console.log(notReturnNum);


//3
// const num = [88, 75, 342, 21, 45, 67];

// const int = prompt("Son kiriting: ");
// let numFind = +int; 

// let indexx = -1;

// for (let i = 0; i < num.length; i++) {
//   if (num[i] === numFind) {
//     indexx = i;
//     break;
//   }
// }

// if (indexx !== -1) {
//   console.log(`Sonning indeksi: ${indexx}`);
// }
// else {
//   console.log("Son mavjud emas.");
// }

//4
// let numbers = [88, 75, 342, 21, 45, 67];
// const int = prompt("Son kiriting:");
// let remove = +int; 

// let newNum = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] !== remove) {
//     newNum.push(numbers[i]);
//   }
// }
// console.log("Qolgan sonlar:", newNum);

//5
