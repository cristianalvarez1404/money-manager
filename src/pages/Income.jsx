import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import useUser from "../hooks/useUser";
import { useStackId } from "recharts/types/cartesian/BarStack";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import toast from "react-hot-toast";
import IncomeList from "../components/IncomeList";
import { Plus } from "lucide-react";
import Modal from "../components/Modal";
import AddIncomeForm from "../components/AddIncomeForm";

const Income = () => {
  useUser();
  const [incomeData, setIncomeData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  //Fetch income details from the API
  const fetchIncomeDetails = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosConfig.get(API_ENDPOINTS.GET_ALL_INCOMES);
      if (response === 200) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch income details:", error);
      toast.error(
        error.response?.data?.message || "Failed to fetch income details",
      );
    } finally {
      setLoading(false);
    }
  };

  //Fetch categories for income
  const fetchIncomeCategories = async () => {
    try {
      const response = await axiosConfig.get(
        API_ENDPOINTS.CATEGORY_BY_TYPE("income"),
      );

      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (error) {
      console.log("Failed to fetch income categories:", error);
      toast.error(error.data?.message || "Failed to fetch income categories");
    }
  };

  const handleAddIncome = () => {};

  useEffect(() => {
    fetchIncomeDetails();
    fetchIncomeCategories();
  }, []);

  return (
    <Dashboard activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div>
            {/* overview for income with line char */}
            <button
              className="add-btn"
              onClick={() => setOpenAddIncomeModal(true)}
            >
              <Plus size={15} className="text-lg" /> Add Income
            </button>
          </div>
          <IncomeList
            transactions={incomeData}
            onDelete={(id) => console.log(id)}
          />

          {/* Add income Modal */}
          <Modal
            isOpen={openAddIncomeModal}
            onClose={() => setOpenAddIncomeModal(false)}
            title="Add income"
          >
            <AddIncomeForm
              onAddIncome={(income) => handleAddIncome}
              categories={categories}
            />
          </Modal>
        </div>
      </div>
    </Dashboard>
  );
};

export default Income;
