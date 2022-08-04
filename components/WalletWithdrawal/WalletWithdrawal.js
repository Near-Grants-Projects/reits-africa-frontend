import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar/Sidebar';
import WalletWithdrawalInfo from '@/components/WalletWithdrawalInfo/WalletWithdrawalInfo';
import AssetsTable from '@/components/WalletDepositInfo/AssetsTable';

export default function WalletWithdrawal() {
  return (
    <Layout title='Wallet Withdrawal'>
      <div className='md:9/12 md:ml-28 lg:ml-52 mt-10 max-w-[2560px] mb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />
          <WalletWithdrawalInfo />
          <AssetsTable />
        </div>
      </div>
    </Layout>
  );
}
