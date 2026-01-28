window.addEventListener('scroll', () => {
    // wie weit gescrollt
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    // wie hoch ist die seite insgesamt
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // % berechnen
    const scrolled = (winScroll / height) * 100;

    // in CSS Variable speichern
    document.documentElement.style.setProperty('--scroll-percent', scrolled + '%');
}); // hier war etwas hilfe von ki dabei :)