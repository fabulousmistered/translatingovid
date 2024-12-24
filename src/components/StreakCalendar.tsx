import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface StreakCalendarProps {
  completedDates?: Date[];
  currentStreak?: number;
}

const StreakCalendar = ({
  completedDates = [
    new Date(2024, 0, 1),
    new Date(2024, 0, 2),
    new Date(2024, 0, 3),
  ],
  currentStreak = 3,
}: StreakCalendarProps) => {
  const today = new Date();

  return (
    <Card className="p-4 bg-background w-[300px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Translation Streak</h3>
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <span className="font-bold">{currentStreak} days</span>
        </div>
      </div>

      <Calendar
        mode="single"
        selected={today}
        modifiers={{
          completed: completedDates,
        }}
        modifiersStyles={{
          completed: {
            backgroundColor: "rgb(34, 197, 94)",
            color: "white",
            borderRadius: "50%",
          },
        }}
        className="rounded-md border"
        disabled={(date) => date > today}
      />
    </Card>
  );
};

export default StreakCalendar;
