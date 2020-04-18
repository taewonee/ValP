import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Navigation = (props, context) => (
    <div classNmae = "navigation">
        <div className = "inner">
            <Link to='/'>ValuePlus</Link>
            <Link to ="/cart"></Link>
        </div>
    </div>
)