import React from 'react';
import './Header.css';

function HeaderTitle({date}) {
    return (
        <div className="header-title">
            <h4>Lambda School</h4>
            <span>@LambdaSchool</span>
            <span>{date}</span>
        </div>
    );
}

export default HeaderTitle;