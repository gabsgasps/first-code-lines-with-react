import styled from 'styled-components';
import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;
  width: min(399px, 100%);
  flex-direction: column;

  @media (min-width: 1000px) {
    display: flex;
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);
  max-height: 57px;

  position: fixed;
  top: 0;
  z-index: 2;
  background-color: var(--primary);
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background-color: var(--search);
  overflow: hidden;
  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;
    width: 22px;
    height: 22px;
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;

  > div + div {
    margin-top: 10px;
  }
`;
