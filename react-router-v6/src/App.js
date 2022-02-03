import Main from "./pages/Main.page";
import Login from "./pages/Login.page";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/myapps" element={<Navigate replace to="/login" />} />
      <Route path="/login/*" element={<Login />}>
        <Route
          path="courses"
          element={
            <p>
              Coursessssssss
              <Outlet />
            </p>
          }
        >
          <Route path=":courseId" element={<Course1 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

const Course1 = () => {
  const { courseId } = useParams;
  return (
    <>
      <p>course 1 {courseId}</p>
    </>
  );
};
