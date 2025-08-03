import { Book, User } from "lucide-react";

interface BottomTabBarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const BottomTabBar = ({ activeTab = "ledger", onTabChange }: BottomTabBarProps) => {
  const tabs = [
    { id: "ledger", label: "友情账本", icon: Book },
    { id: "profile", label: "个人中心", icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border h-15 z-20">
      <div className="flex h-full max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className={`
                flex-1 flex flex-col items-center justify-center gap-1 py-2
                transition-colors duration-200
                ${isActive ? 'text-primary' : 'text-text-muted hover:text-text-secondary'}
              `}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomTabBar;