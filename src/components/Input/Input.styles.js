import styled from '@emotion/styled';

export const CheckboxInput = styled.input`
  height: 0;
  margin: 0;
  width: 0;
  opacity: 0;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 36px;
  user-select: none;
`;

export const CheckboxSwitch = styled.span`
  position: relative;
  border-radius: 10px;
  height: 20px;
  width: 36px;
  background-color: rgba(135, 152, 173, 0.4);
  cursor: pointer;
  transition: var(--transition);

  ${/* sc-selector */CheckboxInput}:disabled + & {
    opacity: 0.4;
  }

  ${/* sc-selector */CheckboxInput}:checked:enabled + & {
    background-color: var(--color-medium-green);
  }

  &::before {
    position: absolute;
    content: '';
    left: 2px;
    top: 2px;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    background-color: var(--color-white);
    transition: var(--transition);

    ${/* sc-selector */CheckboxInput}:checked + & {
      transform: translateX(16px);
    }
  }
`;

export const CheckboxText = styled.div`
  margin-right: 58px;
  font-weight: var(--font-weight-medium);
  line-height: 1.47;

  p {
    margin: 0;

    &:nth-of-type(2) {
      color: var(--color-bluey-grey);
      font-weight: var(--font-weight-regular);
    }
  }
`;

export const RadioInput = styled.input`
  height: 0;
  margin: 0;
  width: 0;
  opacity: 0;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: var(--font-weight-medium);
`;

export const RadioSwitch = styled.span`
  display: inline-block;
  border: solid 1px rgba(128, 151, 177, 0.5);
  border-radius: 50%;
  height: 16px;
  margin: 0 8px 0 0;
  width: 16px;
  background-color: var(--color-white);

  ${/* sc-selector */RadioInput}:disabled + & {
    opacity: 0.4;
  }

  ${/* sc-selector */RadioInput}:checked:enabled + & {
    border: solid 4px var(--color-clear-blue);
    background-color: var(--color-white);
  }
`;

export const SliderInput = styled.input`
  appearance: none;
  border-radius: 7px;
  height: 4px;
  width: 210px;
  background-color: rgba(46, 91, 255, 0.15);
  outline: none;
  transition: var(--transition);

  &::-moz-range-progress {
    background-color: var(--color-clear-blue);
  }

  &::-moz-range-thumb {
    border: solid 4px var(--color-clear-blue);
    border-radius: 50%;
    height: 8px;
    width: 8px;
    background: var(--color-white);
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    border: solid 4px var(--color-clear-blue);
    border-radius: 50%;
    height: 16px;
    width: 16px;
    background: var(--color-white);
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export const TextInput = styled.input`
  display: block;
  border: solid 1px #e0e7ff;
  border-radius: 5px;
  height: 38px;
  margin: 7px 0;
  max-width: 270px;
  padding: 10px 16px;
  width: 100%;
  background-color: rgba(224, 231, 255, 0.2);
  color: var(--color-dark);
  font-family: inherit;
  font-size: var(--base-font-size);
  transition: var(--transition);

  &:disabled {
    opacity: 0.3;
  }

  &:focus {
    border: solid 1px var(--color-clear-blue);
    outline: 0;
  }
`;

export const TextLabel = styled.label`
  display: inline-block;
  color: #b0bac9;
  font-size: 12px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
