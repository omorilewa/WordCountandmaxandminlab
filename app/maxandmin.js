
module.exports = {

findMinMax: function findMinMax(myarr){
  var max=myarr[0]
  var min=myarr[0]
  for (i=0; i < myarr.length;i++){
  	if (myarr[i] > max){
  		max=myarr[i]
  	}
  	if (myarr[i] < min){
  		min=myarr[i]
	}
  }
  if (max === min)
  {
  return [max];
  }
  else{
  return [min,max];
  }
  
}

}
