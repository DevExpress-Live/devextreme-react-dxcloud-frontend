import { useState, useEffect } from 'react';
import { DataGridTypes } from 'devextreme-react/data-grid';
import { CircularGauge, Scale, Label, Title, Font } from 'devextreme-react/circular-gauge';

const VirtualMachinesGridDetail = (props: DataGridTypes.MasterDetailTemplateData) => {
  const [cpu, setCpu] = useState(0);
  const [memory, setMemory] = useState(0);
  const [storage, setStorage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 100));
      setMemory(Math.floor(Math.random() * 100));
      setStorage(Math.floor(Math.random() * 100));
    }, 5000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="p-2 flex flex-col ">
      <p className="text-2xl">{props.data.name} | {props.data.status}</p>
      <div className="flex flex-row justify-center">
        <CircularGauge
          value={cpu}
        >
          <Scale startValue={0} endValue={100} tickInterval={5}>
            <Label useRangeColors={true} />
          </Scale>
          <Title text={"CPU"} >
            <Font size={20} color="white" />
          </Title>
        </CircularGauge>
        <CircularGauge
          value={memory}
        >
          <Scale startValue={0} endValue={100} tickInterval={5}>
            <Label useRangeColors={true} />
          </Scale>
          <Title text={"Memory"} >
            <Font size={20} color="white" />
          </Title>
        </CircularGauge>
        <CircularGauge
          value={storage}
        >
          <Scale startValue={0} endValue={100} tickInterval={5}>
            <Label useRangeColors={true} />
          </Scale>
          <Title text={"Storage"} >
            <Font size={20} color="white" />
          </Title>
        </CircularGauge>
      </div>
    </div>
  );
}

export default VirtualMachinesGridDetail;

