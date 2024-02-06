import { useState, useEffect } from "react";
import TotalNodesChart from "../../components/Dashboard/TotalNodesChart";

type TotalNodes = {
  type: string;
  total: number;
};

const DashboardHome = () => {
  const [totalNodes, setTotalNodes] = useState<Array<TotalNodes>>([{ type: "", total: 0 }]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://172.22.5.80:8080/dashboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json();
        setTotalNodes(data.totalNodes);
        console.log(data.totalNodes);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1 className="p-4">Dashboard</h1>
      <TotalNodesChart totalNodes={totalNodes} />
    </div>
  );
}

export default DashboardHome;
