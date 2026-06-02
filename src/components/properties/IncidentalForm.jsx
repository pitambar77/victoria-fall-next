import React from "react";
import CustomTextEditor from "../CustomTextEditor";

const IncidentalForm = ({ property, setProperty }) => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Incidental Information</h2>

      <CustomTextEditor
        value={property.incidental.shortdescription || ""}
        onChange={(value) =>
          setProperty((prev) => ({
            ...prev,
            incidental: {
              ...prev.incidental,
              shortdescription: value,
            },
          }))
        }
      />
    </div>
  );
};

export default IncidentalForm;
