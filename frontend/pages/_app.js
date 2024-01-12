import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygonMumbai, baseGoerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai, mainnet, baseGoerli],
  [
    jsonRpcProvider({
      rpc:(chain) => ({
        http: "https://polygon-mumbai.infura.io/v3/59cc6c028f8040389cc06a78618805f1",
        wss: "wss://polygon-mumbai.infura.io/ws/v3/59cc6c028f8040389cc06a78618805f1",
      })
    })
  ]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "1207efae1596f9a53ff3a7c1b1e0d62c",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
