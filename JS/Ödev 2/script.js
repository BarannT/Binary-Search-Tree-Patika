// Yeni element ekleme ve Bootstrap Toast ekleme
let ulDOM=document.querySelector("#list");

function newElement() {
    let text=document.querySelector("#task").value;
    if (text.trim()==""){
        $('.error').toast('show')
    } else{
        let liDOM=document.createElement("li");
        liDOM.innerHTML=text;
        ulDOM.append(liDOM);
        $('.success').toast('show')
        addCheck()
        remove()
    }
}

// Close butonu ve işaretleme ekleme
function addCheck(){
    let listElements=document.querySelectorAll("ul#list>li")
    for(const list of listElements){
        list.addEventListener("click",checker)

        let closeButton=document.createElement("span")
        closeButton.classList.add("close")
        closeButton.innerHTML="\u00D7"
        list.appendChild(closeButton)
    }
}

function checker(){
    this.classList.toggle("checked")
}


// Eleman silme
function remove(){
    let closeButtons=document.querySelectorAll(".close")
    for (const cls of closeButtons){
        cls.addEventListener("click",function(){
            ulDOM.removeChild(cls.parentElement)
        })
    }
}


addCheck()
remove()