import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handleBrowseJobs = () => {
    navigate('/dashboard/jobs');
  };

  const handlePostJob = () => {
    navigate('/dashboard/PostJob');
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Connect with Web3 Opportunities
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join the decentralized creative economy. Find opportunities or hire talented professionals in the Web3 space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={handleBrowseJobs}
            >
              Browse Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handlePostJob}
            >
              Post a Job
            </Button>
            <Button
              size="lg"
              variant="secondary"
            >
              <Link to="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
