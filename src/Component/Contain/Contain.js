import React, { Component } from 'react';

class Contain extends Component {
    constructor(props) {
    super(props);
    this.state = {
        status:0,
       
    }
}
    annouceEdit = () => {
        alert('Edit Interactively in reactjs')
    }

    annouceRemove = () => {
        alert('Remove Interactively in reactjs')
    }

    annouceTest = (x) => {
        alert(x)
}

editClick = () => {
    this.setState({
        status:1
    });
}
saveClick = () => {
    this.setState({
        status:0
    });
}

displayCheck = () => {
    if(this.state. status === 0){
        return this.renderButton();
    }
    else {
        return this.renderFrom();
    }

}

    renderButton = () => {
        return (
        <div className="row">
            <div className="btn btn-group">
                <div className="btn btn-info" onClick={() => this.editClick()}> Edit </div>
                <div className="btn btn-warning "> Remove </div>
            </div>    
        </div> 
        ); 
    }
    
    renderFrom = () => {
        return (
        <div className="row">
        <div className="form-group">
            <input defaultValue={this.props.title} type="text" name="name" className="form-control" />
           
        </div>

        <div className="form-group">
            <div className="btn btn-block btn-danger" onClick={() => this.saveClick()}> Save </div>
        </div>
        </div>
        );
    }
  
   
    render() {
        let {item} = this.props;
    return (
        <div className="col-lg-4">
        <div className="row">
            <div className="col-lg-5">
            <div className="p-1">
                <img className="img-fluid rounded-circle" src={item.pic} alt=""/>
            </div>
            </div>
            <div className="col-lg-7">
                <div className="p-1">
                <h2 className="display-6"> {item.title} </h2>
                <p>
               {item.quote}
                </p>
            
                {this.displayCheck()}
            
       
        <hr/>
        </div>
            </div>
            </div>
        </div>
        
           
);
}
}

export default Contain;