"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c602dfa5-242d-4467-91e8-845cf906528d");
  }, []);

  return null;
};
