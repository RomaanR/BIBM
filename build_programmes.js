const fs = require("fs");

const applyUrl = "https://my.bristolinstitute.edu.lk/applicationform.php";

const programmes = [
  {
    title: "MBA - Master of Business Administration",
    slug: "programme-mba.html",
    category: "postgraduate",
    level: "Postgraduate",
    partner: "UWE Bristol",
    duration: "12 months",
    field: "Business and Management",
    description:
      "A one-year postgraduate business programme designed to help future leaders navigate contemporary business challenges through strategy, responsible leadership, operations, and applied research.",
    overview:
      "The MBA is designed to equip future leaders with the skills and knowledge to navigate the rapidly evolving global business landscape. It focuses on contemporary business challenges, strategic leadership, responsible management, and sustainable value creation.",
    requirements: [
      "A bachelor's degree in any discipline or an equivalent qualification.",
      "Demonstration of a good standard of English proficiency.",
      "Applicants with significant work experience and other qualifications may be considered case by case.",
    ],
    modules: [
      "Customer and International Markets",
      "Leadership, Complexity, and Change",
      "Systems, Structures, and Operations",
      "Managing People in a Global Context",
      "Professional and Academic Development",
      "Strategy and Implementation",
      "Digital Business Information Systems",
      "Financial Decision Making",
      "Dissertation",
    ],
    outcomes: [
      "Management and leadership progression",
      "Strategic business decision-making",
      "Global business and market awareness",
    ],
    keywords: "mba master business administration uwe bristol postgraduate leadership management",
  },
  {
    title: "LLB - Bachelor's in Law",
    slug: "programme-llb-law.html",
    category: "undergraduate",
    level: "Undergraduate",
    partner: "UWE Bristol",
    duration: "36 months",
    field: "Law",
    description:
      "A practical law pathway covering core legal foundations, commercial law, cyber law, mediation, human rights, and applied legal reasoning.",
    overview:
      "The LLB pathway is positioned for students who want a structured legal education with broad coverage across public law, criminal law, contract law, torts, commercial law, cyber law, and contemporary legal issues.",
    requirements: [
      "112 UCAS tariff points are listed on the original Bristol programme page.",
      "Relevant equivalent qualifications may be reviewed by admissions.",
      "A good standard of English proficiency may be required.",
    ],
    modules: [
      "English Legal System",
      "Law of Contract",
      "Criminal Law",
      "Constitutional and Administrative Law",
      "Law of Torts",
      "Commercial Law",
      "Cyber Law",
      "Land Law",
      "EU Law",
      "Human Rights Law",
      "Mediation",
      "Company Law",
    ],
    outcomes: ["Legal analysis", "Commercial and corporate awareness", "Pathway to further legal study"],
    keywords: "llb law uwe bristol undergraduate solicitor barrister legal",
  },
  {
    title: "BA (Hons) International Business Management TOP-UP",
    slug: "programme-international-business-management-top-up.html",
    category: "undergraduate",
    level: "Undergraduate",
    partner: "UWE Bristol",
    duration: "12 months",
    field: "International Business",
    description:
      "A top-up route for students with prior higher diploma or equivalent credits who want an international business management degree.",
    overview:
      "This top-up route is designed for students who already hold relevant prior learning and want to progress into an international business management award with a focused final-year structure.",
    requirements: [
      "Relevant higher diploma or equivalent credits.",
      "Admissions review of prior learning.",
      "English proficiency may be required.",
    ],
    modules: [
      "Strategic Management",
      "International Business",
      "Business Project",
      "Cross-cultural Management",
      "Enterprise and Entrepreneurship",
      "Responsible Business",
    ],
    outcomes: ["International business roles", "Management progression", "Further postgraduate study"],
    keywords: "international business management top up uwe undergraduate",
  },
  {
    title: "MSc in Accounting and Finance - Top Up",
    slug: "programme-msc-accounting-finance-top-up.html",
    category: "postgraduate",
    level: "Postgraduate",
    partner: "UWE Bristol",
    duration: "8 months",
    field: "Accounting and Finance",
    description:
      "A focused top-up route for ACCA affiliates and CIMA passed finalists with contemporary finance and research modules.",
    overview:
      "The MSc Accounting and Finance top-up route is designed for professionally qualified or part-qualified finance students who want to progress into a postgraduate award.",
    requirements: [
      "ACCA affiliate status or CIMA passed finalist status may be applicable.",
      "Equivalent professional qualifications can be reviewed by admissions.",
      "English proficiency may be required.",
    ],
    modules: [
      "Corporate Financial Strategy",
      "Strategic Management Accounting",
      "Research Methods",
      "Dissertation",
    ],
    outcomes: ["Senior finance roles", "Accounting leadership", "Finance research capability"],
    keywords: "msc accounting finance top up uwe acca cima postgraduate",
  },
  {
    title: "LLM in Global Business and Finance Law",
    slug: "programme-llm-global-business-finance-law.html",
    category: "postgraduate",
    level: "Postgraduate",
    partner: "UWE Bristol",
    duration: "12 months",
    field: "Business and Finance Law",
    description:
      "A specialist legal programme covering global commercial law, corporate governance, banking law, financial crime, and international business.",
    overview:
      "The LLM pathway is designed for students and professionals who want to deepen their understanding of international business law, finance law, governance, and commercial legal practice.",
    requirements: [
      "A relevant bachelor's degree or equivalent qualification.",
      "Professional experience may support an application where appropriate.",
      "English proficiency may be required.",
    ],
    modules: [
      "Globalisation and the Law",
      "International Banking and Finance Law",
      "International Commercial Law",
      "Corporate Governance",
      "Financial Crime",
      "Dissertation",
    ],
    outcomes: ["Commercial legal practice", "Governance and compliance", "Business and finance law advisory"],
    keywords: "llm global business finance law uwe postgraduate legal",
  },
  {
    title: "Foundation in Business Management",
    slug: "programme-foundation-business-management.html",
    category: "foundation",
    level: "Foundation",
    partner: "DLC Sri Lanka",
    duration: "8 months",
    field: "Business Management",
    description:
      "A foundation route covering English, mathematics, academic writing, essentials in business, marketing, and business economics.",
    overview:
      "This foundation lays the groundwork for business study by introducing essential concepts in economics, marketing, finance, organizational behavior, academic writing, and practical business thinking.",
    requirements: [
      "Ordinary Level within 2 sits.",
      "English / Sinhala / Tamil - C.",
      "Mathematics - C.",
    ],
    modules: [
      "English Proficiency Part 1",
      "English Proficiency Part 2",
      "Foundational Mathematics Part 1",
      "Foundational Mathematics Part 2",
      "Academic Writing and Research Skills",
      "Essentials in Business",
      "Introduction to Marketing",
      "Business Economics",
    ],
    outcomes: ["Business degree preparation", "Academic confidence", "Entry-level business knowledge"],
    keywords: "foundation business management dlc ordinary level business",
  },
  {
    title: "Foundation in Accounting and Finance",
    slug: "programme-foundation-accounting-finance.html",
    category: "foundation",
    level: "Foundation",
    partner: "DLC Sri Lanka",
    duration: "8 months",
    field: "Accounting and Finance",
    description:
      "An accounting and finance foundation introducing financial accounting, management accounting, mathematics, academic writing, and business fundamentals.",
    overview:
      "This foundation introduces students to core accounting and finance concepts while building the English, mathematics, and academic skills needed for further study.",
    requirements: [
      "Ordinary Level within 2 sits.",
      "English / Sinhala / Tamil - C.",
      "Mathematics - C.",
    ],
    modules: [
      "English Proficiency Part 1",
      "English Proficiency Part 2",
      "Foundational Mathematics Part 1",
      "Foundational Mathematics Part 2",
      "Academic Writing and Research Skills",
      "Financial Accounting",
      "Management Accounting",
      "Essentials in Business",
    ],
    outcomes: ["Accounting pathway preparation", "Finance study readiness", "Core business numeracy"],
    keywords: "foundation accounting finance dlc ordinary level",
  },
  {
    title: "Foundation in Psychology",
    slug: "programme-foundation-psychology.html",
    category: "foundation",
    level: "Foundation",
    partner: "DLC Sri Lanka",
    duration: "8 months",
    field: "Psychology",
    description:
      "A foundation route for students preparing to progress into psychology, counselling, or applied psychology pathways.",
    overview:
      "This route introduces students to academic foundations and psychology-related study skills before progressing into higher diploma or degree-level psychology pathways.",
    requirements: [
      "Ordinary Level within 2 sits.",
      "English / Sinhala / Tamil - C.",
      "Mathematics - C.",
    ],
    modules: [
      "English Proficiency",
      "Foundational Mathematics",
      "Academic Writing and Research Skills",
      "Introduction to Psychology",
      "Human Development",
      "Communication Skills",
    ],
    outcomes: ["Psychology pathway preparation", "Counselling study readiness", "Academic skills development"],
    keywords: "foundation psychology dlc counselling applied psychology",
  },
  {
    title: "Foundation in Teaching",
    slug: "programme-foundation-teaching.html",
    category: "foundation",
    level: "Foundation",
    partner: "DLC Sri Lanka",
    duration: "8 months",
    field: "Teaching",
    description:
      "A foundation route for students preparing to progress into teaching, early childhood education, or primary teaching pathways.",
    overview:
      "This foundation supports students who want to move toward education and teaching pathways by building academic, communication, and foundational learning skills.",
    requirements: [
      "Ordinary Level within 2 sits.",
      "English / Sinhala / Tamil - C.",
      "Mathematics - C.",
    ],
    modules: [
      "English Proficiency",
      "Foundational Mathematics",
      "Academic Writing and Research Skills",
      "Introduction to Teaching",
      "Learning and Child Development",
      "Communication Skills",
    ],
    outcomes: ["Teaching pathway preparation", "Education study readiness", "Communication skill development"],
    keywords: "foundation teaching dlc early childhood primary teaching",
  },
  {
    title: "Foundation in Information Technology",
    slug: "programme-foundation-information-technology.html",
    category: "foundation",
    level: "Foundation",
    partner: "DLC Sri Lanka",
    duration: "8 months",
    field: "Information Technology",
    description:
      "A foundation route for students preparing to progress into information technology, management IT, or AI and data science pathways.",
    overview:
      "This foundation route builds core academic and technical readiness for students who want to enter computing, information technology, AI, or data science study paths.",
    requirements: [
      "Ordinary Level within 2 sits.",
      "English / Sinhala / Tamil - C.",
      "Mathematics - C.",
    ],
    modules: [
      "English Proficiency",
      "Foundational Mathematics",
      "Academic Writing and Research Skills",
      "Computer Fundamentals",
      "Introduction to Programming",
      "Digital Skills",
    ],
    outcomes: ["IT pathway preparation", "Technical study readiness", "Foundation for AI and data science"],
    keywords: "foundation information technology it dlc computing",
  },
  {
    title: "Higher Diploma in Business Management",
    slug: "programme-higher-diploma-business-management.html",
    category: "higher-diploma",
    level: "Higher Diploma",
    partner: "DLC Sri Lanka",
    duration: "16 months",
    field: "Business Management",
    description:
      "A higher diploma covering advanced business knowledge in marketing, economics, business law, operations, research, and people management.",
    overview:
      "This higher diploma builds practical business and management capability across core functional areas, preparing students for progression or career entry.",
    requirements: [
      "Advanced Level entry or equivalent may be considered.",
      "A relevant foundation pathway can support entry.",
      "Admissions will review individual qualifications.",
    ],
    modules: [
      "Business Economics",
      "Marketing Management",
      "Human Resource Management",
      "Business Law",
      "Operations Management",
      "Organizational Behaviour",
      "Research Methods",
      "Strategic Management",
    ],
    outcomes: ["Business management roles", "Degree progression", "Operational and people management skills"],
    keywords: "higher diploma business management dlc",
  },
  {
    title: "Higher Diploma in Accounting and Finance",
    slug: "programme-higher-diploma-accounting-finance.html",
    category: "higher-diploma",
    level: "Higher Diploma",
    partner: "DLC Sri Lanka",
    duration: "16 months",
    field: "Accounting and Finance",
    description:
      "A higher diploma covering accounting, finance, statistics, taxation, corporate governance, and financial management.",
    overview:
      "This route develops accounting and finance knowledge across reporting, management accounting, taxation, governance, and financial decision-making.",
    requirements: [
      "Advanced Level entry or equivalent may be considered.",
      "A relevant foundation pathway can support entry.",
      "Admissions will review individual qualifications.",
    ],
    modules: [
      "Financial Accounting",
      "Management Accounting",
      "Business Statistics",
      "Taxation",
      "Corporate Governance",
      "Financial Management",
      "Audit and Assurance",
      "Business Research",
    ],
    outcomes: ["Accounting pathway progression", "Finance roles", "Professional qualification readiness"],
    keywords: "higher diploma accounting finance dlc",
  },
  {
    title: "Higher Dip in Management and Information Technology",
    slug: "programme-higher-dip-management-information-technology.html",
    category: "higher-diploma",
    level: "Higher Diploma",
    partner: "DLC Sri Lanka",
    duration: "16 months",
    field: "Management and IT",
    description:
      "A higher diploma combining management knowledge with information technology, digital systems, and applied business technology.",
    overview:
      "This pathway is designed for students who want to combine management capability with technology understanding for modern digital business environments.",
    requirements: [
      "Advanced Level entry or equivalent may be considered.",
      "A relevant foundation pathway can support entry.",
      "Admissions will review individual qualifications.",
    ],
    modules: [
      "Management Principles",
      "Information Systems",
      "Business Communication",
      "Database Concepts",
      "Web Technologies",
      "Project Management",
      "Digital Business",
      "Business Research",
    ],
    outcomes: ["Business technology roles", "IT-enabled management", "Further computing or business study"],
    keywords: "higher dip management information technology mit dlc",
  },
  {
    title: "Higher Diploma in Counselling and Applied Psychology",
    slug: "programme-higher-diploma-counselling-applied-psychology.html",
    category: "higher-diploma",
    level: "Higher Diploma",
    partner: "DLC Sri Lanka",
    duration: "16 months",
    field: "Counselling and Psychology",
    description:
      "A higher diploma introducing counselling practice, applied psychology, human development, communication, and research foundations.",
    overview:
      "This pathway supports students interested in counselling, psychology, human behavior, and applied support roles through a structured higher diploma route.",
    requirements: [
      "Advanced Level entry or equivalent may be considered.",
      "A psychology foundation pathway can support entry.",
      "Admissions will review individual qualifications.",
    ],
    modules: [
      "Introduction to Psychology",
      "Developmental Psychology",
      "Counselling Skills",
      "Applied Psychology",
      "Mental Health Awareness",
      "Research Methods",
      "Ethics in Counselling",
      "Case Study Practice",
    ],
    outcomes: ["Counselling pathway progression", "Applied psychology awareness", "Human support roles"],
    keywords: "higher diploma counselling applied psychology dlc",
  },
  {
    title: "Higher Diploma in Artificial Intelligence and Data Science",
    slug: "programme-higher-diploma-ai-data-science.html",
    category: "higher-diploma",
    level: "Higher Diploma",
    partner: "DLC Sri Lanka",
    duration: "16 months",
    field: "AI and Data Science",
    description:
      "A higher diploma covering AI, programming, machine learning, data processing, cloud computing, NLP, big data, IoT, and a capstone project.",
    overview:
      "This technology pathway introduces students to artificial intelligence and data science through programming, analytics, machine learning concepts, cloud, big data, IoT, and applied project work.",
    requirements: [
      "Advanced Level entry or equivalent may be considered.",
      "A relevant IT foundation pathway can support entry.",
      "Admissions will review individual qualifications.",
    ],
    modules: [
      "Introduction to Artificial Intelligence",
      "Programming for Data Science",
      "Machine Learning Concepts",
      "Data Processing and Analytics",
      "Cloud Computing",
      "Natural Language Processing",
      "Big Data Technologies",
      "Internet of Things",
      "Capstone Project",
    ],
    outcomes: ["Data science pathway progression", "AI and analytics foundations", "Technology project capability"],
    keywords: "higher diploma artificial intelligence data science ai dlc machine learning",
  },
  {
    title: "Higher Diploma in Early Childhood Education",
    slug: "programme-higher-diploma-early-childhood-education.html",
    category: "higher-diploma",
    level: "Higher Diploma",
    partner: "DLC Sri Lanka",
    duration: "16 months",
    field: "Early Childhood Education",
    description:
      "A higher diploma focused on child development, early learning environments, teaching practice, and education foundations.",
    overview:
      "This route supports students preparing for early childhood education roles by developing understanding of child development, learning environments, teaching practice, and education ethics.",
    requirements: [
      "Advanced Level entry or equivalent may be considered.",
      "A teaching foundation pathway can support entry.",
      "Admissions will review individual qualifications.",
    ],
    modules: [
      "Child Development",
      "Early Childhood Pedagogy",
      "Learning Environments",
      "Child Health and Safety",
      "Inclusive Education",
      "Teaching Practice",
      "Education Psychology",
      "Observation and Assessment",
    ],
    outcomes: ["Early childhood teaching support", "Education pathway progression", "Child development understanding"],
    keywords: "higher diploma early childhood education dlc teaching",
  },
  {
    title: "Higher Diploma in Primary Teaching",
    slug: "programme-higher-diploma-primary-teaching.html",
    category: "higher-diploma",
    level: "Higher Diploma",
    partner: "DLC Sri Lanka",
    duration: "16 months",
    field: "Primary Teaching",
    description:
      "A higher diploma route for students preparing for primary teaching, classroom practice, learning design, and child-centered education.",
    overview:
      "This pathway supports students interested in primary education by developing teaching foundations, classroom planning, communication, assessment, and child-centered practice.",
    requirements: [
      "Advanced Level entry or equivalent may be considered.",
      "A teaching foundation pathway can support entry.",
      "Admissions will review individual qualifications.",
    ],
    modules: [
      "Primary Teaching Methods",
      "Curriculum Planning",
      "Classroom Management",
      "Child Development",
      "Assessment for Learning",
      "Inclusive Education",
      "Educational Psychology",
      "Teaching Practice",
    ],
    outcomes: ["Primary teaching support", "Education pathway progression", "Classroom practice readiness"],
    keywords: "higher diploma primary teaching dlc education",
  },
  {
    title: "ACCA Programme",
    slug: "programme-acca.html",
    category: "acca",
    level: "Professional",
    partner: "ACCA",
    duration: "Flexible",
    field: "Accounting and Finance",
    description:
      "A professional accounting pathway covering applied knowledge, applied skills, and strategic professional level papers.",
    overview:
      "ACCA is a globally recognized professional accounting qualification. Bristol positions the programme as a route for aspiring accountants to build financial reporting, audit, taxation, business strategy, ethics, and leadership capability.",
    requirements: [
      "Admissions can advise on the correct ACCA starting point.",
      "Prior academic or professional qualifications may support exemptions.",
      "Students should confirm current ACCA registration and exam requirements.",
    ],
    modules: [
      "Business and Technology",
      "Financial Accounting",
      "Management Accounting",
      "Taxation",
      "Performance Management",
      "Audit and Assurance",
      "Corporate and Business Law",
      "Financial Reporting",
      "Financial Management",
      "Strategic Business Leader",
      "Strategic Business Reporting",
      "Advanced Audit and Assurance",
      "Advanced Financial Management",
      "Advanced Performance Management",
      "Advanced Taxation",
    ],
    outcomes: ["Professional accounting pathway", "Finance and audit roles", "Global career mobility"],
    keywords: "acca accounting finance taxation audit professional qualification",
  },
];

const nav = (current = "programmes") => `
    <header class="site-header" data-header>
      <div class="container nav">
        <a class="brand" href="index.html" aria-label="Bristol Institute home">
          <img class="brand__logo" src="assets/bristol-logo.svg" alt="Bristol Institute" />
        </a>

        <nav class="nav__links" data-nav aria-label="Main navigation">
          <a href="programmes.html"${current === "programmes" ? ' aria-current="page"' : ""}>Programmes</a>
          <a href="about.html"${current === "about" ? ' aria-current="page"' : ""}>Why Bristol</a>
          <a href="about.html#partners">Partners</a>
          <a href="admissions.html"${current === "admissions" ? ' aria-current="page"' : ""}>Admissions</a>
          <a href="contact.html"${current === "contact" ? ' aria-current="page"' : ""}>Contact</a>
        </nav>

        <div class="nav__actions">
          <a class="icon-link" href="https://wa.me/94777552266" aria-label="WhatsApp Bristol">
            <i data-lucide="message-circle"></i>
          </a>
          <a class="button button--primary" href="${applyUrl}" target="_blank" rel="noopener">
            <span>Apply Online</span>
            <i data-lucide="arrow-right"></i>
          </a>
          <a class="icon-link icon-link--student icon-link--moodle" href="https://moodle.bristolinstitute.edu.lk" target="_blank" rel="noopener" aria-label="Open Moodle" title="Moodle">
            <i data-lucide="book-open"></i>
          </a>
          <a class="icon-link icon-link--student icon-link--portal" href="https://my.bristolinstitute.edu.lk" target="_blank" rel="noopener" aria-label="Open Student Portal" title="Student Portal">
            <i data-lucide="log-in"></i>
          </a>
          <button class="menu-button" type="button" data-menu-toggle aria-label="Open menu">
            <i data-lucide="menu"></i>
          </button>
        </div>
      </div>
    </header>`;

const footer = () => `
    <footer class="footer">
      <div class="container footer__inner">
        <div>
          <a class="brand brand--footer" href="index.html">
            <img class="brand__logo" src="assets/bristol-logo-white.svg" alt="Bristol Institute" />
          </a>
          <p>07 Walukarama Rd, Colombo 00300 | info@bristolinstitute.edu.lk</p>
        </div>
        <div class="footer__links">
          <a href="programmes.html">Programmes</a>
          <a href="about.html">Why Bristol</a>
          <a href="admissions.html">Admissions</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
    </footer>

    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
    <script src="script.js"></script>`;

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const partnerKey = (partner) => {
  if (partner === "UWE Bristol") return "uwe";
  if (partner === "DLC Sri Lanka") return "dlc";
  if (partner === "ACCA") return "acca";
  return "other";
};

const optionList = programmes.map((item) => `<option>${escapeHtml(item.title)}</option>`).join("\n                ");

const card = (item) => `
              <article
                class="programme-card"
                data-category="${item.category}"
                data-awarding="${partnerKey(item.partner)}"
                data-keywords="${escapeHtml(item.keywords)}"
              >
                <span class="programme-card__level">${escapeHtml(item.level)}</span>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.description)}</p>
                <dl>
                  <div>
                    <dt>${item.partner === "ACCA" ? "Qualification" : "Awarding body"}</dt>
                    <dd>${escapeHtml(item.partner)}</dd>
                  </div>
                  <div>
                    <dt>Duration</dt>
                    <dd>${escapeHtml(item.duration)}</dd>
                  </div>
                </dl>
                <a href="${item.slug}" class="card-action">
                  View programme
                  <i data-lucide="arrow-up-right"></i>
                </a>
              </article>`;

const programmesPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Programmes | Bristol Institute of Business Management</title>
    <meta
      name="description"
      content="Explore every programme listed by Bristol Institute of Business Management, including UWE Bristol, DLC Sri Lanka, and ACCA pathways."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
${nav("programmes")}

    <main>
      <section class="page-hero page-hero--programmes">
        <div class="page-hero__media" aria-hidden="true"></div>
        <div class="container page-hero__content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <i data-lucide="chevron-right"></i>
            <span>Programmes</span>
          </nav>
          <p class="eyebrow">Programme finder</p>
          <h1>Find a pathway that fits your next move.</h1>
          <p>
            Browse all ${programmes.length} programmes currently listed by Bristol Institute:
            UK awarded UWE routes, DLC foundation and higher diploma routes, and ACCA.
          </p>
        </div>
      </section>

      <section class="programme-directory section">
        <div class="container directory-layout">
          <aside class="directory-panel" aria-label="Programme filters">
            <p class="section-kicker">Filter</p>
            <h2>Refine programmes</h2>
            <form class="finder-search finder-search--directory" role="search" data-search-form>
              <i data-lucide="search"></i>
              <input
                type="search"
                placeholder="Search programmes"
                aria-label="Search programmes"
                data-programme-search
              />
            </form>
            <div class="filter-group">
              <span class="filter-label">By level</span>
              <div class="filter-tabs filter-tabs--stacked" aria-label="Filter programmes by level">
                <button class="filter-tabs__button is-active" type="button" data-filter="all">All programmes</button>
                <button class="filter-tabs__button" type="button" data-filter="foundation">Foundation</button>
                <button class="filter-tabs__button" type="button" data-filter="higher-diploma">Higher Diploma</button>
                <button class="filter-tabs__button" type="button" data-filter="undergraduate">Undergraduate</button>
                <button class="filter-tabs__button" type="button" data-filter="postgraduate">Postgraduate</button>
                <button class="filter-tabs__button" type="button" data-filter="acca">ACCA</button>
              </div>
            </div>
            <div class="filter-group">
              <span class="filter-label">By awarding body</span>
              <div class="filter-tabs filter-tabs--stacked" aria-label="Filter programmes by awarding body">
                <button class="filter-tabs__button is-active" type="button" data-awarding-filter="all">All awarding bodies</button>
                <button class="filter-tabs__button" type="button" data-awarding-filter="uwe">UWE Bristol</button>
                <button class="filter-tabs__button" type="button" data-awarding-filter="dlc">DLC Sri Lanka</button>
                <button class="filter-tabs__button" type="button" data-awarding-filter="acca">ACCA</button>
              </div>
            </div>
            <div class="advisor-box">
              <i data-lucide="messages-square"></i>
              <h3>Need help choosing?</h3>
              <p>Admissions can guide students through entry requirements, intakes, and fees.</p>
              <a class="button button--secondary button--full" href="https://wa.me/94777552266">
                <span>Chat on WhatsApp</span>
                <i data-lucide="message-circle"></i>
              </a>
            </div>
          </aside>

          <div class="directory-main">
            <div class="directory-summary">
              <div>
                <p class="section-kicker">All programmes</p>
                <h2>${programmes.length} programmes from the current Bristol site</h2>
              </div>
              <p>
                Each programme now has its own detail page, giving the prototype
                a consistent admissions journey instead of a single MBA sample.
              </p>
            </div>

            <div class="programme-grid programme-grid--directory" data-programme-grid>
${programmes.map(card).join("\n")}
            </div>
          </div>
        </div>
      </section>

      <section class="contact-strip">
        <div class="container contact-strip__inner">
          <div>
            <p class="section-kicker">Admissions support</p>
            <h2>Shortlist programmes, then talk to an advisor.</h2>
          </div>
          <div class="contact-strip__actions">
            <a class="button button--primary" href="contact.html">
              <span>Request Guidance</span>
              <i data-lucide="send"></i>
            </a>
            <a class="button button--ghost-dark" href="tel:+94777552266">
              <span>Call Admissions</span>
              <i data-lucide="phone"></i>
            </a>
          </div>
        </div>
      </section>
    </main>

${footer()}
  </body>
</html>
`;

const detailPage = (item) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(item.title)} | Bristol Institute</title>
    <meta
      name="description"
      content="${escapeHtml(item.description)}"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
${nav("programmes")}

    <main>
      <section class="programme-detail-hero">
        <div class="container detail-hero__layout">
          <div class="detail-hero__content">
            <nav class="breadcrumb breadcrumb--light" aria-label="Breadcrumb">
              <a href="index.html">Home</a>
              <i data-lucide="chevron-right"></i>
              <a href="programmes.html">Programmes</a>
              <i data-lucide="chevron-right"></i>
              <span>${escapeHtml(item.level)}</span>
            </nav>
            <p class="eyebrow">${escapeHtml(item.partner)} programme</p>
            <h1>${escapeHtml(item.title)}</h1>
            <p>${escapeHtml(item.description)}</p>
            <div class="hero__actions">
              <a class="button button--primary button--large" href="${applyUrl}" target="_blank" rel="noopener">
                <span>Apply Online</span>
                <i data-lucide="arrow-right"></i>
              </a>
              <a class="button button--ghost button--large" href="https://wa.me/94777552266">
                <span>Ask an Advisor</span>
                <i data-lucide="message-circle"></i>
              </a>
            </div>
          </div>

          <aside class="programme-snapshot" aria-label="Programme snapshot">
            <div>
              <span>Duration</span>
              <strong>${escapeHtml(item.duration)}</strong>
            </div>
            <div>
              <span>${item.partner === "ACCA" ? "Qualification" : "Awarding body"}</span>
              <strong>${escapeHtml(item.partner)}</strong>
            </div>
            <div>
              <span>Level</span>
              <strong>${escapeHtml(item.level)}</strong>
            </div>
            <div>
              <span>Field</span>
              <strong>${escapeHtml(item.field)}</strong>
            </div>
          </aside>
        </div>
      </section>

      <section class="detail-body section">
        <div class="container detail-body__layout">
          <aside class="detail-sidebar">
            <nav aria-label="Programme sections">
              <a href="#overview">Overview</a>
              <a href="#requirements">Entry Requirements</a>
              <a href="#modules">Modules</a>
              <a href="#outcomes">Career Outcomes</a>
              <a href="#faqs">FAQs</a>
            </nav>
            <div class="download-card">
              <i data-lucide="file-text"></i>
              <h3>Need the brochure?</h3>
              <p>In the live build, this CTA can collect lead details before releasing the PDF.</p>
              <a class="button button--secondary button--full" href="contact.html">
                <span>Request PDF</span>
                <i data-lucide="download"></i>
              </a>
            </div>
          </aside>

          <div class="detail-content">
            <section id="overview" class="content-block">
              <p class="section-kicker">Overview</p>
              <h2>Programme overview</h2>
              <p>${escapeHtml(item.overview)}</p>
            </section>

            <section id="requirements" class="content-block">
              <p class="section-kicker">Entry requirements</p>
              <h2>Who can apply?</h2>
              <ul class="check-list">
${item.requirements.map((text) => `                <li>${escapeHtml(text)}</li>`).join("\n")}
              </ul>
            </section>

            <section id="modules" class="content-block">
              <p class="section-kicker">Modules</p>
              <h2>What students study</h2>
              <div class="module-grid">
${item.modules.map((text) => `                <span>${escapeHtml(text)}</span>`).join("\n")}
              </div>
            </section>

            <section id="outcomes" class="content-block split-block">
              <div>
                <p class="section-kicker">Outcomes</p>
                <h2>Where this pathway can lead</h2>
                <p>
                  This prototype page turns the original programme listing into
                  a clearer decision page with outcomes, requirements, modules,
                  and advisor-led conversion points.
                </p>
              </div>
              <div class="outcome-list">
${item.outcomes
  .map(
    (text, index) => `                <div>
                  <i data-lucide="${["briefcase-business", "line-chart", "globe-2"][index % 3]}"></i>
                  <span>${escapeHtml(text)}</span>
                </div>`
  )
  .join("\n")}
              </div>
            </section>

            <section id="faqs" class="content-block">
              <p class="section-kicker">FAQs</p>
              <h2>Common questions</h2>
              <div class="faq-list">
                <details open>
                  <summary>How long does this programme take?</summary>
                  <p>The listed duration for this prototype is ${escapeHtml(item.duration)}.</p>
                </details>
                <details>
                  <summary>Can I confirm eligibility before applying?</summary>
                  <p>Yes. The admissions team should review your qualifications before you submit a full application.</p>
                </details>
                <details>
                  <summary>Can I request fees or the brochure?</summary>
                  <p>Yes. The live build can use programme-specific forms to capture fee and brochure requests.</p>
                </details>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section class="contact-strip">
        <div class="container contact-strip__inner">
          <div>
            <p class="section-kicker">Ready to apply?</p>
            <h2>Turn interest into an admissions conversation.</h2>
          </div>
          <div class="contact-strip__actions">
            <a class="button button--primary" href="${applyUrl}" target="_blank" rel="noopener">
              <span>Start Application</span>
              <i data-lucide="send"></i>
            </a>
            <a class="button button--ghost-dark" href="programmes.html">
              <span>Compare Programmes</span>
              <i data-lucide="layout-grid"></i>
            </a>
          </div>
        </div>
      </section>
    </main>

${footer()}
  </body>
</html>
`;

fs.writeFileSync("programmes.html", programmesPage);
for (const item of programmes) {
  fs.writeFileSync(item.slug, detailPage(item));
}

for (const file of ["index.html", "admissions.html", "contact.html"]) {
  if (!fs.existsSync(file)) continue;
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(
    /<option value="">Select a programme<\/option>[\s\S]*?<\/select>/,
    `<option value="">Select a programme</option>\n                ${optionList}\n              </select>`
  );
  fs.writeFileSync(file, html);
}

const homepageLinks = {
  "programme-mba.html": "programme-mba.html",
};

console.log(`Generated ${programmes.length} programme cards and ${programmes.length} detail pages.`);
