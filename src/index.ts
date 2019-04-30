import { Wallet, WalletButton } from "./components";
import { WalletReducer } from "./reducers";
import {
  getSelectedAccount,
  getAccount,
  getSelectedAccountWallet,
  getWallet,
  getAccounts
} from "./selector/wallet";
import {
  selectAccount,
  unlockBrowserWalletAccount,
  showWalletModal,
  hideWalletModal
} from "./actions/wallet";
import { getBalance, getTransactionReceipt, getContract } from "./wallets";
import "../index.css";

export {
  Wallet,
  WalletReducer,
  WalletButton,
  getAccounts,
  getSelectedAccount,
  getAccount,
  getSelectedAccountWallet,
  getWallet,
  selectAccount,
  unlockBrowserWalletAccount,
  showWalletModal,
  hideWalletModal,
  getBalance,
  getTransactionReceipt,
  getContract
};
