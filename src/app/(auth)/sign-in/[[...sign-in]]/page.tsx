import { SignIn } from "@clerk/nextjs";

export default function Page() {
  const redirectUrl = process.env.CLERK_SIGN_IN_FORCE_REDIRECT_URL;
  return (
    <div className="flex justify-center align-middle items-center h-screen">
      <SignIn forceRedirectUrl={redirectUrl} />
    </div>
  );
}
