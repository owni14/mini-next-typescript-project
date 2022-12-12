import Navigation from './Navigation';
import styled from 'styled-components';
import { Props } from '../../types';

// styled components styling
const Main = styled.main`
  margin: 5vh 25vw;
`;

const Layout = (props: Props) => {
  return (
    <>
      <Navigation />
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;
