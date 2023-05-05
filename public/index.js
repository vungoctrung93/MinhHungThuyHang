function response(){
  let name = document.getElementById("name");
  let tel = document.getElementById("tel");
  let come = document.querySelector('input[name="come"]:checked');
  if(name.value !== "" && tel.value !== ""  && come  && come.value !== ""){
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSd02Y9u63_1rpY1KtYL0QeUN3ILBzc0z_CBLn1EykMLYVIxIA/formResponse?entry.1306379970="+name.value+"&entry.479352491="+tel.value+"&entry.999289410="+come.value+"").then((response) =>{
  
    }).catch((error)=>{
  
    })
    document.getElementById("response").style.display = "none";
    document.getElementById("thanks").style.display = "block";
    document.getElementById("thanks").scrollIntoView();
  } else {
    alert("Vui lòng điền đầy đủ thông tin!");
  }
}
function Continue() {
  let name = document.getElementById("name");
  let tel = document.getElementById("tel");
  let come = document.querySelector('input[name="come"]:checked');
  name.value = "";
  tel.value = "";
  if(come){
    come.checked = false;
  }
  document.getElementById("response").style.display = "block";
  document.getElementById("thanks").style.display = "none";
  document.getElementById("response").scrollIntoView();
}