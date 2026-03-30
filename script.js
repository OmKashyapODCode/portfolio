// Project data
const projects = [
  
  {
    image: "projectimages/auth.png",
    category: "Mern",
    "title": "Authentication System",
    "description": "A production-grade authentication and authorization system built using MongoDB, Express, React, Node.js, Redis with secure session handling, role-based access control, and multiple authentication flows. Designed with a strong focus on security, scalability, and real-world authentication patterns.",
    "fullDescription": "A production-grade authentication and authorization system built using MongoDB, Express, React, Node.js, Redis with secure session handling, role-based access control, and multiple authentication flows. Designed with a strong focus on security, scalability, and real-world authentication patterns.",
    sourceCode:"https://github.com/OmKashyapODCode/Authentication",
    liveLink: "https://authentication-odcode.onrender.com/"
  },
  {
  "image": "projectimages/bank.png",
  "category": "Java",
  "title": "Banking Management System (Java + JDBC)",
  "description": "A console-based Banking Management System built using Java and JDBC that performs essential banking operations with persistent storage using MySQL.",
  "fullDescription": "About\nBanking Management System is a Java-based console application using JDBC and MySQL that enables user registration, account management, balance checks, and basic banking transactions like deposits, withdrawals, and transfers, demonstrating core backend and database concepts.\n\nFeatures\nUser Registration & Login\nBank Account Creation\nView Account Balance\nDeposit Money\nWithdraw Money\nTransfer Funds Between Accounts\nSecure database interaction using JDBC\nModular and object-oriented design\n\n🛠️ Tech Stack\nLanguage: Java (JDK 8+)\nDatabase: MySQL\nConnectivity: JDBC\nIDE: IntelliJ IDEA / Eclipse / VS Code\nArchitecture: Console-based, OOP-driven",
  "sourceCode": "https://github.com/OmKashyapODCode/Banking-management-System",
  "liveLink": ""
},
{
  "image": "projectimages/IDEimage.png",
  "category": "Mern",
  "title": "Online Code Editor",
  "description": "A full-featured online code editor built using the MERN stack with multi-language support, real-time code execution, and secure user authentication.",
  "fullDescription": "About\nA full-featured online code editor built with the MERN stack that allows users to write, run, and manage code efficiently in a single platform. It supports multi-language execution using the Piston API and includes secure authentication and protected routes.\n\nFeatures\nUser Authentication & Authorization\nMulti-language Code Execution (via Piston API)\nCreate, Edit & Manage Projects\nReal-time Code Writing Experience\nSecure Route Protection\nFull-stack MERN Architecture\n\n🛠️ Tech Stack\nFrontend: React.js\nBackend: Node.js, Express.js\nDatabase: MongoDB\nAPI: Piston API (for code execution)\nAuthentication: JWT-based auth\nArchitecture: Full-stack MERN",
  "sourceCode": "https://github.com/OmKashyapODCode/Online-code-editor",
  "liveLink": "https://online-code-editor-amber.vercel.app"
},
{
  "image": "projectimages/meme.png",
  "category": "React",
  "title": "Random Meme Generator",
  "description": "A simple and interactive web app built with React and Tailwind CSS that fetches and displays random GIFs using the Giphy API.",
  "fullDescription": "About\nA simple and interactive web application built using React that allows users to generate and view random memes (GIFs) instantly. It integrates with the Giphy API to fetch dynamic content and provides a smooth user experience with responsive UI.\n\nFeatures\nGenerate Random Memes (GIFs)\nFetch Data from Giphy API\nOne-click Meme Refresh\nResponsive UI with Tailwind CSS\nEfficient API Handling with Async/Await\n\n🛠️ Tech Stack\nFrontend: React.js\nStyling: Tailwind CSS\nAPI: Giphy API\nArchitecture: Component-based React App",
  "sourceCode": "https://github.com/OmKashyapODCode/random-meme",
  "liveLink": ""
}

];

// DOM elements
const projectGrid = document.getElementById('project-grid');
const modal = document.getElementById('project-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalDetails = document.getElementById('modal-details');
const liveLink = document.getElementById('live-link');
const sourceLink = document.getElementById('source-link');
const closeBtn = document.getElementById('close-modal');

// Render projects
function renderProjects(filter = 'all') {
  projectGrid.innerHTML = '';
  projects.forEach(project => {
    if (filter === 'all' || project.category === filter) {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-category', project.category);
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      `;
      card.addEventListener('click', () => openModal(project));
      projectGrid.appendChild(card);
    }
  });
}

// Modal functionality
function openModal(project) {
  modal.style.display = 'flex';
  modalImage.src = project.image;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalDetails.textContent = project.fullDescription;
  liveLink.href = project.liveLink;
  sourceLink.href = project.sourceCode;
}
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

// Filter buttons
document.querySelectorAll('.filter-buttons .btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-buttons .btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderProjects(this.getAttribute('data-filter'));
  });
});

// Initial render
renderProjects();

// Tab functionality
function opentab( tabname) {
  let tablinks = document.getElementsByClassName("tab-links");
  let tabcontents = document.getElementsByClassName("tab-contents");

  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Navigation menu functionality

const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');
const closeBtn2 = document.getElementById('close-btn');

menuBtn.onclick = () => {
  navList.classList.add('open');
  menuBtn.classList.add('hide');
}

closeBtn2.onclick = () => {
  navList.classList.remove('open');
  menuBtn.classList.remove('hide');
}
