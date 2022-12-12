import styled from 'styled-components';
import { MeetupData } from '../types/index';
import MeetupList from '../components/meetups/MeetupList';

// styled components styling
const MainLayout = styled.div`
  text-align: center;
`;

const DUMMY_DATA: MeetupData[] = [
  {
    id: 1,
    title: 'test1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/62/Haeundae_2008.png',
    address: 'some where1',
    description: 'this is description test1',
  },
  {
    id: 2,
    title: 'test2',
    image:
      'https://images.unsplash.com/photo-1669123309443-c9c40c596133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MDgxMzg3Ng&ixlib=rb-4.0.3&q=80&w=1080',
    address: 'some where2',
    description: 'this is description test2',
  },
  {
    id: 3,
    title: 'test3',
    image:
      'https://images.unsplash.com/photo-1669497525508-58805a6f4ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MDgxMzkzOA&ixlib=rb-4.0.3&q=80&w=1080',
    address: 'some where3',
    description: 'this is description test3',
  },
];

const mainPage = () => {
  return (
    <MainLayout>
      <MeetupList meetups={DUMMY_DATA} />
    </MainLayout>
  );
};

export default mainPage;
