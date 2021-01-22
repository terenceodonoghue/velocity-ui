export interface Theme {
  palette?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    neutral?: {
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
    ui?: {
      green?: string;
      purple?: string;
      red?: string;
      teal?: string;
      yellow?: string;
    };
    tonalOffset?: number;
  };
  transitions?: {
    duration?: {
      shortest?: number;
      shorter?: number;
      short?: number;
      standard?: number;
      complex?: number;
      enteringScreen?: number;
      leavingScreen?: number;
    };
    easing?: {
      easeInOut?: string;
      easeOut?: string;
      easeIn?: string;
      sharp?: string;
    };
  };
  typography?: {
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: {
      light?: number;
      regular?: number;
      medium?: number;
      bold?: number;
    };
  };
  zIndex?: {
    appBar?: number;
    drawer?: number;
  };
}

export interface ThemeProps {
  theme?: Theme;
}
