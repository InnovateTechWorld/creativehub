import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { User, Link as LinkIcon, Plus } from "lucide-react";
import { useState } from "react";

export const Profile = () => {
  const [skills, setSkills] = useState<string[]>([
    "React", "Web3.js", "Smart Contracts", "Content Writing"
  ]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium">John Doe</h3>
              <p className="text-sm text-muted-foreground">Web3 Developer & Creative</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Wallet Address</label>
            <Input value="0x1234...5678" readOnly className="bg-muted" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Bio</label>
            <Textarea 
              placeholder="Tell us about yourself..."
              className="min-h-[100px]"
              defaultValue="Passionate Web3 developer with experience in DeFi and NFT projects. Always looking for new challenges and opportunities to innovate in the blockchain space."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Portfolio Link</label>
            <div className="flex gap-2">
              <Input 
                placeholder="https://your-portfolio.com" 
                defaultValue="https://github.com/johndoe"
                className="flex-1"
              />
              <Button variant="outline" size="icon">
                <LinkIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Skills</label>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Add a skill..."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
              />
              <Button variant="outline" size="icon" onClick={addSkill}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button className="w-full">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
};