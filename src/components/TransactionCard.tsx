import { Check, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";

interface Transaction {
  id: string;
  friendName: string;
  amount: number;
  type: "lent" | "borrowed";
  status: "unreturned" | "returned" | "overdue";
  dueDate: string;
  description?: string;
  notes?: string;
}

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard = ({ transaction }: TransactionCardProps) => {
  const { friendName, amount, type, status, dueDate, notes } = transaction;

  const getStatusIcon = () => {
    switch (status) {
      case "returned":
        return <Check size={16} className="text-status-returned" />;
      case "overdue":
        return <AlertTriangle size={16} className="text-status-overdue" />;
      default:
        return <div className="w-2 h-2 bg-status-unreturned rounded-full" />;
    }
  };

  const getAmountColor = () => {
    if (status === "overdue") return "text-overdue";
    return type === "lent" ? "text-lent" : "text-borrowed";
  };

  const getActionText = () => {
    return type === "lent" ? "借出 · 借给他" : "借入 · 向他借";
  };

  const getActionIcon = () => {
    return type === "lent" ? (
      <TrendingDown size={14} className="text-lent ml-1" />
    ) : (
      <TrendingUp size={14} className="text-borrowed ml-1" />
    );
  };

  return (
    <div className="relative rounded-lg shadow-tech-card mx-4 mb-3 hover:shadow-tech-floating hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out min-h-24 overflow-hidden active:scale-[0.98] cursor-pointer">
      {/* Enhanced Tech-Inspired Background with Subtle Color */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-blue-50/60 to-yellow-50/40"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-tech-primary via-tech-secondary to-tech-accent opacity-60"></div>
      <div className="absolute inset-0 opacity-20 bg-tech-mesh backdrop-blur-[0.5px]"></div>
      
      {/* Decorative Tech Elements */}
      <div className="absolute top-3 right-4 w-3 h-3 bg-app-yellow opacity-60 rounded-full shadow-glow"></div>
      <div className="absolute top-6 right-6 w-2 h-6 bg-app-purple opacity-30 rounded-full"></div>
      <div className="absolute top-2 right-8 w-1 h-3 bg-tech-accent opacity-40 rounded-full"></div>
      
      {/* Content */}
      <div className="relative p-4 h-full flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getStatusIcon()}
            <span className="text-base font-bold text-text-primary">{friendName}</span>
          </div>
          <span className={`text-xl font-bold ${getAmountColor()}`} style={{ background: 'none' }}>
            ¥{amount.toLocaleString()}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-text-secondary">
            <span>{getActionText()}</span>
            {getActionIcon()}
          </div>
          <span className="text-text-muted">
            还款：{dueDate}
          </span>
        </div>
        
        {notes && (
          <div className="text-sm text-text-muted leading-relaxed">
            备注：{notes}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;