


// Initialize Locomotive Scroll

function count() {
    const counts = document.querySelectorAll('.count');
    const duration = 1000; // Duration for the count animation

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

function autoReloadCount() {
    count();
    setTimeout(autoReloadCount, 10000); // Reload every 10 seconds
}

autoReloadCount(); // Start the auto-reloading process


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
