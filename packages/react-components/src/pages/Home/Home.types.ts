import { FC, PropsWithChildren } from 'react';
import { ContainerProps } from '../PagesTypes';

type HomeSections = 'Header' | 'Main' | 'Footer';

export type HomeProps = FC<PropsWithChildren<{}>> & {
  [Section in HomeSections]: ContainerProps;
};
