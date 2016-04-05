import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import {createPost} from '../actions'
import {Link} from 'react-router'

class PostsNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(props) {
        this.props.createPost(props).then(() => {
            this.context.router.push("/")
        });
    }

    render() {
        const {fields:{title, categories, content}, handleSubmit}=this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="from-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>

                    <div className="text-help">{title.touched ? title.error : ''}</div>
                </div>
                <div className="from-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>

                    <div className="text-help">{categories.touched ? categories.error : ''}</div>
                </div>
                <div className="from-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>

                    <div className="text-help">{content.touched ? content.error : ''}</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }

}

function validate(value) {
    const errors = {};

    if (!value.title) {
        errors.title = 'Enter value'
    }
    if (!value.categories) {
        errors.categories = 'Enter value'
    }
    if (!value.content) {
        errors.content = 'Enter value'
    }

    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate: validate
}, null, {createPost})(PostsNew);