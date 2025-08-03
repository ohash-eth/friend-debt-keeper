import { Search, Filter } from "lucide-react";

const TopNavigation = () => {
  return (
    <nav className="h-14 bg-white border-b border-border flex items-center justify-between px-4 shadow-sm">
      <div className="flex-1" />
      <h1 className="text-lg font-bold text-text-primary">友情账本</h1>
      <div className="flex-1 flex justify-end items-center gap-4">
        <button className="p-1 text-text-disabled hover:text-text-primary transition-colors">
          <Search size={24} />
        </button>
        <button className="p-1 text-text-disabled hover:text-text-primary transition-colors">
          <Filter size={24} />
        </button>
      </div>
    </nav>
  );
};

export default TopNavigation;