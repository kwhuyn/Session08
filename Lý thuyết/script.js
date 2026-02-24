//callback gọi tên hàm trong hàm
 let listNumber = [10, 20, 30, 100, -20];
//  for (let i = 0 ; i < listNumber.length; i++){
//     listNumber[i] = listNumber[i] *2;
    
//  }
 listNumber.forEach((item, index, array) => {
    console.log(`${item} : ${index}`);
    
 });
 //map() tạo ra mảng mới 
 let newArray = listNumber.map((number,index, array) =>{
    let newNumber = number * 2;
    return newNumber;

 });
 console.log(newArray);
 let so = [1, 2, 3, 4];
//  let newSo = so.filter((item,index,array)=>{
//     return item % 2===0;

//  });
//  console.log(newSo);
//  reduce()

let sumListNumber.reduce((acc, cur, index, arr) => {
return( acc += cur);
}, 0);
console.log(sumListNumber);
