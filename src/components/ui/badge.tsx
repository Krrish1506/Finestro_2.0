import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-2 gap-1.5 [&>svg]:pointer-events-none transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive/10 text-destructive border-destructive/20",
        outline:
          "text-foreground border-border",
        success:
          "border-emerald-500/20 bg-emerald-50 text-emerald-700",
        warning:
          "border-amber-500/20 bg-amber-50 text-amber-700",
        info:
          "border-blue-500/20 bg-blue-50 text-blue-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  const showDot = variant === "success" || variant === "warning" || variant === "info";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {showDot && (
        <span className={cn(
          "size-1.5 rounded-full",
          variant === "success" && "bg-emerald-500 animate-pulse-dot",
          variant === "warning" && "bg-amber-500",
          variant === "info" && "bg-blue-500"
        )} />
      )}
      {props.children}
    </Comp>
  );
}
export { Badge, badgeVariants };
