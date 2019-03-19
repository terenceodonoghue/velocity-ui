import styled from '@emotion/styled';

export const Sidebar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 357px;
`;

export const Avatar = styled.div`
  margin: 32px auto 15px;
  text-align: center;
`;

export const Name = styled.h2`
  margin: 0 0 3px;
  font-size: 28px;
  font-weight: var(--font-weight-light);
  text-align: center;
`;

export const Title = styled.h3`
  margin: 0 0 33px;
  color: var(--color-bluey-grey);
  font-size: var(--base-font-size);
  font-weight: var(--font-weight-regular);
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  margin: 0 -8px 40px;
`;

export const Button = styled.div`
  flex: 1;
  padding: 0 8px;
`;

export const Rule = styled.hr`
  border: 0;
  height 1px;
  margin-bottom: 42px;
  background-color: #e4e8f0;
`;

export const DetailsList = styled.dl``;

export const DetailsTerm = styled.dt`
  color: #b0bac9;
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 1.1px;
  text-transform: uppercase;
`;

export const DetailsDescription = styled.dd`
  margin: 0 0 24px;
  line-height: 1.47;
`;
