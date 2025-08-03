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
    <div className="relative rounded-lg shadow-card mx-4 mb-3 hover:shadow-elevated transition-all duration-200 h-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-app-cream to-pink-50"></div>
      
      {/* Decorative Element */}
      <div className="absolute top-3 right-4 w-2 h-8 bg-primary opacity-20 rounded-full"></div>
      
      {/* Content */}
      <div className="relative p-4 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getStatusIcon()}
            <span className="text-base font-bold text-text-primary">{friendName}</span>
          </div>
          <span className={`text-lg font-bold ${getAmountColor()}`}>
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
          <div className="text-sm text-text-muted mt-1 truncate">
            备注：{notes}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;