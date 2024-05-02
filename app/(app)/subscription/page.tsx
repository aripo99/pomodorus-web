import { CreditCardIcon } from 'lucide-react';
import PricingTable from '@/components/pricing-table';

function SubscriptionPage() {
    return (
        <div className='container'>
            <div className='flex flex-col flex-1 space-y-8'>
                <h1 className='text-2xl font-semibold flex space-x-4 items-center'>
                    <CreditCardIcon className='w-5 h-5' />

                    <span>
                        Subscription
                    </span>
                </h1>

                <PricingTable />
            </div>
        </div>
    );
}

export default SubscriptionPage;