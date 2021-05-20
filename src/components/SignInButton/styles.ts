import styled from 'styled-components';

export const Button = styled.button`
  background: var(--gray-850);
  border: 0;
  height: 3rem;
  border-radius: 3rem;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white);
  font-weight: bold;

  transition: filter 0.2s;

  svg {
    width: 20px;
    height: 20px;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  svg.closeIcon {
    margin-left: 1rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
