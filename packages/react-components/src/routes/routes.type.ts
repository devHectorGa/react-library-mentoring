import { RouteProps as RoutePropsLib } from "react-router-dom";
import { Link } from "react-router-dom";

export enum MainRoutes {
  HOME = "/",
  ABOUT = "/about",
}

export type RouteProps = {
  [path: string]: Omit<RoutePropsLib, "path">;
};

export { Link };
