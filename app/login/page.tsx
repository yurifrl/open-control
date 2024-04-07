import * as React from "react";

import { UserAuthForm } from "@/components/user-auth-form";

export default function NextLoginPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <UserAuthForm />
      </div>
    </div>
  );
}
