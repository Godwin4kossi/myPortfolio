import { useState } from "react";

const ImageGallery = ({ images = [], columns = 3, gap = 4 }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const defaultImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      alt: "Mountain landscape",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
      alt: "Forest path",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
      alt: "Ocean waves",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
      alt: "Sunset sky",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
      alt: "Misty mountains",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
      alt: "Desert dunes",
    },
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  // Map columns prop to actual Tailwind classes
  const getGridClass = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      case 5:
        return "grid-cols-5";
      case 6:
        return "grid-cols-6";
      default:
        return "grid-cols-3";
    }
  };

  // Map gap prop to actual Tailwind classes
  const getGapClass = () => {
    switch (gap) {
      case 0:
        return "gap-0";
      case 1:
        return "gap-1";
      case 2:
        return "gap-2";
      case 3:
        return "gap-3";
      case 4:
        return "gap-4";
      case 5:
        return "gap-5";
      case 6:
        return "gap-6";
      case 8:
        return "gap-8";
      default:
        return "gap-4";
    }
  };

  return (
    <div className="w-full">
      <div className={`grid ${getGridClass()} ${getGapClass()}`}>
        {displayImages.map((img) => (
          <div
            key={img.id}
            className="relative overflow-hidden  shadow-lg cursor-pointer group aspect-square"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover position-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-screen object-cover"
            />
            {selectedImage.alt && (
              <p className="text-white text-center mt-4 text-lg">
                {selectedImage.alt}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
