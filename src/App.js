import React,{useState, useEffect} from 'react';
import axios from 'axios';

import Posts from './components/Posts';
import Pagination from './components/Pagination';
import 'bootstrap/dist/css/bootstrap.css';

const App1 = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentpage, setCurrentpage] = useState(1);
    const postsperpage = 5;

 

      useEffect(() => {
        const getPosts = async () => {
          // setLoading(true)
          await axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(res => {
                      setPosts(res.data)
                      setLoading(false)
                    }).catch(err => console.log(err))
        };

          getPosts()
      },[posts])

      const indexOfLastPost = currentpage * postsperpage;
      const indexOfFirstPost = indexOfLastPost - postsperpage;
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

      
    const paginate = pageNum => setCurrentpage(pageNum)

    const lastPage = posts.length / postsperpage;

    const nextPage = () => (currentpage === lastPage) ? setCurrentpage(currentpage) : setCurrentpage(currentpage + 1)                    

    const prevPage = () => (currentpage === 1) ? setCurrentpage(currentpage) : setCurrentpage(currentpage - 1)

    return ( 
    <div className="container">
        <h1 className="my-5 text-primary text-center">React Pagination</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination postsPerPage={postsperpage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
      </div>
     );
}
 
export default App1;