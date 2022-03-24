import { LINK, Post } from "./common";

const POST_LINK = `${LINK}/posts`;

export const getPosts = async () => {
  const response: Post[] = await fetch(POST_LINK).then((posts) => posts.json());

  return response;
};
