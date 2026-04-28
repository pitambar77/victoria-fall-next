export default function FeaturesForm({property,setProperty}){

  const addFeature = ()=>{

    setProperty({
      ...property,
      features:[
        ...property.features,
        ""
      ]
    })

  }

  return(

    <div>

      <h2>Features</h2>

      {property.features.map((f,i)=>(
        <input key={i}/>
      ))}

      <button onClick={addFeature}>
        Add Feature
      </button>

    </div>

  )

}