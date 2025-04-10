import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import UserProfile from "./components/UserProfile/UserProfile";
// import LikeButton from "./components/LikeButton/LikeButton";
// import PurchaseList from "./components/PurchaseList/PurchaseList";

// import FeedBack from "./components/Feedback/Feedback";
import Purchases, {
  PurchasesRender,
  PurchasesRender2,
} from "./components/Purchases/Purchase";
import TrackerForm from "./components/TrackerForm/TrackerForm";

// type MyComponentType = {
//   title?: string;
// } & typeof defaultProps;

// const defaultProps = {
//   title: "Hello",
// };

// const MyComponent = ({ title }: MyComponentType) => {
//   return <h1>{title}</h1>;
// };

// MyComponent.defaultProps = defaultProps;

// const obj = {
//   className: "Hanna",
//   age: 21,
//   role: "Aдмин"
// }
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TrackerForm />
  </StrictMode>
);
