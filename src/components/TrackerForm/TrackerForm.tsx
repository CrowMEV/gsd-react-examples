import { useState, FormEvent, ChangeEvent } from "react";
import "./TrackerForm.css";

// Описание типа для записи
type StepEntry = {
  date: string; // Дата в формате "YYYY-MM-DD"
  distance: number; // Пройденное расстояние
};

export default function TrackerForm() {
  const [steps, setSteps] = useState<StepEntry[]>([]); // Массив записей
  const [form, setForm] = useState<StepEntry>({
    date: "",
    distance: 0,
  });
  const [oldDate, setOldDate] = useState<string>("");
  const handlerSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (oldDate === "") {
      const existingEntryIndex = steps.findIndex(
        (entry) => entry.date === form.date
      );
      if (existingEntryIndex !== -1) {
        setSteps((prevSteps) => {
          const stepsArr = [...prevSteps];
          stepsArr[existingEntryIndex].distance =
            Number(form.distance) +
            Number(stepsArr[existingEntryIndex].distance);
          return stepsArr;
        });
      } else {
        setSteps((prevSteps: StepEntry[]) =>
          [...prevSteps, form].sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          )
        );
      }
    } else {
      const existingEntryIndex = steps.findIndex(
        (entry) => entry.date === oldDate
      );
      setSteps((prevSteps) => {
        const stepsArr = [...prevSteps];

        stepsArr[existingEntryIndex] = form;
        return stepsArr.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      });
      setOldDate("");
    }

    setForm({
      date: "",
      distance: 0,
    });
  };

  const hadlerChangeInputs = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleDelete = (deleteDate: string) => {
    setSteps((prevSteps) =>
      prevSteps.filter((entry) => entry.date !== deleteDate)
    );
  };

  return (
    <>
      <h1>Учёт тренировок</h1>
      {/* Форма для ввода */}
      <form className="form" onSubmit={handlerSubmit}>
        <input
          type="date"
          value={form.date}
          onChange={hadlerChangeInputs}
          name="date"
          required
        />
        <input
          type="number"
          placeholder="Пройдено км"
          value={form.distance}
          onChange={hadlerChangeInputs}
          name="distance"
          required
        />
        <button type="submit">OK</button>
      </form>

      {/* Таблица для отображения записей */}
      <table className="steps-table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Пройдено км</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((entry) => (
            <tr key={entry.date}>
              <td>{entry.date}</td>
              <td>{entry.distance}</td>
              <td>
                <button onClick={() => handleDelete(entry.date)}>✘</button>
                <button
                  onClick={() => {
                    setForm({ date: entry.date, distance: entry.distance });
                    setOldDate(entry.date);
                  }}
                >
                  ✎
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
