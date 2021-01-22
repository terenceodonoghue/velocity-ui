import { InputHTMLAttributes } from 'react';

export interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  primary?: string;
  secondary?: string;
}
