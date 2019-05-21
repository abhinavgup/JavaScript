document.write("<h1>Functions: add two numbers </h1>");

function addnumber(p,q){

var total=p+q;
//document.write("<br>total is"+total)
return total;
}

var a=5;
var b=10;

var out1=addnumber(a,b); //calling addnumber
document.write("<br>total is "+out1);
var out2=addnumber("chiru","chiran");
document.write("<br>total is "+out2);

document.write("<h1>arrays:dynamic in nature </h1>");

var cars=["bmw , volvo", "audi"];
document.write("<br>"+cars)

cars.push("4577"); //push element to array from end
document.write("<br>"+cars)
document.write("<br>"+cars.length)

var array1;
array1= new Array("mango","apple","banana"); //another way of creating array
document.write("<br>"+array1) 



document.write("<h1>objects </h1>");



document.write("<h2>CONSTRUCTOR FUNCTION USING OBJECTS</h2>")

function Cars(car_brand,car_model,price){
	this.car_brand=car_brand;
	this.car_model=car_model;
	this.price=price;
	this.testautopilot=function()
	{
		document.write("this car is "+this.car_model+"<br>");
	}
}
var c1= new Cars("honda", "santro",4000);
var c2= new Cars("maruti", "zen",55500);

c1.testautopilot();
c2.testautopilot();
document.write(c2.car_brand);
document.write("<br>c1 is of type :"+typeof(c1));



//ANOTHER Way 
document.write("<br><br>ANOTHER Way of defining : ")
var Car={

	brand:"tesla",
	model:"model 3",
	price:3400,
	testautopilot: function()
	{
		document.write("<br>this car has autopilot :"+Car.brand);
	}
}
Car.testautopilot();

//adding new feature 
document.write("<br>adding new feature")

Car.feultype="electric";//new variable added to Cars

Car.newfn=function()
{
	document.write("<br>its new function added to Car")

}
document.write("<br>"+Car.feultype)

//DELETE
document.write("<br> deleting car.price")
delete Car.price;
document.write("<br>car.price: "+ Car.price)