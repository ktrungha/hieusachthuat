import { css } from 'styled-components';

export const desktopMinWidth = 601;
export const mobileMaxWidth = 600;

export const media = {
  desktop: (first: any, ...rest: any[]) => {
    return css`
      @media (min-width: ${desktopMinWidth}px) {
        ${css(first, ...rest)}
      }
    `;
  },
  mobile: (first: any, ...rest: any[]) => {
    return css`
      @media (max-width: ${mobileMaxWidth}px) {
        ${css(first, ...rest)}
      }
    `;
  },
};
