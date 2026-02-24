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
    img: './img/portfolio-01.jpg',
    description: `
      <p>This project lets users submit survey responses with validation and 
      a clean design. Built with HTML, CSS, and JavaScript.</p>
    `,
    github: 'https://github.com/annah331/digital-wellness-survey',
    netlify: 'https://digital-wellness-survey05.netlify.app/',
  },
  2: {
    title: 'Counter app',
    subtitle: 'Clean and responsive application',
    img: './img/portfolio-02.jpg',
    description: `
      <p>Designed a simple counter application with increment, decrement, and reset functionality.
      Built with HTML, CSS, and JavaScript.</p>
    `,
    github: 'https://github.com/annah331/Counter-app',
    netlify: 'https://counter-app05.netlify.app',
  },
  3: {
    title: 'Technical Documentation Page',
    subtitle: 'Technical documentation page with clean layout',
    img: './img/portfolio-03.jpg',
    description: `
      <p>Created a technical documentation page with a clean, responsive layout.
      Built with HTML and CSS.</p>
    `,
    github: 'https://github.com/annah331/html-technical-doumentation-page',
    netlify: 'https://html-technical-documentation-page05.netlify.app/',
  },
  4: {
    title: 'Dashboard',
    subtitle: 'Dynamic data dashboard',
    img: './img/portfolio-04.jpg',
    description: `
      <p>A dashboard interface showing key metrics with interactive charts,
      built with HTML, CSS, and JavaScript.</p>
    `,
    github: 'https://github.com/annah331/dashboard',
    netlify: 'https://dashboard0510.netlify.app/',
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
    netlify: 'https://tenzies-game05.netlify.app/',
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
    netlify: 'https://assembly-endgame05.netlify.app/',
  },
  7: {
    title: 'Product Card',
    subtitle: 'Interactive product display',
    img: './img/portfolio-07.jpg',
    description: `
      <p>Showcases a product with price, image, and description. Fully responsive
      design and hover interactions built with HTML, CSS, and JS.</p>
    `,
    github: 'https://github.com/annah331/product-card',
    netlify: 'https://product-card05.netlify.app/',
  },
  8: {
    title: 'Cloudflare OpenAI API (Demo)',
    subtitle: 'Integration with OpenAI via Cloudflare Workers',
    img: './img/portfolio-08.jpg',
    description: `
      <p>Attempted to connect a frontend web app to OpenAI using Cloudflare Workers.
      Demo currently shows frontend interface only due to API cost limitations.</p>
    `,
    github: 'https://github.com/annah331/Cloudflare-openai-api',
    netlify: 'https://cloudflare-openai-api.netlify.app/',
  },
};

// Read project id from URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const projectContent = document.getElementById('project-content');

if (projects[id]) {
  const project = projects[id];
  projectContent.innerHTML = `
    <h1 class="section__title section__title--intro"><strong>${project.title}</strong></h1>
    <p class="section__subtitle section__subtitle--intro">${project.subtitle}</p>
    <img src="${project.img}" alt="${project.title}" class="intro__img" />
    <div class="portfolio-item-individual">
      ${project.description}
    </div>
    <p>
      <a href="${project.github}" target="_blank" class="btn">View on GitHub</a>
      <a href="${project.netlify}" target="_blank" class="btn">View on Netlify</a>
    </p>
  `;
} else {
  projectContent.innerHTML = '<p>Project not found.</p>';
}
