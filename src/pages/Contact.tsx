import Navbar from "../components/navbar/Navbar";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='flex min-h-[85vh] m-2 md:m-4 justify-center bg-[#16232e]'>
        <div className="pb-16 pt-16 text-center md:w-1/2">
          <ContactForm />
        </div>
      </div >
    </>
  );
};

export default Contact;
