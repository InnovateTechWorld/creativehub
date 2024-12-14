import { Button } from "@/components/ui/button";
import { Wallet2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ethers } from 'ethers';

const contractAddress = "0xbab70c3766e3ad630b17e0588a381be1e620b97a";
const contractABI = [
    {
        "inputs": [],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "uint128",
                "name": "budget",
                "type": "uint128"
            },
            {
                "internalType": "address",
                "name": "talent",
                "type": "address"
            }
        ],
        "name": "postJob",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint128",
                "name": "job_id",
                "type": "uint128"
            }
        ],
        "name": "applyForJob",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint128",
                "name": "job_id",
                "type": "uint128"
            }
        ],
        "name": "completeProject",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export const Navbar = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/dashboard');
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        console.log("Account:", await signer.getAddress());
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      console.error("Metamask is not installed");
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            CreativeHub
          </span>
        </div>
        <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={handleSignIn}>Sign In</Button>
          <Button className="bg-primary hover:bg-primary/90" onClick={connectWallet}>
            <Wallet2 className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};
