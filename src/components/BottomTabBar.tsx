import { Book, User, Plus } from "lucide-react";

interface BottomTabBarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onAddTransaction?: () => void;
}

const BottomTabBar = ({ activeTab = "ledger", onTabChange, onAddTransaction }: BottomTabBarProps) => {
  const tabs = [
    { id: "ledger", label: "友情账本", icon: Book },
    { id: "profile", label: "个人中心", icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border h-16 z-20">
      <div className="flex h-full max-w-md mx-auto relative">
        {/* Left Tab */}
        <button
          onClick={() => onTabChange?.(tabs[0].id)}
          className={`
            flex-1 flex flex-col items-center justify-center gap-1 py-2
            transition-colors duration-200
            ${activeTab === tabs[0].id ? 'text-app-purple' : 'text-text-muted hover:text-text-secondary'}
          `}
        >
          <Book size={24} strokeWidth={activeTab === tabs[0].id ? 2.5 : 2} />
          <span className="text-xs font-medium">{tabs[0].label}</span>
        </button>

        {/* Center FAB */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={onAddTransaction}
            className="w-14 h-14 bg-app-yellow text-app-purple rounded-full shadow-fab flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Plus size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Right Tab */}
        <button
          onClick={() => onTabChange?.(tabs[1].id)}
          className={`
            flex-1 flex flex-col items-center justify-center gap-1 py-2
            transition-colors duration-200
            ${activeTab === tabs[1].id ? 'text-app-purple' : 'text-text-muted hover:text-text-secondary'}
          `}
        >
          <User size={24} strokeWidth={activeTab === tabs[1].id ? 2.5 : 2} />
          <span className="text-xs font-medium">{tabs[1].label}</span>
        </button>
      </div>
    </div>
  );
};

export default BottomTabBar;