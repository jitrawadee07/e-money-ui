import React from 'react';

// Mock transaction data with unique IDs
const transactions = [
  { id: 'tx1', name: 'Netflix Subscription', amount: '-$12.99', date: 'Today', icon: '📺' },
  { id: 'tx2', name: 'Salary Deposit', amount: '+$3,500.00', date: 'Yesterday', icon: '💰' },
  { id: 'tx3', name: 'Grocery Store', amount: '-$65.40', date: 'Mar 28', icon: '🛒' }
];

const HomePage = () => {
  return (
    <div className="flex h-screen w-screen flex-col bg-gray-50 p-6">
      <header className="py-4">
        <h1 className="text-2xl font-bold text-green-600">E-Money</h1>
      </header>

      <div className="mt-6 rounded-xl bg-green-500 p-6 text-white">
        <div className="flex justify-between">
          <p className="text-sm">Total Balance</p>
          <div className="flex items-center space-x-1">
            <span className="text-sm">Hide</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <h2 className="my-2 text-3xl font-bold">$5,382.00</h2>
        <div className="flex space-x-2">
          <button className="flex items-center rounded-full bg-white bg-opacity-20 px-4 py-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-2 h-4 w-4">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
            Add Money
          </button>
          <button className="flex items-center rounded-full bg-white bg-opacity-20 px-4 py-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-2 h-4 w-4">
              <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
            </svg>
            Send
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-800">Quick Actions</h3>
        <div className="mt-4 grid grid-cols-4 gap-4">
          {['Pay', 'Top Up', 'Request', 'History'].map((action) => (
            <div key={action} className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-green-600">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-gray-600">{action}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-800">Recent Transactions</h3>
        <div className="mt-4 space-y-4">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-4">
              <div className="flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-lg">{tx.icon}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{tx.name}</p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
              </div>
              <p className={`font-medium ${tx.amount.includes('+') ? 'text-green-600' : 'text-gray-800'}`}>
                {tx.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
