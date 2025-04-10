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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
    <Purchases RenderCompnent={PurchasesRender} />
    <Purchases RenderCompnent={PurchasesRender2} />
    </>
  </StrictMode>
);
