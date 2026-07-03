import Post from "./Post.jsx";
import { useContext, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  }, []);
  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
