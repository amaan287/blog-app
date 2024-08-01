import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Dashboard from "./pages/dashboard";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreatePost from "./pages/CreatePost";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import PostPage from "./pages/PostPage";
import Search from "./components/Search";
import UpdatePost from "./pages/UpdatePost";
import { ThemeProvider } from "./components/theme-provider";
import AllPosts from "./pages/AllPosts";

function App() {
  return (
    <div className="dark:bg-black h-full ">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Header />
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/search" element={<Search />} />
            <Route path="/all-posts" element={<AllPosts />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<OnlyAdminPrivateRoute />}>
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/update-post/:postId" element={<UpdatePost />} />
            </Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:postSlug" element={<PostPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
