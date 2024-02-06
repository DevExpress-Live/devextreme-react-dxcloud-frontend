import { Form, SimpleItem, GroupItem, Label, ButtonItem, ButtonOptions } from 'devextreme-react/form';

const profileInfo = {
  firstName: 'John',
  lastName: 'Doe',
  address: '300 N. Brand Blvd.',
  city: 'Glendale',
  state: 'CA',
  zip: '91203',
  email: 'jd@mail.com'
}

const DashboardProfile = () => {

  return (
    <div>
      <h1 className="m-4">Profile</h1>
      <div className="md:flex md:flex-row w-[90%] md:w-[1000px] justify-center ">
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
              <ButtonOptions width="100%" text="Change Payment" />
            </ButtonItem>
          </GroupItem>
        </Form>
      </div>
    </div>
  );
}

export default DashboardProfile;
