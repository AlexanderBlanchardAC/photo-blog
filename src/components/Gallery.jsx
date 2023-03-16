import React, { useState } from 'react';
import "./gallery.css";
import CloseIcon from '@mui/icons-material/Close';
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.jpg";
import img16 from "../assets/images/img16.jpg";
import img17 from "../assets/images/img17.jpg";
import img18 from "../assets/images/img18.jpg";
import img19 from "../assets/images/img19.jpg";
import img20 from "../assets/images/img20.jpg";
import img21 from "../assets/images/img21.jpg";
import img22 from "../assets/images/img22.jpg";


const Gallery = () => {

    const [ model, setModel ] = useState(false);
     const [ modelImageSrc, setModelImageSrc ] =useState(" ");

    const galleryPhotos = [
        {
            id: 1,
            image: img1,
            alt: "Kaia"
        },
        {
            id: 2,
            image: img2,
            alt: "Kaia"
        },
        {
            id: 3,
            image: img3,
            alt: "Kaia"
        },
        {
            id: 4,
            image: img4,
            alt: "Beach and Lake"
        },
        {
            id: 5,
            image: img5,
            alt: "beach"
        },
        {
            id: 6,
            image: img6,
            alt: "Kaia on the beach"
        },
        {
            id: 7,
            image: img7,
            alt: "Kaia on the beach"
        },
        {
            id: 8,
            image: img8,
            alt: "Kaia on the beach"
        },
        {
            id: 9,
            image: img9,
            alt: "Kaia on the beach"
        },
        {
            id: 10,
            image: img10,
            alt: "Kaia in the snow"
        },
        {
            id: 11,
            image: img11,
            alt: "Kaia in the snow"
        },
        {
            id: 12,
            image: img12,
            alt: "woods"
        }
    

    ]

   


    const largeImage = (image) => {
        setModelImageSrc(image)
        setModel(true)
    }

    const closeModel = () => {
        setModel(false)
    }

  return (
    <div className="galleryContainer">
        <h1>Image Gallery</h1>

        <div className={model ? "model open" : "model"}>
             <img src={modelImageSrc} alt="Model Larger Version" /> 
            <CloseIcon onClick={closeModel}/>
        </div>
        <div className="galleryPics">
            {galleryPhotos.map(( item, index ) => {
                return(
                    <div className='photo' key={index} onClick={()=>largeImage(item.image)}>
                        <img src={item.image} alt={item.alt}/>

                    </div>
                )
            })}

        </div>
      
    </div>
  )
}

export default Gallery;
