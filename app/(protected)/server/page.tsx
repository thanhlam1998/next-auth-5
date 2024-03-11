import UserInfo from "@/components/user-info";
import { currentUser } from "@/lib/auth";
import React from "react";

const ServerPage = async () => {
  const user = await currentUser();
  return (
    <div>
      <UserInfo label="💻 Server component" user={user} />
    </div>
  );
};

export default ServerPage;
