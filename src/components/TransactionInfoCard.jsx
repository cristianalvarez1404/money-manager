import React from "react";

const TransactionInfoCard = ({
  icon,
  title,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {
  const getAmountStyles = () =>
    type === "income" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800";

  return <div>TransactionInfoCard</div>;
};

export default TransactionInfoCard;
