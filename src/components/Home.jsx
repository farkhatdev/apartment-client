import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  isAuthenticated ? navigate("/apartments") : navigate("/auth/login");
  return null;
};

export default Home;
