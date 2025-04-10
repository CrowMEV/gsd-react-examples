import { PurchaseType } from "../../types/PurchaseType";
type PurchaseItemType = {
  item: PurchaseType;
  onRemove: (item: PurchaseType) => void;
};

export default function PurchaseItem(props: PurchaseItemType) {
  const { item, onRemove } = props;
  return (
    <li>
      <h2>{item.title}</h2>
      <button onClick={() => onRemove(item)}>Удалить</button>
    </li>
  );
}
