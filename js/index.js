console.log('URL PARAMS:', window.location.search);
// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Project data
const projects = {
  1: {
    title: 'Survey Form',
    subtitle: 'Interactive survey form design',
    img: './img/survey-form-snapshot.png',
    description: `
      <p>This project lets users submit survey responses with validation and 
      a clean design. Built with HTML, CSS, and JavaScript.</p>
    `,
    github: 'https://github.com/annah331/digital-wellness-survey',
    live: 'https://digital-wellness-survey05.netlify.app/',
  },
  2: {
    title: 'Personal Tax Calculator',
    subtitle: 'Calculate your income tax easily',
    img: './img/personal-tax-calculator-snapshot.png',
    description: `
      <p>A Next.js + TypeScript + Tailwind CSS app that calculates your personal 
      tax based on South African tax brackets. Shows tax owed, net income, and a 
      pie chart breakdown for easy visualization.</p>
    `,
    github: 'https://github.com/annah331/personal-tax-calculator',
    live: 'https://personal-tax-calculator-alpha.vercel.app',
  },
  3: {
    title: 'Technical Documentation Page',
    subtitle: 'Technical documentation page with clean layout',
    img: './img/technical-documentation-snapshot.png',
    description: `
      <p>Created a technical documentation page with a clean, responsive layout.
      Built with HTML and CSS.</p>
    `,
    github: 'https://github.com/annah331/html-technical-documentation-page',
    live: 'https://html-technical-documentation-page05.netlify.app/',
  },
  4: {
    title: 'Dashboard',
    subtitle: 'Dynamic data dashboard',
    img: './img/dashboard-snapshot.png',
    description: `
      <p>A dashboard interface showing key metrics with interactive charts,
      built with HTML, CSS, and JavaScript.</p>
    `,
    github: 'https://github.com/annah331/dashboard',
    live: 'https://dashboard0510.netlify.app/',
  },
  5: {
    title: 'Tenzies Game',
    subtitle: 'Fun dice game built in JavaScript',
    img: './img/portfolio-05.jpg',
    description: `
      <p>Recreated the classic Tenzies game with dice-rolling logic, state
      management, and a clean, responsive design.</p>
    `,
    github: 'https://github.com/annah331/Tenzies-Game-',
    live: 'https://tenzies-game05.netlify.app/',
  },
  6: {
    title: 'Assembly Endgame',
    subtitle: 'Small web game built with JavaScript',
    img: './img/portfolio-06.jpg',
    description: `
      <p>Built a simple interactive web game inspired by classic puzzles,
      focusing on user interactions and animations.</p>
    `,
    github: 'https://github.com/annah331/Assembly-Endgame',
    live: 'https://assembly-endgame05.netlify.app/',
  },
  7: {
    title: 'Personal Expense Tracker',
    subtitle: 'Track your income and expenses',
    img: './img/FinTracker-snapshot.png',
    description: `
      <p>A Next.js + TypeScript + Tailwind CSS app to manage personal finances. 
      Features a dashboard with summary cards, expense charts, transaction table, 
      and interactive sidebar navigation.</p>
    `,
    github: 'https://github.com/annah331/Personal-Expense-Tracker',
    live: 'https://personal-expense-tracker-rho-five.vercel.app',
  },
  8: {
    title: 'Cloudflare OpenAI API (Demo)',
    subtitle: 'Integration with OpenAI via Cloudflare Workers',
    img: './img/cloudflare-openai-api-snapshot.png',
    description: `
      <p>Attempted to connect a frontend web app to OpenAI using Cloudflare Workers.
      Demo currently shows frontend interface only due to API cost limitations.</p>
    `,
    github: 'https://github.com/annah331/Cloudflare-openai-api',
    live: 'https://cloudflare-openai-api.netlify.app/',
  },
};

console.log('URL PARAMS:', window.location.search);

// Read project id from URL
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const projectContent = document.getElementById('project-content');

  if (projects[Number(id)]) {
    const project = projects[Number(id)];
    projectContent.innerHTML = `
    <h1 class="section__title section__title--intro"><strong>${project.title}</strong></h1>
    <p class="section__subtitle section__subtitle--intro">${project.subtitle}</p>
    <img src="${project.img}" alt="${project.title}" class="intro__img" />
    <div class="portfolio-item-individual">
      ${project.description}
    </div>
    <p>
      <a href="${project.github}" target="_blank" class="btn">View on GitHub</a>
      <a href="${project.live}" target="_blank" class="btn">View on live</a>
    </p>
  `;
  } else {
    projectContent.innerHTML = '<p>Project not found.</p>';
  }
});

console.log('URL PARAMS:', window.location.search);
