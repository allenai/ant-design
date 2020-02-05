export class Spacing {
    // eslint-disable-next-line no-useless-constructor, no-empty-function
    constructor(public displayName: string, public px: string) {}

    static fromPixels(displayName: string, px: number) {
        return new Spacing(displayName, `${px}px`);
    }

    toString() {
        return this.px;
    }

    getValue() {
        return parseFloat(this.px);
    }
}

/**
 * We don't want breakpoints to change based on the user's default font
 * size, so for Breakpoints we specifically stringify them as pixels.
 */
export class Breakpoint extends Spacing {
    static fromPixels(displayName: string, px: number) {
        return new Breakpoint(displayName, `${px}px`);
    }
}

export const spacing = {
    xxs: Spacing.fromPixels('xxs (deprecated, use xs2)', 4),
    xs2: Spacing.fromPixels('xxs', 4),
    xs: Spacing.fromPixels('xs', 8),
    sm: Spacing.fromPixels('sm', 12),
    md: Spacing.fromPixels('md', 16),
    lg: Spacing.fromPixels('lg', 24),
    xl: Spacing.fromPixels('xl', 36),
    xxl: Spacing.fromPixels('xxl (deprecated, use xl2)', 48),
    xl2: Spacing.fromPixels('xl2', 48),
    xxxl: Spacing.fromPixels('xxxl (deprecated, use xl3)', 64),
    xl3: Spacing.fromPixels('xl3', 64),
    xl4: Spacing.fromPixels('xl4', 96),
    xl5: Spacing.fromPixels('xl5', 128),
};
