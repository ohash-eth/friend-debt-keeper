import { useState } from "react";

interface FilterSegmentedControlProps {
  onFilterChange?: (filter: string) => void;
}

const FilterSegmentedControl = ({ onFilterChange }: FilterSegmentedControlProps) => {
  const [activeFilter, setActiveFilter] = useState("unreturned");

  const filters = [
    { id: "unreturned", label: "未还", count: 3 },
    { id: "returned", label: "已还", count: null },
    { id: "overdue", label: "逾期", count: 2, hasWarning: true }
  ];

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    onFilterChange?.(filterId);
  };

  return (
    <div className="px-4 py-3 bg-background">
      <div className="flex bg-bg-tertiary rounded-app-lg p-1 gap-1">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilterChange(filter.id)}
            className={`
              flex-1 h-10 rounded-app-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-1
              ${activeFilter === filter.id 
                ? 'bg-filter-highlight text-borrowed shadow-sm' 
                : 'text-text-disabled hover:text-text-primary'
              }
            `}
          >
            <span>{filter.label}</span>
            {filter.count && (
              <span className="text-xs">({filter.count})</span>
            )}
            {filter.hasWarning && (
              <div className="w-2 h-2 bg-overdue rounded-full ml-1" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSegmentedControl;