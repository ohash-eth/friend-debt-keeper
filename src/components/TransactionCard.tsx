import { Check, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";

interface Transaction {
  id: string;
  friendName: string;
  amount: number;
  type: "lent" | "borrowed";
  status: "unreturned" | "returned" | "overdue";
  dueDate: string;
  description?: string;
}

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard = ({ transaction }: TransactionCardProps) => {
  const { friendName, amount, type, status, dueDate } = transaction;

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
    <div className="bg-white rounded-lg shadow-card p-4 mx-4 mb-3 hover:shadow-elevated transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          {getStatusIcon()}
          <span className="text-base font-bold text-text-primary">{friendName}</span>
        </div>
        <span className={`text-base font-bold ${getAmountColor()}`}>
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
    </div>
  );
};

export default TransactionCard;