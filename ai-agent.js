document.addEventListener('DOMContentLoaded',()=>{
  // Three-role hero animation
  const heroLabel=document.querySelector('.hero-right .hero-label');
  const heroTitle=document.querySelector('.hero-role-title');
  if(heroLabel&&heroTitle){
    heroLabel.textContent='Computer Systems Engineer';
    heroTitle.innerHTML=`<span class="farm-role-viewport"><span class="farm-role-track"><span class="farm-role-item">Backend Developer</span><span class="farm-role-item">Server-Side Developer</span><span class="farm-role-item farm-role-java">Java Specialist | Spring Boot &amp; MySQL</span></span></span>`;

    const style=document.createElement('style');
    style.textContent=`
      .farm-role-viewport{display:block;overflow:hidden;height:1.05em;line-height:1.05em;}
      .farm-role-track{display:flex;flex-direction:column;transform:translateY(0);transition:transform .7s cubic-bezier(.65,0,.35,1);}
      .farm-role-item{display:block;height:1.05em;line-height:1.05em;white-space:nowrap;}
      .farm-role-java{background:linear-gradient(90deg,#9f6bff,#c9a1ff,#9f6bff);-webkit-background-clip:text;background-clip:text;color:transparent;}
      @media(max-width:680px){.farm-role-item{white-space:normal;height:auto;min-height:1.05em;}.farm-role-viewport{height:2.15em;}}
    `;
    document.head.appendChild(style);

    const track=heroTitle.querySelector('.farm-role-track');
    const items=heroTitle.querySelectorAll('.farm-role-item');
    let index=0;
    setInterval(()=>{
      index=(index+1)%items.length;
      track.style.transform=`translateY(-${index*1.05}em)`;
    },2500);
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