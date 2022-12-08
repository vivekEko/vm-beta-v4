// Routing
import { useEffect } from "react";
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";
//  state manegaement (recoil js)
import { useRecoilState } from "recoil";
import currentPathAtom from "./recoil/helpers/currentPathAtom";

// stylesheet
import "./App.css";
import Sidebar from "./components/globalComponents/Sidebar";

// components
import Landing from "./pages/Landing";
import Header from "./components/globalComponents/Header";
import SecondaryLayout_1 from "./pages/SecondaryLayout_1";
import SecondaryLayout_2 from "./pages/SecondaryLayout_2";
import SecondaryLayout_3 from "./pages/SecondaryLayout_3";
import SecondaryLayout_4 from "./pages/SecondaryLayout_4";
import SecondaryLayout_5 from "./pages/SecondaryLayout_5";
import Login from "./pages/Login";
import ProtectedRoutes from "./utils/routing/ProtectedRoutes";
import AdminDashboard from "./admin_pages/AdminDashboard";
import ProtectedFromAdmin from "./utils/routing/ProtectedFromAdmin";

function App() {
  const [currentPath, setCurrentPath] = useRecoilState(currentPathAtom);
  const location = useLocation();

  useEffect(() => {
    console.log("pathname:");

    console.log(location?.pathname);
    setCurrentPath(location);
  }, [location]);

  return (
    <div className="font-oswald cursor-default">
      <div
        className={` ${currentPath?.pathname === "/login" ? "hidden" : " "} `}
      >
        <Sidebar />
      </div>
      <div
        className={` ${
          currentPath?.pathname === "/home" ||
          currentPath?.pathname === "/login"
            ? "pl-[0px]"
            : "pl-0 md:pl-[60px] "
        } `}
      >
        <Routes>
          <Route path="*" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<Landing />} />
          <Route
            path="/sub_page/:call_link/:page_id"
            element={<SecondaryLayout_1 />}
          />
          <Route path="/gallery" element={<SecondaryLayout_2 />} />
          <Route path="/gallery/:album" element={<SecondaryLayout_3 />} />
          <Route path="/gallery/:album/:year" element={<SecondaryLayout_4 />} />
          <Route
            path="/album/:album_id/:year_id"
            element={<SecondaryLayout_4 />}
          />
          <Route path="/jeeyars" element={<SecondaryLayout_5 />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>

          <Route element={<ProtectedFromAdmin />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Old paths */}
          {/* <Route path="/sample_page" element={<SecondaryLayout_1 />} />
          <Route path="/albums" element={<SecondaryLayout_2 />} />
          <Route path="/albums_expanded" element={<SecondaryLayout_3 />} />
          <Route path="/album_details" element={<SecondaryLayout_4 />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
