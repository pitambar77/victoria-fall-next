import CustomTextEditor from "../CustomTextEditor";

export default function OverviewForm({
  property,
  setProperty,
  errors,
  clearError,
}) {
  const change = (e) => {
    const { name, value } = e.target;

    setProperty({
      ...property,
      overview: {
        ...property.overview,
        [name]: value,
      },
    });

    clearError(name);
  };

  return (
    <div className="p-2 space-y-4">
      <h2 className="font-semibold mb-6 text-xl">Overview</h2>
      {/* Property Name */}
      <input
        name="title"
        placeholder="Property Name*"
        required
        value={property.overview.title || ""}
        onChange={change}
        // className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        className={`w-full border rounded-md p-3 outline-none transition
  ${
    errors?.title
      ? "border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
      />
      {errors?.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      {/* Subtitle */}
      <input
        name="subTitle"
        placeholder="Property Sub Title"
        value={property.overview.subTitle || ""}
        onChange={change}
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
      />

      <div className="mt-6">
        <label className="block mb-2 font-medium">Short Description</label>

        <CustomTextEditor
          value={property.overview.shortdescription || ""}
          onChange={(value) =>
            setProperty((prev) => ({
              ...prev,
              overview: {
                ...prev.overview,
                shortdescription: value,
              },
            }))
          }
        />

        {errors?.shortdescription && (
          <p className="text-red-500 text-sm mt-2">{errors.shortdescription}</p>
        )}
      </div>
    </div>
  );
}
