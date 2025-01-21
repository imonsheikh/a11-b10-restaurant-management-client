import React, { useEffect } from "react";
import LightGallery from "lightgallery/react";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/galley4.jpg";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// // If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const LightGallerys = () => {

  return (
    <div className="header">
      <LightGallery
        // onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}

  
      >
        <a href={gallery1} >
          <img alt="img1" src={gallery1} />
        </a>
        <a href={gallery1}>
          <img alt="img1" src={gallery1} />
        </a>
        <a href={gallery1}>
          <img alt="img1" src={gallery1} />
        </a>
        <a href={gallery1}>
          <img alt="img1" src={gallery1} />
        </a>
        <a href={gallery1}>
          <img alt="img1" src={gallery1} />
        </a>
        ...
      </LightGallery>
    </div>
  );
};

export default LightGallerys;
