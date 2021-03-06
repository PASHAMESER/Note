let thmlTitle = document.querySelector("[name= 'title']");
let thmlTask = document.querySelector("[name= 'task']");
let devErrorMgs = document.querySelector(".devErrorMgs");
let devNote = document.querySelector(".devNote");
let containerDevNote = document.querySelector(".containerDevNote");


let h1Title = document.getElementById("h1title");
let h3Title = document.getElementById("h3title");
let btnDelete = document.getElementById("btndelete");
let span1 = document.getElementById("span1");
let date = document.getElementById("date");
let favcolor = document.getElementById("favcolor");



console.log(btnDelete)

document.forms[0].onsubmit = myRefresh = (e) => {

  if(thmlTitle.value == "" && thmlTask.value == "" ) {
    devErrorMgs.style.display = "flex";
  }

  if (thmlTitle == "" || thmlTask !== "") {
    e.preventDefault();
  }

}

let addNote = document.querySelector("[name= 'addnote']");


addNote.onclick = ()=>{
  if(thmlTitle.value !== "" && thmlTask.value !== ""){
    let content = `<div class="devNote" style="background-color: ${favcolor.value} ;" >
    <h1 id="h1title" >${thmlTitle.value}</h1>
    <p id="h3title"  >${thmlTask.value}</p>
    <button id="btndelete" class = "btndelete" >Delete</button>
    <button id="done" class = "done" >Done</button>
    <h2 id="date" ></h2>
</div>`
    containerDevNote.innerHTML += content;
    
  }

}
containerDevNote.addEventListener('click', (e)=>{
  if(e.target.className == "btndelete"){
    e.target.parentElement.remove();
  }
  if(e.target.className == "done") {
    e.target.parentElement.classList.toggle("doneX");
  }
})
