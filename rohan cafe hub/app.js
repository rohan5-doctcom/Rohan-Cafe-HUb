const navlist=document.getElementbyid("navlist");
const hamburger=document.getElementById("hamburger");

hamburger.addEventListener("click",()=>{
   navlist .classlist.toggle(".navlist_active");
})