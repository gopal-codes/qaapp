"use client";
export const getAdmin = () => {
  let admin = localStorage.getItem("loginKey");
  return JSON.parse(admin);
};
