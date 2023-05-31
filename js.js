let cla_80 = document.querySelector(".cla_80")
let cla_85 = document.querySelector(".cla_85")
let cla_70 = document.querySelector(".cla_70")
let cla_89 = document.querySelector(".cla_89")

let counter = document.querySelector(".second")

let munite = document.querySelector(".munite")

let hours = document.querySelector(".hours")

let card1 = document.querySelector(".n-1")
let card2 = document.querySelector(".n-2")
let card3 = document.querySelector(".n-3")
let card4 = document.querySelector(".n-4")
let card5 = document.querySelector(".n-5")
let card6 = document.querySelector(".n-6")
let card7 = document.querySelector(".n-7")
let card8 = document.querySelector(".n-8")

let our = document.querySelector(".our-skills")

window.addEventListener("scroll",function ()
{
    scrollY > 900 & scrollY < 1000?bac():"";
    console.log(scrollY)
    if (scrollY < 7400 )
    {
        cla_80.setAttribute("data-progress", "0%")
        cla_85.setAttribute("data-progress", "0%")
        cla_70.setAttribute("data-progress", "0%")
        cla_89.setAttribute("data-progress", "0%")

        cla_80.style.width = "0%"
        cla_85.style.width = "0%"
        cla_70.style.width = "0%"
        cla_89.style.width = "0%"
        our.style.backgroundColor ="#ffffff"
    }

    if (scrollY > 7400 & screenY < 8100){
        cla_80.setAttribute("data-progress", "80%")
        cla_85.setAttribute("data-progress", "85%")
        cla_70.setAttribute("data-progress", "70%")
        cla_89.setAttribute("data-progress", "89%")

        cla_80.style.width = "80%"
        cla_85.style.width = "85%"
        cla_70.style.width = "70%"
        cla_89.style.width = "89%"
        our.style.backgroundColor = "#ececec"
    }
    if (scrollY > 8100)
    {
        our.style.backgroundColor = "#ffffff"
        cla_80.setAttribute("data-progress", "0%")
        cla_85.setAttribute("data-progress", "0%")
        cla_70.setAttribute("data-progress", "0%")
        cla_89.setAttribute("data-progress", "0%")

        cla_80.style.width = "0%"
        cla_85.style.width = "0%"
        cla_70.style.width = "0%"
        cla_89.style.width = "0%"
    }
}
)


setInterval(e =>
{
    counter.textContent = +counter.textContent + 1
    if (+counter.textContent === 60)
    {
        counter.textContent = "0"
        munite.textContent = +munite.textContent+1
    }
    if (+munite.textContent === 60)
    {
        munite.textContent = "0";
        hours.textContent = +hours.textContent + 1;

    }
},100)

    

function bac()
{

    setTimeout(e =>
    {
        card1.style.transform = "scale(1.06)"
    
    }, 00)
    setTimeout(e =>
    {
        card1.style.transform = "scale(1)"
        card2.style.transform = "scale(1.06)"
    }, 50)
    setTimeout(e =>
    {
        card2.style.transform = "scale(1)"
        card3.style.transform = "scale(1.06)"
    }, 100)
    setTimeout(e =>
    {
        card3.style.transform = "scale(1)";
        card4.style.transform = "scale(1.06)"
    }, 150)
    setTimeout(e =>
    {
        card4.style.transform = "scale(1)";
        card8.style.transform = "scale(1.06)"
    }, 200)
    setTimeout(e =>
    {
        card8.style.transform = "scale(1)";
        card7.style.transform = "scale(1.06)"
    }, 250)
    setTimeout(e =>
    {
        card7.style.transform = "scale(1)";
        card6.style.transform = "scale(1.06)"
    }, 300)
    setTimeout(e =>
    {
        card6.style.transform = "scale(1)"
        card5.style.transform = "scale(1.06)"

    }, 350)

    setTimeout(e =>
    {
        card5.style.transform = "scale(1)"

    }, 400)


}

