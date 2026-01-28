import CompanyHeader from "../components/company/com-header";
import CompanyTabs from "../components/company/com-tabs";
import RightPanel from "../components/rightpanal";

export default function CompanyPage() {
  return (
    <div className="grid grid-cols-[1fr_360px] gap-6">
      
      <div className="space-y-6">
        <CompanyHeader />
        <CompanyTabs />
      </div>

      <RightPanel />
    </div>
  );
}
