import { SignIn } from "@clerk/clerk-react";

const Auth = () => {
  return (
    <div className="w-full mt-24 flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default Auth;
