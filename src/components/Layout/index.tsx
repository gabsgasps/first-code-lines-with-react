import React from 'react';

import Main from '../Main';
import { Container, Wrapper } from './styles';
import Menubar from '../Menubar';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Menubar/>
        <Main></Main>
        {/* <SideBar></SideBar> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
