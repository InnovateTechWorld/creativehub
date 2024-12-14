import { Button } from "@/components/ui/button";
import { Wallet2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/dashboard');
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
          <Button className="bg-primary hover:bg-primary/90">
            <Wallet2 className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};
