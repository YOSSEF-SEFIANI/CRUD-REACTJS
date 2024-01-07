import React, { useState } from "react";

export default function useAuthState() {
  const authState = useState({
    isAuthenticated: false,
    lastName: undefined,
    roles: undefined,
  });

  return authState;
}
