
import React from "react";

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "CommentBox";
    }
    _handleClick = (e) => {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1 onClick={this._handleClick}>{this.props.text}</h1>
            </div>
        );
    }
}

export default CommentBox;
