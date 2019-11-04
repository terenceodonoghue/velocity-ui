import styled from '@emotion/styled';
import { variables } from '../Global/Global';

const { colors, typography } = variables;

export const Card = styled.div`
  display: block;
  border-radius: 1px;
  border: solid 1px rgba(46, 91, 255, 0.08);
  box-shadow: 0 10px 20px 0 rgba(46, 91, 255, 0.07);
  padding: 32px 24px;
  background-color: ${colors.white};
`;

export const Heading = styled.h3`
  margin: 0 0 26px 0;
  color: ${colors.blueyGrey};
  font-size: 13px;
  font-weight: ${typography.fontWeightRegular};
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
