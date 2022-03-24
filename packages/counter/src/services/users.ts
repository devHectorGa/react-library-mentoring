import { LINK, User } from "./common";

const POST_LINK = `${LINK}/users`;

export const getUser = async (userId: number) => {
  const URL = `${POST_LINK}/${userId}`;
  const response: User = await fetch(URL).then((posts) => posts.json());

  return response;
};
