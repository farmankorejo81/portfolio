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
  const toggle=document.getElementById('ai-agent-toggle'),box=document.getElementById('ai-agent-box'),close=document.getElementById('ai-agent-close'),input=document.getElementById('ai-agent-input'),send=document.getElementById('ai-agent-send'),messages=document.getElementById('ai-agent-messages');
  if(toggle&&box){const reply=q=>{q=q.toLowerCase();if(q.includes('skill'))return 'Farman works with Java, C++, OOP, MySQL, JDBC, Java Swing, Git/GitHub, HTML, CSS and backend development.';if(q.includes('project'))return 'Farman has built a Java Swing Game Menu, Student Management System, and Calculator. You can view them in the Projects section.';if(q.includes('java'))return 'Java is one of Farman’s main programming skills, including OOP, Swing and backend development.';if(q.includes('mysql')||q.includes('jdbc'))return 'Farman works with MySQL and JDBC for database-connected Java applications.';if(q.includes('github'))return 'You can find Farman’s projects on GitHub from the Projects section or the Contact section.';if(q.includes('contact')||q.includes('email'))return 'You can contact Farman at Farmankorejo10@gmail.com.';if(q.includes('who')||q.includes('about')||q.includes('farman'))return 'Farman Ali Korejo is a Computer Systems Engineering student at MUET who enjoys building practical software projects.';return 'I can tell you about Farman’s skills, projects, Java, JDBC, MySQL, backend development, GitHub, or contact information.'};const add=(text,who)=>{const d=document.createElement('div');d.className='ai-msg '+who;d.textContent=text;messages.appendChild(d);messages.scrollTop=messages.scrollHeight};const ask=()=>{const q=input.value.trim();if(!q)return;add(q,'user');input.value='';setTimeout(()=>add(reply(q),'bot'),250)};toggle.onclick=()=>box.classList.toggle('ai-open');close.onclick=()=>box.classList.remove('ai-open');send.onclick=ask;input.addEventListener('keydown',e=>{if(e.key==='Enter')ask()})}
});