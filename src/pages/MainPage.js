import React from 'react';
import {TagList} from "../Components/TagList";


function MainPage() {
    const tags = [
        'Travel', 'New York', 'London', 'IKEA', 'NORWAY',
        'DIY', 'Ideas', 'Baby', 'Family', 'News',
        'Clothing', 'Shopping', 'Sports', 'Games'
    ];


    return (
        <div>
            {tags.map((tag, index) => <TagList tag={tag} key={index} />)}
        </div>
    );
}



export default MainPage
