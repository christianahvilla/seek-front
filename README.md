# ⚛️ Seek-Front – React + Vite Task Management UI

Seek-Front is the frontend application for the Seek Task Management System. It is built with React and Vite, using Material UI for styling and Zustand for state management. It integrates with the Seek-Back Flask API and supports JWT-based authentication.

## 🚀 Features

- React + Vite blazing-fast frontend architecture
- JWT authentication and protected routes
- Modular component-based structure
- Zustand for global state management
- React Hook Form + Yup for form handling and validation
- Material UI (MUI v6) for responsive, accessible design
- React Router v6.4+ with layout support
- Code splitting with lazy loading and Suspense fallback
- Axios HTTP client abstraction
- Global notification system via Snackbar
- Unit and integration testing using Vitest + React Testing Library
- Ready for Docker deployment

## ⚙️ Tech Stack

- React 19 (via Vite)
- Vite
- TypeScript
- React Router v6.4+
- Zustand (State management)
- Axios
- React Hook Form
- Yup (Validation)
- Material UI (MUI v6)
- JWT Decode
- Vitest (Testing)
- React Testing Library
- ESLint + Prettier

## 📁 Project Structure

seek-front/
├── src/
│ ├── api/
│ │ └── http-client.api.ts
│ ├── components/
│ │ └── header.component.tsx
│ ├── features/
│ │ ├── auth/
│ │ │ ├── pages/
│ │ │ │ └── login.page.tsx
│ │ │ └── services/
│ │ │ └── login.service.ts
│ │ └── tasks/
│ │ ├── pages/
│ │ │ ├── task-dashboard.page.tsx
│ │ │ ├── task-create.page.tsx
│ │ │ ├── task-edit.page.tsx
│ │ │ └── task-chart.page.tsx
│ │ └── services/
│ ├── hooks/
│ │ └── use-auth.hook.ts
│ ├── layouts/
│ │ ├── public-layout.layout.tsx
│ │ └── dashboard-layout.layout.tsx
│ ├── routes/
│ │ ├── router.tsx
│ │ ├── private-route.route.tsx
│ │ └── auth-redirect.route.tsx
│ ├── store/
│ │ └── auth.store.ts
│ │ └── task.store.ts
│ ├── styles/
│ │ └── index.css
│ ├── App.tsx
│ └── main.tsx
├── .env
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md

## 🔐 Environment Variables

Create a `.env` file at the root of the project:

VITE_API_BASE_URL=http://localhost:5000

This allows you to easily switch between development and production environments.

## ▶️ Run Locally

1. Clone the repository:
   git clone https://github.com/your-username/seek-front.git  
   cd seek-front

2. Install dependencies:
   npm install

3. Start development server:
   npm run dev

The app will run at: http://localhost:5173

## 🔒 Authentication Flow

- Users log in via `/login`
- JWT token is stored in Zustand and sent in all API requests via Axios
- Protected routes under `/dashboard/*` are secured via `PrivateRoute` logic
- If token is invalid or expired, the user is redirected to `/login`

## 🧪 Testing

Unit and integration tests are written using **Vitest** and **React Testing Library**.

To run all tests:
npm run test

To run tests in watch mode:
npm run test:watch

To check test coverage:
npm run coverage

## 🐳 Docker Deployment (Optional)

1. Build the app:
   npm run build

2. Use your own `nginx.conf` or default static file server (e.g., serve)

3. Build Docker image:
   docker build -t seek-front .

4. Run container:
   docker run -p 5173:80 seek-front

## 📦 Main Dependencies

React  
Vite  
TypeScript  
Zustand  
Axios  
React Hook Form  
Yup  
Material UI  
React Router DOM  
JWT Decode  
Vitest  
React Testing Library  
ESLint + Prettier

## 🧑‍💻 Author

Christian herrejon / GitHub: https://github.com/christianahvilla
