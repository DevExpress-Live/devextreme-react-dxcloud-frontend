import { DataGrid, MasterDetail, Column, Sorting } from "devextreme-react/data-grid";
import Button from "devextreme-react/button";
import { useNavigate } from "react-router-dom";
import VirtualMachinesGridDetail from "../../components/Dashboard/VirtualMachinesGridDetail";

const data = [
  {
    id: 1,
    name: "Node 1",
    status: "Online",
    type: "Linux",
    price: "$20.00",
  },
  {
    id: 2,
    name: "Node 2",
    status: "Online",
    type: "Windows",
    price: "$10.00",
  },
  {
    id: 3,
    name: "Node 3",
    status: "Not Online",
    type: "Linux",
    price: "$40.00",
  },
  {
    id: 4,
    name: "Node 4",
    status: "Online",
    type: "Linux",
    price: "$10.00",
  },
  {
    id: 5,
    name: "Node 5",
    status: "Online",
    type: "Linux",
    price: "$100.00",
  },
];

const DashboardVirtualMachines = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="m-4">Virtual Machines</h1>
      <hr className="h-1 m-4 bg-gray-700 border-0 rounded" />
      <h4 className="my-4 mx-10">Virtual Machines Nodes</h4>
      <div className="mx-4 md:mx-12 p-8">
        <Button
          icon="plus"
          text="Add VM"
          stylingMode="contained"
          type="default"
          onClick={() => navigate("/dashboard/virtual-machines/add")}
          className="mb-2"
        />
        <DataGrid
          keyExpr="id"
          dataSource={data}
          showBorders={true}
          focusedRowEnabled={true}
        >
          <Sorting mode="single" />
          <Column dataField="id" visible={false} />
          <Column dataField="name" caption="Name" />
          <Column dataField="status" caption="Status" />
          <Column dataField="type" caption="Type" />
          <Column dataField="price" caption="Price" />
          <MasterDetail enabled={true} render={VirtualMachinesGridDetail} />
        </DataGrid>
      </div>
    </div>
  )
}

export default DashboardVirtualMachines;
