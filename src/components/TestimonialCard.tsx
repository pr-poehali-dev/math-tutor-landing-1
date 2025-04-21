import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  age: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  age,
}) => {
  return (
    <Card className="bg-spacegray-300 border border-spacegray-100 h-full">
      <CardContent className="pt-6">
        <div className="text-creamy-300/80 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-2 text-creamy-400/50"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
          <p className="text-creamy-100 italic">{quote}</p>
        </div>
      </CardContent>
      <CardFooter className="border-t border-spacegray-100 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-creamy-400 text-spacegray-400 flex items-center justify-center font-medium">
            {author.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-creamy-100">{author}</p>
            <p className="text-creamy-300/70 text-xs">{age} лет</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
