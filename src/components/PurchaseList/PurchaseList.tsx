import { useState } from "react";
import PurchaseItem from "./PurchaseListItem";
import { PurchaseType } from "../../types/PurchaseType";
export default function PurchaseList() {
  const [purshases, setPurchases] = useState<PurchaseType[]>([
    { id: 1, title: "Яблоки" },
    { id: 2, title: "Кофе" },
  ]);
  const handleRemove = (i: PurchaseType) => {
    setPurchases((prevPurchases): PurchaseType[] =>
      prevPurchases.filter((item) => item.id !== i.id)
    );
  };
  return (
    <ul>
      {purshases.map((item) => (
        <PurchaseItem key={item.id} item={item} onRemove={handleRemove} />
      ))}
    </ul>
  );
}
