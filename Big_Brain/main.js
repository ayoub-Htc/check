 //Bold

function changeWeight() {
    var getText=document.getElementById("myText");
      if(getText.style.fontWeight=="bold"){
      getText.style.fontWeight="normal"
   }
   else{
       getText.style.fontWeight="bold";
   }
   }
  // italic
   function changepolice(){
    var getText=document.getElementById("myText");
    
    if(getText.style.fontStyle=="italic"){
       getText.style.fontStyle="normal";
      
      
    }
    else{
        getText.style.fontStyle="italic";
    }
    }
   //Underline
    function makeitunder(){
        var  getText=document.getElementById("myText");
      
      if(getText.style.textDecoration=="underline"){
         getText.style.textDecoration="none";
            
      }
      else{
          getText.style.textDecoration="underline";
      }
      }
  
      /*Px_Option*/

      function PxOption(){
        document.getElementById("myText").style.fontSize=document.getElementById("sizee").value;
    
    }

    /*Font_familly-option*/

    function  Fontfamillyoption(){
      document.getElementById("myText").style.fontFamily=document.getElementById("sizeee").value;
  
  }
  /*Hover-opacity-images*/ 
$("button").css("opacity","0");
 
$(".p7").mouseenter(function(){

  $(this).css("opacity","0.5");
  $(this).find("button").css("opacity","1");

});

$(".p7 ").mouseleave(function(){
$(".p7").css("opacity","100");
  $(this).find("button").css("opacity","0");  
});







        
        


















      

