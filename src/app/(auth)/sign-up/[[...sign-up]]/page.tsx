import { SignUp } from "@clerk/nextjs";

export default function Page() {
  const redirectUrl = process.env.CLERK_SIGN_UP_FORCE_REDIRECT_URL;
  return (
    <div className="flex justify-center align-middle items-center h-screen">
      <SignUp forceRedirectUrl={redirectUrl} />
    </div>
  );
}
