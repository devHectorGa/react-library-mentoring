import { FC } from "react";
import { ContainerProps } from "../PagesTypes";

type HomeSections = "Header" | "Main" | "Footer";

export type HomeProps = FC & {
  [Section in HomeSections]: ContainerProps;
};
