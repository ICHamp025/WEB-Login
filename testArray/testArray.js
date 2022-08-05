var numBerstr = ['26', '801', '36', '25', '415', '62', '24', '97', '725'];
var result = []

var arrStr = numBerstr.map((element) => element.split(''));
for(var i = 0; i <= arrStr.length-1; i++){
      ArrToInt = arrStr[i].map(str => {
        return  Number(str);
      })      
        var max = Math.max.apply(null, ArrToInt);
        result.push(max);    
}
      console.log(result); 

    sum = result.reduce((a, b) => {
       return a + b;
    });

      console.log("ผลรวม : "+sum);
        
        

           
    