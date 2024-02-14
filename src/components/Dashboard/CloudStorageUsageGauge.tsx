import {
  CircularGauge,
  Scale,
  Label,
  RangeContainer,
  Range,
  Title,
  Font,
  Export,
} from "devextreme-react/circular-gauge";

type NodeType = {
  name: string;
  status: string;
  usage: string;
  total: string;
  price: string;
};

const CloudStorageUsageGague = ({ node }: { node: NodeType }) => {
  return (
    <div className="w-1/2 md:w-1/4">
      <CircularGauge
        id="gauge"
        value={parseInt(node.usage)}
      >
        <Scale startValue={0} endValue={100} tickInterval={10}>
          <Label useRangeColors={true} />
        </Scale>
        <RangeContainer>
          <Range startValue={0} endValue={80} color="white" />
          <Range startValue={80} endValue={100} color="red" />
        </RangeContainer>
        <Title text={`${node.name} Usage`}>
          <Font size={28} color="white" />
        </Title>
        <Export enabled={true} />
      </CircularGauge>
    </div>
  )
}

export default CloudStorageUsageGague;
