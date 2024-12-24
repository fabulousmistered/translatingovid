import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Save, Upload } from "lucide-react";

interface ProgressTrackerProps {
  progress?: number;
  onSave?: () => void;
  onLoad?: () => void;
}

const ProgressTracker = ({
  progress = 0,
  onSave = () => console.log("Save clicked"),
  onLoad = () => console.log("Load clicked"),
}: ProgressTrackerProps) => {
  return (
    <div className="w-full p-4 bg-background border rounded-lg shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <Progress value={progress} className="w-full" />
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Progress
          </Button>

          <Button variant="outline" size="sm" onClick={onLoad}>
            <Upload className="h-4 w-4 mr-2" />
            Load Progress
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
