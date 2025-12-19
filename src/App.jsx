import WeekoffTable from "./Components/weekofftable";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <section className="max-w-6xl mx-auto bg-white p-4 sm:p-6 rounded shadow">
        <h1 className="text-xl font-semibold mb-4">
          Add Work Calendar
        </h1>

      <WeekoffTable/>
      </section>
    </main>
  );
}
