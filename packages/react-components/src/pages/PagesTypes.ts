import { FC } from "react";

export type ContainerProps<T = {}, G = {}> = FC<T> & { Content: FC<G> };
