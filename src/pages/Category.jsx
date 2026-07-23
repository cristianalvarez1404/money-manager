import React, { useEffect, useState } from 'react'
import Dashboard from '../components/Dashboard'
import useUser from '../hooks/useUser'
import { Plus } from 'lucide-react';
import CategoryList from '../components/CategoryList';
import axiosConfig from '../util/axiosConfig';
import { API_ENDPOINTS } from '../util/apiEndpoints';
import toast from 'react-hot-toast';
import Modal from '../components/Modal';
import AddCategoryForm from '../components/AddCategoryForm';

const Category = () => {
  useUser();
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [openAddCategoryModal, setOpenAddCategoryModel] = useState(false);
  const [openEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategoryDetails = async () => {
    if(loading) return;

    setLoading(true);

    try{
      const response = await axiosConfig.get(API_ENDPOINTS.GET_ALL_CATEGORIES);
      if(response.status == 200) {
        setCategoryData(response.data);
      }
    }catch(error) {
      toast.error(error.message);

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategoryDetails();
  }, []);


  return (
    <div>
      <Dashboard activeMenu="Category">
        <div className='my-5 mx-auto'>
          {/* Add button to add category */}
          <div className='flex justify-between items-center mb-5'>
            <h2 className='text-2xl font-semibold'>All Cateogories</h2>
            <button onClick={() => setOpenAddCategoryModel(true)} className='add-btn flex items-center gap-1'>
              <Plus size={15} />
              Add category
            </button>
          </div>

          {/* Category list */}
          <CategoryList categories={categoryData}/>

          {/* Adding category modal */}
          <Modal 
            isOpen={openAddCategoryModal} 
            onClose={() => setOpenAddCategoryModel(false)}
            title="Add Category"
          >
            <AddCategoryForm/>
          </Modal>

          {/* Updating category modal */}

        </div>
      </Dashboard>
    </div>
  )
}

export default Category
