import React from "react";
import {tv, VariantProps} from "tailwind-variants";

const buttonVariants = tv({
    base: "relative inline-flex gap-2 items-center justify-center rounded-md font-medium focus:outline focus:outline-2 focus:outline-primary dark:focus:outline-primary-dark focus:outline-offset-2 hover:cursor-pointer disabled:cursor-not-allowed transition-all",
    variants: {
        variant: {
            solid: "bg-primary text-white hover:bg-primary-hover active:bg-gray-700 dark:bg-primary-dark dark:text-font-primary-dark dark:hover:bg-primary-hover-dark dark:active:bg-gray-300",
            outline: "border border-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 active:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:active:bg-gray-700",
            ghost: "text-gray-600 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-primary-hover dark:active:bg-gray-700",
        },
        size: {
            xs: "h-7 px-2 text-xs",
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-4 text-sm",
            lg: "h-12 px-6 text-base",
        },
    },
    defaultVariants: {variant: "solid", size: "md"},
})


type ButtonVariants = VariantProps<typeof buttonVariants>;

type PolymorphicProps<C extends React.ElementType, P> = P & {
    as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof P | "as">;

export type ButtonProps<C extends React.ElementType = "button"> =
    PolymorphicProps<
        C,
        ButtonVariants & { className?: string }
    >;

export const Button = React.forwardRef(
    <C extends React.ElementType = "button">(
        {as, variant, size, className, ...props}: ButtonProps<C>,
        ref: React.Ref<Element>
    ) => {
        const Component = as || "button";

        return (
            // @ts-expect-error Erro esperado
            <Component
                ref={ref}
                className={buttonVariants({size, variant, className})}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
