import MeetupItem from './MeetupItem';
import styled from 'styled-components';
import { MeetupData } from '../../types';

const MeetupList = ({ meetups }: { meetups: MeetupData[] }) => {
  console.log('meetups:: ', meetups);
  return (
    <>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          address={meetup.address}
          image={meetup.image}
          description={meetup.description}
        />
      ))}
    </>
  );
};

export default MeetupList;
