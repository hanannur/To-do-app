const inputbox = document.getElementById("taskText")

const  licontainer= document.getElementById("listeditems")
function addTask() {
    if (taskText.value===''){
        alert("write something");
    }
    else {
        let li= document.createElement("li");
        li.innerHTML=inputbox.value;
        licontainer.appendChild(li);
        const delbtn = document.createElement("span");
        delbtn.textContent = '❌';
        // delbtn.style.marginLeft="10rem";
        // delbtn.style.color= "red";
        

        li.appendChild(delbtn);
    }

    inputbox.value=''; 
    saveddata();
    
}
licontainer.addEventListener("click" , function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveddata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveddata();
    }
} , false);

const saveddata = ()=>{
    localStorage.setItem("taskList" , licontainer.innerHTML);
}
const Update = () =>{
    licontainer.innerHTML = localStorage.getItem("taskList");
}
Update();


