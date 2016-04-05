import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchPost} from '../actions'
import {Link} from 'react-router'

class PostsShow extends Component {

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);

        this.renderPost = this.renderPost.bind(this);
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderPost()}
                </div>
            </div>
        );
    }

    renderPost() {
        const post = this.props.posts;
        return (
            <div>
                <strong>{post.title}</strong>
                <br/><br/>
                <span>{post.categories}</span>
                <br/><br/>
                <span>{post.content}</span>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPost}, dispatch);
}

function mapStateToProps(state) {
    return {posts: state.posts.all};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);