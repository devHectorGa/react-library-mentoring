import { Children, isValidElement, ReactNode, FC } from "react";

export const childrenOrDefault = (
  children: ReactNode,
  type: FC,
  defaultComponent: ReactNode
): ReactNode =>
  Children.toArray(children).find((c) =>
    isValidElement(c) ? c.type === type : false
  ) || defaultComponent;
