function toggleInnerDiv(e) {
   
    
    const innerDiv = document.getElementById("innerDiv");
    const outerDiv = document.getElementById("outerDiv");

    if (
      innerDiv.style.display === "none" ||
      innerDiv.style.display === "" 
    ) {
      innerDiv.style.display = "block";
      outerDiv.style.border="4px solid #FF6B82";
      
      outerDiv.style.backgroundColor = "#FFF9FA";
      outerDiv.style.height = "180px";

      document.querySelector('input[type="radio"]').checked = true;
    
    

    } else {
      innerDiv.style.display = "none";
      outerDiv.style.border="1px solid #C8C8C8";
      document.querySelector('input[type="radio"]').checked = false;
      outerDiv.style.backgroundColor = "transparent";
      outerDiv.style.height = "auto";

      
    }
  }


  function toggleInnerDiv1(e) {
   
    
    const innerDiv = document.getElementById("innerDiv1");
    const outerDiv = document.getElementById("outerDiv1");

    if (
      innerDiv.style.display === "none" ||
      innerDiv.style.display === "" 
    ) {
      innerDiv.style.display = "block";
      outerDiv.style.border="4px solid #FF6B82";
      
      outerDiv.style.backgroundColor = "#FFF9FA";
      outerDiv.style.height = "180px";

      document.getElementById('innerRadio1').checked = true;
    
      document.getElementById('offredDiv1').style.position = "absolute";
      document.getElementById('offredDiv1').style.bottom = "175px";
      document.getElementById('offredDiv1').style.left = "218px";

    

    } else {
      innerDiv.style.display = "none";
      outerDiv.style.border="1px solid #C8C8C8";
      document.getElementById('innerRadio1').checked = false;

      outerDiv.style.backgroundColor = "transparent";
      outerDiv.style.height = "auto";
      document.getElementById('offredDiv1').style.bottom = "60px";
      document.getElementById('offredDiv1').style.left = "215px";

      
    }
  }




  function toggleInnerDiv2(e) {

    
    const innerDiv = document.getElementById("innerDiv2");
    const outerDiv = document.getElementById("outerDiv2");

    if (
      innerDiv.style.display === "none" ||
      innerDiv.style.display === "" 
    ) {
      innerDiv.style.display = "block";
      outerDiv.style.border="4px solid #FF6B82";
      
      outerDiv.style.backgroundColor = "#FFF9FA";
      outerDiv.style.height = "180px";

      document.getElementById('innerRadio2').checked = true;
    
    

    } else {
      innerDiv.style.display = "none";
      outerDiv.style.border="1px solid #C8C8C8";
      document.getElementById('innerRadio2').checked = false;

      outerDiv.style.backgroundColor = "transparent";
      outerDiv.style.height = "auto";

      
    }
  }











  function stopPropagation(event){
    event.stopPropagation();
  }