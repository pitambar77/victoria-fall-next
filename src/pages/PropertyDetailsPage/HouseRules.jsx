// import { Baby, CalendarX, PawPrint, CigaretteOff } from "lucide-react";

// const iconMap = {
//   children: Baby,
//   events: CalendarX,
//   pets: PawPrint,
//   smoking: CigaretteOff,
// };

// const houseRulesData = {
//   checkIn: "Check in after 2:00 PM",
//   checkOut: "Check out before 11:00 AM",
//   minimumAge: "Minimum age to rent: 21",

//   rules: [
//     {
//       title: "Children",
//       description: "Children allowed: ages 0-17",
//       icon: "children",
//     },
//     {
//       title: "Events",
//       description: "No events allowed",
//       icon: "events",
//     },
//     {
//       title: "Pets",
//       description: "No pets allowed",
//       icon: "pets",
//     },
//     {
//       title: "Smoking",
//       description: "Smoking is not permitted",
//       icon: "smoking",
//     },
//   ],

//   damage:
//     "You will be responsible for any damage to the rental property caused by you or your party during your stay.",

//   importantInfoTitle: "You need to know",

//   importantInfo: [
//     "Extra-person charges may apply and vary depending on property policy",
//     "Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges",
//     "Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed",
//     "Onsite parties or group events are strictly prohibited",
//     "Host has not indicated whether there is a carbon monoxide detector on the property; consider bringing a portable detector with you on the trip",
//     "Host has not indicated whether there is a smoke detector on the property",
//     "Safety features at this property include a fire extinguisher and a first aid kit",
//   ],
// };

// export default function HouseRules() {
//   const data = houseRulesData;

//   return (
//     <div className="hd space-y-10">
//       {/* HOUSE RULES */}
//       <div className=" flex gap-10">
//         <div className="w-full md:w-1/3 ">
//           <h2 className="hd font-[500] text-lg text-[#2e2c2d] capitalize">
//             House Rules
//           </h2>
//         </div>
//         <div className=" w-full md:w-2/3 space-y-6 text-[#2e2c2d]">
//           <div className="flex justify-between">
//             <div >
//               <p>{data.checkIn}</p>
//               <p>{data.checkOut}</p>
//             </div>

//             <p>{data.minimumAge}</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6 pt-4">
//             {data.rules.map((rule, index) => {
//               const Icon = iconMap[rule.icon];

//               return (
//                 <div key={index} className="flex gap-4">
//                   <Icon size={28} strokeWidth={1.5} color="#a57830" />

//                   <div>
//                     <p className="hd font-[500] text-lg text-[#2e2c2d]">{rule.title}</p>

//                     <p className=" text-[16px] text-[#2e2c2d]">{rule.description}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* DAMAGE SECTION */}
//       <div className=" flex gap-10">
//         <div className=" w-full md:w-1/3 ">
//           <h2 className="hd font-[500] text-lg text-[#2e2c2d] capitalize">
//             Damage and incidentals
//           </h2>
//         </div>
//         <div className="w-full md:w-2/3">
//           <p className="hd text-gray-600 leading-relaxed">{data.damage}</p>
//         </div>
//       </div>

//       {/* IMPORTANT INFO */}
//       <div className="flex gap-10">
//         <div className=" w-full md:w-1/3">
//           <h2 className="hd font-[500] text-lg text-[#2e2c2d] capitalize">
//             Important information
//           </h2>
//         </div>

//         <div className=" hd w-full md:w-2/3">
//           <div className="space-y-2 text-[#5c5e62] leading-relaxed">
//             <p className="hd font-[500] text-lg text-[#2e2c2d]">
//               {data.importantInfoTitle}
//             </p>

//             {data.importantInfo.map((info, index) => (
//               <p key={index}>{info}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { amenityIcons } from "../../constants/amenityIcons";

export default function HouseRules({ property }) {
  const rules = property?.houserule;
  const incidental = property?.incidental;
  const information = property?.information;

  if (!rules) return null;

  return (
    <div className="hd space-y-10">
      {/* HOUSE RULES */}
      <div className="flex gap-10">
        <div className="w-full md:w-1/3">
          <h2 className="hd font-[500] text-lg text-[#2e2c2d] capitalize">
            House Rules
          </h2>
        </div>

        <div className="w-full md:w-2/3 space-y-6 text-[#2e2c2d]">
          <div className="flex justify-between">
            <div>
              <p>Check in after {rules.checkIn}</p>
              <p>Check out before {rules.checkOut}</p>
            </div>

            <p>{rules.content}</p>
          </div>

          {/* RULE LIST */}
          {/* <div className="grid md:grid-cols-2 gap-6 pt-4">
            {rules.rule?.map((rule) => (
              <div key={rule._id} className="flex gap-4">
                <img src={rule.icon} className="w-7 h-7 object-contain" />

                <div>
                  <p className="hd font-[500] text-lg text-[#2e2c2d]">
                    {rule.title}
                  </p>

                  <p className="text-[16px] text-[#2e2c2d]">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {rules.rule?.map((rule) => {
              const iconData = amenityIcons.find((i) => i.name === rule.icon);
              const Icon = iconData?.icon;

              return (
                <div key={rule._id} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    {Icon && <Icon size={22} color="#a57830" />}
                  </div>

                  <div>
                    <p className="hd font-[500] text-lg text-[#2e2c2d]">
                      {rule.title}
                    </p>

                    <p className="text-[16px] text-[#2e2c2d]">
                      {rule.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* DAMAGE SECTION */}
      <div className="flex gap-10">
        <div className="w-full md:w-1/3">
          <h2 className="hd font-[500] text-lg text-[#2e2c2d] capitalize">
            Damage and incidentals
          </h2>
        </div>

        <div className="w-full md:w-2/3 space-y-3">
          {incidental?.description?.map((item) => {
            if (item.type === "header") {
              return (
                <h3
                  key={item._id}
                  className="hd font-[500] text-lg text-[#2e2c2d]"
                >
                  {item.content}
                </h3>
              );
            }

            return (
              <p key={item._id} className="hd text-gray-600 leading-relaxed">
                {item.content}
              </p>
            );
          })}
        </div>
      </div>

      {/* IMPORTANT INFO */}

      <div className="flex gap-10">
        <div className="w-full md:w-1/3">
          <h2 className="hd font-[500] text-lg text-[#2e2c2d] capitalize">
            Important information
          </h2>
        </div>

        <div className="hd w-full md:w-2/3 space-y-3">
          {information?.info?.map((item) => {
            if (item.type === "header") {
              return (
                <h3
                  key={item._id}
                  className="hd font-[500] text-lg text-[#2e2c2d]"
                >
                  {item.content}
                </h3>
              );
            }

            return (
              <p key={item._id} className="text-[#5c5e62] leading-relaxed">
                {item.content}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
