

let btn = document.getElementById('addBtn')

btn.addEventListener("click", function(e){
let text = document.getElementById("addTxt")
let addTitle = document.getElementById("addTitle")

let notes = localStorage.getItem("notes")
    if(notes==null){
        notesObj = []
    }
     else{
        notesObj = JSON.parse(notes)
     }

     let myObj = {
         title: addTitle.value,
         text: text.value
     }
    //  notesObj.push(text.value)
     notesObj.push(myObj)

     localStorage.setItem("notes", JSON.stringify(notesObj))
     text.value=""
     addTitle.value =""
    //  console.log(notesObj)
   showNotes()
})

function showNotes(){
    let notes =localStorage.getItem("notes")
    if(notes==null){
        notesObj = []
    }
     else{
        notesObj = JSON.parse(notes)
     }

     let html = ""
     notesObj.forEach((element,index) => {
           html += `
           <div class="notecard card my-2 mx-2" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">task-${index+1} => ${element.title} 
             </h5>
             <p id="cardText" class="card-text">${element.text}</p>
             <button id=${index} onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
           </div>
     </div> `


     });

     let notesAppend = document.getElementById("notes")
     if(notes.length!=0 ){
     notesAppend.innerHTML = html
    }
}

function deleteNode(id){
     notesObj.splice(id,1)
     localStorage.setItem("notes", JSON.stringify(notesObj))
     showNotes()

}

let search = document.getElementById("searchTxt")
search.addEventListener("input",function(){
let searchVal = search.value.toLowerCase()

let noteCards = document.getElementsByClassName("notecard")
Array.from(noteCards).forEach(function(ele){
   let cardTxt = ele.getElementsByTagName("p")[0].innerHTML
   if(cardTxt.toLocaleLowerCase().includes(searchVal)){
    ele.style.display = "block"
   }else{
    ele.style.display = "none"
   }
})

})



// Add title
// Mark a note as important
// Seperate notes by user
// Sync and host to Web Server