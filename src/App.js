import Sidebar from "./Sidebar";
import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
function App() {
  return (
    <div className="App">
      {/* <h1>LETS BUILD YOUTUBE CLONE 🚀</h1> */}
      <Router>
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <>
                <div className="app__pages">
                  <Sidebar />
                  <SearchPage />
                </div>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <div className="app__pages">
                  <Sidebar />
                  <RecommendedVideos />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
      {/* <Header/>
     <div className="app__pages">
      <Sidebar/>
      <RecommendedVideos/>
     </div> */}
    </div>
  );
}

export default App;
