import styled from 'styled-components';
import { loadedData, MeetupData } from '../types/index';
import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';
import { MongoClient } from 'mongodb';

// styled components styling
const MainLayout = styled.div`
  text-align: center;
`;

const mainPage = (props: loadedData) => {
  const [meetupData, setMeetupData] = useState<MeetupData[]>([]);

  useEffect(() => {
    setMeetupData(props.meetupsData);
  }, []);

  return (
    <MainLayout>
      <MeetupList meetups={meetupData} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://kmwoo0514:1234@pratice.rxc6uzg.mongodb.net/next-meetups?retryWrites=true&w=majority'
  );

  const db = client.db();
  const collection = db.collection('meetups');
  const meetupsData = await collection.find().toArray();

  client.close();

  console.log(meetupsData);

  return {
    props: {
      meetupsData: meetupsData.map((meetupData) => ({
        id: meetupData._id.toString(),
        title: meetupData.title,
        image: meetupData.image,
        address: meetupData.address,
        description: meetupData.description,
      })),
    },
  };
}

export default mainPage;
