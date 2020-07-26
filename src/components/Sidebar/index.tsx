import React from 'react';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import StickyBox from 'react-sticky-box';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search"></SearchInput>
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Gabriel" nickname="@gabsgasps" />,
              <FollowSuggestion name="Gabriel" nickname="@gabsgasps" />,
              <FollowSuggestion name="Gabriel" nickname="@gabsgasps" />,
              <FollowSuggestion name="Gabriel" nickname="@gabsgasps" />,
              <FollowSuggestion name="Gabriel" nickname="@gabsgasps" />,
            ]}
          />
          <List
            title="News"
            elements={[<News />, <News />, <News />, <News />, <News />]}
          />
          <List
            title="News"
            elements={[<News />, <News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
