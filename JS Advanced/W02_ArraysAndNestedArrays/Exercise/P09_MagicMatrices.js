function magicMatrix(arr) {
  return checkMagic(arr) && 
  checkMagic(rotate(arr));

  function rotate(array){
      return array[0].map((x,i)=> array.map(x=> x[i]))
  }
  function checkMagic(arr){
      arr = arr.map(x=>x.reduce((a,b)=> a+b));

      return Array.from(new Set(arr)).length === 1;
  }
}
