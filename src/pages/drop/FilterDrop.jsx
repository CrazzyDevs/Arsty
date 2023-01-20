import { React, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { dropData } from "./data";
const FilterDrop = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState(dropData);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setFilteredData(
      dropData.filter((item) => item.category === event.target.value)
    );
  };
  return (
    <div>
      {/* <div className="flex items-center border border-darkGrey w-32 py-2 rounded-lg cursor-pointer space-x-2 justify-center">
        <p className="font-semibold text-pureBlack">Sort by</p>

        <MdKeyboardArrowDown className="text-2xl" />
      </div> */}
      <label>
        Select a category:
        <select value={selectedCategory} onChange={handleChange}>
          <option value="">All</option>
          <option value="Upcoming">upcoming</option>
          <option value="Live now">live now</option>
          <option value="Ended">Ended</option>
        </select>
      </label>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.button}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterDrop;
