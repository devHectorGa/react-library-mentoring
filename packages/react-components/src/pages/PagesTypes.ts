import { FC, PropsWithChildren } from 'react';

export type ContainerProps<T = {}, G = {}> = FC<PropsWithChildren<T>> & {
  Content: FC<PropsWithChildren<G>>;
};
