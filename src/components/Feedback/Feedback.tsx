import { FormEvent, ChangeEvent, useState } from "react";

type FormType = {
  date: string;
  speed: string;
};

export default function FeedBack() {
  const [form, setForm] = useState<FormType>({
    data: "",
    email: "",
  });
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setForm({ yourName: "", email: "" });
  };
  const handleYourName = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ваше Имя
        <input
          type="text"
          name="yourName"
          onChange={handleYourName}
          value={form.yourName}
        />
      </label>
      <label>
        Ваше Имя
        <input
          type="text"
          name="email"
          onChange={handleYourName}
          value={form.email}
        />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
}
