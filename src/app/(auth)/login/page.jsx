"use client";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res?.user) {
        setEmail("");
        setPassword("");
        router.push("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return <p className=" text-center">Loading....</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login
        </h2>

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg "
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg "
              required
            />
          </div>

          {error && (
            <p className="bg-red-100 text-red-600 py-2 px-3 rounded mb-3 text-sm">
              ⚠
              {error.message.includes("auth/wrong-password")
                ? "Incorrect password!"
                : error.message.includes("auth/user-not-found")
                ? "No account found with this email!"
                : "Login failed. Please try again."}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-600 font-semibold">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
