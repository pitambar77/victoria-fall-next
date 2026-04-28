import { useState } from "react";
import GalleryModal from "./GalleryModal";
import { Image } from "lucide-react";

// const gallery = {
//   Exterior: [
//     "https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1822.jpg",
//     "https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1822.jpg",
//   ],
//   Bedrooms: [
//     "https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1822.jpg",
//     "https://www.victoriafalls-guide.net/images/shoestrings-poolside-1.jpg",
//     "https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1822.jpg",
//   ],
//   Kitchen: [
//     "https://www.victoriafalls-guide.net/images/shoestrings-poolside-1.jpg",
//     "https://avatars.mds.yandex.net/get-altay/9822373/2a0000019179be662ab45f87fa098e2a0bc7/orig",

//   ],
//   Bathroom: [
//     "https://www.victoriafalls-guide.net/images/shoestrings-poolside-1.jpg",
//     "https://avatars.mds.yandex.net/get-altay/9822373/2a0000019179be662ab45f87fa098e2a0bc7/orig",

//   ],
// };

export default function Gallery({ property }) {
  const [open, setOpen] = useState(false);

  if (!property?.gallery) return null;

  //  const allImages = property.gallery.map((g) => g.image);
  // const totalImages = allImages.length;


  const allImages = property.gallery;
  const totalImages = allImages.length;
  // const allImages = Object.values(gallery).flat();
  // const totalImages = allImages.length;

  return (
    <>
      <div className="grid grid-cols-4 gap-2 rounded-sm overflow-hidden">
        {/* BIG IMAGE */}
        <img
          src={allImages[0]?.image}
          className="col-span-2 row-span-2 h-[360px] w-full object-cover cursor-pointer"
          onClick={() => setOpen(true)}
        />

        {/* SMALL IMAGES */}
        {allImages.slice(1, 5).map((img, i) => {
          const isLast = i === 3;

          return (
            <div
              key={i}
              className="relative cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <img src={img.image} className="h-[178px] w-full object-cover" />

              {/* IMAGE COUNT OVERLAY */}
              {isLast && totalImages > 5 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold text-lg">
                  <div className="flex items-center gap-2">
                    <Image size={20} />
                    {totalImages}+
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {open && <GalleryModal images={allImages} close={() => setOpen(false)} />}
    </>
  );
}
