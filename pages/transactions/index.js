export default function Transactions() {
  return (
    <div className='px-5'>
      <h3 className='text-lg md:text-2xl'>Transactions</h3>
      <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='py-3 px-6'>
                Property
              </th>
              <th scope='col' className='py-3 px-6'>
                ID
              </th>
              <th scope='col' className='py-3 px-6'>
                AMOUNT(TOKEN)
              </th>
              <th scope='col' className='py-3 px-6'>
                VALUE
              </th>
              <th scope='col' className='py-3 px-6'>
                PROFIT/LOSS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
              <th
                scope='row'
                className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                3 BEDROOM APARTMENT LEKKI
              </th>
              <td className='py-4 px-6'>RFCE345</td>
              <td className='py-4 px-6'>100</td>
              <td className='py-4 px-6'>2000 NEAR</td>
              <td className='py-4 px-6'>20%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
