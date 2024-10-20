


// Initialize Locomotive Scroll

function count(){
const count = document.querySelector('.count');

const counts = document.querySelectorAll('.count');
const duration = 1000; // Increase duration to 2 seconds for smoother animation

counts.forEach((countElement) => {
    function update() {
        const target = Number(countElement.getAttribute('data-target'));
        const current = Number(countElement.innerText);
        const increment = (target - current) / (duration / 16); // 60 FPS
        
        if (current < target) {
            countElement.innerText = Math.ceil(current + increment);
            requestAnimationFrame(update);
        } else {
            countElement.innerText = target;
        }
    }
    
    update();
});
}
count();


function loadinganimation()
{
    gsap.from(".content-item",{
        y:100,
        opacity:0,
        delay:0.2,
        duration:0.5,
    
        stagger:0.2,
        scale:1.3
    
    })
    // gsap.from("#page1 #videocontainer",{
    //     scale:1.1,
    //     opacity:0,
    //     delay:1.4,
    //     duration:1
    
    // })
}
loadinganimation()
