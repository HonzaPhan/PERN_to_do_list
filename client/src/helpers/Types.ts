export interface Task {
  id: number;
  user_email: string;
  title: string;
  progress: number;
  createdAt: string;
}

export interface IListHeaderProps {
  listName: string;
  fetchData: () => Promise<void>;
  tasks?: IListItemProps[];
}

export interface IListItemProps {
  tasks: [
    {
      id: number;
      user_email: string;
      title: string;
      progress: number;
      createdAt: string;
    }
  ];
}

export interface IHandleSliderChange {
  (event: Event, newValue: number | number[]): void;
}

export interface IModalProps {
  mode?: string;
  fetchData: () => Promise<void>;
  setShowModal: (showModal: boolean) => void | undefined;
  task?: IListItemProps["tasks"][0];
}
