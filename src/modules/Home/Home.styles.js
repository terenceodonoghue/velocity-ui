import styled from '@emotion/styled';
import { Container, variables } from '../../components';

const { colors, typography } = variables;

export const Heading = styled.h2`
  margin: 0 0 13px;
  width: 135px;
  font-size: 28px;
  font-weight: ${typography.fontWeightLight};
  line-height: 1.14;
`;

export const Paragraph = styled.p`
  margin: 0;
  color: ${colors.blueyGrey};
  line-height: 1.47;
`;

export const Text = styled.div`
  padding: 45px 0 42px 61px;
`;

export const Welcome = styled(Container.Card)`
  display: flex;
  height: 230px;
  padding: 0 27px 0 46px;
  width: 558px;
`;
