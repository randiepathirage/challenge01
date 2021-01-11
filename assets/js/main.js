/*--- SCROLL REVEAL ANIMATION ---*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.row',{}); 
sr.reveal('.numbers .rect img',{delay: 200}); 
sr.reveal('.numbers .rect>p',{delay: 200});
