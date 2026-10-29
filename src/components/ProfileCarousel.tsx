import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import P1 from "../assets/img/profile/p1.jpg";
import P2 from "../assets/img/profile/p2.jpg";
import P3 from "../assets/img/profile/p3.jpg";
import P4 from "../assets/img/profile/p4.png";

const photos = [P1, P2, P3, P4];

const ProfileCarousel = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const { t } = useTranslation();

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
    <div aria-label={t("carousel.photos")} className="profile-carousel">
      <img
        alt={t("carousel.photoAlt", { number: activePhoto + 1 })}
        src={photos[activePhoto]}
      />
      <div className="carousel-controls">
        <button
          aria-label={t("carousel.previous")}
          onClick={() => showPhoto(activePhoto - 1)}
          type="button"
        >
          <span aria-hidden="true">&lsaquo;</span>
        </button>
        <div aria-label={t("carousel.choose")} className="carousel-dots" role="group">
          {photos.map((photo, index) => (
            <button
              aria-current={index === activePhoto}
              aria-label={t("carousel.show", { number: index + 1 })}
              key={photo}
              onClick={() => showPhoto(index)}
              type="button"
            />
          ))}
        </div>
        <button
          aria-label={t("carousel.next")}
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
