import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import DocumentListPage from "./pages/documents/DocumentListPage";
import DocumentDetailPage from "./pages/documents/DocumentDetailPage";
import FlashCardListPage from "./pages/flashcards/FlashCardListPage"
import FlashCardPage from "./pages/flashcards/FlashCardPage"
import QuizzTakePage from "./pages/quizzes/QuizzTakePage"
import QuizzeResultPage from "./pages/quizzes/QuizzeResultPage"
import ProfilePage from "./pages/profile/ProfilePage"

import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
const App = () => {
    const isAuthenticated = false;
    const loading = false;
    if(loading){
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Laoding...</p>
            </div>
        )
    }
  return (
   <Router>
    <Routes>
        <Route path="/" element = {isAuthenticated ? <Navigate to = "/dashboard" replace /> : <Navigate to="/login" replace />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

         {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/documents" element={<DocumentListPage />} />
            <Route path="/documents/:id" element={<DocumentDetailPage />} />
            <Route path="/flashcards" element={<FlashCardListPage />} />
            <Route path="/ducuments/:id/flashcards" element={<FlashCardPage />} />
            <Route path="/quizzes/:quizzId" element={<QuizzTakePage />} />
            <Route path="/quizzes/:quizzId:/results" element={<QuizzeResultPage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Route>
            <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </Router>
  )
}

export default App
