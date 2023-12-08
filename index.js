
let selected_product = [];
function checkDuoProductLength(){
  const duo_products = selected_product.filter(element => element.product_type === 'DUO');
  return duo_products;

}

function checkDuoProduct(){
  let filteredUsers = [];
  for (let i= 0; i<selected_product.length; i++) {
      if ( selected_product[i].product_type === 'DUO' ) {
          filteredUsers = [...filteredUsers, selected_product[i]];
      }
}

// ✅ Remove the last 2 elements from the array
const arr = ['a', 'b', 'c', 'd', 'e'];
const removedElements = arr.splice(-2);
console.log(removedElements); // 👉️ [ 'd', 'e' ]

console.log(arr); // 👉️ [ 'a', 'b', 'c' ]

// ✅ Remove the last 1 elements from the array
const last = arr.splice(-1);
console.log(last); // 👉️ [ 'd' ]
console.log(arr); // 👉️ [ 'a', 'b', 'c' ]
//
const removeLast = arr.pop();
console.log(removeLast); // 👉️ d


// ✅ value available in array checked
 let mapped = selected_product.map(ele => ele.product_type);
  let found = mapped.includes('DUO');
   if(found == true ){
     productType = "DUO";
   }
