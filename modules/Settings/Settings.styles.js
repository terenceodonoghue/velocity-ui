import styled from '@emotion/styled';

export const Content = styled.div`
  padding: 0 8px;
`;

export const Paragraph = styled.p`
  margin: 25px 0;
  line-height: 1.47;
`;

export const Options = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -11px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 11px;
`;

export const Text = styled.div`
  flex: 1;
  margin: -3px 0;
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

export const Integrations = styled.div``;

export const Personal = styled.div``;

export const Notifications = styled.div`
  ${Option} {
    flex: 0 1 35%;
    margin-right: 85px;
    max-width: 297px;
  }
`;
