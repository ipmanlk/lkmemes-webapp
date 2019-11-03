import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const { date, img, source, hash } = this.props.meme;
        const { theme } = this.props;

        return (
            <div className={theme.card}>
                <div className="card-body">
                    <img className="card-img" src={img} alt={hash} />
                </div>

                <div className="card-footer">
                    By {this.getSource(source)} @ {date}
                </div>
            </div>
        );
    }

    getSource = (url) => {
        try {
            const urlParts = url.split("/");
            const source = urlParts[urlParts.length - 1];
            return (
                <a href={url}>
                    {source}
                </a>
            );
        } catch {
            return "By Unknown";
        }
    }
}


export default Card;

