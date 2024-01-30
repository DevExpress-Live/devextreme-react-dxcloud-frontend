import { useRef, FormEvent } from "react";
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  EmailRule,
} from "devextreme-react/form";
import "devextreme-react/text-area";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const formData = useRef<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log(formData.current);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form id="form" onSubmit={onSubmit}>
        <Form
          formData={formData.current}
          showColonAfterLabel={false}
          showRequiredMark={false}
        >
          <Item dataField="name" editorType="dxTextBox">
            <RequiredRule message="Name is required" />
            <Label text="Name" />
          </Item>
          <Item dataField="email" editorType="dxTextBox">
            <RequiredRule message="Email is required" />
            <EmailRule message="Email is invalid" />
            <Label text="Email" />
          </Item>
          <Item dataField="message" editorType="dxTextArea" editorOptions={messageOptions}>
            <RequiredRule message="Message is required" />
            <Label text="Message" />
          </Item>
          <ButtonItem>
            <ButtonOptions
              width="100%"
              type="default"
              useSubmitBehavior={true}
            >
              Submit
            </ButtonOptions>
          </ButtonItem>
        </Form>
      </form>
    </>
  );
};

const messageOptions = { height: 100, placeholder: "Message" };

export default ContactForm;
