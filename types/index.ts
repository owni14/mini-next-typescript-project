interface Props {
  children: React.ReactNode;
}

interface MeetupData {
  key?: number;
  id: number;
  title: string;
  image: string;
  address: string;
  description: string;
}

interface loadedData {
  meetupsData: Array<MeetupData>;
}

export type { Props, MeetupData, loadedData };
