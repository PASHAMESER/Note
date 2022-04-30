// const users = [
//     {firstName: "Mohamed" , lastName: "Roshdy", age: 30},
//     {firstName: "Ahmed" , lastName: "Amr", age: 26},
//     {firstName: "Ahmed" , lastName: "Amr", age: 26}
// ];

// const container = document.getElementById("container");

// users.map((itme)=>{
//     const card = `<div id="card">
//     <div id="content">
//         <div>First Name : ${itme.firstName}</div>
//         <div>Last name : ${itme.lastName}</div>
//         <div>age : ${itme.age}</div>
//     </div>
// </div>`
// container.innerHTML += card;
// });

// const users = [];

// const container = document.getElementById("container");
// const firstName = document.getElementById("firstName");
// const lastName = document.getElementById("lastName");
// const age = document.getElementById("age");
// const submit = document.getElementById("submit");

// submit.onclick = function(){
//     if(firstName.value == "" || lastName.value == "" || age.value == "" ){
//         alert("يجب عليك ادخل جميع البيانات");
//     }else{
//         users.push({firstName:firstName.value,lastName:lastName.value,age:age.value})
//     users.map((itme)=>{

//         const card = `<div id="card">
//         <div id="content">
//             <div>First Name : ${itme.firstName}</div>
//             <div>Last name : ${itme.lastName}</div>
//             <div>age : ${itme.age}</div>
//         </div>
//     </div>`
//     container.innerHTML += card;
//     console.log(users);
//     });
//     }
// };

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






// btndelete.onclick = () => {
//   // devNote.style.display = "none";
//   // [document.querySelectorAll('devNote')].filter(el => el.textContent.includes('sometext'));
//   // console.log(content)
//   console.log("content")
// }

