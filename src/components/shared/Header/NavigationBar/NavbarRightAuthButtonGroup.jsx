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
    <div className="hidden sm:flex items-center gap-1 lg:gap-4">
      <CustomButton
        className="bg-transparent text-secondary font-semibold text-[10px] lg:text-sm"
        variant="light"
        clickHandler={handleLogin}
      >
        Log In
      </CustomButton>
      <CustomButton
        className="bg-transparent text-secondary font-semibold text-[10px] lg:text-sm border-secondary border-1 !px-2 lg:!px-4"
        variant="bordered"
        clickHandler={handleSignup}
      >
        Sign up
      </CustomButton>
    </div>
  );
};

export default NavbarRightAuthButtonGroup;
