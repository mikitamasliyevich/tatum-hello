import { useState } from 'react';
import getEthereumBalance from '../../../api/getEthereumBalance';

const useEthereumBalance = () => {
  const [result, setResult] = useState<string>('');

  const getBalance = async (address: string) => {
    if (!address) {
      setResult('Please enter a valid Ethereum address.');
      return;
    }

    setResult('Loading...');

    const balanceResult = await getEthereumBalance(address);
    setResult(balanceResult);
  };

  return { result, getBalance };
};

export default useEthereumBalance;
