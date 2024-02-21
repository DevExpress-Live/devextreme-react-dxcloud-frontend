import { useState, useMemo, useCallback } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Drawer } from "devextreme-react/drawer";
import { Toolbar } from "devextreme-react/toolbar";
import List from "devextreme-react/list";

import "./dashboard.css";

const navigation = [
  { id: 1, text: "Dashboard", icon: "home", path: "/dashboard" },
  { id: 2, text: "Profile", icon: "user", path: "/dashboard/profile" },
  {
    id: 3,
    text: "Cloud Storage",
    icon: "product",
    path: "/dashboard/cloud-storage",
  },
  {
    id: 4,
    text: "Virtual Machines",
    icon: "product",
    path: "/dashboard/virtual-machines",
  },
  {
    id: 5,
    text: "Web Hosting",
    icon: "product",
    path: "/dashboard/web-hosting",
  },
  { id: 6, text: "Support", icon: "info", path: "/dashboard/support" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(true);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  const toolbarItems = useMemo(
    () => [
      {
        widget: "dxButton",
        location: "before",
        options: {
          icon: "menu",
          stylingMode: "text",
          onClick: () => setOpened(!opened),
        },
      },
      {
        widget: "dxButton",
        location: "before",
        options: {
          icon: "home",
          stylingMode: "text",
          text: "Home",
          onClick: () => navigate("/"),
        },
      },
      {
        widget: "dxButton",
        location: "after",
        options: {
          icon: "user",
          stylingMode: "text",
          text: "Logout ",
          onClick: () => logout(),
        },
      },
    ],
    [opened, logout, navigate],
  );

  return (
    <div id="drawer">
      <Toolbar items={toolbarItems} className="shadow-md" />
      <Drawer
        component={NavigationMenu}
        opened={opened}
        openedStateMode="push"
        revealMode="expand"
        position="left"
        className="bg-[#16232e]"
        height="inherit"
      >
        <div id="content" className="content min-h-screen">
          <Outlet />
        </div>
      </Drawer>
    </div>
  );
};

const NavigationMenu = () => {
  type Data = {
    id: number;
    path: string;
    text: string;
    icon: string;
  };

  const renderItem = useCallback((data: Data) => {
    return (
      <div>
        <Link to={data.path}>
          <div>
            <div className="dx-list-item-icon-container">
              <i className={`dx-icon dx-list-item-icon dx-icon-${data.icon}`} />
            </div>
            <span className="text-white">{data.text}</span>
          </div>
        </Link>
      </div>
    );
  }, []);
  return (
    <div className="bg-[#141e28] min-h-full" style={{ width: "250px" }}>
      <List
        items={navigation}
        itemRender={renderItem}
        hoverStateEnabled={true}
        activeStateEnabled={false}
        focusStateEnabled={true}
      />
    </div>
  );
};

export default Dashboard;
