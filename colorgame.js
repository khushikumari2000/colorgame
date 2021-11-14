//fade out incorrwct div when clicked
//add the try again correect mess 
//func to set all sqr to correct color
//pick random color frm array
//generate random colors for array
/*
let colors=[
"rgb(255, 0, 0)",
"rgb(0, 255, 0)",
"rgb(255, 255, 0)",
"rgb(155, 105, 0)",
"rgb(0, 0, 255)",
"rgb(255, 5, 100)",
];
*/

const pickcolor=()=>{
	//get random number 0 to 5
	//return color
	const random = Math.floor(Math.random()*colors.length)
	return colors[random]
	
}

const generaterandomcolor=()=>{
	const r=Math.floor(Math.random()*256);
	const g=Math.floor(Math.random()*256);
	const b=Math.floor(Math.random()*256);
	return `rgb(${r}, ${g}, ${b})`;
}
const generaterandomcolors=(num)=>{
	let output=[];
	for(let i=0; i<num; i++){
		output.push(generaterandomcolor());
	}
	return output;
		
}
let ns=6;
colors=generaterandomcolors(ns);

//select elements
const squares=document.querySelectorAll(".square");
const dis=document.getElementById("dis");
const message=document.getElementById("message");
const resetbutton=document.getElementById("resetbutton");
const easy=document.getElementById("easy");
const hard=document.getElementById("hard");

//choose winning color
let pickedcolor=pickcolor();
dis.textContent=pickedcolor;

//reset Button
resetbutton.addEventListener("click",function(){
	colors=generaterandomcolors(ns);
	pickedcolor=pickcolor();
	dis.textContent=pickedcolor;
	message.textContent="";
	for(let i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}

})
easy.addEventListener("click",function(){
  this.classList.add("selected");
  hard.classList.remove("selected");
  ns=3;
  colors=generaterandomcolors(ns);
  pickedcolor=pickcolor();
  dis.textContent=pickedcolor;
  for(let i=0;i<squares.length;i++){
	  if(colors[i]){
		  squares[i].style.backgroundColor=colors[i];
	  }
	  else{
		  squares[i].style.display="none";
	  }
  }
  
})
hard.addEventListener("click",function(){
  this.classList.add("selected");
  easy.classList.remove("selected");
  ns=6;
  colors=generaterandomcolors(ns);
  pickedcolor=pickcolor();
  dis.textContent=pickedcolor;
  for(let i=0;i<squares.length;i++){
	  squares[i].style.backgroundColor=colors[i];
	  squares[i].style.display="block";
  }
})
//set up squares
for(let i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	//add click listeners
	squares[i].addEventListener("click",function(){
		 //get the color of clicked square
		 const clickedcolor=this.style.backgroundColor;
		 console.log(clickedcolor);
		 if(clickedcolor==pickedcolor){
			 message.textContent="correct";
			 document.getElementById("ms").style.backgroundColor="green";
			 for(let i=0;i<squares.length;i++){
			    squares[i].style.backgroundColor=clickedcolor;
			 }
		 }
		 else{
			 this.style.backgroundColor="black";
			 message.textContent="oops!wrong";
		 }

	})
};