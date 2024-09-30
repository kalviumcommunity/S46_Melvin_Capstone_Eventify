import * as React from "react";
import "./auth.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../../utils/cn";
import { IconBrandGoogle } from "@tabler/icons-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form submitted", data);
    if (data.password !== data.confirm) {
      toast.error("Passwords do not match");
    } else {
      try {
        const response = await axios.post(
          import.meta.env.VITE_API_URL + "/users/register",
          {
            name: data.name,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirm,
          }
        );
        toast.success("Signup Successful");

        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <div className="w-full min-h-screen gradientbg flex items-center">
      <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input form">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to Eventify
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Signup to Eventify
        </p>

        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Melvin"
              type="text"
              {...register("name", {
                required: "Name is required!",
              })}
            />
            {errors.firstname && <p>{errors.firstname.message}</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="example@gmail.com"
              type="email"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="password@"
              type="password"
              {...register("password", {
                required: "Password is required!",
                pattern: {
                  value: /.*[\W]+.*/i,
                  message:
                    "Password must contain at least one special character",
                },
                minLength: {
                  value: 5,
                  message: "Password must have at least 5 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must have at most 20 characters",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input
              id="confirm"
              placeholder="password@"
              type="password"
              {...register("confirm", {
                required: "Confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords don't match",
              })}
            />
            {errors.confirm && <p>{errors.confirm.message}</p>}
          </LabelInputContainer>
          <div className="flex">
            <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-1/2 mr-3 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
              <Link to={"/organizer/signup"}>
                Sign up as Organizer &rarr;
                <BottomGradient />
              </Link>
            </button>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-3/4 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
          </div>
          <span className="text-neutral-700 dark:text-neutral-300 text-sm flex justify-center mt-8">
            Have an account?{" "}
            <span className="pl-1">
              {" "}
              <Link to={"/login"}>Login</Link>
            </span>
          </span>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-5 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Google
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </div>
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
