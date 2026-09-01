// Project data
const projects = [
  
  {
  "image": "projectimages/hospital.png",
  "category": "MERN",
  "title": "Hospital Queue Management System",
  "description": "A real-time platform for hospitals to manage OPD queues — patients join queues and track live position updates while doctors and receptionists manage patient flow through role-specific dashboards.",
  "fullDescription": "A real-time platform for hospitals to manage OPD queues — patients join queues and track live position updates while doctors and receptionists manage patient flow through role-specific dashboards.\n\nKey Highlights:\n• Designed a microservices architecture with independently deployable Auth and Queue services, each with isolated databases (PostgreSQL + Prisma), deployed across five cloud platforms (Vercel, Render, Neon, Upstash, CloudAMQP).\n• Built a role-based authorization layer supporting four roles (Admin, Doctor, Receptionist, Patient) through a single reusable middleware with doctor-queue ownership validation.\n• Implemented real-time queue state synchronization using Socket.io room-scoped broadcasts, emitting live updates (patient joined, called, completed, skipped, cancelled) to all connected clients without polling.\n• Cut email-dependent API response times by decoupling transactional email delivery via RabbitMQ with retry policies and dead-letter queues, using Brevo's HTTP API as the transport layer.\n• Hardened authentication security with JWT access/refresh token rotation, CSRF protection, and a Redis-backed rate limiter (5 attempts/email+IP/min).\n\n🛠️ Tech Stack: React.js, Node.js, Express.js, PostgreSQL, Prisma, Redis, RabbitMQ, Socket.io",
  "sourceCode": "https://github.com/OmKashyapODCode/hospital-queue-management-showcase",
  "liveLink": "https://hospital-queue-management-eosin.vercel.app/login"
},
  {
  "image": "projectimages/pdf.png",
  "category": "AI",
  "title": "AI PDF Chat — RAG Platform",
  "description": "A full-stack RAG platform that lets users upload PDFs and ask natural-language questions, generating grounded Gemini responses from document-specific semantic context with page-level citations.",
  "fullDescription": "A full-stack Retrieval-Augmented Generation (RAG) platform that lets users upload PDFs and ask natural-language questions, generating grounded Gemini responses from document-specific semantic context with page-level citations.\n\nKey Highlights:\n• Designed an asynchronous PDF ingestion pipeline using RabbitMQ and a dedicated background worker to parse documents, split text into overlapping chunks, generate embeddings, and store vectors in Qdrant.\n• Implemented semantic retrieval by embedding user queries with Gemini and performing Qdrant nearest-neighbor search with document-level metadata filtering, ensuring responses are grounded only in the selected PDF.\n• Added structured document metadata including document ID, filename, page number, and unique chunk ID to enable precise source attribution and page-level citations.\n• Optimized vector ingestion using batched embedding and insertion of 50 chunks per batch, with RabbitMQ prefetching to process PDF jobs sequentially.\n• Integrated Cloudinary for cloud-based PDF storage and Clerk for authentication, with a responsive Next.js chat interface supporting Markdown-rendered AI responses.\n\n🛠️ Tech Stack: Next.js, React, Node.js, Express.js, LangChain, Google Gemini, Qdrant, RabbitMQ, Cloudinary, Clerk",
  "sourceCode": "https://github.com/OmKashyapODCode/Chat_with_PDF-",
  "liveLink": "https://chat-with-pdf-delta-cyan.vercel.app/"
},
  {
  "image": "projectimages/skin.png",
  "category": "AI",
  "title": "AI Skin Analyzer",
  "description": "A full-stack AI-powered healthcare app that lets users upload skin images or take live webcam captures to classify skin conditions, estimate skin tone and hydration levels, and receive personalized wellness reports as PDFs.",
  "fullDescription": "AI Skin Analyzer is a full-stack AI-powered healthcare application — a three-tier medical wellness platform that allows users to take live webcam captures or upload photos of their skin, run quality validation, classify skin conditions (such as Acne, Eczema, Rosacea), estimate skin tone and hydration levels, and receive dynamically generated daily routines and wellness reports exportable as PDFs.\n\nKey Highlights:\n• Skin disease prediction with confidence score analysis using TensorFlow deep learning models.\n• Skin tone and hydration assessment for personalized wellness recommendations.\n• Downloadable PDF wellness reports with scan history management.\n• Three-tier architecture: React frontend, Node.js server, and Python AI service with TensorFlow.\n• Live webcam capture and image upload with quality validation.\n\n🛠️ Tech Stack: React, Node.js, Python, TensorFlow, Vercel",
  "sourceCode": "https://github.com/OmKashyapODCode/AI-skin-analyzer",
  "liveLink": "https://ai-skin-analyzer-eight.vercel.app"
},
  {
  "image": "projectimages/pingme.png",
  "category": "MERN",
  "title": "PingMe — Language Exchange Chat App",
  "description": "A full-stack real-time language exchange platform for seamless global communication with instant messaging, group and 1-on-1 video calls, screen sharing, and emoji reactions.",
  "fullDescription": "PingMe – Connect Instantly, Speak Freely. A real-time language exchange platform designed for seamless global communication. Ping Me enables instant messaging, group and 1-on-1 video calls, screen sharing, and emoji reactions — all with secure authentication and beautiful, customizable UI themes.\n\nKey Highlights:\n• JWT Authentication with Signup, Login, and Logout flows.\n• User Onboarding with language, bio, and location setup.\n• Friend Request System for connecting with native speakers.\n• Real-time Chat powered by Stream.io for instant messaging.\n• Group and 1-on-1 video calls with screen sharing support.\n• Emoji reactions and customizable UI themes.\n• Secure authentication with beautiful, responsive design.\n\n🛠️ Tech Stack: React, Node.js, Express.js, MongoDB, Stream.io, Vercel",
  "sourceCode": "https://github.com/OmKashyapODCode/PingMe",
  "liveLink": "https://ping-me-gold.vercel.app"
},
  {
  "image": "projectimages/auth.png",
  "category": "MERN",
  "title": "MERN Authentication & Authorization System",
  "description": "A production-ready authentication system built with the MERN stack and Redis, featuring secure session management, refresh token rotation, role-based access control, and modern security practices.",
  "fullDescription": "This is a production-grade authentication and authorization system built using MongoDB, Express, React, Node.js, and Redis. It implements advanced security practices such as JWT-based authentication (access and refresh tokens), refresh token rotation, HTTP-only cookies, CSRF protection, and Redis-backed session management. The system supports email verification, OTP-based 2FA login, password reset flows, and role-based access control for user and admin routes. Designed to prevent replay attacks and token misuse, it ensures secure and scalable session handling similar to real-world production systems.",
  "sourceCode": "https://github.com/OmKashyapODCode/Authentication",
  "liveLink": "https://authentication-odcode.onrender.com/"
},
  {
  "image": "projectimages/bank.png",
  "category": "JAVA",
  "title": "Banking Management System (Java + JDBC)",
  "description": "A console-based Banking Management System built using Java and JDBC that performs essential banking operations with persistent storage using MySQL.",
  "fullDescription": "About\nBanking Management System is a Java-based console application using JDBC and MySQL that enables user registration, account management, balance checks, and basic banking transactions like deposits, withdrawals, and transfers, demonstrating core backend and database concepts.\n\nFeatures\nUser Registration & Login\nBank Account Creation\nView Account Balance\nDeposit Money\nWithdraw Money\nTransfer Funds Between Accounts\nSecure database interaction using JDBC\nModular and object-oriented design\n\n🛠️ Tech Stack\nLanguage: Java (JDK 8+)\nDatabase: MySQL\nConnectivity: JDBC\nIDE: IntelliJ IDEA / Eclipse / VS Code\nArchitecture: Console-based, OOP-driven",
  "sourceCode": "https://github.com/OmKashyapODCode/Banking-management-System",
  "liveLink": ""
},
{
  "image": "projectimages/IDEimage.png",
  "category": "MERN",
  "title": "Online Code Editor",
  "description": "A full-featured online code editor built using the MERN stack with multi-language support, real-time code execution, and secure user authentication.",
  "fullDescription": "About\nA full-featured online code editor built with the MERN stack that allows users to write, run, and manage code efficiently in a single platform. It supports multi-language execution using the Piston API and includes secure authentication and protected routes.\n\nFeatures\nUser Authentication & Authorization\nMulti-language Code Execution (via Piston API)\nCreate, Edit & Manage Projects\nReal-time Code Writing Experience\nSecure Route Protection\nFull-stack MERN Architecture\n\n🛠️ Tech Stack\nFrontend: React.js\nBackend: Node.js, Express.js\nDatabase: MongoDB\nAPI: Piston API (for code execution)\nAuthentication: JWT-based auth\nArchitecture: Full-stack MERN",
  "sourceCode": "https://github.com/OmKashyapODCode/Online-code-editor",
  "liveLink": "https://online-code-editor-amber.vercel.app"
},
{
  "image": "projectimages/meme.png",
  "category": "REACT",
  "title": "Random Meme Generator",
  "description": "A simple and interactive web app built with React and Tailwind CSS that fetches and displays random GIFs using the Giphy API.",
  "fullDescription": "About\nA simple and interactive web application built using React that allows users to generate and view random memes (GIFs) instantly. It integrates with the Giphy API to fetch dynamic content and provides a smooth user experience with responsive UI.\n\nFeatures\nGenerate Random Memes (GIFs)\nFetch Data from Giphy API\nOne-click Meme Refresh\nResponsive UI with Tailwind CSS\nEfficient API Handling with Async/Await\n\n🛠️ Tech Stack\nFrontend: React.js\nStyling: Tailwind CSS\nAPI: Giphy API\nArchitecture: Component-based React App",
  "sourceCode": "https://github.com/OmKashyapODCode/random-meme",
  "liveLink": ""
},
{
  "image": "projectimages/finDas.png",
  "category": "REACT",
  "title": "Finance Dashboard",
  "description": "A modern and interactive finance dashboard built with React and Tailwind CSS to track income, expenses, and financial insights.",
  "fullDescription": "About\nA modern and interactive finance dashboard built using React that helps users manage and visualize their financial data. It provides insights into income, expenses, and spending patterns through dynamic charts and a clean, responsive UI.\n\nFeatures\nDashboard Overview with balance, income, and expense summaries\nInteractive charts for cash flow and expense breakdown\nSmart insights for spending patterns and savings analysis\nAdd, delete, and manage transactions\nSearch, filter, and sort transactions\nRole-based access (Viewer/Admin)\nDark mode support with persistent settings\nResponsive UI with Tailwind CSS\nLocal storage persistence\n\n🛠️ Tech Stack\nFrontend: React.js\nStyling: Tailwind CSS\nCharts: Recharts\nArchitecture: Component-based React App with Context API",
  "sourceCode": "https://github.com/OmKashyapODCode/Finance-Dashboard",
  "liveLink": "https://finance-dashboard-odcode.netlify.app/"
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
        <div class="card-image-wrapper">
          <img src="${project.image}" alt="${project.title}">
          <span class="card-badge">${project.category}</span>
          <div class="card-overlay">
            ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="overlay-btn" onclick="event.stopPropagation()" title="Live Demo">&#9654;</a>` : ''}
            <a href="${project.sourceCode}" target="_blank" class="overlay-btn" onclick="event.stopPropagation()" title="Source Code">&#60;/&#62;</a>
          </div>
        </div>
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
  liveLink.href = project.liveLink || '#';
  sourceLink.href = project.sourceCode;
  if (!project.liveLink) {
    liveLink.style.display = 'none';
  } else {
    liveLink.style.display = 'inline-block';
  }
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
