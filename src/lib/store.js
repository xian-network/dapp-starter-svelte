import { writable } from "svelte/store";

export const walletAddressElementValue = writable("Connect Wallet");
export const counterValue = writable(0);
export const xianWalletUtilInstance = writable(null);