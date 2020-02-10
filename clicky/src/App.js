import React, { Component } from 'react';
import './components/navbar/navbar'
import Navbar from './components/navbar/navbar';
import images from './images.json'
import Images from './components/images/Images';

class App extends Component {

  state = {

    images,
    clickedImage: [],
    score: 0,

  }



  randoImg = (images) => {
    for (var i = images.length - 1; i > 0; i--) {
      var k = Math.floor(Math.random() * (i + 1));
      [images[i], images[k]] = [images[k], images[i]];
    }
    return images;
  }



  eachClick = id => {
    const mixImg = this.randoImg(images);
    this.setState({ images: mixImg });

    if (this.state.clickedImage.includes(id)) {
      this.setState({
        score: 0,
        clickedImage: [],
        message: "Oops, It seems you already clicked that one"
      });
    }

    else if (this.state.score < 11) {
      this.setState({
        clickedImage: this.state.clickedImage.concat(id),
        score: this.state.score + 1,
        message: "Don't get too confident"

      });
    }

    else {
      this.setState({
        clickedImage: [],
        score: 0,
        message: "You won (Very Surprising)"
      })
    }



  }






  render() {
    return (
      <>

        <Navbar
        score ={this.state.score}
        message={this.state.message}
         />



        {this.state.images.map(images => (

          <Images
            key={images.id}
            eachClick={this.eachClick}
            randoImg={this.randoImg}
            id={images.id}
            image={images.image}

          />

        ))};



          </>



    )
  }

};

export default App;
