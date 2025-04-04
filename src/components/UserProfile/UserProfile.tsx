import "./mega-style.css";
type UserProfileType = {
  word: string;
  words: Array<string>;
};

export default function UserProfile({ word, words }: UserProfileType) {
  // const arr = []
  // for (const el of words) {
  //   arr.push(<li>{el}</li>)
  // }

  return (
    <>
      <h1 className="title">{word}</h1>
      <ul>
        {words.map((el) => {
          console.log("belebele");
          return <li key={el}>{el}</li>;
        })}
      </ul>
      <div>{false}</div>
    </>
  );
}
