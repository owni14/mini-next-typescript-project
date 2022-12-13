import styled from 'styled-components';
import { MeetupData } from '../../types';
import Card from '../common/Card';

import { useRouter } from 'next/router';

// styled components styling
const ImageBox = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
`;

const TextBox = styled.div`
  width: 100%;
  height: 16%;
`;

const TitleParagraph = styled.p`
  font-size: 1.5rem;
`;

const AddressParagraph = styled.p`
  font-size: 1rem;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 10%;
  padding-bottom: 1.5rem;
`;

const DetailButton = styled.button`
  border-radius: 5px;
  border: 1px solid #344d67;
  padding: 0.5rem;
  font-size: 0.8rem;
  &:hover {
    background-color: #344d67;
    color: white;
  }
`;

const MeetupItem = (props: MeetupData) => {
  const route = useRouter();
  const meetupId = props.id;

  const showDetailHandler = () => {
    route.push(`/detail-meetup/${meetupId}`);
  };

  return (
    <Card>
      <ImageBox>
        <Image src={props.image} alt={''} />
      </ImageBox>
      <TextBox>
        <TitleParagraph>{props.title}</TitleParagraph>
        <AddressParagraph>{props.address}</AddressParagraph>
      </TextBox>
      <ButtonBox>
        <DetailButton onClick={showDetailHandler}>SHOW DETAIL</DetailButton>
      </ButtonBox>
    </Card>
  );
};

export default MeetupItem;
