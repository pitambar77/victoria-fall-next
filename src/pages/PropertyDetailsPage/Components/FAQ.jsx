import { useState } from "react";

const faqs = [
  {
    q:"Does the property have a pool?",
    a:"Yes, it has a private swimming pool."
  },
  {
    q:"Is it pet friendly?",
    a:"Yes pets are allowed."
  }
];

export default function FAQ(){

  const [open,setOpen] = useState(null)

  return(

    <div>

      <h2 className="text-xl font-semibold mb-4">
        Frequently asked questions
      </h2>

      {faqs.map((f,i)=>(
        <div key={i} className="border-b py-3">

          <button
            onClick={()=>setOpen(open===i?null:i)}
            className="w-full text-left font-medium"
          >
            {f.q}
          </button>

          {open===i && (
            <p className="text-gray-600 mt-2">
              {f.a}
            </p>
          )}

        </div>
      ))}

    </div>

  )
}