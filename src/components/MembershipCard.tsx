import React from 'react';
import { Crown, Calendar, CheckCircle } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
interface MembershipCardProps {
  tier: string;
  expiryDate: string;
  onRenew: () => void;
}
export function MembershipCard({
  tier,
  expiryDate,
  onRenew
}: MembershipCardProps) {
  const daysLeft = Math.ceil((new Date(expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  const isExpiringSoon = daysLeft < 30;
  return <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-none overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary-500 opacity-10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
              Current Plan
            </p>
            <h3 className="text-2xl font-bold mt-1 capitalize flex items-center">
              {tier} Member
              <Crown className="w-5 h-5 ml-2 text-yellow-400 fill-current" />
            </h3>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${isExpiringSoon ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'}`}>
            {isExpiringSoon ? 'Expiring Soon' : 'Active'}
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center text-gray-300">
            <Calendar className="w-4 h-4 mr-3 opacity-70" />
            <span className="text-sm">
              Valid until {new Date(expiryDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center text-gray-300">
            <CheckCircle className="w-4 h-4 mr-3 opacity-70" />
            <span className="text-sm">{daysLeft} days remaining</span>
          </div>
        </div>

        <Button variant="primary" className="w-full bg-white text-gray-900 hover:bg-gray-100 border-none" onClick={onRenew}>
          Renew Membership
        </Button>
      </div>
    </Card>;
}