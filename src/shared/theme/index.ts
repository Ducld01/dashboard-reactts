export * from "./palette";
export * from "./breakpoints";

import { palette } from "./palette";

export const commonTheme = {
  space: {
    0: "1px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
    11: "44px",
    12: "48px",
  },
};

export const lightThemeCfg = {
  ...commonTheme,
  colors: palette.light,
};

export const darkThemeCfg = {
  ...commonTheme,
  colors: palette.dark,
};
