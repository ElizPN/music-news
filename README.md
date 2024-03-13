
The project has been deployed and can be accessed at [Music news](https://music-news-ozaqgn8tl-lizas-projects-35e77909.vercel.app/login)

This project developed as part of a technical task focusing on showcasing ReactJS and [Next.js](https://nextjs.org/) proficiency. The project consists of two main parts: a Fake Login page and a Personal Blog Site.


## Functionality
###  Fake Login

Pure CSS: Utilizes CSS (or a CSS preprocessor) for styling with subtle animations for UI interactions (e.g., hover, focus, active).
Fake Loading: Implements simulated loading effect upon clicking the sign-in button, altering the button's text to "Signing in..." and incorporating a loading spinner.
Handle Errors: Displaying an error message if the user enters incorrect information.
localStorage Usage: Checking if the user is already logged in with localStorage and redirects to the homepage at /posts.
HTML5 Semantic Elements: Proper implementation of HTML5 semantic elements (e.g., section, h1, button, p, form, label, input).

###  Posts Page
Homepage
Displayed a list of blog posts with their title and summary.
Each blog post in the list is clickable, redirecting the user to the post's detail page.
API Integration
Fetch posts for the blog from https://jsonplaceholder.typicode.com/posts.
Implemented server-side rendering (SSR) for fetching posts.

###  Post Detail Page

Displayed the full content of the blog post, including the title, content, date, and picture.
Included a back button to return to the homepage.

###  Bonus Challenges 
Implemented pagination.
Added a search feature on the homepage to filter posts by title.
Implemented a simple comment system on the post detail page, allowing users to submit comments using the provided API.

## If you want to run it locally

Clone the project

Run the development server:

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


