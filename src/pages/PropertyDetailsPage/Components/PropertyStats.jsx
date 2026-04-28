import { DoorOpen, Bath, Users, Maximize } from "lucide-react";

export default function PropertyStats({property}) {
  const stats = [
    {
      icon: DoorOpen,
      label: `${property.rooms?.length || 0} bedrooms`,
    },
    {
      icon: Bath,
      label:`${property.bathrooms?.length || 0} bathrooms`,
    },
    {
      icon: Users,
      label: `Sleeps ${property.sleeps || 0}`,
    },
    {
      icon: Users,
      label: `Guest ${property.guest || 0}`,
    },
  ];

  return (
    <div className="w-full py-4 rounded-md">
      <div className="flex flex-wrap justify-between items-center gap-6">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="hd flex items-center gap-3  font-[500]  text-[#2e2c2d] "
            >
              <Icon size={26} strokeWidth={1.5} color="#a57830" />
              <span>{item.label}</span>
            </div>
          );
        })}

      </div>
    </div>
  );
}