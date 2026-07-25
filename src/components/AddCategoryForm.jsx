import React, { useState } from 'react'
import Input from './Input';
import EmojiPickerPopup from './EmojiPickerPopup';

const AddCategoryForm = ({onAddCategory}) => {
  const [category, setCategory] = useState({
    name:"",
    type:"income",
    icon:""
  });

  const [loading, setLoading] = useState(false)

  const categoryTypeOptions = [
    {value: "income", label: "Income"},
    {value: "expense", label: "Expense"},
  ];

  const handleChange = async (key, value) => {
    try {
      await onAddCategory(category);
    }catch(error){

    }finally {

    }

    setCategory({...category, [key]:value})
  }
  
  const handleSubmit = () => {
    onAddCategory(category);
  }

  return (
    <div className='p-4'>
      <EmojiPickerPopup
        icon={category.icon}
        onSelect = {(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <Input
        value={category.name}
        onChange={({target}) => handleChange("name",target.value)}
        label="Category Name"
        placeholder='e.g., Freelance, Salary, Groceries'
        type='text'
      />

      <Input
        label="Category Type"
        value={category.type}
        onChange={({target}) => handleChange("type", target.value)}
        isSelect={true}
        options={categoryTypeOptions}
      />

      <div className='flex justify-end mt-6'>
        <button 
          type='button'
          onClick={handleSubmit}
          className='add-btn add-btn-fill'>
          Add Category
        </button>
      </div>
    </div>
  )
}

export default AddCategoryForm
