export default function PropertyHeader({ property }) {
  const overview = property?.overview;

  return (
    <div>
      <div className="space-y-2">
        <h1 className=" hd capitalize"> {overview?.subTitle}</h1>
        <h1 className="hd text-xl md:text-[30px]  font-semibold text-[#2e2c2d] mb-6 capitalize">
          {overview?.title}
        </h1>

        {overview?.description?.map((block) => (
          <p key={block._id} className="hd text-[#5c5e62]">
            {block.content}
          </p>
        ))}
      </div>
    </div>
  );
}
