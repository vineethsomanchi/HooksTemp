import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function Test1() {
    return (
        <div>
            <h1>TEST 1</h1>
            <h1>
                <NavLink to="/test2">
                    Test2
                </NavLink>
            </h1>
            
        </div>
    )
}

export default withRouter(Test1);