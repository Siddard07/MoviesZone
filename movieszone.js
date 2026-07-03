const images=[
    "Marvel1.jpg",
    "DC1.jpg",
    "Marvel2.jpg",
    "DC2.jpg"
]
const main=document.querySelector("main");
let index=0;
setInterval(()=>{
    index=(index+1)%images.length;
    main.style.backgroundImage=`url('${images[index]}')`;
},2000);
const user=document.getElementById("usersignup");
const username=localStorage.getItem("username");
if(username){

    user.textContent=username;
}
else{
    user.textContent="Sign Up"
}