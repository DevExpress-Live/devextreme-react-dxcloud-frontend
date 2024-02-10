import Accordion from "devextreme-react/accordion";
import Navbar from "../components/navbar/Navbar";

type PricingData = {
  title: string;
  content: string;
};

const data: PricingData[] = [
  {
    title: "Cloud Storage",
    content: "Price per 100gb",
    price: 10,
  },
  {
    title: "Virtual Machines",
    content: "Price per CPU core",
    price: 5,
  },
  {
    title: "Web Hosting",
    content: "Price per website",
    price: 10,
  },
];

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[85vh] m-2 md:m-4 justify-center bg-[#16232e]">
        <div className="pb-16 pt-16 text-center w-full">
          <h1 className="text-4xl font-bold mb-4">Pricing Monthly</h1>
          <div className="flex items-center justify-center bg-[#141e28] m-4 pb-4">
            <Accordion
              className="mt-4 h-96 w-1/2 p-4"
              dataSource={data}
              collapsible={true}
              multiple={true}
              itemTitleRender={CustomTitle}
              itemRender={CustomItem}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const CustomTitle = (data: PricingData) => {
  return <div className="text-2xl">{data.title}</div>;
};

const CustomItem = (data: PricingData) => {
  return (
    <div className="text-xl p-4">
      {data.content}
      {": $"}
      {data.price}
    </div>
  );
};

export default Pricing;
