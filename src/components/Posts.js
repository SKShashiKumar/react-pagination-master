import React from 'react';

const Posts = ({posts, loading}) => {
    return ( 
        <>
            {(loading) ? <h1>Loading</h1> : 
            <div>
            {posts.map(post => (
                <div key={post.id} className="alert alert-primary">
                    <h4 className="alert-heading">{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
            }
        </>
     );
}
 
export default Posts;