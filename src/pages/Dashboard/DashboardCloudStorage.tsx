import { useCallback, useState } from "react";
import { DataGrid, DataGridTypes, Column, Sorting } from "devextreme-react/data-grid";
import Button from "devextreme-react/button";
import CloudStorageUsageGague from "../../components/Dashboard/CloudStorageUsageGauge";
import CloudStoragePriceGague from "../../components/Dashboard/CloudStoragePriceGauge";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Node 1",
    status: "Online",
    usage: "20%",
    total: "200GB",
    price: "$20.00",
  },
  {
    id: 2,
    name: "Node 2",
    status: "Online",
    usage: "40%",
    total: "100GB",
    price: "$10.00",
  },
  {
    id: 3,
    name: "Node 3",
    status: "Not Online",
    usage: "0%",
    total: "400GB",
    price: "$40.00",
  },
  {
    id: 4,
    name: "Node 4",
    status: "Online",
    usage: "60%",
    total: "100GB",
    price: "$10.00",
  },
  {
    id: 5,
    name: "Node 5",
    status: "Online",
    usage: "80%",
    total: "1000GB",
    price: "$100.00",
  },
]


type SelectedRowType = {
  name: string;
  status: string;
  usage: string;
  total: string;
  price: string;
};


const DashboardCloudStorage = () => {
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState<SelectedRowType | null>(null);
  const [focusedRowKey, setFocusedRowKey] = useState<number>(1);

  const onFocusedRowChanging = useCallback(async (e: DataGridTypes.FocusedRowChangingEvent) => {
    const rowsCount = e.component.getVisibleRows().length;
    const pageCount = e.component.pageCount();
    const pageIndex = e.component.pageIndex();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const key = (e?.event as any).key;

    if (key && e.prevRowIndex === e.newRowIndex) {
      if (e.newRowIndex === rowsCount - 1 && pageIndex < pageCount - 1) {
        await e.component.pageIndex(pageIndex + 1);
        e.component.option('focusedRowIndex', 0);
      } else if (e.newRowIndex === 0 && pageIndex > 0) {
        await e.component.pageIndex(pageIndex - 1);
        e.component.option('focusedRowIndex', rowsCount - 1);
      }
    }
  }, []);

  const onFocusedRowChanged = useCallback((e: DataGridTypes.FocusedRowChangedEvent) => {
    const data = e.row?.data;
    const usage = data.usage.split('%')[0];
    const total = data.total.split('GB')[0];
    const price = data.price.split('$')[1];
    setSelectedRow({
      name: data.name,
      status: data.status,
      usage,
      total,
      price,
    });
    setFocusedRowKey(data.id);
  }, []);

  const createNewButtonClick = () => {
    navigate(`/cloud-storage/create-new`);
  }


  return (
    <div>
      <h1 className="m-4">Cloud Storage</h1>
      <hr className="h-1 m-4 bg-gray-700 border-0 rounded" />
      <h4 className="my-4 mx-10">Cloud Storage Nodes</h4>
      <div className="flex justify-center">
        {selectedRow && <CloudStorageUsageGague node={selectedRow} />}
        {selectedRow && <CloudStoragePriceGague node={selectedRow} />}
      </div>
      <div className="mx-4 md:mx-12 p-8">
        <Button
          icon="plus"
          text="Add Node"
          stylingMode="contained"
          type="default"
          onClick={createNewButtonClick}
          className="mb-2"
        />
        <DataGrid
          keyExpr="id"
          dataSource={data}
          allowColumnResizing={true}
          focusedRowEnabled={true}
          focusedRowKey={focusedRowKey}
          onFocusedRowChanged={onFocusedRowChanged}
          onFocusedRowChanging={onFocusedRowChanging}
          showBorders={true}
        >
          <Sorting mode="single" />
          <Column dataField="id" visible={false} />
          <Column dataField="name" caption="Name" />
          <Column dataField="status" caption="Status" />
          <Column dataField="usage" caption="Usage" />
          <Column dataField="total" caption="Total (gb)" />
          <Column dataField="price" caption="Price (yr)" />
          <Column
            caption="View More"
            cellRender={GridButton}
          />
        </DataGrid>
      </div>
    </div>
  );
};

const GridButton = (cellData: DataGridTypes.ColumnCellTemplateData) => {
  const navigate = useNavigate();
  return (
    <Button
      text="View More"
      stylingMode="outlined"
      type="default"
      onClick={() => {
        navigate(`/cloud-storage/${cellData.data.id}`);
      }}
    >
      View More
    </Button>
  );
}

export default DashboardCloudStorage;

