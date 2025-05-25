This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

# Personal Portfolio Website

---

## Overview

Welcome to my personal portfolio website! This project is a dynamic and responsive web application crafted with **React** and styled using **Tailwind CSS**. It serves as a comprehensive showcase of my professional journey, highlighting my diverse skillset, academic achievements, impactful projects, and convenient contact avenues. Designed with a keen eye for detail and user experience, this portfolio provides a clear and engaging overview of my capabilities as a **Frontend Developer** and **X-ray Technologist**.

---

## Key Features & Functionality

This portfolio is built with several distinct sections, each designed to provide specific insights into my profile:

### Hero Section
The gateway to my portfolio, this section offers a warm introduction. It proudly displays my name, **Dorian García**, alongside my primary professional roles: **Frontend Developer** and **X-ray Technologist**. A concise yet impactful description provides a glimpse into my passion for web development, my experience with modern frameworks like React and Next.js, and my commitment to clean, maintainable code. A prominent "HIRE ME" button encourages immediate engagement.

### My Knowledge Section
Dive deeper into my technical prowess here. This section systematically outlines my expertise across various domains:
* **Frontend Technologies**: Includes a strong foundation in **React**, **Next.js**, **JavaScript (ES6+)**, **TypeScript**, **HTML5**, **CSS3**, and **Tailwind CSS**.
* **Backend Technologies**: Covers **Node.js** and **Express**, with a mention of **RESTful APIs**.
* **Tools**: Highlights my proficiency with **Git**, **GitHub**, **Vercel**, and **Figma** for UI/UX collaboration.
Beyond software development, this section also emphasizes my specialized knowledge in **patient care, equipment operation, image processing, and radiation safety protocols** from my X-ray technologist background. Each knowledge area is presented clearly with a corresponding icon.

### Education Section
This part of the portfolio details my academic journey and formal qualifications. Each entry provides:
* The **institution name** (e.g., Sena, Universidad de Antioquia).
* The **degree or certificate obtained** (e.g., X-ray Technology, Ingeniería de Sistemas, Certificate IA Development Bootcamp).
* The **duration** of the study.
* A **detailed description** of the coursework or skills acquired, offering context to my educational background.

### Portfolio Section
This is where my work speaks for itself. The portfolio section showcases my recent and significant projects, providing visitors with tangible examples of my capabilities. Each project entry includes:
* A **representative image** (`/images/bussines.jpg` used as a placeholder).
* The **project title** which also cleverly embeds the GitHub link.
* A concise **description** outlining the project's purpose and my role.
* A direct **link** to the project's GitHub repository or live demo, allowing for deeper exploration. Currently, it features projects like "Proyecto_covid" (COVID detection using CNN) and "image compression" (a mobile program to reduce image weight).

### Left Menu (Sidebar)
This dedicated sidebar acts as a quick reference for essential personal and professional details:
* **Profile**: A clean display of my professional photo, name, and combined job titles.
* **Contact Information**: Direct access to my email (`dorian.garcia@udea.edu.co`), phone number (`+57 3012567185`), and current location (`City, Envigado`), each accompanied by relevant icons.
* **Spoken Languages**: Utilizes intuitive **progress bars** to visually represent my proficiency in Spanish (100%) and English (75%).
* **Programming Languages**: A concise list of my key programming skills, including **JavaScript, React, Next.js, and Tailwind CSS**.
* **X-ray Experience**: A dedicated list showcasing my practical experience in **CT, RMN, Conventional RX, and Mammography**.

### Right Menu (Sidebar)
Designed for connectivity, this sleek sidebar provides quick access to my online professional presence:
* A clear "Conecta" (Connect) heading.
* Interactive **social media icons** for **LinkedIn, GitHub, Twitter, and CodePen**. Each icon is a clickable link, opening my respective profile in a new tab for seamless networking.

### Responsive Design
The entire portfolio is built with responsiveness at its core. Utilizing Tailwind CSS, the layout gracefully adapts to various screen sizes, ensuring an optimal viewing and interaction experience whether accessed from a mobile phone, tablet, or large desktop monitor.

---

## Technical Stack

This portfolio leverages a modern and efficient development stack:

* **React**: The primary JavaScript library for building the user interface. Its component-based architecture allows for modular, reusable, and maintainable UI elements.
* **Next.js**: While not explicitly shown as the root framework in the provided snippets, its mention in skill descriptions (`Next.js`) implies its potential use for server-side rendering, static site generation, or API routes, enhancing performance and developer experience.
* **Tailwind CSS**: A highly customizable, utility-first CSS framework that enables rapid UI development by composing classes directly in the JSX. This approach ensures consistent styling and significantly speeds up the design process.
* **JavaScript (ES6+)**: The foundational programming language for the application's logic and interactivity.
* **Font Awesome**: Integrated to provide a rich set of scalable vector icons, improving visual appeal and conveying information efficiently without compromising performance.

---

## Installation and Local Setup

To set up and run this portfolio website on your local development environment, follow these steps:

1.  **Clone the Repository**:
    First, open your terminal or command prompt and clone the project's GitHub repository.
    ```bash
    git clone https://github.com/20251-Ingenieria-WEB/dorian-garcia-giraldo-portafolio.git
    ```

2.  **Navigate to the Project Directory**:
    Change your current directory to the newly cloned project folder.
    ```bash
    cd dorian-garcia-giraldo-portafolio
    ```

3.  **Install Dependencies**:
    Install all the necessary project dependencies using npm or yarn.
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Start the Development Server**:
    Launch the application in development mode. This will typically open the portfolio in your default web browser.
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application should now be accessible at `http://localhost:3000` (or another port if 3000 is already in use).

---

## Usage Guide

Once the portfolio is running, you can explore its contents and features:

* **Browse Sections**: Simply scroll down the main content area to navigate through the **Hero, My Knowledge, Education, and Portfolio** sections.
* **Interacting with Projects**: In the **Portfolio** section, each project card is interactive. Click on the "View Project" button to be redirected to the respective GitHub repository, where you can inspect the code, or to a live demo if available.
* **Connecting with Me**: Utilize the icons in the **Right Menu** to quickly access my professional profiles on **LinkedIn, GitHub, Twitter, and CodePen**. These links are configured to open in a new browser tab, ensuring a smooth experience.
* **Contact Information**: All my essential contact details are readily available in the **Left Menu**, allowing you to reach out directly via email or phone. My location and language proficiencies are also clearly displayed.

---

## Project Structure (Detailed Components)

The project adheres to a modular component-based architecture for enhanced organization and maintainability:

```
├── components/
│   ├── EducationItem.jsx       # Renders individual education entries (e.g., degree, duration, description).
│   ├── EducationSection.jsx    # Orchestrates and displays all education items within a dedicated section.
│   ├── HeroSection.jsx         # The primary introductory component of the portfolio.
│   ├── KnowledgeItem.jsx       # Renders a single skill or knowledge area with an icon, title, and description.
│   ├── MyKnowledgeSection.jsx  # Organizes and displays all knowledge/skill items in a grid layout.
│   ├── LanguageItem.jsx        # Renders a single language entry, typically with a name and a progress bar.
│   ├── LeftMenu.js             # The persistent left sidebar containing profile, contact, languages, and specific skill lists.
│   ├── MainContents.js         # The central component that aggregates and renders all main content sections (Hero, Knowledge, Education, Portfolio).
│   ├── PortfolioItem.jsx       # Renders an individual portfolio project card with image, title, description, and project link.
│   ├── PortfolioSection.jsx    # Manages and displays all portfolio project items in a responsive grid.
│   └── RightMenu.js            # The persistent right sidebar, primarily featuring social media links.
└── public/
    └── images/                 # Directory for static assets like profile pictures and project images.
        └── dor.jpg
        └── bussines.jpg
└── styles/
    └── globals.css             # Global styles and Tailwind CSS directives.
└── README.md                   # Project documentation.
└── package.json                # Project metadata and dependencies.
└── ...                         # Other configuration files (e.g., next.config.js, tailwind.config.js)
```

---

## Future Enhancements (Potential Ideas)

* **Dynamic Content Management**: Integrate with a headless CMS (e.g., Strapi, Contentful) to easily manage portfolio content without code changes.
* **Contact Form**: Add a functional contact form instead of just displaying email/phone.
* **Animations**: Incorporate more subtle animations for a richer user experience.
* **Theming**: Implement light/dark mode toggling.
* **Testing**: Add unit and integration tests to ensure robustness.

---

## Contributing

Your contributions are highly welcome! If you have suggestions for improvements, spot a bug, or want to add new features, please feel free to:

1.  **Fork** this repository.
2.  **Create a new branch** for your feature or bugfix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/fix-issue-name`.
3.  **Commit your changes** with clear and descriptive messages.
4.  **Push your branch** to your forked repository.
5.  **Open a Pull Request** against the `main` branch of this repository, describing your changes in detail.

---

## License

This project is open-sourced under the **MIT License**. This means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to the conditions outlined in the LICENSE file.

---

## Contact

Feel free to connect with me!

**Dorian García**
Email: dorian.garcia@udea.edu.co
Phone: +57 3012567185
Location: Envigado, Colombia

**Project GitHub Repository**: [https://github.com/20251-Ingenieria-WEB/dorian-garcia-giraldo-portafolio](https://github.com/20251-Ingenieria-WEB/dorian-garcia-giraldo-portafolio)


