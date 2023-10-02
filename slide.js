let section = document.querySelectorAll(".slide");

let trigger = innerHeight / 5 * 4;
console.log(trigger)
window.addEventListener("scroll",(evt)=>{
    section.forEach((slide)=>{
        let locationTop = slide.getBoundingClientRect().top;
        if (locationTop < trigger) {
            slide.classList.add("slide_show")
        }
        else{
            slide.classList.remove("slide_show")
        }
    })
})