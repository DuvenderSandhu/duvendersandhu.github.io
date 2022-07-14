function onHamClick(){
    if(snav.style.display==="none"){
        snav.style.display="block"
    }
    else{
        snav.style.display="none"
    }
}

let skill = document.querySelectorAll('.skill')
let box=document.querySelectorAll('.box')
let progressSBar;
let progressPBar;
let border;
let img;
let snav=document.querySelector('#snav')
let ham=document.querySelector('.ham')

ham.addEventListener('click',onHamClick)


skill.forEach(element => {
    let NewString = element.children[0].innerHTML.replace("%", "")
    let  = element.children[1].innerHTML.replace("%", "")
    let array = NewString.split(" ")
   array[1]=Number(array[1])
   element.lastElementChild.children[0].style.width=`${array[1]}%`
   element.lastElementChild.children[1].style.width=`${100-array[1]}%`
});
for (let i = 0; i < box.length; i++) {
    let element = box[i];
    console.log(element)
    // element.addEventListener()
    element.addEventListener('mouseover',function (){
    let imgurl=element.children[1].innerHTML
        element.firstElementChild.style.backgroundColor="rgb(191, 205, 211)"
        element.firstElementChild.firstElementChild.style.backgroundColor="rgb(106, 106, 211)"
        element.firstElementChild.firstElementChild.firstElementChild.setAttribute('src',`images/${imgurl} white.png`)
    })
    element.addEventListener('mouseout',function (){
    let imgurl=element.children[1].innerHTML
        
        element.firstElementChild.style.backgroundColor="rgb(106, 106, 211)"
        element.firstElementChild.firstElementChild.style.backgroundColor="white"
        element.firstElementChild.firstElementChild.firstElementChild.setAttribute('src',`images/${imgurl}.png`)
        
    })

    
}