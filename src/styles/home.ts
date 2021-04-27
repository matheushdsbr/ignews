import styled from 'styled-components';

export const ContentContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Hero = styled.section`
  max-width: 600px;

  > span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    margin-top: 2.5rem;

    span {
      color: var(--cyan-500);
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;

    span {
      color: var(--cyan-500);
      font-weight: bold;
    }
  }
`;