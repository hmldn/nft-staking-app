import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <h1>thirdweb Deploy - Custom Staking Contract</h1>

         <div onClick={() => router.push(`/mint`)}>
          <h2>Mint a new NFT</h2>
          <p>
            Use the NFT Drop Contract to claim an NFT from the collection.
          </p>
         </div>

        <div onClick={() => router.push(`/stake`)}>
          <img src={`/icons/token.webp`} alt="drop" />
          <h2>Stake Your NFTs</h2>
          <p>
            Use the custom staking contract deployed via <b>thirdweb Deploy</b>{" "}
            to stake your NFTs, and earn tokens from the <b>Token</b> contract.
          </p>
        </div>
    </div>
  );
};

export default Home;