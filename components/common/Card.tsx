import styled from 'styled-components';
import { Props } from '../../types/index';

const CardBox = styled.div`
  background-color: #f1f0f0;
  margin-top: 7vh;
  margin-bottom: 7vh;
  width: 100%;
  border-radius: 10px;
  box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.3);
`;

const Card = (props: Props) => {
  return <CardBox>{props.children}</CardBox>;
};
export default Card;
