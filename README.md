# Kirtan Parikh - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Full-Stack & DevOps Engineer. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring a clean design and professional presentation.

## About

I'm a final-year Computer Science student at Gujarat Technological University with a passion for building scalable, high-performance systems. My expertise spans full-stack development, cloud-native architecture, and DevOps practices. I specialize in modern web technologies like React, Next.js, and Node.js, combined with cloud platforms like AWS.

## Key Features

### Professional Sections

- **Hero Section**: Dynamic introduction with animated background and call-to-action buttons
- **About Section**: Professional summary highlighting technical expertise and career objectives
- **Skills Section**: Categorized technical skills including languages, frameworks, cloud technologies, and databases
- **Experience Section**: Timeline-based presentation of professional experience and internships
- **Projects Section**: Comprehensive showcase of featured projects with live demos and source code
- **Education Section**: Academic background and relevant coursework
- **Contact Section**: Professional contact form with email integration

### Technical Highlights

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant design and keyboard navigation
- **Contact Integration**: Functional contact form using Resend API

## Tech Stack

### Frontend

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend & Infrastructure

- **API Routes**: Next.js API routes for contact form
- **Email Service**: Resend for email delivery
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Optimized for Vercel platform

### Development Tools

- **Linting**: ESLint with Next.js configuration
- **Build Tool**: Turbopack for fast development builds
- **Package Manager**: npm
- **Version Control**: Git

## Featured Projects

### TruVoice

An innovative platform for anonymous feedback enhanced with AI-generated constructive responses.

- **Tech Stack**: Next.js, MongoDB, AWS, Kubernetes, Gemini AI, CI/CD
- **Live Demo**: [truvoice.kirtanparikh.tech](https://truvoice.kirtanparikh.tech/)
- **Repository**: [GitHub](https://github.com/kirtanparikh/TruVoice)

### TrackSnap

A comprehensive fitness and nutrition tracking application with social features.

- **Tech Stack**: Next.js, Node.js, PostgreSQL, AWS, Socket.IO
- **Live Demo**: [tracksnap.kirtanparikh.tech](https://tracksnap.onrender.com/)
- **Repository**: [GitHub](https://github.com/kirtanparikh/TrackSnap)

### Homeland Cakes

A professional e-commerce website for a local bakery with modern design and functionality.

- **Tech Stack**: Next.js, Tailwind CSS, Framer Motion
- **Live Demo**: [homelandcakes.vercel.app](https://homelandcakes.vercel.app/)

## Professional Experience

### Software Engineer Intern - Helium Consulting

**Duration**: May 2025 - July 2025

- Designed and developed a production-grade, real-time customer support chat application using Node.js, Express.js, and PostgreSQL
- Built and deployed cloud-native backend on AWS (EC2, RDS, S3) ensuring high availability
- Implemented secure user authentication using AWS Cognito and JWT
- Developed real-time messaging with Socket.io and secure file sharing via S3 Presigned URLs

## Technical Skills

### Programming Languages

- JavaScript, TypeScript, Python, Java, C++, SQL

### Frameworks & Libraries

- React, Next.js, Node.js, Express.js, Tailwind CSS, Socket.IO

### Cloud & DevOps

- AWS (EC2, RDS, S3, Cognito), Docker, Kubernetes, Terraform, Git, CI/CD

### Databases & AI

- MongoDB, PostgreSQL, MySQL, Gemini AI, RESTful APIs

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/kirtanparikh/kirtan-portfolio.git
cd kirtan-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

Add your Resend API key for the contact form functionality.

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
└── lib/                   # Utilities and data
    ├── data.ts            # Portfolio data
    └── utils.ts           # Helper functions
```

## Contact

- **Email**: kirtan134parikh@gmail.com
- **LinkedIn**: [linkedin.com/in/kirtan-parikh](https://linkedin.com/in/kirtan-parikh)
- **GitHub**: [github.com/kirtanparikh](https://github.com/kirtanparikh)
- **Portfolio**: [kirtanparikh.tech](https://kirtanparikh.tech)

## License

This project is open source and available under the [MIT License](LICENSE).



