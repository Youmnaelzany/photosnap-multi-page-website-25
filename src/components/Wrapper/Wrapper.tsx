import * as React from "react";

import { cn } from "../../lib/utils";

type Variant = "default" | "narrow" | "wide" | "fluid";
type ElementType = React.ElementType;

type WrapperProps<T extends ElementType = "div"> = {
  as?: T;
  variant?: Variant;
  padded?: boolean;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

function Wrapper<T extends ElementType = "div">({
  as,
  variant = "default",
  padded = true,
  className,
  children,
  ...rest
}: WrapperProps<T>) {
  const Component = (as || "div") as ElementType;

  return (
    <Component
      {...rest}
      className={cn(
        "mx-auto",
        padded && "px-6 sm:px-12 lg:px-16",
        variant === "default" && "max-w-7xl",
        variant === "narrow" && "max-w-2xl",
        variant === "wide" && "max-w-screen-2xl",
        variant === "fluid" && "max-w-full",
        className
      )}
    >
      {children}
    </Component>
  );
}

export default Wrapper;
