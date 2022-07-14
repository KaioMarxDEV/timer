import { HistoryStatus } from '../components/HistoryStatus';

export function HistoryPage() {
  return (
    <main className="flex flex-1 flex-col p-14">
      <h1 className="text-2xl text-gray-100">My Historic</h1>
      <div className="mt-8 flex-1 overflow-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="rounded-tl-xl bg-gray-600 p-4 pl-6 text-left text-sm leading-7 text-gray-100">
                Task
              </th>
              <th className="bg-gray-600 p-4 text-left text-sm leading-7 text-gray-100">
                Duration
              </th>
              <th className="bg-gray-600 p-4 text-left text-sm leading-7 text-gray-100">
                Start
              </th>
              <th className="rounded-tr-xl bg-gray-600 p-4 pr-6 text-left text-sm leading-7 text-gray-100">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 pl-6 text-sm leading-7">
                Tarefa
              </td>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 text-sm leading-7">
                20:00
              </td>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 text-sm leading-7">
                Ha dois meses
              </td>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 text-sm leading-7">
                <HistoryStatus status="inProgress" />
              </td>
            </tr>
            <tr>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 pl-6 text-sm leading-7">
                Tarefa
              </td>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 text-sm leading-7">
                20:00
              </td>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 text-sm leading-7">
                Ha dois meses
              </td>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 text-sm leading-7">
                <HistoryStatus status="completed" />
              </td>
            </tr>
            <tr>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 pl-6 text-sm leading-7">
                Tarefa
              </td>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 text-sm leading-7">
                20:00
              </td>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 text-sm leading-7">
                Ha dois meses
              </td>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 text-sm leading-7">
                <HistoryStatus status="completed" />
              </td>
            </tr>
            <tr>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 pl-6 text-sm leading-7">
                Tarefa
              </td>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 text-sm leading-7">
                20:00
              </td>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 text-sm leading-7">
                Ha dois meses
              </td>
              <td className="border-t-4 border-t-gray-800 bg-gray-700 p-4 text-sm leading-7">
                <HistoryStatus status="incompleted" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
