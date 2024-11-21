import { BonusArea } from "./BonusArea";
import { WithdrawArea } from "./WithdrawArea";
import { RechargeArea } from "./RechargeArea";
import { TransactionArea } from "./TransactionArea";
import { PasswordArea } from "./PasswordArea";
import { ReferralArea } from "./ReferralArea";

export const UserDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      <BonusArea />
      <WithdrawArea />
      <RechargeArea />
      <TransactionArea />
      <PasswordArea />
      <ReferralArea />
    </div>
  );
};