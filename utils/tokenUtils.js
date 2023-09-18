"use client";

export const getAdmin = () => {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
  let admin = localStorage.getItem("loginKey");
  return JSON.parse(admin);
  }
};
