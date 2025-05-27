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

[Watch demo video](https://www.loom.com/share/2ba45bab9f8745d1b77d1aff80756c77?sid=513e1d3b-69dc-4d95-a140-2f7029db9456)

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
git clone https://github.com/vlasiuk-anatolii/job-finder-front
cd job-finder-front
npm install
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

Create a `.env` file in the current directory with the following content:

```env
NEXT_PUBLIC_API_AUTH_URL=http://localhost:3001
NEXT_PUBLIC_API_URL=https://jsearch.p.rapidapi.com
NEXT_PUBLIC_RAPID_API_KEY=33f43e99*************************da022674
NEXT_PUBLIC_RAPID_API_HOST=jsearch.p.rapidapi.com
```

## 📁 Project Structure

```
front/
├── app/
│ ├── auth/ // Authentication pages and logic
│ ├── common/ // Shared components/utilities
│ ├── header/ // Header layout and navigation
│ ├── jobs/ // Jobs pages
│ ├── liked/ // View liked jobs
│ ├── profile/ // Profile user
│ ├── store/ // Redux store and slices
│ ├── dark.theme.ts // Custom MUI dark theme
│ └── globals.css // Global CSS styles
├── .next/ // Next.js build output (auto-generated)
├── package.json // Project metadata and dependencies
└── tsconfig.json // TypeScript configuration
```

## ✅ Implemented

* [x] Display all jobs
* [x] View a job with details
* [x] Create a user profile
* [x] Show job recommendations based on profile
* [x] Like/unlike job
* [x] Store liked jobs in store
* [x] View liked jobs on /liked page
* [x] Search for jobs by query
* [x] Sanitize html in comment
* [x] Responsive design

## 📝 Notes

* The backend should be running on `http://localhost:3001` or the address set in `NEXT_PUBLIC_API_AUTH_URL`.
* Form include basic validation with helpful error messages.

## 📄 License

MIT © 2025 [Anatolii Vlasiuk](https://github.com/vlasiuk-anatolii)
