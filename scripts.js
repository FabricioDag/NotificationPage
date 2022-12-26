const clearNot = document.querySelector(".clear")
const notifics = document.querySelectorAll(".notify")
const spanNotific = document.querySelector(".number-notifications")
var unread = 0

function attCounter(){
    spanNotific.innerHTML = parseInt(unread)
    console.log(unread)
    if(unread == 0){
        spanNotific.classList.add("hide") 
    }
}



notifics.forEach(notific =>{
    if(notific.classList.contains("unread")){
        unread++
        
    }
})

attCounter()

clearNot.addEventListener("click", () =>{
    notifics.forEach(notific =>{
        notific.classList.remove("unread")
        attCounter()
    })
    spanNotific.classList.add("hide")
} )

notifics.forEach(notific =>{
    notific.addEventListener("click", () =>{
        notific.classList.remove("unread")
        unread--
        attCounter()
    })
})