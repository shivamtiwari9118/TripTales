import toast from "react-hot-toast";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const Cardone = () => {
  return (
    <div>
      <Card className="w-[300px] overflow-hidden bg-white rounded-3xl shadow-xl">
        <CardHeader className="p-0">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 rounded-bl-full opacity-50"></div>
            <div className="relative z-10">
              <div className="text-lg font-bold mb-1">BASIC</div>
              <div className="text-center">
                <span className="text-4xl font-bold">Free</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <FeatureItem
            icon={<Check className="h-5 w-5 text-green-500" />}
            text="Budget Planning Tools"
          />
          <FeatureItem
            icon={<Check className="h-5 w-5 text-green-500" />}
            text="Finance Analyzing"
          />
          <FeatureItem
            icon={<X className="h-5 w-5 text-red-500" />}
            text="24 hour support"
            inactive
          />
          <FeatureItem
            icon={<X className="h-5 w-5 text-red-500" />}
            text="Customer Managemet"
            inactive
          />
          <FeatureItem
            icon={<X className="h-5 w-5 text-red-500" />}
            text="Expense Tracking"
            inactive
          />
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-600 hover:to-violet-600 rounded-full py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={() => toast.success("It's free")}
          >
            Free
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cardone;

function FeatureItem({ icon, text, inactive }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span
        className={`text-sm ${inactive ? "text-gray-400" : "text-gray-700"}`}
      >
        {text}
      </span>
    </div>
  );
}
