import styled from 'styled-components';
import Link from 'next/link';

// styled css styling
const HeaderBox = styled.div`
  background-color: #344d67;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
`;

const MainTitle = styled.h1`
  font-size: inherit;
  color: white;
  margin: 0 5rem;
`;

const Navbar = styled.nav`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavUl = styled.ul``;

const NavList = styled.li`
  list-style: none;
  color: white;
  font-size: 1rem;
  &:hover {
    color: black;
  }
`;

const Navigation = () => {
  return (
    <HeaderBox>
      <MainTitle>Meetups</MainTitle>
      <Navbar>
        <NavUl>
          <NavList>
            <Link href='/'>All Meetups</Link>
          </NavList>
        </NavUl>
        <NavUl>
          <NavList>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </NavList>
        </NavUl>
      </Navbar>
    </HeaderBox>
  );
};

export default Navigation;
