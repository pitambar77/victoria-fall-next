import { X, MapPin, Plane, Utensils } from "lucide-react";

export default function ExploreAreaModal({ open, onClose }) {
  if (!open) return null;

  const nearby = [
    "Zambezi National Park - 15 min walk",
    "Victoria Falls National Park - 4 min drive",
    "Devil's Pool - 6 min drive",
    "Victoria Falls Bridge - 6 min drive",
    "Victoria Falls Field Museum - 7 min drive",
  ];

  const transport = [
    "Victoria Falls (VFA) - 23 min drive",
    "Livingstone (LVI) - 26 min drive",
  ];

  const restaurants = [
    "In-Da-Belly - 7 min walk",
    "The Social Kitchen - 14 min walk",
    "Dusty Road Township Experience - 19 min walk",
    "The Boma - 2 min drive",
    "Nando's Victoria Falls - 3 min drive",
  ];

  return (
    <div className="fixed inset-0 bg-black/60 z-50 overflow-y-auto">

      <div className="bg-white max-w-5xl mx-auto my-10 rounded-xl p-8">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center border rounded-full"
          >
            <X size={20} />
          </button>

          <h2 className="text-2xl font-semibold">
            Explore the area
          </h2>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 gap-6 mb-10">

          <div>
            <img
              src="https://images.unsplash.com/photo-1580136579312-94651dfd596d"
              className="rounded-xl h-[200px] w-full object-cover"
            />
            <p className="mt-2 font-medium">Zambezi National Park</p>
            <p className="text-sm text-gray-500">15 min walk</p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1563720223185-11003d516935"
              className="rounded-xl h-[200px] w-full object-cover"
            />
            <p className="mt-2 font-medium">Mosi-oa-Tunya National Park</p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              className="rounded-xl h-[160px] w-full object-cover"
            />
            <p className="mt-2 font-medium">Victoria Falls National Park</p>
            <p className="text-sm text-gray-500">4 min drive</p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
              className="rounded-xl h-[160px] w-full object-cover"
            />
            <p className="mt-2 font-medium">Victoria Falls Bridge</p>
            <p className="text-sm text-gray-500">6 min drive</p>
          </div>

        </div>

        {/* ABOUT AREA */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">About the area</h3>

          <p className="text-gray-600 leading-relaxed">
            Located in Victoria Falls, this vacation home is in the city center.
            David Livingstone Statue and Victoria Falls Bridge are local landmarks,
            and the area's natural beauty can be seen at Victoria Falls and
            Zambezi National Park. Be sure to check out the area's animals
            with activities such as game walks and birdwatching.
          </p>
        </div>

        {/* WHAT'S NEARBY */}
        <div className="mb-10">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-3">
            <MapPin size={18} />
            What's nearby
          </h3>

          <ul className="space-y-2 text-gray-600">
            {nearby.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* GETTING AROUND */}
        <div className="mb-10">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-3">
            <Plane size={18} />
            Getting around
          </h3>

          <ul className="space-y-2 text-gray-600">
            {transport.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* RESTAURANTS */}
        <div>
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-3">
            <Utensils size={18} />
            Restaurants
          </h3>

          <ul className="space-y-2 text-gray-600">
            {restaurants.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}