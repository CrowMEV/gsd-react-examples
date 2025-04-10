import { JSX } from "react";
import { PurchaseType } from "../../types/PurchaseType";
// import React from "react";
type PurchasesArrType = {
  purchases: PurchaseType[];
};

type PurchasesType = {
  RenderCompnent: (props: PurchaseType) => JSX.Element;
};

export function PurchasesRender({ purchases }: PurchasesArrType) {
  return (
    <ul>
      {purchases.map((purchase) => (
        <li>
          <h2>{purchase.title}</h2>
        </li>
      ))}
    </ul>
  );
}

export function PurchasesRender2({purchases}: PurchasesArrType) {
  return (
    <ol>
      {purchases.map((purchase) => (
        <li>
          <h2>{purchase.title}</h2>
        </li>
      ))}
    </ol>
  );
}

export default function Purchases({ RenderCompnent }: PurchasesType) {
  const purchases = [
    { id: 1, title: "Яблоки" },
    { id: 2, title: "Кофе" },
  ];
  return <RenderCompnent purchases={purchases} />;
}

// export default function Purchases({ ...meassage }) {
//   debugger;
//   return React.Children.map(children, (child) => <h1 {...meassage}>{child}</h1>);
// return children(purchases);
// }
