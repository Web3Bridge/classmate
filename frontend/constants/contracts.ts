import { ethers } from "ethers";
import OrgFactoryABI from "./ABIs/OrganisationFactoryABI.json";
import OrgABI from "./ABIs/OrganisationABI.json";
import OrgNFTABI from "./ABIs/OrganisationNFTABI.json";

export const getOrgFactoryContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
) => {
  return new ethers.Contract(
    `${process.env.NEXT_PUBLIC_ORG_FACTORY_CONTRACT}`,
    OrgFactoryABI,
    providerOrSigner
  );
};

export const getOrgContract = (
  providerOrSigner: ethers.Provider | ethers.Signer,
  contractAddress: string
) => {
  return new ethers.Contract(contractAddress, OrgABI, providerOrSigner);
};

export const getOrgNFTContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
) => {
  return new ethers.Contract(
    `${process.env.NEXT_PUBLIC_ORG_NFT_CONTRACT}`,
    OrgNFTABI,
    providerOrSigner
  );
};
