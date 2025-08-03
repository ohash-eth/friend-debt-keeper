import { Plus } from "lucide-react";

interface FloatingActionButtonProps {
  onClick?: () => void;
}

const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-20 left-1/2 transform -translate-x-1/2
        w-16 h-16 bg-primary text-white rounded-app-full shadow-fab
        flex items-center justify-center gap-1
        hover:scale-105 active:scale-95 transition-all duration-200
        z-10
      "
    >
      <Plus size={24} strokeWidth={2.5} />
      <span className="text-xs font-bold hidden sm:inline">借还</span>
    </button>
  );
};

export default FloatingActionButton;