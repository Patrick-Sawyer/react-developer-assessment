import React, {useEffect, useState} from 'react';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = () => {
    fetch('/api/posts')
    .then(response => response.json())
    .then(data => {
      setPosts(data);
    });
  }

  return <div>{/* Complete the exercise here. */}</div>;
}

export default App;
