/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

export const Personal = styled.div`
  height: 492px;
  width: 1140px;
`;

export const Notifications = styled.div`
  height: 297px;
  width: 1140px;
`;

export const Content = styled.div`
  padding: 0 8px;
`;

export const Paragraph = styled.p`
  margin: 22px 0;
  line-height: 1.47;
`;

export const Row = styled.div`
  margin: 0 -11px;
  padding: 13px 0;
`;

export const Column = styled.div`
  display: inline-block;
  padding: 0 11px;
  width: ${props => props.width || 'auto'};
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin: -2px 0;
  width: 270px;
`;

export const Text = styled.div`
  flex-grow: 1;
`;

export const Label = styled.p`
  margin: 0;
  font-weight: var(--font-weight-medium);
  line-height: 1.47;
`;

export const Description = styled.p`
  margin: 0;
  color: var(--color-bluey-grey);
  font-weight: var(--font-weight-regular);
  line-height: 1.47;
`;
