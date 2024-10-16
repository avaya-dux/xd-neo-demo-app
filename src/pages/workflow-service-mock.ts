export type Workflow = {
  Type: "subroutine" | "folder";
  Name: string;
  Version: string;
  CreationDate: Date;
  CreatedBy: string;
  id: string;
}

export const workflowsData: Workflow[] = [
  {
    Type: "folder",
    Name: "Contact Workflows",
    Version: "",
    CreationDate: new Date(),
    CreatedBy: "Vladimir Obradovic",
    id: "1",
  },
  {
    Type: "folder",
    Name: "Edify Templates",
    Version: "",
    CreationDate: new Date(),
    CreatedBy: "John Smith",
    id: "2",
  },
  {
    Type: "folder",
    Name: "Scheduled",
    Version: "",
    CreationDate: new Date(),
    CreatedBy: "Vladimir Obradovic, Tom Curren, Bethany Hamilton",
    id: "3",
  },
  {
    Type: "subroutine",
    Name: "Template 54321",
    Version: "1.0",
    CreationDate: new Date(),
    CreatedBy: "John Smith",
    id: "4",
  },
  {
    Type: "subroutine",
    Name: "My Flow 24/02",
    Version: "2.2",
    CreationDate: new Date(),
    CreatedBy: "John Smith",
    id: "5",
  },
  {
    Type: "subroutine",
    Name: "Fixed Flow 24",
    Version: "1.0",
    CreationDate: new Date(),
    CreatedBy: "Vladimir Obradovic",
    id: "6",
  },
  {
    Type: "subroutine",
    Name: "My Flow 23",
    Version: "2.1",
    CreationDate: new Date(),
    CreatedBy: "Vladimir Obradovic",
    id: "7",
  },
  {
    Type: "subroutine",
    Name: "Another Flow",
    Version: "1.7",
    CreationDate: new Date(),
    CreatedBy: "Tom Carrol, Gerry Lopez",
    id: "8",
  },
  {
    Type: "subroutine",
    Name: "Fixed Flow 20",
    Version: "3.4",
    CreationDate: new Date(),
    CreatedBy: "Mike Stewart",
    id: "9",
  },
  {
    Type: "subroutine",
    Name: "Flow 17",
    Version: "1.8",
    CreationDate: new Date(),
    CreatedBy: "Carissa Moore",
    id: "10",
  },
    {
    Type: "subroutine",
    Name: "Flow 16",
    Version: "2.3",
    CreationDate: new Date(),
    CreatedBy: "John John Florence",
    id: "11",
  },
      {
    Type: "subroutine",
    Name: "Flow 15",
    Version: "3.9",
    CreationDate: new Date(),
    CreatedBy: "Laird Hamilton",
    id: "12",
  },
        {
    Type: "subroutine",
    Name: "Flow 14",
    Version: "1.8",
    CreationDate: new Date(),
    CreatedBy: "Joel Tudor",
    id: "13",
  },
          {
    Type: "subroutine",
    Name: "Flow 13",
    Version: "1.1",
    CreationDate: new Date(),
    CreatedBy: "Kelly Slater",
    id: "14",
  },
  {
    Type: "subroutine",
    Name: "Flow 12",
    Version: "1.5",
    CreationDate: new Date(),
    CreatedBy: "Stephanie Gilmore",
    id: "15",
  },
  {
    Type: "subroutine",
    Name: "Flow 11",
    Version: "1.0",
    CreationDate: new Date(),
    CreatedBy: "Mark Ochilupo",
    id: "16",
  },
];

export function getWorkflows():Promise<Workflow[]> {
  return new Promise((resolve, reject) => {
    resolve(workflowsData);
  });
}
