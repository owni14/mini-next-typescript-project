import { MeetupData } from '../../types';
import styled from 'styled-components';

// styled components styling
const DetailBox = styled.div`
  text-align: center;
`;

const ImageBox = styled.div`
  overflow: hidden;
`;

const MeetupImage = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
`;

const TextBox = styled.div``;

const TitleParagraph = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
`;

const AddressParagraph = styled.p`
  font-size: 1.5rem;
`;

const DescriptionParagraph = styled.p`
  font-size: 1.5rem;
`;

const MeetupDetail = (props: MeetupData) => {
  return (
    <DetailBox>
      <ImageBox>
        <MeetupImage src={props.image} alt='' />
      </ImageBox>
      <TextBox>
        <TitleParagraph>{props.title}</TitleParagraph>
        <AddressParagraph>{props.address}</AddressParagraph>
        <DescriptionParagraph>{props.description}</DescriptionParagraph>
      </TextBox>
    </DetailBox>
  );
};
export default MeetupDetail;
