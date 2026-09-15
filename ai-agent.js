document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');

  const nav = document.querySelector('.nav-links');
  const topbar = document.querySelector('.topbar');
  if (nav && topbar && !topbar.querySelector('.nav-toggle')) {
    const menuBtn = document.createElement('button');
    menuBtn.className = 'nav-toggle';
    menuBtn.type = 'button';
    menuBtn.setAttribute('aria-label', 'Open menu');
    menuBtn.innerHTML = '<span></span><span></span><span></span>';
    topbar.appendChild(menuBtn);
    menuBtn.addEventListener('click', () => nav.classList.toggle('is-open'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('is-open')));
  }

  const heroTitle = document.querySelector('.hero-role-title');
  if (heroTitle) {
    heroTitle.innerHTML = `<span class="farm-role-fixed"><span class="farm-role-item active"><span>Java Specialist</span><span>Spring Boot &amp; MySQL</span></span><span class="farm-role-item"><span>Backend</span><span>Developer</span></span><span class="farm-role-item"><span>Server-Side</span><span>Developer</span></span></span>`;
    const style = document.createElement('style');
    style.textContent = `.hero-role-title{overflow:hidden!important;line-height:1!important;margin:0!important;height:3.6em!important;max-width:100%!important}.farm-role-fixed{display:block;position:relative;width:100%;height:3.6em;overflow:hidden}.farm-role-item{position:absolute;inset:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;opacity:0;visibility:hidden;transform:translateY(12px);transition:opacity .4s ease,transform .4s ease,visibility 0s linear .4s;font-family:Poppins,sans-serif;font-size:clamp(1.7rem,2.7vw,3rem);line-height:1.05;letter-spacing:-.04em}.farm-role-item.active{opacity:1;visibility:visible;transform:none;transition:opacity .4s ease,transform .4s ease}.farm-role-item>span{display:block;white-space:normal;max-width:100%}.farm-role-item>span:last-child{background:linear-gradient(90deg,#9f6bff,#c9a1ff,#9f6bff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.farm-role-item:first-child>span:last-child{font-size:.82em;margin-top:.08em}@media(max-width:680px){.hero-role-title{height:4.4em!important;width:100%!important;text-align:center!important;font-size:1px!important}.farm-role-fixed{height:4.4em!important;width:100%!important}.farm-role-item{height:4.4em!important;width:100%!important;align-items:center!important;justify-content:center!important;text-align:center!important;font-size:clamp(1.05rem,6.2vw,1.55rem)!important;line-height:1.15!important;letter-spacing:-.025em!important}.farm-role-item>span{white-space:normal!important;width:100%!important;text-align:center!important}.farm-role-item:first-child>span:last-child{font-size:.78em!important}}`;
    document.head.appendChild(style);
    const items = [...heroTitle.querySelectorAll('.farm-role-item')];
    let i = 0;
    setInterval(() => { items[i].classList.remove('active'); i = (i + 1) % items.length; items[i].classList.add('active'); }, 2600);
  }

  const contact = document.getElementById('contact');
  if (contact) {
    const grid = contact.querySelector('.contact-grid');
    const col = contact.querySelector('.contact-col');
    if (grid && col && !grid.querySelector('.farm-message-col')) {
      const msgCol = document.createElement('div');
      msgCol.className = 'contact-col reveal farm-message-col';
      msgCol.innerHTML = `<form class="contact-form farm-contact-form"><div class="farm-message-title">Message</div><input id="farm-name" name="name" type="text" placeholder="Your Name" autocomplete="name" required><input id="farm-email" name="email" type="email" placeholder="Your Email" autocomplete="email" required><input id="farm-subject" name="subject" type="text" placeholder="Subject" required><textarea id="farm-message" name="message" rows="6" placeholder="Your Message" required></textarea><button class="contact-submit" type="submit"><span>Send Message</span></button></form>`;
      const form = msgCol.querySelector('form');
      form.addEventListener('submit', e => {
        e.preventDefault();
        const name = form.querySelector('[name=name]').value.trim();
        const email = form.querySelector('[name=email]').value.trim();
        const subject = form.querySelector('[name=subject]').value.trim() || 'Portfolio Contact';
        const message = form.querySelector('[name=message]').value.trim();
        window.location.href = `mailto:Farmankorejo10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      });
      grid.appendChild(msgCol);
    }
    const emailLink = [...contact.querySelectorAll('a')].find(a => a.href.startsWith('mailto:'));
    if (emailLink) {
      emailLink.href = 'mailto:Farmankorejo10@gmail.com';
      const v = emailLink.querySelector('.contact-value');
      if (v) v.textContent = 'Farmankorejo10@gmail.com';
    }
  }

  const projectImages = [{match:'Game Menu',src:'game-menu.svg',alt:'Game Menu Java Swing project preview'},{match:'Student Management System',src:'student-management.svg',alt:'Student Management System project preview'},{match:'Calculator',src:'calculator.svg',alt:'Calculator Java project preview'}];
  document.querySelectorAll('.project-card').forEach(card => {
    const title = card.querySelector('.project-title'); const wrap = card.querySelector('.project-image-wrap');
    if (!title || !wrap) return;
    const item = projectImages.find(x => title.textContent.includes(x.match));
    if (item) wrap.innerHTML = `<img class="farm-project-image" src="${item.src}" alt="${item.alt}" loading="lazy">`;
  });
  const projectStyle = document.createElement('style'); projectStyle.textContent = '.farm-project-image{width:100%;height:100%;display:block;object-fit:cover;border-radius:10px}'; document.head.appendChild(projectStyle);

  const reviewStyle = document.createElement('style');
  reviewStyle.textContent = `@media(max-width:680px){.test-marquee{width:100%!important;overflow:hidden!important;padding:0!important}.test-marquee-track{display:flex!important;gap:0!important;width:100%!important;animation:none!important;transition:transform .35s ease!important}.test-card{width:100%!important;min-width:100%!important;max-width:100%!important;flex:0 0 100%!important;box-sizing:border-box!important;padding:26px 22px!important}.test-avatar{width:72px!important;height:72px!important;object-fit:cover!important;display:block!important;margin:0 auto!important}.test-text{font-size:12px!important;line-height:1.75!important;overflow-wrap:anywhere!important}}`; document.head.appendChild(reviewStyle);
  const marquee = document.querySelector('.test-marquee'); const track = document.querySelector('.test-marquee-track');
  if (marquee && track) {
    const cards = [...track.querySelectorAll('.test-card')]; let reviewIndex = 0, startX = 0, currentX = 0, dragging = false;
    const applyReview = () => { if (!cards.length) return; if (window.innerWidth <= 680) { track.style.animation='none'; track.style.width=`${cards.length*100}%`; cards.forEach(c=>{c.style.width=`${100/cards.length}%`;c.style.minWidth=`${100/cards.length}%`;c.style.flex=`0 0 ${100/cards.length}%`}); track.style.transform=`translate3d(-${reviewIndex*(100/cards.length)}%,0,0)`; } else {track.style.transform='';track.style.width='max-content';cards.forEach(c=>{c.style.width='';c.style.minWidth='';c.style.flex=''})} };
    const nextReview=()=>{reviewIndex=(reviewIndex+1)%cards.length;applyReview()}; const prevReview=()=>{reviewIndex=(reviewIndex-1+cards.length)%cards.length;applyReview()};
    marquee.addEventListener('touchstart',e=>{if(window.innerWidth>680)return;dragging=true;startX=currentX=e.touches[0].clientX;track.style.transition='none'},{passive:true});
    marquee.addEventListener('touchmove',e=>{if(dragging)currentX=e.touches[0].clientX},{passive:true});
    marquee.addEventListener('touchend',()=>{if(!dragging)return;dragging=false;track.style.transition='transform .35s ease';const dx=currentX-startX;if(Math.abs(dx)>45)dx<0?nextReview():prevReview();else applyReview()});
    window.addEventListener('resize',applyReview); applyReview();
  }

  let toggle=document.getElementById('ai-agent-toggle'), box=document.getElementById('ai-agent-box');
  if(!toggle){toggle=document.createElement('button');toggle.id='ai-agent-toggle';toggle.type='button';toggle.setAttribute('aria-label','Open AI Agent');toggle.textContent='AI';document.body.appendChild(toggle)}
  if(!box){box=document.createElement('div');box.id='ai-agent-box';box.innerHTML=`<div class="ai-head"><div><strong>Farman AI Agent</strong><small>Portfolio Assistant</small></div><button class="ai-close" type="button" aria-label="Close">×</button></div><div class="ai-msgs"><div class="ai-welcome">Hi! I'm Farman's portfolio assistant. Ask me about skills, projects, Java, C++, MySQL, or contact details.</div></div><div class="ai-input-row"><input class="ai-input" type="text" placeholder="Ask something..." autocomplete="off"><button class="ai-send" type="button">Send</button></div>`;document.body.appendChild(box)}
  const input=box.querySelector('.ai-input'),send=box.querySelector('.ai-send'),close=box.querySelector('.ai-close'),msgs=box.querySelector('.ai-msgs');
  if(input&&send&&close&&msgs){const answers={skills:'Farman works with Java, C++, OOP, JDBC, MySQL, SQL, Git, GitHub, HTML and CSS.',projects:'Farman has built a Java Swing Game Menu, a Student Management System using JDBC/MySQL, and a Java Calculator.',java:"Java is one of Farman's main programming skills, including Swing GUI, OOP and JDBC.",mysql:'Farman uses MySQL and JDBC for database-driven applications and SQL work.',cpp:'Farman uses C++ for programming, problem solving and object-oriented programming.',jdbc:'Farman uses JDBC to connect Java applications with MySQL databases.',contact:'You can contact Farman at Farmankorejo10@gmail.com.'};const reply=()=>{const q=input.value.trim();if(!q)return;const lower=q.toLowerCase();const key=Object.keys(answers).find(k=>lower.includes(k));const u=document.createElement('div');u.className='ai-msg user';u.textContent=q;const b=document.createElement('div');b.className='ai-msg bot';b.textContent=key?answers[key]:"I can help with Farman's skills, projects, Java, C++, MySQL, JDBC, or contact information.";msgs.append(u,b);msgs.scrollTop=msgs.scrollHeight;input.value=''};if(!toggle.dataset.aiReady){toggle.dataset.aiReady='1';toggle.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();box.classList.toggle('ai-open');if(box.classList.contains('ai-open'))setTimeout(()=>input.focus(),120)})}if(!close.dataset.aiReady){close.dataset.aiReady='1';close.addEventListener('click',e=>{e.preventDefault();box.classList.remove('ai-open')})}if(!send.dataset.aiReady){send.dataset.aiReady='1';send.addEventListener('click',reply)}if(!input.dataset.aiReady){input.dataset.aiReady='1';input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();reply()}})}}
});