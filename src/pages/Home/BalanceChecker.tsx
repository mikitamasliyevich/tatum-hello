import React, { useState } from 'react';
import useEthereumBalance from './hooks/useEthereumBalance';

const BalanceChecker: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { result, getBalance } = useEthereumBalance();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  const getBalanceInput = () => {
    getBalance(inputValue);
  };

  return (
    <div className='min-h-screen'>
      <header className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>
          Ethereum Balance Checker
        </h1>
        <p className='mt-2 text-gray-600 dark:text-gray-300'>
          Enter your Ethereum address to check your balance
        </p>
      </header>

      <div className='w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Enter ETH wallet address'
          className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
          aria-label='Ethereum Wallet Address'
        />
        <button
          onClick={getBalanceInput}
          className='w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50'
          disabled={!inputValue}
        >
          Get Balance
        </button>
        <p className='mt-4 text-lg font-medium text-center text-gray-700 dark:text-gray-300'>
          {result}
        </p>
      </div>
    </div>
  );
};

export default BalanceChecker;
