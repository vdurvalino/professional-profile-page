import {Button, ButtonProps} from "@/components/ui/Button";
import React from "react";
import {twMerge} from "tailwind-merge";

export function SocialButton<C extends React.ElementType = "button">(
    {children, ...rest}: ButtonProps<C>
) {
    return (
        <Button
            variant={"ghost"}
            size={'xs'}
            className={twMerge("text-primary dark:text-primary-dark hover:text-primary-hover dark:hover:text-primary-hover-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10 rounded-full p-2 h-fit", rest.className)}
            {...rest}
        >
            {children}
        </Button>
    )
}