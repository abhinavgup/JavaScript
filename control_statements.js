document.write("<h1>control statements</h1>");
document.write("<h3>if-else-elseif:poritive negative or 0</h3>");
var x=3;
if(x>0){
	document.write(x+"is positive");
}
else if(x<0){
	document.write(x+ "is negaitive");
}

else{
	document.write(x+ " is 0");
}

document.write("<h3>switch case:find day of week </h3>");
document.write("<h4>example: 1->sunday 2-> monday etc...</h4>");

var day=3;

switch(day){
	case 1:
	  document.write(day+ " is sunday");
	  break;

	case 2:
	  document.write(day+ " is monday");
	  break;
	
	case 3:
	  document.write(day+ " is tuesday");
	  break;	

	case 4:
	  document.write(day+ " is wednesday");
	  break;

	default:
	   document.write(day+ " is wrong");
	   break;

}

document.write("<h3>for loop:print first 5 even numbers </h3>");
var x=0;
for(var i=1;i<=5;i++){
document.write("<br>"+x);
x=x+2;
}

document.write("<h3>while loop:print first 5 odd numbers </h3>");
var x=1;
var i=0;
while(i<5){
document.write("<br>"+x);
i=i+1;
x=x+2;
}

document.write("<h3>do while loop:printing statement </h3>");

var x=5;

do{
document.write("<br>kanu is best friend of chiru");
x--;
}while(x>5);

