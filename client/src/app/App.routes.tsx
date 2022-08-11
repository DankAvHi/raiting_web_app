import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import PrizesPage from "../pages/PrizesPage/PrizesPage";
import QuestionPage from "../pages/QuestionPage/QuestionPage";
import SpinPage from "../pages/SpinPage/SpinPage";
import VoutePage from "../pages/VoutePage/VoutePage";

const useAppRoutes = () => {
     return (
          <Routes>
               <Route path="/main" element={<MainPage />} />
               <Route path="/spin" element={<SpinPage />} />
               <Route path="/prizes" element={<PrizesPage />} />
               <Route path="/question" element={<QuestionPage />} />
               <Route path="/voute/:id" element={<VoutePage />} />
               <Route path="*" element={<Navigate to={"/main"} />} />
          </Routes>
     );
};

export default useAppRoutes;
