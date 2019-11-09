import styled from '@emotion/styled';

export const Card = styled.div`
  display: block;
  border-radius: 1px;
  border: solid 1px rgba(46, 91, 255, 0.08);
  box-shadow: 0 10px 20px 0 rgba(46, 91, 255, 0.07);
  padding: 32px 24px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Heading = styled.h3`
  margin: 0 0 26px 0;
  color: ${(props) => props.theme.colors.blueyGrey};
  font-size: 13px;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
