import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background-color: ${(props: Props) =>
    props.outlined ? 'tranparent' : 'var(--twitter)'};
  color: ${(props: Props) =>
    props.outlined ? 'var(--twitter)' : 'var(--white)'};
  border: ${(props: Props) =>
    props.outlined ? '1px solid var(--twitter)' : 'none'};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  user-select: none;
  outline: 0;

  &:hover {
    background-color: ${(props: Props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-light-hover)'};
  }
`;
