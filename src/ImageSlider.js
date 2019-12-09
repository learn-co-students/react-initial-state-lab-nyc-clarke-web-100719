// your ImageSlider code here!
import React from 'react'
class ImageSlider extends React.Component{
    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    render(){
        return(<li>I am on slide {this.state.currentSlideIndex}</li>)
    }
}

export default ImageSlider;