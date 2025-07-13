import { useState } from "react";
import "../styles/imageSlider.css";
const images = [
  "https://img.interiorcompany.com/interior/webproduct/Contemporary%20Master%20Bedroom%20Design%20with%20Cream%20Fabricated%20Wall%20Panel.png?aio=w-768",
  "https://img.interiorcompany.com/interior/webproduct/779638755025906631937.png?aio=w-768",
  "https://img.interiorcompany.com/interior/webproduct/563638705103415244386.png?aio=w-768",
  "https://img.interiorcompany.com/interior/webproduct/tropical-balcony-design-with-concrete-walls-and-wooden-flooring.png?aio=w-768",
  "https://www.bhg.com/thmb/vfQXHcPNLIzNo9vZQxs-m6JUwz8=/750x0/filters:no_upscale():format(webp)/ShojiWhite.jpg"
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const changeSlide = (step) => setIndex((index + step + images.length) % images.length);

  return (
    <div className="relative flex-1 min-w-[300px]">
      <img src={images[index]} className="w-full h-80 object-cover rounded-xl border-4 border-[#ead0b2]" />
      <button onClick={() => changeSlide(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-black">‹</button>
      <button onClick={() => changeSlide(1)} className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-black">›</button>
    </div>
  );
};
export default ImageSlider;
