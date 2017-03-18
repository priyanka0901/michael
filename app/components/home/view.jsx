'use strict';

import React from 'react';
import machine from '../data/data.js';

const ViewLayout = React.createClass({
    render:function(){
        return(
            <div className="viewlayout">
                <input name="search" placeholder="search" className="search" />
            </div>
        )
    }
});
    


export default ViewLayout;