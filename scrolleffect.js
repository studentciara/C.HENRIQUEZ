window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const scrollPos = window.scrollY;
      
      if (scrollPos >= top && scrollPos < top + section.offsetHeight) {
        sections.forEach(s => s.classList.remove('bg1', 'bg2', 'bg3'));
        
        if (section.id === 'section1') section.classList.add('bg1');
        if (section.id === 'section2') section.classList.add('bg2');
        if (section.id === 'section3') section.classList.add('bg3');
      }
    });
  });
  
  