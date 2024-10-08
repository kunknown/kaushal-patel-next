import React from "react";

export interface TestButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const TestButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: TestButtonProps) => {
  return (
    <button type="button" style={{ backgroundColor }} {...props}>
      {label}
    </button>
  );
};
