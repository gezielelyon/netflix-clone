import React from 'react';

import './styles.css';

const Header = ({black}) => {
    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c529.png" alt="netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="user" />
                </a>
            </div>
        </header>
    );
}

export default Header;