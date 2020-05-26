const array = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
let arr = [];
array.forEach(function(obj, i) {
   array[i].username =  array[i].username + "!"
   arr.push(array[i].username)

})
// part2

   let array1 = [];
array.forEach(function(obj, i, arr){
   array[i].score > 5 ? 
      array1.push(array[i].username): console.log(array1)
   }  )
// ["becky!", "susy!"]
// part3
let total = 0;
array.forEach(function(obj, i, arr){
   let score = array[i].score;
   total += score
}
//  total 71

