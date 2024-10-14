import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TrackerForm from "./components/TrackerForm";
import TotalBalance from "./components/TotalBalance";
import IncomeSection from "./components/IncomeSection";
import ExpenseSection from "./components/ExpenseSection";

import { incomeCategories, expenseCategories } from "./data/categories";

function App() {
  const [incomeSheet, setIncomeSheet] = useState([]);
  const [expenseSheet, setExpenseSheet] = useState([]);

  const [formData, setFormData] = useState({
    amount: "",
    date: "",
    category: expenseCategories[0].title,
    type: "Expense",
  })

  const [isIncomeFilteringBoxOpen, setIsIncomeFilteringBoxOpen] = useState(false);
  const [isIncomeSortingBoxOpen, setIsIncomeSortingBoxOpen] = useState(false);
  const [isExpenseFilteringBoxOpen, setIsExpenseFilteringBoxOpen] = useState(false);
  const [isExpenseSortingBoxOpen, setIsExpenseSortingBoxOpen] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);
  const [idToEdit, setIdToEdit] = useState("");

  const totalIncome = incomeSheet.reduce((acc, curr) => curr.amount + acc, 0);
  const totalExpense = expenseSheet.reduce((acc, curr) => curr.amount + acc, 0);

  const addItem = (data) => {
    if(data.type==="Income"){
      setIncomeSheet([
        {
          ...data,
        },
        ...incomeSheet,
      ]);
    } else{
      setExpenseSheet((prev) => [
        {
          ...data,
        },
        ...prev,
      ]);
    }
  };

  const removeItem = (id,type) => {
    if(type=="Income"){
      setIncomeSheet(incomeSheet.filter((item) => item.id !== id));
    } else{
        setExpenseSheet(expenseSheet.filter((item) => item.id !== id));
    }
  };

  const updateItem=(data)=>{
    if(data.type==="Income"){
      setIncomeSheet(incomeSheet.map((item) => (item.id === idToEdit ? data : item)));
    } else{
      setExpenseSheet(expenseSheet.map((item) => (item.id === idToEdit ? data : item)));
    }
    setIsEditMode(false);
  }

  const handleClickOutside = () => {
    setIsIncomeFilteringBoxOpen(false);
    setIsIncomeSortingBoxOpen(false);
    setIsExpenseFilteringBoxOpen(false);
    setIsExpenseSortingBoxOpen(false);
  };

  const handleEditMode=(data)=>{
    setIsEditMode(true);
    setIdToEdit(data.id);
    setFormData({
      ...data,
      date: new Date(data.date).toISOString().split('T')[0],
    });
  }
  return (
    <>
      <Header />
      <main
        onClick={handleClickOutside}
        className="relative mx-auto mt-10 w-full max-w-7xl"
      >
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TrackerForm
            incomeCategories={incomeCategories}
            expenseCategories={expenseCategories}
            addItem={addItem}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            formData={formData}
            setFormData={setFormData}
            updateItem={updateItem}
          />
          <div className="lg:col-span-2">
            <TotalBalance
              totalIncome={totalIncome}
              totalExpense={totalExpense}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <IncomeSection
                incomeCategories={incomeCategories}
                incomeSheet={incomeSheet}
                removeItem={removeItem}
                isFilteringBoxOpen={isIncomeFilteringBoxOpen}
                setIsFilteringBoxOpen={setIsIncomeFilteringBoxOpen}
                isSortingBoxOpen={isIncomeSortingBoxOpen}
                setIsSortingBoxOpen={setIsIncomeSortingBoxOpen}
                handleEditMode={handleEditMode}
                />
              <ExpenseSection
                expenseCategories={expenseCategories}
                expenseSheet={expenseSheet}
                removeItem={removeItem}
                isFilteringBoxOpen={isExpenseFilteringBoxOpen}
                setIsFilteringBoxOpen={setIsExpenseFilteringBoxOpen}
                isSortingBoxOpen={isExpenseSortingBoxOpen}
                setIsSortingBoxOpen={setIsExpenseSortingBoxOpen}
                handleEditMode={handleEditMode}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
