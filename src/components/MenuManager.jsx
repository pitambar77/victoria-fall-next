import React, { useState } from "react";

const MenuManager = ({ menu, setMenu }) => {
  const [categoryName, setCategoryName] = useState("");

  // Add a new category
  const addCategory = () => {
    if (!categoryName.trim()) return;
    setMenu([...menu, { category: categoryName.trim(), items: [] }]);
    setCategoryName("");
  };

  // Add item to a category
  const addItem = (categoryIndex, item) => {
    const newMenu = [...menu];
    newMenu[categoryIndex].items.push(item);
    setMenu(newMenu);
  };

  // Delete item
  const deleteItem = (categoryIndex, itemIndex) => {
    const newMenu = [...menu];
    newMenu[categoryIndex].items.splice(itemIndex, 1);
    setMenu(newMenu);
  };

  // Delete category
  const deleteCategory = (categoryIndex) => {
    const newMenu = [...menu];
    newMenu.splice(categoryIndex, 1);
    setMenu(newMenu);
  };

  return (
    <div className="border border-gray-300 rounded-md p-3 outline-none p-2 rounded mt-4">
      <h3 className="font-bold mb-2">Menu</h3>

      {/* Add Category */}
      <div className="flex gap-2 mb-2">
        <input
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="New Category"
          className="border border-gray-300 rounded-md p-3 outline-none p-1 flex-1"
        />
        <button
          type="button"
          onClick={addCategory}
          className="bg-green-500 text-white px-2 rounded"
        >
          Add Category
        </button>
      </div>

      {/* List categories */}
      {menu.map((cat, i) => (
        <div key={i} className="mb-2 border border-gray-300 rounded-md p-3 outline-none p-2 ">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-semibold">{cat.category}</h4>
            <button
              type="button"
              onClick={() => deleteCategory(i)}
              className="text-red-500"
            >
              Delete Category
            </button>
          </div>

          {/* List items */}
          {cat.items.map((item, j) => (
            <div key={j} className="flex justify-between p-1 border-b">
              <span>{item.name} - ₹{item.price}</span>
              <button
                type="button"
                onClick={() => deleteItem(i, j)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}

          {/* Add item (no nested <form>) */}
          <AddItemForm categoryIndex={i} addItem={addItem} />
        </div>
      ))}
    </div>
  );
};

// AddItemForm without <form>
const AddItemForm = ({ categoryIndex, addItem }) => {
  const [itemData, setItemData] = useState({ name: "", ingredients: "", price: "" });

  const handleAdd = () => {
    if (!itemData.name.trim() || !itemData.price) return;
    addItem(categoryIndex, { ...itemData, price: parseFloat(itemData.price) });
    setItemData({ name: "", ingredients: "", price: "" });
  };

  return (
    <div className="flex gap-1 mt-2">
      <input
        placeholder="Name"
        value={itemData.name}
        onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition flex-1 "
      />
      <input
        placeholder="Ingredients"
        value={itemData.ingredients}
        onChange={(e) => setItemData({ ...itemData, ingredients: e.target.value })}
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition flex-1"
      />
      <input
        placeholder="Price"
        type="number"
        value={itemData.price}
        onChange={(e) => setItemData({ ...itemData, price: e.target.value })}
        className="border border-gray-300 rounded-md p-3 outline-none p-1 w-24"
      />
      <button
        type="button"
        onClick={handleAdd}
        className="bg-blue-500 text-white px-2 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default MenuManager;
