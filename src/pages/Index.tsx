import { useState } from "react";
import TopNavigation from "@/components/TopNavigation";
import FilterSegmentedControl from "@/components/FilterSegmentedControl";
import TransactionCard from "@/components/TransactionCard";
import FloatingActionButton from "@/components/FloatingActionButton";
import BottomTabBar from "@/components/BottomTabBar";

// Mock data for demonstration
const mockTransactions = [
  {
    id: "1",
    friendName: "张小明",
    amount: 500,
    type: "lent" as const,
    status: "unreturned" as const,
    dueDate: "2024-08-15",
    description: "午餐费用"
  },
  {
    id: "2", 
    friendName: "李小红",
    amount: 200,
    type: "borrowed" as const,
    status: "overdue" as const,
    dueDate: "2024-07-28",
    description: "电影票"
  },
  {
    id: "3",
    friendName: "王大伟",
    amount: 1000,
    type: "lent" as const,
    status: "returned" as const,
    dueDate: "2024-08-01",
    description: "紧急借款"
  },
  {
    id: "4",
    friendName: "陈小娟",
    amount: 300,
    type: "borrowed" as const,
    status: "unreturned" as const,
    dueDate: "2024-08-20",
    description: "购物垫付"
  },
  {
    id: "5",
    friendName: "刘强",
    amount: 800,
    type: "lent" as const,
    status: "overdue" as const,
    dueDate: "2024-07-30",
    description: "房租分摊"
  }
];

const Index = () => {
  const [currentFilter, setCurrentFilter] = useState("unreturned");
  const [activeTab, setActiveTab] = useState("ledger");

  const filteredTransactions = mockTransactions.filter(transaction => {
    switch (currentFilter) {
      case "unreturned":
        return transaction.status === "unreturned";
      case "returned":
        return transaction.status === "returned";
      case "overdue":
        return transaction.status === "overdue";
      default:
        return true;
    }
  });

  const handleAddTransaction = () => {
    console.log("Opening add transaction modal...");
  };

  if (activeTab !== "ledger") {
    return (
      <div className="min-h-screen bg-bg-secondary">
        <TopNavigation />
        <div className="flex-1 flex items-center justify-center pt-20 pb-20">
          <div className="text-center">
            <h2 className="text-xl font-bold text-text-primary mb-2">个人中心</h2>
            <p className="text-text-secondary">功能开发中...</p>
          </div>
        </div>
        <BottomTabBar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-secondary">
      {/* Top Navigation */}
      <TopNavigation />
      
      {/* Filter Segmented Control */}
      <FilterSegmentedControl onFilterChange={setCurrentFilter} />
      
      {/* Transaction List */}
      <div className="pb-32 pt-2">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="text-6xl mb-4">💰</div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              暂无{currentFilter === "unreturned" ? "未还" : currentFilter === "returned" ? "已还" : "逾期"}记录
            </h3>
            <p className="text-text-secondary text-center">
              {currentFilter === "unreturned" 
                ? "所有借款都已按时归还" 
                : currentFilter === "returned"
                ? "还没有已完成的交易记录"
                : "恭喜！没有逾期的借款"
              }
            </p>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton onClick={handleAddTransaction} />
      
      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;