document.addEventListener('DOMContentLoaded',()=>{
  const heroTitle=document.querySelector('.hero-role-title');
  if(heroTitle){
    heroTitle.innerHTML=`<span class="farm-role-fixed"><span class="farm-role-item active"><span>Java Specialist</span><span>Spring Boot &amp; MySQL</span></span><span class="farm-role-item"><span>Backend</span><span>Developer</span></span><span class="farm-role-item"><span>Server-Side</span><span>Developer</span></span></span>`;
    const style=document.createElement('style');
    style.textContent=`
      .hero-role-title{overflow:hidden!important;line-height:1!important;margin:0!important;height:3.6em!important;}
      .farm-role-fixed{display:block;position:relative;width:100%;height:3.6em;overflow:hidden;}
      .farm-role-item{position:absolute;left:0;top:0;width:100%;height:3.6em;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;opacity:0;visibility:hidden;transform:translateY(12px);transition:opacity .4s ease,transform .4s ease,visibility 0s linear .4s;font-family:Poppins,sans-serif;font-size:clamp(1.7rem,2.7vw,3rem);line-height:1.05;letter-spacing:-.04em;box-sizing:border-box;}
      .farm-role-item.active{opacity:1;visibility:visible;transform:translateY(0);transition:opacity .4s ease,transform .4s ease,visibility 0s linear 0s;}
      .farm-role-item>span{display:block;white-space:nowrap;}
      .farm-role-item:first-child>span:first-child{color:#fff;}
      .farm-role-item:first-child>span:last-child,.farm-role-item:nth-child(2)>span:last-child,.farm-role-item:nth-child(3)>span:last-child{background:linear-gradient(90deg,#9f6bff,#c9a1ff,#9f6bff);background-size:200%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .farm-role-item:first-child>span:last-child{font-size:.82em;margin-top:.08em;}
      @media(max-width:1000px){.hero-role-title{height:3.5em!important}.farm-role-fixed,.farm-role-item{height:3.5em}.farm-role-item{font-size:clamp(1.55rem,4.5vw,2.5rem)}}
      @media(max-width:680px){.hero-role-title{height:3.5em!important;text-align:center}.farm-role-fixed,.farm-role-item{height:3.5em}.farm-role-item{align-items:center;justify-content:center;font-size:clamp(1.2rem,6vw,1.7rem);letter-spacing:-.025em}.farm-role-item:first-child>span:last-child{font-size:.78em}}
    `;
    document.head.appendChild(style);
    const items=[...heroTitle.querySelectorAll('.farm-role-item')];let index=0;
    setInterval(()=>{items[index].classList.remove('active');index=(index+1)%items.length;items[index].classList.add('active')},2600);
  }

  const contact=document.getElementById('contact');
  if(contact){
    const contactForm=contact.querySelector('.contact-form');
    if(contactForm){
      contactForm.innerHTML=`<div class="farm-message-title">Message</div><label class="form-input-label" for="farm-name">Your Name</label><input class="form-input" id="farm-name" type="text" placeholder="Your Name" autocomplete="name"><label class="form-input-label" for="farm-email">Your Email</label><input class="form-input" id="farm-email" type="email" placeholder="Your Email" autocomplete="email"><label class="form-input-label" for="farm-subject">Subject</label><input class="form-input" id="farm-subject" type="text" placeholder="Subject"><label class="form-input-label" for="farm-message">Your Message</label><textarea class="form-input" id="farm-message" rows="6" placeholder="Your Message"></textarea><button class="contact-submit" id="farm-send-message" type="button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M21.5 2.5L10.2 13.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M21.5 2.5L14.3 21.5L10.2 13.8L2.5 9.7L21.5 2.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg><span>Send Message</span></button>`;
      document.getElementById('farm-send-message').addEventListener('click',()=>{
        const name=document.getElementById('farm-name').value.trim();
        const email=document.getElementById('farm-email').value.trim();
        const subject=document.getElementById('farm-subject').value.trim()||'Portfolio Contact';
        const message=document.getElementById('farm-message').value.trim();
        const body=`Name: ${name}\nEmail: ${email}\n\n${message}`;
        window.location.href=`mailto:Farmankorejo10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      });
    }

    const emailLink=[...contact.querySelectorAll('a')].find(a=>a.textContent.toLowerCase().includes('mudasiralikorejo@gmail.com')||a.textContent.toLowerCase().includes('farmankorejo10@gmail.com'));
    if(emailLink){
      emailLink.href='mailto:Farmankorejo10@gmail.com';
      const value=emailLink.querySelector('.contact-value');
      if(value)value.textContent='Farmankorejo10@gmail.com';
      else emailLink.textContent='Farmankorejo10@gmail.com';
    }
    if(!document.getElementById('farm-copy-email')){
      const copy=document.createElement('button');
      copy.id='farm-copy-email';
      copy.type='button';
      copy.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2" stroke="currentColor" stroke-width="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" stroke-width="2"/></svg><span>Copy Email</span>';
      copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('Farmankorejo10@gmail.com');copy.querySelector('span').textContent='Copied!';setTimeout(()=>copy.querySelector('span').textContent='Copy Email',1600)}catch(e){alert('Email: Farmankorejo10@gmail.com')}});
      const info=contact.querySelector('.contact-info');
      if(info)info.appendChild(copy);
    }

    if(!document.getElementById('farm-social-media')){
      const social=document.createElement('div');
      social.id='farm-social-media';
      social.innerHTML=`<h3>Social Media</h3><div class="farm-social-links"><a href="https://www.instagram.com/farman._.korejo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram <span>@farman._.korejo</span></a><a href="https://github.com/farmankorejo81" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub <span>@farmankorejo81</span></a><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn <span>Farman Ali Korejo</span></a></div>`;
      contact.appendChild(social);
    }

    const contactStyle=document.createElement('style');
    contactStyle.textContent=`
      .farm-message-title{font-family:Poppins,sans-serif;font-size:1.7rem;font-weight:700;color:#fff;margin-bottom:.25rem;}
      .contact-form textarea{resize:vertical;min-height:135px;}
      .contact-submit{display:inline-flex;align-items:center;gap:.55rem;}
      .contact-submit svg,.contact-submit span{display:inline-block;}
      #farm-copy-email{display:inline-flex;align-items:center;gap:.45rem;margin-top:.7rem;padding:.65rem .9rem;border:1px solid rgba(159,107,255,.25);border-radius:10px;background:#130d22;color:#c9a5ff;font-size:.75rem;font-weight:700;cursor:pointer;transition:.25s ease;}
      #farm-copy-email:hover{border-color:rgba(159,107,255,.6);transform:translateY(-1px);}
      #farm-social-media{margin-top:2rem;padding:1.4rem 1.5rem;border:1px solid rgba(159,107,255,.2);border-radius:18px;background:rgba(255,255,255,.03);}
      #farm-social-media h3{margin:0 0 1rem;font-family:Poppins,sans-serif;font-size:1.15rem;color:#fff;}
      .farm-social-links{display:flex;flex-wrap:wrap;gap:.75rem;}
      .farm-social-links a{display:flex;flex-direction:column;gap:.15rem;text-decoration:none;padding:.75rem 1rem;border:1px solid rgba(159,107,255,.2);border-radius:12px;color:#fff;font-family:Poppins,sans-serif;font-size:.9rem;transition:.25s ease;}
      .farm-social-links a:hover{transform:translateY(-2px);border-color:rgba(159,107,255,.55);}
      .farm-social-links a span{font-size:.75rem;color:#bfa5e8;}
      .farm-project-image{width:100%;height:100%;display:block;object-fit:cover;border-radius:10px;}
      @media(max-width:680px){.farm-social-links{flex-direction:column}.farm-social-links a{width:100%;box-sizing:border-box;}}
    `;
    document.head.appendChild(contactStyle);
  }

  const projectImages=[
    {match:'Game Menu',src:'game-menu.svg',alt:'Java Swing Game Menu project preview'},
    {match:'Student Management System',src:'student-management.svg',alt:'Student Management System project preview'},
    {match:'Calculator',src:'calculator.svg',alt:'Java Calculator project preview'}
  ];
  document.querySelectorAll('.project-card').forEach(card=>{
    const title=card.querySelector('.project-title');
    const wrap=card.querySelector('.project-image-wrap');
    if(!title||!wrap)return;
    const item=projectImages.find(x=>title.textContent.includes(x.match));
    if(item)wrap.innerHTML=`<img class="farm-project-image" src="${item.src}" alt="${item.alt}" loading="lazy">`;
  });

  const toggle=document.getElementById('ai-agent-toggle'),box=document.getElementById('ai-agent-box'),close=document.getElementById('ai-agent-close'),input=document.getElementById('ai-agent-input'),send=document.getElementById('ai-agent-send'),messages=document.getElementById('ai-agent-messages');
  if(toggle&&box){const reply=q=>{q=q.toLowerCase();if(q.includes('skill'))return 'Farman works with Java, C++, OOP, MySQL, JDBC, Java Swing, Git/GitHub, HTML, CSS and backend development.';if(q.includes('project'))return 'Farman has built a Java Swing Game Menu, Student Management System, and Calculator. You can view them in the Projects section.';if(q.includes('java'))return 'Java is one of Farman’s main programming skills, including OOP, Swing and backend development.';if(q.includes('mysql')||q.includes('jdbc'))return 'Farman works with MySQL and JDBC for database-connected Java applications.';if(q.includes('github'))return 'You can find Farman’s projects on GitHub from the Projects section or the Contact section.';if(q.includes('contact')||q.includes('email'))return 'You can contact Farman at Farmankorejo10@gmail.com.';if(q.includes('who')||q.includes('about')||q.includes('farman'))return 'Farman Ali Korejo is a Computer Systems Engineering student at MUET who enjoys building practical software projects.';return 'I can tell you about Farman’s skills, projects, Java, JDBC, MySQL, backend development, GitHub, or contact information.'};const add=(text,who)=>{const d=document.createElement('div');d.className='ai-msg '+who;d.textContent=text;messages.appendChild(d);messages.scrollTop=messages.scrollHeight};const ask=()=>{const q=input.value.trim();if(!q)return;add(q,'user');input.value='';setTimeout(()=>add(reply(q),'bot'),250)};toggle.onclick=()=>box.classList.toggle('ai-open');close.onclick=()=>box.classList.remove('ai-open');send.onclick=ask;input.addEventListener('keydown',e=>{if(e.key==='Enter')ask()})}
});