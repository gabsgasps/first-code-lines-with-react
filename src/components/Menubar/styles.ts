import styled, { css } from 'styled-components';
import {
  Email,
  FavoriteBorder,
  Home,
  Notifications,
  Person,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: stretch;
  }
`;

export const Logo = styled.div`
  width: 41px;
  height: 41px;

  background-image: url('https://picsum.photos/100?grayscale');
  background-position: center;
  border-radius: 50%;
  background-color: var(--gray);

  margin-bottom: 20px;

  @media (min-width: 1280px) {
    margin-left: 16px;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 16px;
    padding-left: 16px;
  }

  padding: 8.25px 0;
  outline: 0;
  user-select: none;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;
      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background-color: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }

  transition: all 0.2s ease;
`;

export const iconCss = css`
  width: 24px;
  height: 24px;
  color: var(--white);
`;

// icons
export const HomeIcon = styled(Home)`
  ${iconCss}
`;
export const BellIcon = styled(Notifications)`
  ${iconCss}
`;
export const EmailIcon = styled(Email)`
  ${iconCss}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCss}
`;
export const ProfileIcon = styled(Person)`
  ${iconCss}
`;
