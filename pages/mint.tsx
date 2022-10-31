import { useAddress, useMetamask, useNFTDrop } from "@thirdweb-dev/react";
import { useRouter } from "next/router";

const Mint = () => {
  const router = useRouter();
// Get the currently connected wallet's address
const address = useAddress();

// Function to connect to the user's Metamask wallet
const connectWithMetamask = useMetamask();

// Get the NFT Collection contract
const nftDropContract = useNFTDrop(
  "0x787F5bCE3b4ad147D4457c9ad1448abbC72a2c53"
);
async function claimNft() {
    try {
      const tx = await nftDropContract?.claim(1);
      console.log(tx);
      alert("NFT Claimed!");
      router.push(`/stake`);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }


  return (
    <div>
      {!address ? (
        <button onClick={connectWithMetamask}
        >
          Connect Wallet
        </button>
      ) : (
          <button onClick={() => claimNft()}>
            Claim An NFT
          </button>
      )}
    </div>
  );
};

export default Mint;