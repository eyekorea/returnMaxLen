var arr = [1,2,1,2,3,3,4,2];
function returnMaxLen (Arr){
  var tmpObj = {},
      i,key,
      keyLen = 0,
      returnData = [];
   for(key in Arr){
     if(typeof tmpObj[Arr[key]] === 'undefined'){
       tmpObj[Arr[key]] = 0;
     }else{
       tmpObj[Arr[key]] ++;
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