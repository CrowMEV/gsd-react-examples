import { useState, MouseEvent } from "react";
export default function LikeButton() {
  const [clicks, setClicks] = useState(0); 
  const handleCliks = (evt: MouseEvent) => {
    setClicks((prevCliks) => prevCliks + 1);
    console.log({ evt });
  };
  return <button onClick={handleCliks}>Clicks: {clicks}</button>;
}
