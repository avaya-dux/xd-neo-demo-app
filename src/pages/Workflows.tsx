import { useEffect, useState } from "react";
import { Column } from "react-table";
import {
  Table,
} from "@avaya/neo-react";

import { getWorkflows } from "./workflow-service-mock";
import type { Workflow } from "./workflow-service-mock";

const WorkflowsPage = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState<Workflow[]>([]);

    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
  
    useEffect(() => {
    async function getData() {
      const workflows = await getWorkflows();
      await sleep(1000); // Simulate fetch delay
      setData(workflows);
      setLoadingData(false);
    }

    if (loadingData) {
      getData();
    }
  }, [loadingData]);

  return (
    <section>
      <Table
        data={data}
        columns={[
          { Header: "Type", accessor: "Type" },
          { Header: "Name", accessor: "Name" },
          { Header: "Current Version", accessor: "Version" },
          { Header: "Created At", accessor: "CreationDate" },
          { Header: "Created By", accessor: "CreatedBy" },
        ]}
        itemsPerPageOptions={[5, 10, 20]}
        // allowToggleColumnVisibility
        // handleRefresh={() => {
        //   console.log("Handle your refresh logic here");
				// }}
      />
    </section>
  );
};

export default WorkflowsPage;