import { useCallback, useState } from "react";
import {
  Form,
  SimpleItem,
  GroupItem,
  Label,
  ButtonItem,
  ButtonOptions,
} from "devextreme-react/form";
import { Popup } from "devextreme-react/popup";

const profileInfo = {
  firstName: "John",
  lastName: "Doe",
  address: "300 N. Brand Blvd.",
  city: "Glendale",
  state: "CA",
  zip: "91203",
  email: "jd@mail.com",
};

const DashboardProfile = () => {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const showPaymentPopup = useCallback(() => {
    setPopupVisible(true);
  }, [setPopupVisible]);

  const hide = useCallback(() => {
    setPopupVisible(false);
  }, [setPopupVisible]);


  return (
    <div>
      <h1 className="m-4">Profile</h1>
      <hr className="h-1 m-4 bg-gray-700 border-0 rounded" />
      <div className="flex flex-col md:flex md:flex-row w-full md:w-[1000px]">
        <Form formData={profileInfo} className="w-full mx-8">
          <GroupItem caption="Personal Info">
            <SimpleItem dataField="firstName" editorType="dxTextBox">
              <Label text="First Name" />
            </SimpleItem>
            <SimpleItem dataField="lastName" editorType="dxTextBox">
              <Label text="Last Name" />
            </SimpleItem>
            <SimpleItem dataField="email" editorType="dxTextBox">
              <Label text="Email" />
            </SimpleItem>
            <SimpleItem dataField="address" editorType="dxTextBox">
              <Label text="Address" />
            </SimpleItem>
            <SimpleItem dataField="city" editorType="dxTextBox">
              <Label text="City" />
            </SimpleItem>
            <SimpleItem dataField="state" editorType="dxTextBox">
              <Label text="State" />
            </SimpleItem>
            <SimpleItem dataField="zip" editorType="dxTextBox">
              <Label text="Zip" />
            </SimpleItem>
            <ButtonItem>
              <ButtonOptions width="100%" text="Save" />
            </ButtonItem>
          </GroupItem>
        </Form>
        <Form className="w-full mx-8">
          <GroupItem caption="Change Password">
            <SimpleItem dataField="oldPassword" editorType="dxTextBox">
              <Label text="Old Password" />
            </SimpleItem>
            <SimpleItem dataField="newPassword" editorType="dxTextBox">
              <Label text="New Password" />
            </SimpleItem>
            <SimpleItem dataField="confirmPassword" editorType="dxTextBox">
              <Label text="Confirm Password" />
            </SimpleItem>
            <ButtonItem>
              <ButtonOptions width="100%" text="Change Password" />
            </ButtonItem>
          </GroupItem>
          <GroupItem caption="Payment Info">
            <ButtonItem>
              <ButtonOptions width="100%" text="Change Payment" onClick={showPaymentPopup} />
            </ButtonItem>
          </GroupItem>
        </Form>
      </div>
      <Popup
        width={400}
        height={500}
        visible={popupVisible}
        onHiding={hide}
        hideOnOutsideClick={true}
        showCloseButton={true}
        title="Change Payment Info"
      >
        <div>
          <Form>
            <GroupItem caption="Payment Info">
              <SimpleItem dataField="cardType" editorType="dxSelectBox" editorOptions={cardTypeEditorOptions}>
                <Label text="Card Type" />
              </SimpleItem>
              <SimpleItem dataField="cardNumber" editorType="dxTextBox">
                <Label text="Card Number" />
              </SimpleItem>
              <SimpleItem dataField="expDate" editorType="dxTextBox">
                <Label text="Exp Date" />
              </SimpleItem>
              <SimpleItem dataField="cvv" editorType="dxTextBox">
                <Label text="CVV" />
              </SimpleItem>
              <ButtonItem>
                <ButtonOptions width="100%" text="Save" />
              </ButtonItem>
            </GroupItem>
          </Form>
        </div>
      </Popup>
    </div>
  );
};

const cardTypeEditorOptions = {
  items: ["Visa", "MasterCard", "American Express", "Discover"],
  value: "Visa",
};

export default DashboardProfile;
