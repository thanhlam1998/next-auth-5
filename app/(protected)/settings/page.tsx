"use client";
import { signOut } from "next-auth/react";
import { useCurrentUser } from "@/hooks/useCurrentUser";


const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    signOut();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <form>
        <button onClick={() => signOut()} type="submit">
          Sign out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
