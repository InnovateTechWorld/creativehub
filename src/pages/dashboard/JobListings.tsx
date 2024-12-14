import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Music, BookText, Code, Palette, Megaphone } from "lucide-react";
import { useState } from "react";
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

const mockJobs = [
  {
    id: 1,
    title: "Web3 Frontend Developer",
    description: "Looking for a skilled frontend developer with experience in React and Web3 technologies.",
    skills: ["React", "Web3.js", "TypeScript"],
    budget: "2 ETH",
    deadline: "2024-03-30",
    icon: Code
  },
  {
    id: 2,
    title: "NFT Music Composer",
    description: "Create unique music compositions for an upcoming NFT collection. Experience with digital music production required.",
    skills: ["Music Production", "NFT", "Sound Design"],
    budget: "3 ETH",
    deadline: "2024-04-15",
    icon: Music
  },
  {
    id: 3,
    title: "Web3 Content Writer",
    description: "Write engaging content about DeFi protocols and blockchain technology. Deep understanding of crypto ecosystem required.",
    skills: ["Content Writing", "DeFi", "Blockchain"],
    budget: "1.5 ETH",
    deadline: "2024-04-01",
    icon: BookText
  },
  {
    id: 4,
    title: "NFT Artist",
    description: "Design unique artwork for a generative NFT collection. Experience with digital art and NFTs required.",
    skills: ["Digital Art", "NFT", "Creative Design"],
    budget: "4 ETH",
    deadline: "2024-03-25",
    icon: Palette
  },
  {
    id: 5,
    title: "Web3 Marketing Specialist",
    description: "Develop and execute marketing strategies for a new DeFi platform. Experience with crypto marketing required.",
    skills: ["Marketing", "Social Media", "DeFi"],
    budget: "2.5 ETH",
    deadline: "2024-04-10",
    icon: Megaphone
  }
];

export const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = mockJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

    const handleApply = async (jobId: number) => {
        if (window.ethereum) {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const contract = new ethers.Contract(contractAddress, contractABI, signer);
                const tx = await contract.applyForJob(jobId);
                await tx.wait();
                console.log("Applied for job successfully");
            } catch (error) {
                console.error("Error applying for job:", error);
            }
        } else {
            console.error("Metamask is not installed");
        }
    };

    const handleComplete = async (jobId: number) => {
        if (window.ethereum) {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const contract = new ethers.Contract(contractAddress, contractABI, signer);
                const tx = await contract.completeProject(jobId);
                await tx.wait();
                console.log("Project completed successfully");
            } catch (error) {
                console.error("Error completing project:", error);
            }
        } else {
            console.error("Metamask is not installed");
        }
    };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Input 
          placeholder="Search jobs..." 
          className="max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline">Filter</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <job.icon className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">{job.title}</CardTitle>
              </div>
              <CardDescription className="line-clamp-2">{job.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Budget: {job.budget}</p>
                <p>Deadline: {job.deadline}</p>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" onClick={() => handleApply(job.id)}>Apply Now</Button>
              <Button className="w-full" onClick={() => handleComplete(job.id)}>Complete Project</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
