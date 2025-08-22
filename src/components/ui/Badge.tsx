import React from "react";
import {tv, VariantProps} from "tailwind-variants";

const badgeVariants = tv({
    base: "inline-flex w-fit items-center gap-2 rounded-full font-medium transition-all",
    variants: {
        colorScheme: {
            green: "bg-primary/25 text-green-800 dark:bg-primary-dark/25 dark:text-green-200",
        },
        size: {
            sm: "px-2 py-1 text-xs font-normal",
            md: "px-2.5 py-1 text-sm font-normal",
            lg: "px-4 py-2 text-sm",
        },
    },
    // Default variants are applied if no props are specified.
    defaultVariants: {
        colorScheme: "green",
        size: "md",
    },
});

type BadgeVariants = VariantProps<typeof badgeVariants>;

type PolymorphicProps<C extends React.ElementType, P> = P & {
    as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof P | "as">;

export type BadgeProps<C extends React.ElementType = "span"> =
    PolymorphicProps<
        C,
        BadgeVariants & {
        className?: string;
        leftIcon?: React.ReactNode;
        rightIcon?: React.ReactNode;
    }
    >;

export const Badge = React.forwardRef(
    <C extends React.ElementType = "span">(
        {as, colorScheme, size, className, leftIcon, rightIcon, ...props}: BadgeProps<C>,
        ref: React.Ref<Element>
    ) => {
        const Component = as || "span";

        return (
            // @ts-expect-error Expected error as we are passing props to a dynamic component.
            <Component
                ref={ref}
                className={badgeVariants({colorScheme, size, className})}
                {...props}
            >
                {leftIcon && leftIcon}
                {props.children}
                {rightIcon && rightIcon}
            </Component>
        );
    }
);

Badge.displayName = "Badge";