import { useState } from "react";
import "./Patients.css";

const data = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Alex Brown", age: 40 },
];

export default function Patients() {
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");

  const filtered = data.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="patients">

      <h2>Patients</h2>

      {/* TOP BAR */}
      <div className="top-bar">
        <input
          placeholder="Search patient..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div>
          <button onClick={() => setView("grid")}>Grid</button>
          <button onClick={() => setView("list")}>List</button>
        </div>
      </div>

      {/* GRID VIEW */}
      {view === "grid" ? (
        <div className="grid">
          {filtered.map((p) => (
            <div key={p.id} className="card">
              <h3>{p.name}</h3>
              <p>Age: {p.age}</p>
            </div>
          ))}
        </div>
      ) : (
        /* LIST VIEW */
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}