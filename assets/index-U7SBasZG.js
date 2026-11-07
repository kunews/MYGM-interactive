import{S as F,W as m,l as Y,e as u,f as ee,p as te,i as se,b as ae,s as ne,a as j,u as z,c as re,r as ie,g as oe}from"./progress-htGak1qm.js";const r=document.getElementById("hub"),f=m.length,le=4,y=matchMedia("(prefers-reduced-motion: reduce)").matches,v=matchMedia("(max-width: 720px)"),ce=e=>{const t=new Image;return t.src=e,t.decode().catch(()=>{})},W="창간 79주년을 맞아 열린 고대신문 문예공모에 여러 대학의 학생들이 시 214편, 소설 25편, 희곡 10편, 문예평론 9편을 보내왔습니다. 네 부문에서 한 편씩 뽑힌 당선작을 지면에 실린 그대로, 그림과 소리와 함께 읽어 보세요.";function C(e){const t=oe(e.id);return!t||t.pct<.03?{pct:0,label:`${e.minutes}분`}:t.pct>=.97?{pct:1,label:"다 읽음"}:{pct:t.pct,label:`${Math.round(t.pct*100)}% 읽는 중`}}const de=(e,t)=>{const s=C(e);return`
  <li class="poster" ${t?'aria-hidden="true"':""}>
    <a href="${e.id}.html" class="poster__link" tabindex="${t?-1:0}" draggable="false">
      <span class="poster__img" data-media="${e.cover}"><span class="media-label">이미지 자리: ${e.cover}</span></span>
      <span class="poster__meta"><span>${e.genre}</span><span>${s.label}</span></span>
      <span class="poster__text">
        <span class="poster__title">${u(e.title)}</span>
        <span class="poster__by">${u(e.author)} · ${u(e.affiliation)}</span>
        <span class="poster__teaser">${u(e.teaser)}</span>
      </span>
      ${s.pct?`<span class="poster__progress" style="--pp:${s.pct}"></span>`:""}
    </a>
  </li>`};r.innerHTML=`
  <div class="hub-bg" aria-hidden="true">
    ${m.map(e=>`<div class="hub-bg__panel" data-media="${e.cover}"></div>`).join("")}
  </div>
  <header class="hub-head">
    <button type="button" class="circle hub-head__start" data-view aria-label="목록으로 보기" aria-pressed="false">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
    <a href="./" class="hub-head__brand">${Y("wordmark")}</a>
    <button type="button" class="circle hub-head__end" data-sound-toggle aria-label="효과음 끄기" aria-pressed="true"></button>
  </header>

  <main class="hub-main">
    <header class="hub-intro">
      <h1 class="hub-title"><span>고대신문</span> ${F.name} 당선작</h1>
      <button type="button" class="hub-about" aria-expanded="false" aria-controls="hub-lede">
        공모 소개<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="hub-lede" id="hub-lede">
        <p>${W}</p>
      </div>
    </header>
    <section class="strip" aria-label="당선작">
      <ul class="strip__track">${Array.from({length:le},(e,t)=>m.map(s=>de(s,t>0)).join("")).join("")}</ul>
    </section>
    <section class="list" hidden aria-label="당선작 목록">
      <ul>
        ${m.map(e=>`<li><a href="${e.id}.html">
            <span class="list__thumb" data-media="${e.cover}"></span>
            <span class="list__text"><small>${e.genre} 부문 당선작 · ${C(e).label}</small><strong>${u(e.title)}</strong><em>${u(e.author)} · ${u(e.affiliation)}</em></span>
          </a></li>`).join("")}
      </ul>
    </section>
    <div class="hub-actions">
      <a class="pill pill--primary hub-actions__open" href="${m[0].id}.html"><span class="slot"><span class="slot__text">작품 읽기</span></span></a>
    </div>
  </main>

  <section class="feed" aria-label="당선작">
    <div class="feed-hero">
      <span class="feed-hero__img" data-media="hub-cover" aria-hidden="true"></span>
      <div class="feed-hero__text">
        <p class="feed-hero__kicker">고대신문 창간 79주년 기념</p>
        <h2 class="feed-hero__title">문예공모<br />당선작</h2>
        <button type="button" class="hub-about" aria-expanded="false" aria-controls="feed-lede">
          공모 소개<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="hub-lede" id="feed-lede"><p>${W}</p></div>
      </div>
      <button type="button" class="feed-hero__cue" aria-label="당선작 보기">
        <span>당선작 ${f}편</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
      </button>
    </div>
    <ol class="feed-list">
      ${m.map((e,t)=>{const s=C(e);return`<li class="feed-item" data-k="${t}">
          <a href="${e.id}.html" class="feed-item__link">
            <span class="feed-item__img" data-media="${e.cover}">${s.pct?`<span class="feed-item__progress" style="--pp:${s.pct}"></span>`:""}</span>
            <span class="feed-item__body">
              <span class="feed-item__meta">${String(t+1).padStart(2,"0")} · ${e.genre}</span>
              <strong class="feed-item__title">${u(e.title)}</strong>
              <span class="feed-item__by">${u(e.author)}<br />${u(e.affiliation)}</span>
              <span class="feed-item__go">${s.pct===1?"다시 읽기":s.pct?"이어 읽기":"읽기"} · ${s.pct&&s.pct<1?s.label:`약 ${e.minutes}분`}</span>
            </span>
          </a>
        </li>`}).join("")}
    </ol>
  </section>

  <footer class="hub-foot">
    ${Y("emblem","hub-foot__emblem")}
    <p>${F.fullName} · ${F.issue} · 이미지와 음악은 AI로 만들었어요.</p>
  </footer>`;ee(r);const P=te({sans:r.textContent});se({ready:P});ae();ne(r);const ue='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z" class="f"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',pe='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z" class="f"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',E=r.querySelector("[data-sound-toggle]"),V=()=>{const e=j();E.innerHTML=e?ue:pe,E.setAttribute("aria-pressed",String(e)),E.setAttribute("aria-label",e?"효과음 끄기":"효과음 켜기")};V();E.addEventListener("click",()=>{const e=!j();try{localStorage.setItem("mungye:sound",e?"on":"off")}catch{}V(),z.toggle(e)});addEventListener("pointerdown",re,{once:!0});const g=r.querySelector(".strip__track"),b=[...g.children],$=b.length,O=r.querySelector(".hub-actions__open"),he=[...r.querySelectorAll(".hub-bg__panel")];let T="";function R(e,t="slot__text"){const s=document.createElement("span");return s.className=t,s.innerHTML='<span class="slot__title"></span><span class="slot__verb">읽기</span>',s.firstChild.textContent=`‘${e}’`,s}function me(e){if(e===T)return;const t=!T;T=e;const s=O.querySelector(".slot");if(t||y){s.replaceChildren(R(e));return}const i=[...s.children],c=R(e,"slot__text is-next");s.append(c);const a={duration:520,easing:"cubic-bezier(0.2, 0.7, 0.2, 1)",fill:"forwards"};i.forEach(d=>d.animate([{transform:getComputedStyle(d).transform==="none"?"translateY(0)":getComputedStyle(d).transform},{transform:"translateY(-110%)"}],a).finished.then(()=>d.remove())),c.animate([{transform:"translateY(110%)"},{transform:"translateY(0)"}],a).finished.then(()=>c.classList.remove("is-next"))}let n=0,l=0,p=0,k=0,M=-1,q=0;const J=(()=>{try{const e=sessionStorage.getItem("mungye:back");return sessionStorage.removeItem("mungye:back"),!!e}catch{return!1}})();try{q=Number(sessionStorage.getItem("mungye:hub"))||0}catch{}const K=(Math.round(q)%f+f)%f,I=(e,t)=>((e+t/2)%t+t)%t-t/2;function S(){const e=b[0].offsetWidth,t=parseFloat(getComputedStyle(g).columnGap)||16;if(n&&(q=l/n),n=e+t,l=p=q*n,X(),v.matches)return;const s=g.getBoundingClientRect();try{sessionStorage.setItem("mungye:slot",JSON.stringify({left:(innerWidth-e)/2,top:s.top,width:e,height:g.offsetHeight,vw:innerWidth,vh:innerHeight}))}catch{}}function X(){const e=$*n;let t=0,s=1/0;for(let a=0;a<$;a++){const d=I(a*n-l,e),h=Math.abs(d)/n,_=b[a];_.style.transform=`translate3d(${d}px,0,0)`,_.style.setProperty("--t",Math.max(0,1-h).toFixed(3)),_.style.setProperty("--o",(d/n).toFixed(3));const N=h<=1?1:Math.max(0,(1.6-h)/.6);_.style.opacity=N.toFixed(3),_.style.visibility=N===0?"hidden":"",h<s&&(s=h,t=a)}if(t!==M){M!==-1&&z.tick(),b[M]?.classList.remove("is-active"),b[t].classList.add("is-active"),M=t;const a=m[t%f];O.href=`${a.id}.html`,me(a.title)}const i=new Array(f).fill(1/0);for(let a=0;a<$;a++){const d=I(a*n-l,e);Math.abs(d)<Math.abs(i[a%f])&&(i[a%f]=d)}const c=innerWidth;he.forEach((a,d)=>{const h=i[d]/n*c;a.style.transform=`translate3d(${h.toFixed(1)}px,0,0)`,a.style.visibility=Math.abs(h)>=c?"hidden":""})}function Q(){const e=p-l;if(l=Math.abs(e)<.3?p:l+e*(y?1:.12),X(),k=l===p?0:requestAnimationFrame(Q),!k)try{sessionStorage.setItem("mungye:hub",String(l/n))}catch{}}function A(e){p=e,k||(k=requestAnimationFrame(Q))}const D=e=>A((Math.round(p/n)+e)*n);r.querySelector(".strip").addEventListener("wheel",e=>{e.preventDefault();const t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;A(p+t*(e.deltaMode===1?30:1))},{passive:!1});let o=null;g.addEventListener("pointerdown",e=>{e.button===0&&(o={x0:e.clientX,t0:l,lastX:e.clientX,lastT:performance.now(),v:0,moved:!1,id:e.pointerId})});addEventListener("pointermove",e=>{if(!o||e.pointerId!==o.id)return;const t=performance.now();o.v=(e.clientX-o.lastX)/Math.max(1,t-o.lastT),o.lastX=e.clientX,o.lastT=t,Math.abs(e.clientX-o.x0)>5&&(o.moved=!0),l=p=o.t0-(e.clientX-o.x0),X()});addEventListener("pointerup",()=>{if(!o)return;const{v:e,moved:t}=o;o=null,t&&(A(p-e*260),g.addEventListener("click",s=>s.preventDefault(),{capture:!0,once:!0}))});b.forEach((e,t)=>e.addEventListener("click",s=>{const i=I(t*n-l,$*n);Math.abs(i)<n*.25||(s.preventDefault(),A(l+i))}));addEventListener("keydown",e=>{!r.querySelector(".list").hidden||v.matches||(e.key==="ArrowRight"&&D(1),e.key==="ArrowLeft"&&D(-1))});addEventListener("resize",S);r.querySelectorAll(".hub-about").forEach(e=>{const t=r.querySelector(`#${e.getAttribute("aria-controls")}`);e.addEventListener("click",()=>{const s=e.getAttribute("aria-expanded")!=="true";e.setAttribute("aria-expanded",String(s)),t.classList.toggle("is-open",s)}),t.addEventListener("transitionend",s=>s.propertyName==="grid-template-rows"&&S())});const L=r.querySelector("[data-view]");L.addEventListener("click",()=>{const e=r.querySelector(".list"),t=e.hidden,s=()=>{e.hidden=!t,r.querySelector(".strip").hidden=t,O.hidden=t,L.setAttribute("aria-pressed",String(t)),L.setAttribute("aria-label",t?"카드로 보기":"목록으로 보기"),L.innerHTML=t?'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="4" width="10" height="16" rx="1.5"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M5 12h14M5 17h14"/></svg>',t||S()};document.startViewTransition&&!y?document.startViewTransition(s):s()});S();if(J){r.classList.add("is-back");const e=s=>{let i=!1;const c=()=>!i&&(i=!0,s());requestAnimationFrame(()=>requestAnimationFrame(c)),setTimeout(c,80)},t=v.matches?Promise.race([ie(m[K].cover).then(s=>s&&ce(s)),new Promise(s=>setTimeout(s,400))]):Promise.resolve();Promise.all([P,t]).then(()=>e(()=>r.classList.add("is-back-in")))}else y||(g.classList.add("is-intro"),b.forEach((e,t)=>{const s=Math.abs(Math.round(I(t*n-l,$*n)/n));e.querySelector(".poster__link").style.setProperty("--intro",`${.15+s*.1}s`)}),P.then(()=>{let e=!1;const t=()=>!e&&(e=!0,g.classList.remove("is-intro"));requestAnimationFrame(()=>requestAnimationFrame(t)),setTimeout(t,80),setTimeout(()=>b.forEach(s=>s.querySelector(".poster__link").style.removeProperty("--intro")),1700)}));const w=r.querySelector(".feed"),x=[...w.querySelectorAll(".feed-item")],B=w.querySelector(".feed-hero__img"),fe=w.querySelector(".feed-hero__text");x.forEach(e=>e.querySelector("a").addEventListener("click",()=>{const t=e.querySelector(".feed-item__img").getBoundingClientRect();try{sessionStorage.setItem("mungye:slot",JSON.stringify({left:t.left,top:t.top,width:t.width,height:t.height,vw:innerWidth,vh:innerHeight})),sessionStorage.setItem("mungye:feed-y",String(scrollY))}catch{}}));w.querySelector(".feed-hero__cue").addEventListener("click",()=>x[0].scrollIntoView({behavior:y?"auto":"smooth",block:"center"}));const G=new IntersectionObserver(e=>e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-in"),G.unobserve(t.target))}),{rootMargin:"0px 0px -12% 0px"});let H=!1;function U(){if(H=!1,!v.matches)return;const e=B.parentElement.offsetHeight||1,t=Math.min(1,Math.max(0,scrollY/e));B.style.transform=`translate3d(0, ${(scrollY*.35).toFixed(1)}px, 0) scale(${(1+t*.06).toFixed(3)})`,B.style.opacity=(1-t*.7).toFixed(3),fe.style.transform=`translate3d(0, ${(scrollY*-.12).toFixed(1)}px, 0)`}addEventListener("scroll",()=>!H&&(H=!0,requestAnimationFrame(U)),{passive:!0});function Z(){r.classList.toggle("is-feed",v.matches),v.matches&&(U(),x.forEach(e=>y?e.classList.add("is-in"):G.observe(e)))}v.addEventListener("change",()=>{Z(),S()});if(v.matches&&J){history.scrollRestoration="manual";let e=0;try{e=Number(sessionStorage.getItem("mungye:feed-y"))||0}catch{}scrollTo(0,e);const t=K;x.forEach((c,a)=>{c.classList.add("is-in"),c.style.setProperty("--dir",a<t?-1:1),c.style.setProperty("--dd",Math.abs(a-t))});const s=x[t];s?.classList.add("is-active");const i=s?.querySelector(".feed-item__img");i&&(i.style.backgroundImage=`url("media/img/${i.dataset.media}.webp")`)}Z();
