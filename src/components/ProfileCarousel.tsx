import { useEffect, useState } from "react";

import P1 from "../assets/img/profile/p1.jpg";
import P2 from "../assets/img/profile/p2.jpg";
import P3 from "../assets/img/profile/p3.jpg";
import P4 from "../assets/img/profile/p4.png";

const photos = [P1, P2, P3, P4];

const ProfileCarousel = () => {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % photos.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  const showPhoto = (index: number) => {
    setActivePhoto((index + photos.length) % photos.length);
  };

  return (
    <div aria-label="Profile photos" className="profile-carousel">
      <img
        alt={`Jakkarin Kerdthaidee, photo ${activePhoto + 1}`}
        src={photos[activePhoto]}
      />
      <div className="carousel-controls">
        <button
          aria-label="Previous photo"
          onClick={() => showPhoto(activePhoto - 1)}
          type="button"
        >
          <span aria-hidden="true">&lsaquo;</span>
        </button>
        <div aria-label="Choose a photo" className="carousel-dots" role="group">
          {photos.map((photo, index) => (
            <button
              aria-current={index === activePhoto}
              aria-label={`Show photo ${index + 1}`}
              key={photo}
              onClick={() => showPhoto(index)}
              type="button"
            />
          ))}
        </div>
        <button
          aria-label="Next photo"
          onClick={() => showPhoto(activePhoto + 1)}
          type="button"
        >
          <span aria-hidden="true">&rsaquo;</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileCarousel;
