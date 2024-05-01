import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Img1 from '../img/simon.jpg';
import Img2 from '../img/tím.jpg';
import Img3 from '../img/jazdec1.jpg';
import Img4 from '../img/jazdec2.jpg';
import Img5 from '../img/jazdec3.jpg';
import Img6 from '../img/jazdec4.jpg';
import Img7 from '../img/jazdec5.jpg';
import Img8 from '../img/jazda.jpg';
import Img9 from '../img/tim2.jpg';

const Galeria = () => {
  let data = [
    { id: 1, imgSrc: Img1 },
    { id: 2, imgSrc: Img2 },
    { id: 3, imgSrc: Img3 },
    { id: 4, imgSrc: Img4 },
    { id: 5, imgSrc: Img5 },
    { id: 6, imgSrc: Img6 },
    { id: 7, imgSrc: Img7 },
    { id: 8, imgSrc: Img8 },
    { id: 9, imgSrc: Img9 },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempImgSrc} alt="gallery" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{ width: '100%' }} alt='obrazok'/>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Galeria;
