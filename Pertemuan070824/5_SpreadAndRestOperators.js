// Spread Operator pada Array
const number = [1, 2,3];
const newNumber = [...number, 4, 5];
console.log(newNumber); // Output: [1, 2, 3, 4,5]

// Spread Operator pada Object
const user = { nama: "Rantisi", umur: 17 };
const biodata = { ...user, hobby: "Ngoding" };
console.log(biodata); // Output: { nama: "Rantisi", umur: 17, pekerjaan: "Ngoding" }

// Rest Operator pada Fungsi
function sum(...number) {
  return number.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4,5)); // Output: 15