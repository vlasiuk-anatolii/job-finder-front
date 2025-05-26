# 📝 Job Finder Frontend

This is the frontend part of a full-stack Job Finder application built using **Next.js**, **React**, **Redux Toolkit**, **Material UI**, **Tailwindcss** and **TypeScript**. 

A job search application where users can:
Search for jobs by title and view results as a list of cards.
View detailed information about each job on a separate page (/job-details/:id).
Like job postings and manage them on a dedicated Liked Jobs page (/liked).
Create a personal profile (/profile) with Name, Desired Job Title, and About Me.
Receive personalized job recommendations on the /home page based on their profile.

If no profile is set, users can still search for jobs manually.

## 📽️ Demo

[Watch demo video]()

## 🚀 Features

* 📄 View all otained jobs
* 🗒️ View a single job with datails info
* ✍️ Create a profile
* ✏️ Edit an existing profile
* 💬 Choosing favorite jobs
* ✅ Client-side input validation
* 🔔 Error message handling

## 🧰 Tech Stack

* **Next.js**
* **React**
* **Redux Toolkit**
* **TypeScript**
* **Material UI**
* **Ant Design**
* **Tailwind CSS**
* **Emotion Styled Components**
* **JWT Decode**
* **lodash.debounce**

## 📦 Installation

```bash
git clone https://github.com/vlasiuk-anatolii/blog-up-front
cd blog-up-front
npm install
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

Create a `.env` file in the current directory with the following content:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lf**************************
```

## 📁 Project Structure

```
front/
├── app/
│ ├── auth/ // Authentication pages and logic
│ ├── comments/ // Comment-related pages and logic
│ ├── common/ // Shared components/utilities
│ ├── header/ // Header layout and navigation
│ ├── posts/ // Post-related pages (CRUD)
│ ├── search/ // Search functionality
│ ├── store/ // Redux store and slices
│ ├── dark.theme.ts // Custom MUI dark theme
│ └── globals.css // Global CSS styles
├── .next/ // Next.js build output (auto-generated)
├── package.json // Project metadata and dependencies
├── tailwind.config.js // Tailwind CSS configuration
└── tsconfig.json // TypeScript configuration
```

## ✅ Implemented

* [x] Display all posts
* [x] View a post with comments
* [x] Create a new post
* [x] Edit a post
* [x] Delete a post
* [x] Add comments to a post
* [x] Add files to comments
* [x] Resizing image of comment to 320x240
* [x] Sanitize html in comment
* [x] Filter comments
* [x] Add files to comments

* [x] Preview comment
* [x] Pagination comments
* [x] Displaying comments in realtime
* [x] Client-side validation
* [x] Error handling
* [x] Search of posts (basic)
* [x] Responsive design

## 📝 Notes

* The backend should be running on `http://localhost:3001` or the address set in `NEXT_PUBLIC_API_URL`.
* All forms include basic validation with helpful error messages.

## 📄 License

MIT © 2025 [Anatolii Vlasiuk](https://github.com/vlasiuk-anatolii)
