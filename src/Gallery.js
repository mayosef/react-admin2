import React from 'react';



class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(gallery => {
            this.setState({gallery:gallery})
        })
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Photos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.gallery.map((gallery, key) => {
                            return (
                                <tr key={key}>
                                    <td>{gallery.userId}</td>
                                    <td>{gallery.id}</td>
                                    <td>{gallery.title}</td>
                             
                                </tr>
                            )
                        })} 
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Gallery;