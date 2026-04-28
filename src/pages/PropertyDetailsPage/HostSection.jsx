export default function HostSection() {
  return (
    <div>

      <h2 className="font-semibold text-lg mb-4">
        About the host
      </h2>

      <div className="flex items-center gap-4">

        <img
          src="/images/host.jpg"
          className="w-12 h-12 rounded-full"
        />

        <div>
          <p className="font-medium">Ali Benson</p>
          <p className="text-sm text-gray-500">Host</p>
        </div>

      </div>

    </div>
  );
}