"use client";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const provider = new GoogleAuthProvider();

const Registerpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res?.user) {
        setEmail("");
        setPassword("");
        router.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider); // <-- direct Firebase
      console.log(res.user);
      if (res.user) {
        router.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="py-5 flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Register
        </h2>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 cursor-pointer text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 border py-2 cursor-pointer rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100"
        >
          <FcGoogle />
          <span>Sign In with Google</span>
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 font-semibold">
            Login Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registerpage;
