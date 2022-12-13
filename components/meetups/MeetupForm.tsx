import styled from 'styled-components';
import { useRouter } from 'next/router';
import Card from '../common/Card';
import { useRef } from 'react';
import axios from 'axios';

// styled components styling
const FormBox = styled.form`
  padding: 3rem;
`;

const LabelBox = styled.label`
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

const InputBox = styled.input`
  width: 99%;
  margin-bottom: 1rem;
`;

const InputText = styled.textarea`
  width: 99%;
`;

const ButtonBox = styled.div`
  text-align: right;
`;

const SubmitButton = styled.button`
  border-radius: 5px;
  border: 1px solid #344d67;
  padding: 0.5rem;
  font-size: 0.8rem;
  &:hover {
    background-color: #344d67;
    color: white;
  }
`;

const MeetupForm = () => {
  const inputTitle = useRef<HTMLInputElement>(null);
  const inputImage = useRef<HTMLInputElement>(null);
  const inputAddress = useRef<HTMLInputElement>(null);
  const inputDescription = useRef<HTMLTextAreaElement>(null);

  const route = useRouter();

  const submitHandler = (event: any) => {
    event.preventDefault();

    const enteredTitle = inputTitle.current?.value;
    const enteredImage = inputImage.current?.value;
    const enteredAddress = inputAddress.current?.value;
    const enteredDescription = inputDescription.current?.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    axios
      .post('/api/meetupDB', {
        meetupData: meetupData,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => route.replace('/'))
      .catch((err) => console.log('error:: ', err));
  };

  return (
    <Card>
      <FormBox onSubmit={submitHandler}>
        <LabelBox>Title</LabelBox>
        <InputBox placeholder='Input Title' ref={inputTitle} required />
        <LabelBox>Image</LabelBox>
        <InputBox
          placeholder='Input Image URL'
          ref={inputImage}
          required
          type='url'
        />
        <LabelBox>Address</LabelBox>
        <InputBox placeholder='Input Address' ref={inputAddress} required />
        <LabelBox>Description</LabelBox>
        <InputText
          placeholder='Input Description'
          rows={5}
          ref={inputDescription}
          required
        />
        <ButtonBox>
          <SubmitButton>Add Meetup</SubmitButton>
        </ButtonBox>
      </FormBox>
    </Card>
  );
};

export default MeetupForm;
