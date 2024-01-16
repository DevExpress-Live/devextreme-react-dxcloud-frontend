import Navbar from "../components/navbar/Navbar";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[85vh] m-2 md:m-4 justify-center items-center bg-[#16232e]">
        <div className="w-[80%] md:w-[30%] shadow-md bg-[#1a2835] rounded-md">
          <h1 className="text-center pt-4">Login</h1>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
