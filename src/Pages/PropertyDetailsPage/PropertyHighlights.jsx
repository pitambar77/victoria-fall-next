import { MapPin, Wifi, Tv } from "lucide-react";

export default function PropertyHighlights() {
  return (
    <div>

      <h2 className="font-semibold text-lg mb-4">Highlights</h2>

      <div className="grid grid-cols-3 gap-4 text-sm">

        <div className="flex items-center gap-2">
          <MapPin size={16}/> Prime location
        </div>

        <div className="flex items-center gap-2">
          <Wifi size={16}/> Free Wifi
        </div>

        <div className="flex items-center gap-2">
          <Tv size={16}/> Smart TV
        </div>

      </div>

    </div>
  );
}