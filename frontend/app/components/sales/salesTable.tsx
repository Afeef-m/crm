const sales = [
  {
    status: "Open",
    saleDate: "01/02/2025",
    amount: "17,344.00",
    stage: "Proposal (60%)",
    nextActivity: "06/11/2024",
    name: "45 Components - RTS",
  },
];

export default function SalesTable() {
  return (
    <table className="w-full text-sm">
      <thead className="text-left text-gray-500">
        <tr>
          <th>Status</th>
          <th>Sale date</th>
          <th>Amount</th>
          <th>Stage</th>
          <th>Next activity</th>
          <th>Sale name</th>
        </tr>
      </thead>

      <tbody>
        {sales.map((s, i) => (
          <tr key={i} className="border-t">
            <td className="py-2">
              <span className="px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700">
                {s.status}
              </span>
            </td>
            <td>{s.saleDate}</td>
            <td>€ {s.amount}</td>
            <td>{s.stage}</td>
            <td>{s.nextActivity}</td>
            <td className="text-emerald-600">{s.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
