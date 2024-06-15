import { BBSData } from "../types/types";
import BBSCard from "./BBSCard";

interface BBSAllDataProps {
  bbsAllData: BBSData[];
}

const BBSCardlist = ({ bbsAllData }: BBSAllDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbs: BBSData) => (
        <BBSCard key={bbs.id} bbs={bbs} />
      ))}
    </div>
  );
};

export default BBSCardlist;
