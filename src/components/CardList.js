import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        const { memes, theme } = this.props;
        return memes.map(meme => (
            <Card key={meme.id} meme={meme} theme={theme}/>
        ));
    }
}

export default CardList;