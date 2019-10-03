function textboxfunction1(){

	var username=document.getElementById("user").value;//to get value inside the txt box 
    //alert("username: "+username);
    var password=document.getElementById("pass").value;
    //alert("username: "+username+"  password: "+password);

   if(username=="chiran" && password=="good boy")
   {
   	alert("you entered password and username correctly");
   }

   else{
   	alert("either username or password is wrong");
   }
}

function radiofunction1(){
	
	var rd1=document.getElementById("rd1"); // this returns element that has Id attrbute with given value //
    var rd2=document.getElementById("rd2");	
    
    if(rd1.checked==true)
    {
    	alert("your best friend is :"+rd1.value)   // generates an alert 

    }
    else if(rd2.checked==true)
    {
    	alert("your best friend is :"+rd2.value)
    }

    else
    {
    	alert("no channel slected")
    }
}

function selectfunction1(){

	var select=document.getElementById("selectbox");
	alert("your second friend is:"+select.options[select.selectedIndex].value)//dynamic aray value 
}

function changestyling1(){

	var para=document.getElementsByTagName("p");

	for(var i=0;i<para.length;i++){
		if(i==0){

			para[i].style.color="green";
		    para[i].style.fontWeight="bold";
		    para[i].style.fontStyle="italic";

		}
		
		else{
			para[i].style.color="red";
			para[i].style.fontSize="25";
		    para[i].style.fontWeight="bold";
		    para[i].style.fontStyle="italic";
	    }
	}
}

function changestyling2(){
	var element=document.getElementsByClassName("mypara");
    
    for(var j=0;j<element.length;j++){
    	element[j].style.color="yellow";
    }
}


