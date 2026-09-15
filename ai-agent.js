document.addEventListener('DOMContentLoaded',()=>{
  const heroTitle=document.querySelector('.hero-role-title');
  if(heroTitle){
    const roles=['Java Specialist | Spring Boot & MySQL','Backend Developer','Server-Side Developer'];
    heroTitle.innerHTML=`<span class="farm-role-viewport">${roles.map((r,i)=>`<span class="farm-role-item ${i===0?'active':''} ${i===0?'farm-role-java':''}">${r}</span>`).join('')}</span>`;
    const style=document.createElement('style');
    style.textContent=`
      .hero-role-title{overflow:visible!important;line-height:1!important;margin:0!important;}
      .farm-role-viewport{display:block;position:relative;width:100%;height:1.35em;overflow:hidden;}
      .farm-role-item{position:absolute;inset:0;width:100%;height:100%;display:flex;align-items:center;justify-content:flex-start;white-space:nowrap;opacity:0;visibility:hidden;transform:translateY(12px);transition:opacity .5s ease,transform .5s ease,visibility 0s linear .5s;font-family:Poppins,sans-serif;font-size:clamp(1.35rem,3.5vw,2.9rem);line-height:1.05;letter-spacing:-.045em;}
      .farm-role-item.active{opacity:1;visibility:visible;transform:translateY(0);transition:opacity .5s ease,transform .5s ease,visibility 0s linear 0s;}
      .farm-role-java{font-size:clamp(.9rem,2.25vw,1.9rem);letter-spacing:-.025em;background:linear-gradient(90deg,#9f6bff,#c9a1ff,#9f6bff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      @media(max-width:1000px){.farm-role-item{font-size:clamp(1.2rem,4vw,2.25rem);}.farm-role-java{font-size:clamp(.82rem,2.7vw,1.55rem);}}
      @media(max-width:680px){.farm-role-viewport{height:1.4em;}.farm-role-item{justify-content:center;font-size:clamp(1.05rem,7vw,1.65rem);letter-spacing:-.035em;}.farm-role-java{font-size:clamp(.68rem,4.5vw,1.2rem);letter-spacing:-.02em;}}
    `;
    document.head.appendChild(style);
    const items=[...heroTitle.querySelectorAll('.farm-role-item')];
    let index=0;
    setInterval(()=>{
      items[index].classList.remove('active');
      index=(index+1)%items.length;
      items[index].classList.add('active');
    },2600);
  }

  const toggle=document.getElementById('ai-agent-toggle'),box=document.getElementById('ai-agent-box'),close=document.getElementById('ai-agent-close'),input=document.getElementById('ai-agent-input'),send=document.getElementById('ai-agent-send'),messages=document.getElementById('ai-agent-messages');
  if(toggle&&box){
    const reply=q=>{
      q=q.toLowerCase();
      if(q.includes('skill'))return 'Farman works with Java, C++, OOP, MySQL, JDBC, Java Swing, Git/GitHub, HTML, CSS and backend development.';
      if(q.includes('project'))return 'Farman has built a Java Swing Game Menu, Student Management System, and Calculator. You can view them in the Projects section.';
      if(q.includes('java'))return 'Java is one of Farman’s main programming skills, including OOP, Swing and backend development.';
      if(q.includes('mysql')||q.includes('jdbc'))return 'Farman works with MySQL and JDBC for database-connected Java applications.';
      if(q.includes('github'))return 'You can find Farman’s projects on GitHub from the Projects section or the Contact section.';
      if(q.includes('contact')||q.includes('email'))return 'You can contact Farman at Farmankorejo10@gmail.com.';
      if(q.includes('who')||q.includes('about')||q.includes('farman'))return 'Farman Ali Korejo is a Computer Systems Engineering student at MUET who enjoys building practical software projects.';
      return 'I can tell you about Farman’s skills, projects, Java, JDBC, MySQL, backend development, GitHub, or contact information.';
    };
    const add=(text,who)=>{const d=document.createElement('div');d.className='ai-msg '+who;d.textContent=text;messages.appendChild(d);messages.scrollTop=messages.scrollHeight};
    const ask=()=>{const q=input.value.trim();if(!q)return;add(q,'user');input.value='';setTimeout(()=>add(reply(q),'bot'),250)};
    toggle.onclick=()=>box.classList.toggle('ai-open');
    close.onclick=()=>box.classList.remove('ai-open');
    send.onclick=ask;
    input.addEventListener('keydown',e=>{if(e.key==='Enter')ask()});
  }
});