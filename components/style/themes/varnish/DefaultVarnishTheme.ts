import { animation } from './animation';
import { breakpoints } from './breakpoints';
import { button } from './button';
import { color, chartingColor, Color, RGB } from './colors';
import { link } from './link';
import { palette } from './palette';
import { shape } from './shape';
import { spacing } from './spacing';
import { typography } from './typography';
import { zIndex } from './zIndex';

export { Color, RGB };

export const DefaultVarnishTheme = {
    animation,
    breakpoints,
    button,
    chartingColor,
    color,
    link,
    palette,
    shape,
    spacing,
    typography,
    zIndex,

    // when adding more, consider what material and ant have done:
    // https://material-ui.com/customization/default-theme/
    // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
};
