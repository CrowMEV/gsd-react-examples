import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import UserProfile from "./components/UserProfile/UserProfile";
// import LikeButton from "./components/LikeButton/LikeButton";
import PurchaseList from "./components/PurchaseList/PurchaseList";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PurchaseList />
  </StrictMode>
);
