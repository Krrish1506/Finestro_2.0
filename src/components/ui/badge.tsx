import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-bold w-fit whitespace-nowrap shrink-0 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/10 text-primary hover:bg-primary/20",
        secondary: "border-transparent bg-secondary/10 text-secondary hover:bg-secondary/20",
        destructive: "border-transparent bg-red-100/50 text-red-600 hover:bg-red-200/50",
        outline: "text-foreground border-border hover:bg-accent/10",
        success: "border-transparent bg-emerald-100/50 text-emerald-600 hover:bg-emerald-200/50",
        warning: "border-transparent bg-amber-100/50 text-amber-600 hover:bg-amber-200/50",
        info: "border-transparent bg-blue-100/50 text-blue-600 hover:bg-blue-200/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }
>(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "span";
  const showDot = variant === "success" || variant === "warning" || variant === "info";

  return (
    <Comp
      ref={ref}
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {showDot && (
        <span className={cn(
          "size-1.5 rounded-full",
          variant === "success" && "bg-emerald-500 animate-pulse-soft",
          variant === "warning" && "bg-amber-500 animate-pulse-soft",
          variant === "info" && "bg-blue-500 animate-pulse-soft"
        )} />
      )}
      {props.children}
    </Comp>
  );
});
Badge.displayName = "Badge";

export { Badge, badgeVariants };
