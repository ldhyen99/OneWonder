import React, { Component } from 'react';
import Contain from '../Contain/Contain'
import Items from '../../Mockdata/Items';

class ContainList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:Items
        }
    }

    renderItem = () => {
        let {items} = this.state;
        return items.map((item, index) => {
            return (
                <Contain
                    item={item}
                    index={index}
                  />
            )
        });
    }

    render() {
        return (
            <div className="container">
            <div className="row pt-5">
        {this.renderItem()} 
            
       </div>
       </div>
        );
    }
}

export default ContainList;