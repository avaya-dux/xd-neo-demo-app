import { useEffect, useState } from "react";
import {
  Chip,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
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
          {
            Header: "Type", accessor: "Type",
            Cell: ({ value }: { value: string }) => {
              if (value === "folder") return (
                <Icon
                  aria-label="Folder"
                  icon="folder"
                  size="lg"
                />);
              return (
                <Chip>Subroutine</Chip>
              )
            }
           },
          {
            Header: "Name", accessor: "Name",
            Cell: ({ value }: { value: string }) => (
					<Link href="#">{value}</Link>
				)},
          { Header: "Current Version", accessor: "Version" },
          { Header: "Created At", accessor: "CreationDate" },
          { Header: "Created By", accessor: "CreatedBy" },
        ]}
        itemsPerPageOptions={[5, 10, 20]}
        // allowToggleColumnVisibility
        // handleRefresh={() => {
        //   console.log("Handle your refresh logic here");
        // }}
        customActionsNode={
					<section>
						<Menu menuRootElement={<MenuButton>New</MenuButton>}>
                <MenuItem>Workflow</MenuItem>
                <MenuItem>Folder</MenuItem>
            </Menu>
					</section>
				}
      />
    </section>
  );
};

export default WorkflowsPage;