import React, { memo } from "react";
import { Search } from "lucide-react";

type Props = {
  setName: any;
};

const SearchInput = ({ setName }: Props) => {
  return (
    <div className="bg-secondary px-4 py-2 flex gap-4 rounded-lg items-center">
      <Search height={20} className="text-primary" />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Search Here Names"
        className="bg-inherit focus:outline-none"
      />
    </div>
  );
};

export default memo(SearchInput);
