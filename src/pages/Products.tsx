import Navbar from "../components/navbar/Navbar";
import ProductCard from "../components/ProductCard";

const data = [
  {
    name: "Vitual Machines",
    description: "Empower your digital projects with the performance of our Virtual Private Servers (VPS). Ideal for businesses, developers, and demanding applications, our VPS hosting provides dedicated resources within a virtualized environment. Customize server configurations, install software you need, and enjoy dedicated computing power without the cost of a physical server. ",
    image: "https://picsum.photos/id/10/800/300",
  },
  {
    name: "Cloud Storage",
    description: "Experience seamless data management and accessibility with our Cloud Storage solution. Whether you're an individual, business, or developer, our scalable and secure cloud storage allows you to store, retrieve, and share your data effortlessly. Enjoy the benefits of automatic backups, collaborative file sharing, and the flexibility to scale your storage needs as your requirements evolve. ",
    image: "https://picsum.photos/id/11/800/300"
  },
  {
    name: "Web Hosting",
    description: "Bring your online presence to life with our Website Hosting services. Whether you're launching a personal blog, a business website, or an e-commerce platform, our hosting solutions offer a reliable and secure foundation. Enjoy fast loading times, high availability, and a user-friendly control panel for easy management. With support for various web technologies.",
    image: "https://picsum.photos/id/12/800/300"
  }
];

const Products = () => {
  return (
    <>
      <Navbar />
      <div className='flex min-h-[85vh] m-2 md:m-4 justify-center bg-[#16232e]'>
        <div className="pb-16 pt-16 text-center min-w-full">
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="py-8 text-xl font-bold">We offer a variety of products to meet your needs.</p>
          <div className="md:grid md:grid-cols-3 md:mx-10">
            <ProductCard name={data[0].name} description={data[0].description} imageURL={data[0].image} />
            <ProductCard name={data[1].name} description={data[1].description} imageURL={data[1].image} />
            <ProductCard name={data[2].name} description={data[2].description} imageURL={data[2].image} />
          </div>
        </div>
      </div >
    </>
  );
};

export default Products;
