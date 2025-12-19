import { useState } from "react";
import { DAYS, WEEKS } from "../Data/Constant";

const WeekoffTable = ()=> {

  const initialData = {};
  for (let i = 0; i < DAYS.length; i++) {
    initialData[DAYS[i]] = {};
    for (let j = 0; j < WEEKS.length; j++) {
      initialData[DAYS[i]][WEEKS[j]] = {
        checked: false,
        halfDay: false,
        type: ""
      };
    }
  }

  const [weekoffData, setWeekoffData] = useState(initialData);

  const updateCell = (day, week, updates) => {
    setWeekoffData(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [week]: {
          ...prev[day][week],
          ...updates
        }
      }
    }));
  }

  function handleSave() {
    console.log("Final Data:", weekoffData);
    alert("Saved successfully");
  }

  return (
    <div className="border rounded shadow bg-white">

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Day</th>
              {WEEKS.map(week => (
                <th key={week} className="border p-3 text-center">
                  {week}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {DAYS.map(day => (
              <tr key={day} className="hover:bg-gray-50">
                <td className="border p-3 font-medium">{day}</td>

                {WEEKS.map(week => {
                  const cell = weekoffData[day][week];

                  return (
                    <td key={week} className="border p-3 text-center">
                      <div className="flex flex-col items-center gap-2">

                        <input
                          type="checkbox"
                          checked={cell.checked}
                          onChange={() =>
                            updateCell(day, week, {
                              checked: !cell.checked,
                              halfDay: false,
                              type: ""
                            })
                          }
                        />

                        {cell.checked && (
                          <>
                            <label className="text-xs flex gap-1">
                              <input
                                type="checkbox"
                                checked={cell.halfDay}
                                onChange={() =>
                                  updateCell(day, week, {
                                    halfDay: !cell.halfDay,
                                    type: ""
                                  })
                                }
                              />
                              Half day
                            </label>

                            {cell.halfDay && (
                              <select
                                className="border rounded px-2 py-1 text-xs"
                                value={cell.type}
                                onChange={e =>
                                  updateCell(day, week, {
                                    type: e.target.value
                                  })
                                }
                              >
                                <option value="">Select</option>
                                <option value="first">First Half</option>
                                <option value="second">Second Half</option>
                              </select>
                            )}
                          </>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end gap-3 p-4 bg-gray-50 border-t">
        <button className="px-4 py-2 border rounded">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default WeekoffTable;