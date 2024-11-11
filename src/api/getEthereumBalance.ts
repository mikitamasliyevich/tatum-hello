import { TatumSDK, Ethereum, Network } from '@tatumio/tatum';

const getEthereumBalance = async (address: string) => {
  const apiKey = import.meta.env.VITE_TATUM_API_KEY || '';

  try {
    const tatum = await TatumSDK.init<Ethereum>({
      network: Network.ETHEREUM,
      apiKey: { v4: apiKey },
      verbose: true,
    });

    const balance = await tatum.address.getBalance({
      addresses: [address],
    });

    const ethBalance = balance.data.find((asset) => asset.asset === 'ETH');

    if (ethBalance) {
      return `Balance: ${ethBalance.balance} ETH`;
    } else {
      return 'No ETH found on this address.';
    }
  } catch (err) {
    console.log(err);
    return 'Error fetching balance. Please try again later.';
  }
};

export default getEthereumBalance;
