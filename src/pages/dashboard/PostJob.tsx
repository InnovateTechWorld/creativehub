import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
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


export const PostJob = () => {
  const [date, setDate] = useState<Date>();
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const talent = await signer.getAddress();
        const tx = await contract.postJob(jobDescription, ethers.parseUnits(budget, 18), talent);
        await tx.wait();
        console.log("Job posted successfully");
      } catch (error) {
        console.error("Error posting job:", error);
      }
    } else {
      console.error("Metamask is not installed");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Post a New Job</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          </div>
          <div>
            <Textarea placeholder="Job Description" className="min-h-[150px]" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
          </div>
           <div>
            <Input placeholder="Required Skills (comma separated)" value={skills} onChange={(e) => setSkills(e.target.value)} />
          </div>
          <div>
            <Input type="number" placeholder="Budget (in ETH)" value={budget} onChange={(e) => setBudget(e.target.value)} />
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a deadline</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button type="submit" className="w-full">Post Job</Button>
        </form>
      </CardContent>
    </Card>
  );
};
