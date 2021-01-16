import React , {Component} from 'react';
import Cards from './Cards';

class CardList extends Component {
    render(){
        return(
             <div style={{margin:"10px 10px"}}>
                <div className="row">
                  {
                    this.props.photos.map((photo, index) => {
                      return (
                        <Cards remove={()=>this.props.deleteCard(index)} key={index} id={photo.id} title={photo.title} url={photo.url} />
                      )
                    })
                  }
                </div>
            </div>
        ) 
    }
}
export default CardList;

