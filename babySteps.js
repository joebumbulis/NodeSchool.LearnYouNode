var array = process.argv

total = 0;
for(var i = 2; i < array.length; i++){
  total += Number(array[i])
}
console.log(total)
