import { X } from "lucide-react";

export default function Lightbox({images,index,close}){

  return(
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

      <button
        onClick={close}
        className="absolute top-6 right-6 text-white"
      >
        <X size={32}/>
      </button>

      <img
        src={images[index]}
        className="max-h-[90vh] object-contain"
      />

    </div>
  )
}