export default function PropertyGallery() {
  return (
    <div className="grid grid-cols-4 gap-2 rounded-lg overflow-hidden">
      <img
        src="/images/house1.jpg"
        className="col-span-2 row-span-2 w-full h-[300px] object-cover"
      />

      <img src="/images/house2.jpg" className="w-full h-[148px] object-cover" />
      <img src="/images/house3.jpg" className="w-full h-[148px] object-cover" />
      <img src="/images/house4.jpg" className="w-full h-[148px] object-cover" />
      <img src="/images/house5.jpg" className="w-full h-[148px] object-cover" />
    </div>
  );
}