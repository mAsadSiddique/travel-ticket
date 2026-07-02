"use client";

import * as React from "react";
import { cn } from "@/utils/utils";
import { Button } from "@/components/elements/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/elements/dialog";

type AppModalSize = "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<AppModalSize, string> = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
};

export type AppModalProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactElement;
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  contentClassName?: string;
  bodyClassName?: string;
  size?: AppModalSize;
  showCloseButton?: boolean;
};

export function AppModal({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footer,
  contentClassName,
  bodyClassName,
  size = "md",
  showCloseButton = true,
}: AppModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => onOpenChange?.(nextOpen)}
    >
      {trigger ? <DialogTrigger render={trigger} /> : null}
      <DialogContent
        className={cn(sizeClasses[size], contentClassName)}
        showCloseButton={showCloseButton}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
        <div className={cn("flex flex-col gap-4", bodyClassName)}>
          {children}
        </div>
        {footer ? <DialogFooter>{footer}</DialogFooter> : null}
      </DialogContent>
    </Dialog>
  );
}

type AppModalActionProps = React.ComponentProps<typeof Button>;

export function AppModalCancel({
  children = "Cancel",
  className,
  variant = "outline",
  ...props
}: AppModalActionProps) {
  return (
    <DialogClose
      render={
        <Button variant={variant} className={className} {...props} />
      }
    >
      {children}
    </DialogClose>
  );
}

export function AppModalAction({
  children = "Submit",
  className,
  ...props
}: AppModalActionProps) {
  return (
    <Button type="submit" className={cn("btn-neo rounded-full", className)} {...props}>
      {children}
    </Button>
  );
}
