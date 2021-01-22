import { ComponentType, SVGProps } from 'react';

export interface ListItemIconProps extends SVGProps<SVGSVGElement> {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}
