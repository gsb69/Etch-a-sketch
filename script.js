const grid=document.querySelector(".grid");
grid.style.display="flex";
grid.style.flexWrap="wrap";
grid.style.width="1000px";
const btn=document.createElement("button");
btn.textContent="press for input";
document.body.insertBefore(btn,grid);
btn.addEventListener("click",()=>{
    let num=prompt("number of squares should be less than 100");
    num=Number(num);
    grid.innerHTML="";
if(num>100 || num<=0 || isNaN(num)){alert("try again");return;}

for(let i=0;i<num*num;i++){
    const cell=document.createElement("div");
    cell.classList.add("cell");
    cell.style.width=(1000/num)+"px";
    cell.style.height=(1000/num)+"px";
    cell.style.border="1px solid black";
    cell.style.backgroundColor="yellow";
    cell.style.boxSizing="border-box";
    grid.appendChild(cell);
    cell.addEventListener("mouseenter",()=>{
        cell.style.backgroundColor="red";
    });
    cell.addEventListener("mouseleave",()=>{
        cell.style.backgroundColor="yellow";
    });
}
});