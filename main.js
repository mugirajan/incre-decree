let btn=document.getElementById("decrese");
    btn.addEventListener("click",function(){
        var text1=parseInt(document.getElementById("num").value);
        text1--;
        document.getElementById("num").value=text1;
        
       })
      
      let btn1=document.getElementById("increse");
      btn1.addEventListener("click",function(text1){
        text1=parseInt(document.getElementById("num").value);
        text1++;  
        document.getElementById("num").value=text1;
          
         
        })