# 📄 AI PDF Note Taker

AI PDF Note Taker is a modern, AI-powered web application designed to help users extract insights from PDF documents, create structured notes, and manage knowledge efficiently. By combining advanced AI capabilities with a powerful rich-text editor, the platform transforms PDFs into an interactive learning and productivity experience.

Built with Next.js, Convex, LangChain, and Google Gemini AI, the application provides seamless PDF analysis, intelligent note generation, secure authentication, and subscription-based access management.

---

## ✨ Features

### 📂 PDF Management

* Upload and organize PDF documents within your personal workspace.
* Access saved PDFs anytime from your dashboard.
* Secure cloud-based document storage.

### 🤖 AI-Powered Note Extraction

* Highlight text directly from PDF documents.
* Generate AI-powered explanations, summaries, and answers.
* Extract key insights instantly using Google Gemini AI and LangChain.

### ✍️ Rich Text Note-Taking

* Create and edit notes using the TipTap editor.
* Support for:

  * Headings
  * Bullet Lists
  * Numbered Lists
  * Code Blocks
  * Text Highlighting
  * Rich Formatting

### 💾 Persistent Note Storage

* Save notes for each PDF document.
* Continue editing notes at any time.
* Organize information efficiently within your workspace.

### 🔒 Secure Authentication

* User registration and login powered by Clerk.
* Protected routes and secure account management.

### 🌐 Responsive Design

* Optimized experience across:

  * Desktop
  * Tablet
  * Mobile Devices

### ⚡ Subscription Management

* Free and premium plans available.
* Seamless upgrades through Paddle payments.

---

## 💰 Pricing Plans

### 🚀 Unlimited Plan (Active Plan)

**Price:** $9.99 (One-Time Payment)

#### Features

* ✅ Unlimited PDF uploads
* ✅ Unlimited AI note extraction
* ✅ Priority email support
* ✅ Help center access

---

### 🆓 Free Plan

**Price:** $0 / Month

#### Features

* ✅ 5 PDF uploads
* ✅ Unlimited AI note extraction
* ✅ Email support
* ✅ Help center access

Users can upgrade at any time to unlock unlimited platform capabilities.

---

## 🛠️ Tech Stack

### Frontend

* **Next.js**
* **React**
* **Tailwind CSS**
* **TipTap Editor**

### Backend

* **Convex** (Serverless Backend)

### AI Integration

* **Google Gemini AI**
* **LangChain**

### Authentication

* **Clerk**

### Payments

* **Paddle**

---

## 🚀 Getting Started

### Prerequisites

Before running the application, ensure you have:

* Node.js (Latest LTS Version Recommended)
* npm or yarn
* Clerk Account
* Google Gemini API Key
* Convex Project
* Paddle Account

---

## Installation

Clone the repository:

```bash
git clone https://github.com/syedaridasalam/ai-pdf-note-taker.git
```

Navigate to the project directory:

```bash
cd ai-pdf-note-taker
```

Install dependencies:

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CONVEX_URL=your_convex_url

GEMINI_API_KEY=your_gemini_api_key

PADDLE_API_KEY=your_paddle_api_key
```

---

## 🏃 Running the Application

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## 📝 Usage

1. Create an account or log in.
2. Upload a PDF document to your workspace.
3. Open the PDF and highlight any text.
4. Click the AI action button to generate insights or answers.
5. Create manual notes using the TipTap editor.
6. Save notes for future reference.
7. Upgrade to the Unlimited Plan for unrestricted usage.

---

## 📂 Project Structure

```text
/components     → Reusable UI Components
/pages          → Application Pages
/workspace      → PDF Workspace Views
/convex         → Backend Queries & Functions
/configs        → AI & Application Configurations
/public         → Static Assets
```

---

## 🎯 Key Highlights

* AI-powered PDF understanding
* Interactive document workspace
* Rich-text note-taking experience
* Serverless backend architecture
* Secure user authentication
* Subscription-based monetization
* Mobile-friendly responsive interface
* Scalable and modern codebase

---

## 📜 License

This project is licensed under the MIT License.

---

### 👨‍💻 Built with Next.js, Convex, LangChain, Gemini AI, Clerk, Paddle, Tailwind CSS, and TipTap Editor.
