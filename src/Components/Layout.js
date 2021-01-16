import React from 'react';
import CardList from './CardList.js';

class Layout extends React.Component {

	state={
		photos:[],
	}

	componentDidMount() {
	    fetch('https://jsonplaceholder.typicode.com/photos')
	      .then(response=> response.json())
	      .then(photos => {
	      	let fiteredPhotos = photos.slice(0,9)
	      	this.setState({ 
	      		photos: fiteredPhotos
	      	})
	      })
	  }
	  deleteCardHandler = (personIndex)=>{
        const photos = [...this.state.photos];
        photos.splice(personIndex,1);
        this.setState({photos:photos})
    }

	render() {
		return (
			<div className="container" style={{margin:"30px 100px"}}>
				<div style={{display:"flex"}}>
					<h1>Page Heading</h1>
					&nbsp;&nbsp;
					<h2 className="text-muted">Secondary Text</h2>
				</div>
				<hr/>
				<CardList deleteCard={this.deleteCardHandler} photos={this.state.photos}/>
				<hr/>
				<div style={{display:"flex"}}>copyright © your website 2021</div>
			</div>
		)
	}
}

export default Layout