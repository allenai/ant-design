import { Breakpoint } from './spacing';

export const breakpoints = {
    xs: Breakpoint.fromPixels('xs', 480),
    sm: Breakpoint.fromPixels('sm', 576),
    md: Breakpoint.fromPixels('md', 768),
    lg: Breakpoint.fromPixels('lg', 992),
    xl: Breakpoint.fromPixels('xl', 1200),
    xxl: Breakpoint.fromPixels('xxl (deprecated, use xl2)', 1600),
    xl2: Breakpoint.fromPixels('xl2', 1600),
};

/* Usage:
    @media ${({ theme }) => above(theme.breakpoints.lg)} {
      // styles for (min-width: 993px)
    }
*/
export function above(breakpoint: Breakpoint) {
    return `(min-width: ${breakpoint.getValue() + 1}px)`;
}

/* Usage:
    @media ${({ theme }) => below(theme.breakpoints.lg)} {
      // styles for (max-width: 992px)
    }
*/
export function below(breakpoint: Breakpoint) {
    return `(max-width: ${breakpoint.getValue()}px)`;
}
