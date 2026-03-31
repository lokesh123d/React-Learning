import React, { useRef, useState } from "react";

const ImageClosure = ({ imageData }) => {


    const containerRef = useRef(null);
    const [currentImageIndex, setcurrentImageIndex] = useState(0);


  function handleNavigate(index) {
    setcurrentImageIndex(index)
  }

console.log(containerRef);

  return (
    <div>
      <h2>Image Slider</h2>
      <div className="image-container" ref={containerRef}>
        {/* {imageData.map((image, index) => ( */}
          <img src={imageData[currentImageIndex]} alt="" className="showing-images"  />
        {/* // ))} */}
      </div>
      <div className="progress-bar">
        <div className="complete-bar" style={{width:`${(100/imageData.length)*(currentImageIndex+1)}%`}}></div>
      </div>
      <div className="image-navigation">
        {imageData.map((image, index) => (
          <div
            className="navigation-btn"
            style={{background:`${index == currentImageIndex?'blue':''}`}}
            onClick={() => handleNavigate(index)}
            key={index}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageClosure;
