import CustomButton from "@/components/ui/Buttons/CustomButton";
import { useRouter } from "next/navigation";

const NavbarRightAuthButtonGroup = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/en/login");
  };

  const handleSignup = () => {
    router.push("/en/sign-up");
  };
  return (
    <div className="flex items-center gap-4">
      <CustomButton
        className="bg-transparent text-secondary font-semibold text-sm"
        variant="light"
        clickHandler={handleLogin}
      >
        Log In
      </CustomButton>
      <CustomButton
        className="bg-transparent text-secondary font-semibold text-sm border-secondary border-1"
        variant="bordered"
        clickHandler={handleSignup}
      >
        Sign up
      </CustomButton>
    </div>
  );
};

export default NavbarRightAuthButtonGroup;
