var arr = [1,2,1,2,3,3,4,2];
function returnMaxLen (Arr){
  var tmpObj = {},
      sortArr = Arr.sort(),
      i,key,
      keyLen = 0,
      returnData = [];
   for(key in sortArr){
     if(typeof tmpObj[sortArr[key]] === 'undefined'){
       tmpObj[sortArr[key]] = 0;
     }else{
       tmpObj[sortArr[key]] ++;
     }
   }
  for(key in tmpObj){
    if(keyLen < tmpObj[key]){
      keyLen = tmpObj[key];
      returnData = [key];
    }else if(keyLen === tmpObj[key]){
      returnData.push(key);
    }
  }
  return returnData;
}

console.log(returnMaxLen (arr));