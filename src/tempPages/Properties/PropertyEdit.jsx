import { useEffect, useState } from "react";
import { getProperty } from "../../api/propertiesApi.js";
import OverviewSection from "../../components/properties/OverviewSection.jsx";
import HighlightsSection from "../../components/properties/HighlightsSection.jsx";
import GallerySection from "../../components/properties/GallerySection.jsx";



export default function PropertyEdit({id}) {

  const [property,setProperty] = useState(null);

  useEffect(()=>{
    loadProperty();
  },[])

  const loadProperty = async ()=>{
    const res = await getProperty(id);
    setProperty(res.data);
  }

  if(!property) return <p>Loading...</p>

  return (
    <div className="p-8 space-y-10">

      <OverviewSection property={property}/>
      <HighlightsSection property={property}/>
      <GallerySection property={property}/>

    </div>
  )
}