import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  price,
  icon
}) => {
  return (
    <Card className="bg-spacegray-300 border border-spacegray-100 hover:border-creamy-400 transition-all duration-300 h-full">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="text-creamy-400 p-2 rounded-full bg-spacegray-400 w-10 h-10 flex items-center justify-center">
            {icon}
          </div>
          <CardTitle className="text-xl font-medium">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-creamy-300/80 text-sm mb-4">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-2 border-t border-spacegray-100">
        <p className="text-creamy-400 font-medium text-lg">{price}</p>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
