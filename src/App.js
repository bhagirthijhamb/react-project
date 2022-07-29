import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";
import SearchBox from "./components/SearchBox";

const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchChangeHandler = (e) => {
    if (searchWord.trim().length !== 0) {
      setSearchWord(e.target.value);
    }
  };

  const filteredPosts = (posts) => {
    return posts.filter((post) => post.title.startsWith(searchWord));
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = () => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Fetching data failed");
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setPosts(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    };
    fetchPosts();
  }, []);

  const postContent = filteredPosts(posts).map((post) => (
    <Post key={post.id} post={post} />
  ));

  return (
    <div className="App">
      <h1>Posts</h1>
      <SearchBox
        searchWord={searchWord}
        searchChangeHandler={searchChangeHandler}
      />
      {isLoading && <p>Loading...</p>}
      {postContent}
    </div>
  );
}

export default App;
