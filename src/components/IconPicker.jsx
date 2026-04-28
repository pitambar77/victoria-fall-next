import { useState } from "react";
import { amenityIcons } from "../constants/amenityIcons";

export default function IconPicker({ value, onSelect }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredIcons = amenityIcons.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedIcon = amenityIcons.find((i) => i.name === value);

  const SelectedIconComponent = selectedIcon?.icon;

  return (
    <div className="relative w-full max-w-xs">

      {/* Selected Icon Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full border rounded-md p-2 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          {SelectedIconComponent && <SelectedIconComponent size={18} />}
          <span>{value || "Select Icon"}</span>
        </div>

        <span className="text-gray-400">▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 bg-white border rounded-md shadow-lg mt-1 w-full max-h-60 overflow-y-auto">

          {/* Search */}
          <input
            type="text"
            placeholder="Search icon..."
            className="w-full border-b p-2 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Icon List */}
          <div className="p-2 space-y-1">
            {filteredIcons.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    onSelect(item.name);
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 w-full p-2 rounded hover:bg-gray-100"
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

        </div>
      )}
    </div>
  );
}