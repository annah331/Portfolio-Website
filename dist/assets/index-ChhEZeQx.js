(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c="/assets/survey-form-snapshot-CiK06Zcb.png",l="/assets/personal-tax-calculator-snapshot-Cc_SGSsc.png",p="/assets/technical-documentation-snapshot-DR9Fb3Mg.png",d="/assets/dashboard-snapshot-JzSRb0g3.png",u="/assets/tenzies-snapshot-Bez-zVny.png",h="/assets/assembly-snapshot-BAmHOecd.png",m="/assets/FinTracker-snapshot-bMqX7wwt.png",g="/assets/cloudflare-openai-api-snapshot-7Y872RRX.png";console.log("URL PARAMS:",window.location.search);const b=document.querySelector(".nav-toggle"),f=document.querySelectorAll(".nav__link");b.addEventListener("click",()=>{document.body.classList.toggle("nav-open")});f.forEach(s=>{s.addEventListener("click",()=>{document.body.classList.remove("nav-open")})});const r={1:{title:"Survey Form",subtitle:"Interactive survey form design",img:c,description:`
      <p>This project lets users submit survey responses with validation and 
      a clean design. Built with HTML, CSS, and JavaScript.</p>
    `,github:"https://github.com/annah331/digital-wellness-survey",live:"https://digital-wellness-survey05.netlify.app/"},2:{title:"Personal Tax Calculator",subtitle:"Calculate your income tax easily",img:l,description:`
      <p>A Next.js + TypeScript + Tailwind CSS app that calculates your personal 
      tax based on South African tax brackets. Shows tax owed, net income, and a 
      pie chart breakdown for easy visualization.</p>
    `,github:"https://github.com/annah331/personal-tax-calculator",live:"https://personal-tax-calculator-alpha.vercel.app"},3:{title:"Technical Documentation Page",subtitle:"Technical documentation page with clean layout",img:p,description:`
      <p>Created a technical documentation page with a clean, responsive layout.
      Built with HTML and CSS.</p>
    `,github:"https://github.com/annah331/html-technical-documentation-page",live:"https://html-technical-documentation-page05.netlify.app/"},4:{title:"Dashboard",subtitle:"Dynamic data dashboard",img:d,description:`
      <p>A dashboard interface showing key metrics with interactive charts,
      built with HTML, CSS, and JavaScript.</p>
    `,github:"https://github.com/annah331/dashboard",live:"https://dashboard0510.netlify.app/"},5:{title:"Tenzies Game",subtitle:"Fun dice game built in JavaScript",img:u,description:`
      <p>Recreated the classic Tenzies game with dice-rolling logic, state
      management, and a clean, responsive design.</p>
    `,github:"https://github.com/annah331/Tenzies-Game-",live:"https://tenzies-game05.netlify.app/"},6:{title:"Assembly Endgame",subtitle:"Small web game built with JavaScript",img:h,description:`
      <p>Built a simple interactive web game inspired by classic puzzles,
      focusing on user interactions and animations.</p>
    `,github:"https://github.com/annah331/Assembly-Endgame",live:"https://assembly-endgame05.netlify.app/"},7:{title:"Personal Expense Tracker",subtitle:"Track your income and expenses",img:m,description:`
      <p>A Next.js + TypeScript + Tailwind CSS app to manage personal finances. 
      Features a dashboard with summary cards, expense charts, transaction table, 
      and interactive sidebar navigation.</p>
    `,github:"https://github.com/annah331/Personal-Expense-Tracker",live:"https://personal-expense-tracker-rho-five.vercel.app"},8:{title:"Cloudflare OpenAI API (Demo)",subtitle:"Integration with OpenAI via Cloudflare Workers",img:g,description:`
      <p>Attempted to connect a frontend web app to OpenAI using Cloudflare Workers.
      Demo currently shows frontend interface only due to API cost limitations.</p>
    `,github:"https://github.com/annah331/Cloudflare-openai-api",live:"https://cloudflare-openai-api.netlify.app/"}};console.log("URL PARAMS:",window.location.search);document.addEventListener("DOMContentLoaded",()=>{const n=new URLSearchParams(window.location.search).get("id"),i=document.getElementById("project-content");if(r[Number(n)]){const a=r[Number(n)];i.innerHTML=`
    <h1 class="section__title section__title--intro"><strong>${a.title}</strong></h1>
    <p class="section__subtitle section__subtitle--intro">${a.subtitle}</p>
    <img src="${a.img}" alt="${a.title}" class="intro__img" />
    <div class="portfolio-item-individual">
      ${a.description}
    </div>
    <p>
      <a href="${a.github}" target="_blank" class="btn">View on GitHub</a>
      <a href="${a.live}" target="_blank" class="btn">View on live</a>
    </p>
  `}else i.innerHTML="<p>Project not found.</p>"});console.log("URL PARAMS:",window.location.search);
