
module.exports = {
getPrimes: function(max){
   
    
    var currentvalue = 2;
    var checkervalue = 2;
    var list = [];
    
	if ( typeof(max) !== 'number' || typeof(max) === 'undefined'  ){
	   return "Enter a valid value" ;
	}
	
	else if(max <= 2){
	  return list;
	}
	else {
	  
    do{
        if(checkervalue > Math.sqrt(currentvalue))
        {
            checkervalue = 2;
            list.push(currentvalue);
            currentvalue++;
        }
        else if(currentvalue % checkervalue === 0)
        {
            checkervalue = 2;
            
            currentvalue++;
        }
        else
            checkervalue++;
    }while(currentvalue < max);
    return list;
    
    }
    
	}
}
