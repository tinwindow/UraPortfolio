
function convertTemp (unit1, unit2) {
	var tempF= unit1 * (9/5) + 32;
	var celsius= (5/9) * (unit1 - 32);
	
if (unit2==="C"){
  console.log(celsius);
  
} else {
  console.log(tempF)
}

}



convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(100, "fahrenheit");
convertTemp(-40, "fahrenheit");







