import cn from 'clsx';
import React, { ReactElement } from 'react';

import styles from './Typography.module.css';

type TVariant =
    'header1' |
    'header2' |
    'header3' |
    'header4' |
    'header4Regular' |
    'headerExtra' |
    'textButton' |
    'textButtonUppercase' |
    'text' |
    'textSmall' |
    'textSemibold' |
    'tooltip' |
    'boldTooltip' |
    'semiBoldTooltip' |
    'textButtonSmall' |
    'none';

type TComponent = HTMLParagraphElement | HTMLSpanElement;

interface ITypographyProps extends React.HTMLAttributes<TComponent> {
    component?: React.ElementType;
    htmlFor?: string;
    variant?: TVariant
}

const Typography = React.forwardRef<TComponent, ITypographyProps>(
    (props, ref): ReactElement => {
        const {
            component = 'p',
            className,
            children,
            variant,
            ...other
        } = props;

        const Component = component;

        return (
            <Component
                ref={ref}
                className={cn(
                    styles.typography,
                    {
                        header1: variant === 'header1',
                        header2: variant === 'header2',
                        header3: variant === 'header3',
                        header4: variant === 'header4',
                        header4Regular: variant === 'header4Regular',
                        headerExtra: variant === 'headerExtra',
                        text: variant === 'text',
                        textSmall: variant === 'textSmall',
                        textSemibold: variant === 'textSemibold',
                        textButton: variant === 'textButton',
                        textButtonUppercase: variant === 'textButtonUppercase',
                        tooltip: variant === 'tooltip',
                        boldTooltip: variant === 'boldTooltip',
                        semiBoldTooltip: variant === 'semiBoldTooltip',
                        textButtonSmall: variant === 'textButtonSmall',
                    },
                    className,
                )}
                {...other}
            >
                {children}
            </Component>
        );
    },
);

Typography.displayName = 'Typography';

export type { ITypographyProps, TComponent,TVariant };
export { Typography };
