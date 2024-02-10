import { Button } from "devextreme-react/button";
import Dx1 from "../assets/Dx1.png";
import Dx2 from "../assets/Dx2.png";
import Dx3 from "../assets/Dx3.png";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[85vh] m-2 md:m-4 justify-center items-center bg-[#16232e]">
        <div className="pb-16 pt-10 text-center min-w-full">
          <h1>DxCloud</h1>
          <h3 className="text-2xl text-gray-300">
            Personal cloud computing made simple
          </h3>
          <br />
          <h3 className="text-gray-300">
            Virtual Machines | Cloud Storage | Web Hosting
          </h3>
          <div className="flex mt-2 pb-8 justify-center gap-x-6">
            <Button
              text="Get Started"
              type="default"
              stylingMode="contained"
              className="mt-8"
              height="40px"
            />
            <Button
              text="Learn More"
              type="default"
              stylingMode="outlined"
              className="mt-8"
              height="40px"
            />
          </div>
          <div className="mt-14 md:mt-24 bg-[#141e28] min-w-9 p-8 md:p-14 shadow-md">
            <br />
            <p className="text-2xl">Trusted by industry leaders</p>
            <div className="flex flex-col md:flex-row justify-center gap-x-8 mt-8">
              <img src={Dx1} alt="Dx1" />
              <img src={Dx2} alt="Dx2" />
              <img src={Dx3} alt="Dx3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
