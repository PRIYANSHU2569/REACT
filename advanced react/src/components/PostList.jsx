import Post from "./Post.jsx";
import { useContext, useState, useEffect } from "react";
import { PostList as PostListData } from "../store/post-list-store.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();

    const signal = controller.signal;
    fetch("https://dummyjson.com/posts" , {signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });

      return ()=>{
        controller.abort();
      }

  }, []);
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
