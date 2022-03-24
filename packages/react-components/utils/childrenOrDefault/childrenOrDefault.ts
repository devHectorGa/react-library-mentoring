import { Children, isValidElement, ReactNode } from "react";

export const childrenOrDefault = (
  children: ReactNode,
  type: Element,
  defaultComponent: ReactNode
): ReactNode =>
  Children.toArray(children).find((c) =>
    isValidElement(c) ? c.type === type : false
  ) || defaultComponent;
