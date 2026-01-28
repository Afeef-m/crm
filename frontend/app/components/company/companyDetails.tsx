export default function CompanyDetails() {
  return (
    <div className="grid grid-cols-2 gap-x-12 text-sm">
      <div className="grid grid-cols-[140px_1fr] gap-y-2">
        <span className="text-gray-400">Postal:</span>
        <span>Vastagatan 5</span>

        <span className="text-gray-400">Country:</span>
        <span>Sweden</span>

        <span className="text-gray-400">Phone:</span>
        <span>
          +46 800 193 2820 <span className="text-gray-400">Main</span>
        </span>

        <span className="text-gray-400">Webbaddress:</span>
        <span>info@sc.se</span>

        <span className="text-gray-400">Email:</span>
        <span>www.sc.se</span>
      </div>

      <div className="grid grid-cols-[140px_1fr] gap-y-2">
        <span className="text-gray-400">Category:</span>
        <span>Customer A</span>

        <span className="text-gray-400">Code:</span>
        <span>SUPERCO</span>

        <span className="text-gray-400">Number:</span>
        <span>2002</span>

        <span className="text-gray-400">VAT No:</span>
        <span>SE123456789</span>

        <span className="text-gray-400">Business:</span>
        <span>IT</span>
      </div>
    </div>
  );
}