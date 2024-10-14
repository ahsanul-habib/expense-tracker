import { useState } from "react";

const IncomeSection = ({
  incomeCategories,
  incomeSheet,
  removeItem,
  isSortingBoxOpen,
  setIsSortingBoxOpen,
  isFilteringBoxOpen,
  setIsFilteringBoxOpen,
  handleEditMode
}) => {
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("");

  let currentIncomeArray = [];

  if (filteredCategories.length === 0) {
    currentIncomeArray = [...incomeSheet];
  } else {
    currentIncomeArray = incomeSheet.filter((item) =>
      filteredCategories.includes(item.category)
    );
  }

  if (sortingOrder == "ascending") {
    currentIncomeArray = currentIncomeArray.sort((a, b) => a.amount - b.amount);
  } else if (sortingOrder == "descending") {
    currentIncomeArray = currentIncomeArray.sort((a, b) => b.amount - a.amount);
  }

  const changeSortingOrder = (order) => {
    setSortingOrder(order);
    setIsSortingBoxOpen(false);
  };

  const handleCheckBoxClicked = (category) => {
    if (filteredCategories.includes(category)) {
      setFilteredCategories(
        filteredCategories.filter((item) => item !== category)
      );
    } else {
      setFilteredCategories([...filteredCategories, category]);
    }
  };

  const handleSortingBoxClicked = (e) => {
    setIsSortingBoxOpen((is) => !is);
    setIsFilteringBoxOpen(false);
    e.stopPropagation();
  };

  const handleFilteringBoxClicked = (e) => {
    setIsFilteringBoxOpen((is) => !is);
    setIsSortingBoxOpen(false);
    e.stopPropagation();
  };

  return (
    <div className="border rounded-md relative">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          {/* Icon */}
          <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
            </svg>
          </div>
          {/* Text */}
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Income
            </h3>
          </div>
        </div>
        <div>
          {/* Sorting */}
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                onClick={handleSortingBoxClicked}
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l9 0" />
                  <path d="M4 12l7 0" />
                  <path d="M4 18l7 0" />
                  <path d="M15 15l3 3l3 -3" />
                  <path d="M18 6l0 12" />
                </svg>
              </button>
            </div>
            {isSortingBoxOpen && (
              <div
                className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  <button
                    onClick={() => changeSortingOrder("ascending")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                  >
                    Low to High
                  </button>
                  <button
                    onClick={() => changeSortingOrder("descending")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                  >
                    High to Low
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Filtering */}

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                onClick={handleFilteringBoxClicked}
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="filter-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-alt"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 8h4v4h-4z" />
                  <path d="M6 4l0 4" />
                  <path d="M6 12l0 8" />
                  <path d="M10 14h4v4h-4z" />
                  <path d="M12 4l0 10" />
                  <path d="M12 18l0 2" />
                  <path d="M16 5h4v4h-4z" />
                  <path d="M18 4l0 1" />
                  <path d="M18 9l0 11" />
                </svg>
              </button>
            </div>
            {isFilteringBoxOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="filter-button"
                tabIndex={-1}
                id="filter-dropdown"
              >
                <div className="py-1" role="none">
                  {incomeCategories.map((category) => (
                    <label
                      key={category.id}
                      className="inline-flex items-center px-4 py-2 text-sm text-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={filteredCategories.includes(category.title)}
                        onClick={() => handleCheckBoxClicked(category.title)}
                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                        id="filter-option-1"
                      />
                      <span className="ml-2">{category.title}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 divide-y">
        {incomeSheet.length === 0 && (
          <div className="flex justify-center items-center py-2">
            <h3 className="text-base font-medium leading-7 text-gray-600">
              No Expense Record
            </h3>
          </div>
        )}
        {currentIncomeArray.map((income) => (
          <div
            key={income.id}
            className="flex justify-between items-center py-2 relative group cursor-pointer"
          >
            <div>
              <h3 className="text-base font-medium leading-7 text-gray-600">
                {income.category}
              </h3>
              <p className="text-xs text-gray-600">
                {new Intl.DateTimeFormat("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(income.date)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                BDT {income.amount}
              </p>
              <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                <button
                  onClick={() => handleEditMode(income)}
                  className="hover:text-teal-600"
                  role="button"
                  title="Edit Button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                    <path d="M13.5 6.5l4 4" />
                  </svg>
                </button>
                <button
                  onClick={() => removeItem(income.id,"Income")}
                  className="hover:text-red-600"
                  role="button"
                  title="Delete"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomeSection;
