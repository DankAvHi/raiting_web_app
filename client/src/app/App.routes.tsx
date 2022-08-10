import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import QuestionPage from "../pages/QuestionPage/QuestionPage";
import SpinPage from "../pages/SpinPage/SpinPage";

const useAppRoutes = () => {
     return (
          <Routes>
               <Route path="/" element={<MainPage />} />
               <Route path="/spin" element={<SpinPage />} />
               <Route path="/question" element={<QuestionPage />} />
          </Routes>
     );
};

export default useAppRoutes;
