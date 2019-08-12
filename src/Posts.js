import React from 'react';


class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            posts: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            this.setState({posts:posts})
        })
    }
    render() {
        return (
            <div>
                Posts
                <table>
                    <thead>
                        <tr>
                             <th>ID</th>
                             <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((post, key) => {
                            return (
                                <tr key={key}>
                                    <td>{post.userId}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Posts;