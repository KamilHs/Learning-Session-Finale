import React from 'react';
import { inputValueChange } from '../actions/posts';
import { connect } from 'react-redux';
import fetchPosts from '../middlewares/fetchingData'

class Posts extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    handleChangeInput(text) {
        this.props.inputValueChange(text);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchPosts(this.props.inputText);
    }

    render() {
        switch (this.props.status) {
            case "Loading":
                return (
                    <div className="container">
                        <h1>Posts</h1>
                        <form onSubmit={(e) => (this.handleSubmit(e))}>
                            <input
                                type="text"
                                value={this.props.inputText}
                                onChange={(e) => this.handleChangeInput(e.target.value)}
                            />
                            <button onClick={(e) => this.handleSubmit(e)}>Search</button>
                        </form><span
                        >Loading...</span>
                    </div>
                )
            case "Success":
                return (
                    <div className="container">
                        <h1>Posts</h1>
                        <form onSubmit={(e) => (this.handleSubmit(e))}>
                            <input
                                type="text"
                                value={this.props.inputText}
                                onChange={(e) => this.handleChangeInput(e.target.value)}
                            />
                            <button onClick={(e) => this.handleSubmit(e)}>Search</button>
                        </form><div
                            className="posts">
                            {this.props.posts.map((post, index) => (
                                <div key={index} className="post">
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                                </div>)
                            )}
                        </div>
                    </div>
                )
            case "Error":
                return (
                    <div className="container">
                        <h1>Posts</h1>
                        <form onSubmit={(e) => (this.handleSubmit(e))}>
                            <input
                                type="text"
                                value={this.props.inputText}
                                onChange={(e) => this.handleChangeInput(e.target.value)}
                            />
                            <button onClick={(e) => this.handleSubmit(e)}>Search</button>
                        </form>
                        <span>ERROR</span>
                    </div>
                )
            default:
                return <div></div>
        }
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.FetchingPosts.posts,
        status: state.FetchingPosts.status,
        inputText: state.InputChangePosts,
    }
}

export default connect(mapStateToProps, {
    inputValueChange,
    fetchPosts
})(Posts)
