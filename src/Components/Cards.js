import React from 'react';
import './cards.css';

const Cards = ({url,title,id,remove}) => {
    return(
            <div className="col-md-4 col-xs-6" >
                <div className="card"style={{width:"28rem"}}>
                  <img className="card-img-top"  src={url} alt={title}/>
                  <div className="card-body">
                    <h4 className="card-title text-left text-primary">Project Name</h4>
                    <p className="card-text text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <button onClick={remove} className="Delete">Delete</button>
                </div>
            </div>
    );
}
export default Cards;