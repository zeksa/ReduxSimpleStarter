import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './component/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './component/video_list'
import VideoDetail from './component/video_detail'

const API_KEY = 'AIzaSyAPj8zAckQx4W7YcTjwL6mJHejVD_2BZIs';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.setState = this.setState.bind(this);
        this.setData = this.setData.bind(this);
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.onVideoSearch=this.onVideoSearch.bind(this);

        this.onVideoSearch("Hello World");
    }

    setData(data) {
        this.setState({
            videos: data,
            selectedVideo: data[0]
        });
    }

    onVideoSelect(selected) {
        this.setState({
            selectedVideo: selected
        })
    }

    onVideoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, this.setData);
    }

    render() {
        return (
            <div>
                <SearchBar onVideoSearch={this.onVideoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));