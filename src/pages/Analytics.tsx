import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  BarChart, Bar, CartesianGrid
} from "recharts";
import "./Analytics.css";

const data = [
  { day: "Mon", patients: 30, revenue: 400 },
  { day: "Tue", patients: 50, revenue: 700 },
  { day: "Wed", patients: 40, revenue: 500 },
  { day: "Thu", patients: 70, revenue: 900 },
];

export default function Analytics() {
  return (
    <div className="analytics">

      <h2>Dashboard Overview</h2>

      {/* KPI CARDS */}
      <div className="cards">
        <div className="card">
          <h3>120</h3>
          <p>Total Patients</p>
        </div>

        <div className="card">
          <h3>₹45,000</h3>
          <p>Revenue</p>
        </div>

        <div className="card">
          <h3>32</h3>
          <p>Appointments</p>
        </div>
      </div>

      {/* CHARTS */}
      <div className="charts">

        <div className="chart-box">
          <h4>Patient Growth</h4>
          <LineChart width={400} height={250} data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="patients" />
          </LineChart>
        </div>

        <div className="chart-box">
          <h4>Revenue</h4>
          <BarChart width={400} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" />
          </BarChart>
        </div>

      </div>
    </div>
  );
}