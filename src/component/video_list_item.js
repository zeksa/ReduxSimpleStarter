import React, {Component} from 'react'

class VideoListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const video = this.props.video;
        const imageUrl = video.snippet.thumbnails.default.url;
        const onClick = this.props.onVideoSelect;

        return (
            <li className="list-group-item" onClick={() => onClick(video)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem