import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const Cardtwo = () => {
  let navigate = useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  async function paymentHandler(e) {
    e.preventDefault();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      toast.error("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    let obj = {
      amount: 10000,
      currency: "INR",
      receipt: "qwsaq1",
    };

    axios
      .post("https://triptales-nm5q.onrender.com/order", obj)
      .then((res) => {
        const options = {
          key: "rzp_test_i6kJlpxdFLeWaE",
          amount: obj.amount,
          currency: obj.currency,
          name: "Trip Tales",
          description: "Test Transaction",
          image: "/logo.svg",
          order_id: res.data.id,
          handler: function (response) {
            toast.success("Payment Success");
            navigate("/");
          },
          prefill: {
            name: "Vikram Kumar Choudhary",
            email: "vikram0104irctc@gmail.com",
            contact: "9988776644",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
          alert("Payment failed due to " + response.error.reason);
          alert("Payment ID: " + response.error.metadata.payment_id);
        });
        rzp1.open();
      })
      .catch(() => {
        toast.error("Error initiating payment. Please try again.");
      });
  }

  return (
    <div>
      <Card className="w-[300px] overflow-hidden bg-white rounded-3xl shadow-xl">
        <CardHeader className="p-0">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 rounded-bl-full opacity-50"></div>
            <div className="relative z-10">
              <div className="text-lg font-bold mb-1">ADVANCE</div>
              <div className="text-center">
                <span className="text-4xl font-bold">💰100</span>
                <span className="text-sm">/mon</span>
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
            icon={<Check className="h-5 w-5 text-green-500" />}
            text="24 hour support"
            inactive
          />
          <FeatureItem
            icon={<Check className="h-5 w-5 text-green-500" />}
            text="Customer Management"
            inactive
          />
          <FeatureItem
            icon={<Check className="h-5 w-5 text-green-500" />}
            text="Expense Tracking"
            inactive
          />
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-600 hover:to-violet-600 rounded-full py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={paymentHandler}
          >
            BUY NOW
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cardtwo;

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
