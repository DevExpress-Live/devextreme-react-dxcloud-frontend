import Button from 'devextreme-react/button';

type ProductCardProps = {
  name: string;
  description: string;
  imageURL: string;
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="justify-center items-center shadow-md bg-[#141e28] rounded-lg p-4 m-4">
      <h2 className="text-xl font-bold text-center pb-4">{props.name}</h2>
      <div className="flex justify-center items-center">
        <img src={props.imageURL} className="rounded-md w-[90%]" />
      </div>
      <p className="p-4 text-lg text-left">{props.description}</p>
      <Button
        text="Learn More"
        className="my-4"
        type="default"
        stylingMode="outlined"
        width="90%"
      />
    </div>
  );
}

export default ProductCard;
