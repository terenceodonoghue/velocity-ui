import styled from '@emotion/styled';

export const Checkbox = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

export const Label = styled.label`
  display: inline-block;
  color: #b0bac9;
  font-size: 12px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const Slider = styled.input`
  appearance: none;
  border-radius: 7px;
  height: 4px;
  width: ${props => props.width || '210px'};
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


export const Switch = styled.label`
  position: relative;
  display: inline-block;
  height: 20px;
  width: 36px;
  transition: var(--transition);
`;

export const Text = styled.input`
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

export const Toggle = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  border-radius: 10px;
  width: 36px;
  background-color: rgba(135, 152, 173, 0.4);
  cursor: pointer;
  transition: var(--transition);

  ${Checkbox}:disabled + & {
    opacity: 0.4;
  }

  ${Checkbox}:checked:enabled + & {
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

    ${Checkbox}:checked + & {
      transform: translateX(16px);
    }
  }
`;
