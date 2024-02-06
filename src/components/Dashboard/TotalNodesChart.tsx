import PieChart, {
  Series,
  Label,
  Legend,
  Connector,
  Size,
  Export,
  Title,
  Font
} from 'devextreme-react/pie-chart';

type TotalNodes = {
  type: string;
  total: number;
};

const TotalNodesChart = ({ totalNodes }: { totalNodes: TotalNodes[] }) => {
  return (
    <PieChart
      dataSource={totalNodes}
      palette="Office"
      className="m-4 bg-[#141e28] rounded-lg shadow-md w-[400px] h-[400px]"
    >
      <Title text="Total Nodes">
        <Font size={28} color="white" />
      </Title>
      <Series argumentField="type" valueField="total">
        <Label visible={true} customizeText={formatLabel}>
          <Connector visible={true} width={1} />
        </Label>
      </Series>
      <Legend visible={true} verticalAlignment="bottom" horizontalAlignment="center" />
      <Size width={400} />
      <Export enabled={true} />
    </PieChart>
  )
}

const formatLabel = (arg: { argumentText: string; valueText: string; }) => {
  return `${arg.argumentText}: ${arg.valueText}`;
}

export default TotalNodesChart;

