const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

// document.querySelectorAll('.certificate img').forEach((e,i)=>{
//     e.addEventListener('mouseover', function(){
//         document.querySelectorAll('.verify').forEach((ve,vi)=>{
//             if(vi===i){
//                 ve.style.zIndex =4;
//                 e.style.filter="brightness(30%)";
//             }
//         })
//     })
//     e.addEventListener('mouseout', function(){
//         document.querySelectorAll('.verify').forEach((ve,vi)=>{
//             ve.style.zIndex =-1;
//             e.style.filter="brightness(100%)";

            
//         })
//     })
// })