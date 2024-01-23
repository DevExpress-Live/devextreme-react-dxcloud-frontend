import Navbar from "../components/navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className='flex min-h-[85vh] m-2 md:m-4 justify-center bg-[#16232e]'>
        <div className="pb-16 pt-16 text-center md:w-1/2">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-xl leading-relaxed mt-4">
            Welcome to Your Cloud Platform, where innovation meets reliability in the digital realm. We are a team of passionate individuals committed to revolutionizing the way you experience cloud services. Our journey began in [Year], and since then, we have been dedicated to providing cutting-edge cloud solutions, including Cloud Storage, Virtual Private Servers (VPS), and Website Hosting.
          </p>
          <p className="text-xl leading-relaxed mt-4">
            At Your Cloud Platform, we believe in the power of simplicity, scalability, and security. Our mission is to empower you with the tools and resources needed to thrive in the ever-evolving digital landscape. Whether you are an individual looking for secure and flexible cloud storage, a developer in need of high-performance virtual servers, or a business aiming to establish a robust online presence through website hosting – we've got you covered.
          </p>
          <p className="text-xl leading-relaxed mt-4">
            What sets us apart is our unwavering commitment to customer satisfaction. We understand that your success is our success, and that's why we prioritize reliability, security, and innovation in everything we do. Our team of experts is continuously working to enhance and expand our services to meet the dynamic needs of our users.
          </p>
          <p className="text-xl leading-relaxed mt-4">
            Thank you for choosing Your Cloud Platform. We look forward to being your trusted partner on your journey to digital excellence.
          </p>
        </div>
      </div >
    </>
  );
};

export default About;
