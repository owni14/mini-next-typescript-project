interface Props {
  children: React.ReactNode;
}

interface MeetupData {
  id: number;
  title: string;
  image: string;
  address: string;
  description: string;
}

export type { Props, MeetupData };
