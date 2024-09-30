import * as React from "react";
import "./auth.css";
import { useForm } from "react-hook-form";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../../utils/cn";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function OrganizerLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/organizers/login`,
        {
          email: data.email,
          password: data.password,
        }
      );

      toast.success("Login Successful");

      setTimeout(() => {
        navigate("/organizer/dashboard");
      }, 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className="w-full min-h-screen gradientbg flex items-center">
          <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input form">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Organizer Login
            </h2>

            <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  {...register("email", {
                    required: "Email is required!",
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  {...register("password", {
                    required: "Password is required!",
                  })}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </LabelInputContainer>
              <span className="text-neutral-700 dark:text-neutral-300 text-sm flex justify-center mt-8">
                New here?{" "}
                <span className="pl-1">
                  <Link to={"/organizer/signup"}>Signup</Link>
                </span>
              </span>
              <div className="flex justify-center my-5">
                <button
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  Login &rarr;
                  <BottomGradient />
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
