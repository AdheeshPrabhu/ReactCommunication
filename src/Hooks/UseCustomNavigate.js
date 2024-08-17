import { useNavigate } from "react-router-dom";

const UseCustomNavigate = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/Login");
  };

  const goToRegister = () => {
    navigate("/Register");
  };

  return { goToLogin, goToRegister };
};

export default UseCustomNavigate;
