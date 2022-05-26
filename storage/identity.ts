import { providers, utils, BigNumber } from "ethers";
import { PrivateKey } from "@textile/hub";

type WindowInstanceWithEthereum = Window &
  typeof globalThis & { ethereum?: providers.ExternalProvider };

export const getSigner = async () => {
  if (!(window as WindowInstanceWithEthereum).ethereum) {
    throw new Error(
      "Ethereum is not connected. Please download Metamask from https://metamask.io/download.html"
    );
  }
  const provider = new providers.Web3Provider(
    // @ts-ignore
    (window as WindowInstanceWithEthereum).ethereum
  );
  const signer = provider.getSigner();
  return signer;
};

const message =
  "A signature is required to verify your identity and to access authorized files";

export const generateIdentity = async () => {
  const signer = await getSigner();
  const signedText = await signer.signMessage(message);
  const hash = utils.keccak256(signedText);
  if (hash === null) {
    throw new Error(
      "No account is provided. Please provide an account to this application."
    );
  } // @ts-ignore
  const array = hash
    // @ts-ignore
    .replace("0x", "")
    // @ts-ignore
    .match(/.{2}/g)
    .map((hexNoPrefix) => BigNumber.from("0x" + hexNoPrefix).toNumber());
  if (array.length !== 32) {
    throw new Error(
      "Hash of signature is not the correct size! Something went wrong!"
    );
  }
  const identity = PrivateKey.fromRawEd25519Seed(Uint8Array.from(array));
  console.log(identity.toString());

  // Your app can now use this identity for generating a user Mailbox, Threads, Buckets, etc
  return identity;
};
