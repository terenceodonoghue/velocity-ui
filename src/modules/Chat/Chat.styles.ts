import { css, InterpolationWithTheme, SerializedStyles } from '@emotion/core';
import { Theme } from '../../components';

export const avatar = css`
  flex-grow: 0;
  margin-right: 10px;
`;

export const conversation: InterpolationWithTheme<Theme> = (theme) => css`
  display: flex;
  border-left: 0;
  border-top: 0;
  padding: 17px 25px;
  cursor: pointer;
  transition: ${theme.effects.transition};

  &:hover {
    background-color: rgba(46, 91, 255, 0.08);
  }
`;

export const conversations: InterpolationWithTheme<Theme> = (theme) => css`
  border-radius: 1px;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 378px;
  background-color: ${theme.colors.white};
  list-style: none;
  overflow: hidden;
`;

export const conversationBody = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

export const conversationDetails = css`
  display: flex;
  justify-content: space-between;
  line-height: 1.47;
`;

export const conversationName: InterpolationWithTheme<Theme> = (theme) => css`
  flex-grow: 1;
  font-weight: ${theme.typography.fontWeightMedium};
`;

export const conversationPreview: InterpolationWithTheme<Theme> = (
  theme,
) => css`
  display: block;
  color: ${theme.colors.blueyGrey};
  line-height: 1.47;
  max-width: 255px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const conversationTime: InterpolationWithTheme<Theme> = (theme) => css`
  color: ${theme.colors.blueyGrey};
`;

export const dialog = css`
  display: flex;
  flex-direction: column;
  padding: 24px 70px;
  line-height: 1.47em;
`;

export const dialogAvatar = ({
  isCurrentUser,
}: {
  isCurrentUser: boolean;
}): SerializedStyles => css`
  position: absolute;
  bottom: 0;
  ${isCurrentUser ? 'right: 0' : 'left: 0'};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  transform: translateX(${isCurrentUser ? '48px' : '-48px'});
`;

export const dialogInput = css`
  margin: 24px;
`;

export const dialogMessage = ({
  isCurrentUser,
}: {
  isCurrentUser: boolean;
}): InterpolationWithTheme<Theme> => (theme): SerializedStyles =>
  css`
    position: relative;
    align-self: ${isCurrentUser ? 'flex-end' : 'flex-start'};
    border-radius: 25px 25px ${isCurrentUser ? '0 25px' : '25px 0'};
    margin: 16px 0;
    max-width: 70%;
    padding: 16px;
    background-color: ${isCurrentUser ? theme.colors.blue : theme.colors.white};
    color: ${isCurrentUser ? theme.colors.white : theme.colors.black};
  `;

export const dialogName = ({
  isCurrentUser,
}: {
  isCurrentUser: boolean;
}): InterpolationWithTheme<Theme> => (theme): SerializedStyles => css`
  position: absolute;
  ${isCurrentUser ? 'right: 1px' : 'left: 1px'};
  display: block;
  font-size: 14px;
  text-align: ${isCurrentUser ? 'right' : 'left'};
  color: #8097b1;
  transform: translateY(-38px);
`;

export const dialogTime = ({
  isCurrentUser,
}: {
  isCurrentUser: boolean;
}): InterpolationWithTheme<Theme> => (theme): SerializedStyles => css`
  display: block;
  font-size: 11px;
  font-weight: ${theme.typography.fontWeightMedium};
  letter-spacing: 2.2px;
  text-align: right;
  color: ${isCurrentUser ? '#e4e8f0' : '#8097b1'};
`;
