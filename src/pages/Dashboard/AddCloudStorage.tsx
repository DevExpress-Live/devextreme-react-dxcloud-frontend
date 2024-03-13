import { Form, SimpleItem, Label, ButtonItem } from 'devextreme-react/form';
import { Slider } from 'devextreme-react/slider';

const AddCloudStoreage = () => {
  return (
    <div>
      <h1 className="m-4">Add Cloud Storage</h1>
      <hr className="h-1 m-4 bg-gray-700 border-0 rounded" />
      <h4 className="my-4 mx-10">Add Cloud Storage Node</h4>
      <div className="mx-10 md:w-1/2">
        <Form>
          <SimpleItem dataField="name" editorType="dxTextBox">
            <Label text="Name" />
          </SimpleItem>
          <SimpleItem dataField="location" editorType="dxSelectBox" editorOptions={selectBoxOptions}>
            <Label text="Location" />
          </SimpleItem>
          <SimpleItem dataField="size" editorType="dxSlider" editorOptions={sliderOptions}>
            <Label text="Size (Gb)" />
          </SimpleItem>
          <ButtonItem
            horizontalAlignment="left"
            buttonOptions={{ text: "Create New", type: "default" }}
          />
        </Form>
      </div>
    </div>
  );
}

const selectBoxOptions = {
  items: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"],
  value: "New York"
};

const sliderOptions = {
  min: 100,
  max: 1000,
  step: 50,
  showRange: true,
  tooltip: {
    enabled: true,
    showMode: "always",
    position: "bottom"
  }
};

export default AddCloudStoreage;
