import { useState, useRef, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  EmailRule,
} from "devextreme-react/form";
import LoadIndicator from "devextreme-react/load-indicator";
import notify from "devextreme/ui/notify";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formData = useRef({ email: "", passord: "" });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://172.22.5.80:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData.current),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        notify({
          message: data.message,
          type: "error",
          displayTime: 3000,
          position: {
            my: "center top",
            at: "center top",
            offset: "0 100",
          },
        })
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="form" className="p-8" onSubmit={onSubmit}>
      <Form
        formData={formData.current}
        disabled={loading}
        showColonAfterLabel={false}
        showRequiredMark={false}
      >
        <Item
          dataField="email"
          editorType="dxTextBox"
          editorOptions={emailEditorOptions}
        >
          <RequiredRule message="Email is required" />
          <EmailRule message="Email is invalid" />
          <Label visible={false} />
        </Item>
        <Item
          dataField="password"
          editorType="dxTextBox"
          editorOptions={passwordEditorOptions}
        >
          <RequiredRule message="Password is required" />
          <Label visible={false} />
        </Item>
        <ButtonItem>
          <ButtonOptions width="100%" type="default" useSubmitBehavior={true}>
            {loading ? (
              <LoadIndicator width="24px" height="24px" visible={true} />
            ) : (
              "Login"
            )}
          </ButtonOptions>
        </ButtonItem>
        <Item>
          <div className="flex justify-center">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>
        </Item>
        <ButtonItem>
          <ButtonOptions
            width="100%"
            type="normal"
            onClick={() => navigate("/register")}
          >
            Register
          </ButtonOptions>
        </ButtonItem>
      </Form>
    </form>
  );
};

const emailEditorOptions = {
  stylingMode: "filled",
  placeholder: "Email",
  mode: "email",
};
const passwordEditorOptions = {
  stylingMode: "filled",
  placeholder: "Password",
  mode: "password",
};

export default LoginForm;
