import { useState } from "react";

const TrackerForm = ({
  incomeCategories,
  expenseCategories,
  addItem,
  updateItem,
  isEditMode,
  setIsEditMode,
  formData,
  setFormData,
}) => {
  const [isExpenseActive, setIsExpenseActive] = useState(true);

  const changeIsExpenseActiveTo = (isTrue) => {
    setIsExpenseActive(isTrue);
    setIsEditMode(false);
    if (isTrue) {
      setFormData((prev) => ({
        ...prev,
        type: "Expense",
        category: expenseCategories[0].title,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        type: "Income",
        category: incomeCategories[0].title,
      }));
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (isEditMode) {
      updateItem({
          id: crypto.randomUUID(),
          type: formData.type,
          category: formData.category,
          date: new Date(formData.date),
          amount: parseInt(formData.amount)
      })
      setIsEditMode(false);
      return;
    }
    if (!formData.amount || !formData.category || !formData.date) {
      alert("Please fill all the fields");
      return;
    }
    // if (formData.type === "Expense") {
      addItem({
        id: crypto.randomUUID(),
        type: formData.type,
        category: formData.category,
        date: new Date(formData.date),
        amount: parseInt(formData.amount)
      });
    // } else {
    //   addItem({
    //     id: crypto.randomUUID(),
    //     type: "Income",
    //     category: formData.category,
    //     date: new Date(formData.date),
    //     amount: parseInt(formData.amount),
    //   });
    
    // }
  };

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>
      <form onClick={(e) => e.preventDefault()} className="mt-6">
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <button
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              isExpenseActive ? "active" : ""
            }`}
            onClick={() => changeIsExpenseActiveTo(true)}
          >
            Expense
          </button>
          <button
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              isExpenseActive ? "" : "active"
            }`}
            onClick={() => changeIsExpenseActiveTo(false)}
          >
            Income
          </button>
        </div>
        <div className="mt-3">
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Category
          </label>
          <div className="mt-2">
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleFormChange}
              autoComplete="category-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            >
              {isExpenseActive
                ? expenseCategories.map((category) => (
                    <option key={category.id} value={category.title}>
                      {category.title}
                    </option>
                  ))
                : incomeCategories.map((category) => (
                    <option key={category.id} value={category.title}>
                      {category.title}
                    </option>
                  ))}
            </select>
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Amount
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="amount"
              onChange={handleFormChange}
              value={formData.amount}
              id="amount"
              autoComplete="off"
              placeholder={12931}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="date"
              onChange={handleFormChange}
              value={formData.date}
              id="date"
              autoComplete="off"
              placeholder={12931}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        >
          {isEditMode ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default TrackerForm;
