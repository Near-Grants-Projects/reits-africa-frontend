import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar/Sidebar';
import WalletDepositInfo from '@/components/WalletDepositInfo/WalletDepositInfo';
import AssetsTable from '@/components/WalletDepositInfo/AssetsTable';

export default function WalletDeposit() {
  return (
    <Layout title='Wallet Deposit'>
      <div className='md:9/12 md:ml-28 lg:ml-52 md:px-10 mt-10 max-w-[2560px] mb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />
          <WalletDepositInfo />
          <AssetsTable />
        </div>
      </div>
    </Layout>
  );
}
