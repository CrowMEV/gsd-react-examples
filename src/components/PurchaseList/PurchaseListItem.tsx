import { PurchaseType } from "../../types/PurchaseType";
type PurchaseItemType = {
  item: PurchaseType;
  onRemove: (item: PurchaseType) => void;
};

export default function PurchaseItem({ item, onRemove }: PurchaseItemType) {
  return (
    <li>
      <h2>{item.title}</h2>
      <button onClick={() => onRemove(item)}>Удалить</button>
    </li>
  );
}
