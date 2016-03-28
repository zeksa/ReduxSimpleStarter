import React, {Component} from 'react'
import _ from 'lodash'

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        const onVideoSearch = this.props.onVideoSearch;

        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event, onVideoSearch)}/>
            </div>
        )
    }

    onInputChange(event, onVideoSearch) {
        this.setState({term: event.target.value});

        const onVideoSearchTimed = _.debounce(onVideoSearch, 800);
        onVideoSearchTimed(event.target.value);
    }

}

export default SearchBar;