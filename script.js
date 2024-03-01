const sr = ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 500,
    delay: 100,
    // reset: true
});
sr.reveal('.home_text',{}); 
sr.reveal('.home_img,.conform,.conimg',{delay: 400}); 
sr.reveal('.about_bx,.about_img,.about_text,.t_bx,.treat,.nav_menu ul li a',{ interval: 200}); 
sr.reveal('.book_bx,.form_box,.form_input,.doctor,.doctor_bx,.dcard',{interval: 200}); 