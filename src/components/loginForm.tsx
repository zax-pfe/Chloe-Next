"use client";
import "../styles/loginForm.css";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Input, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import React from "react";
import { useActionState } from "react";
import { authenticate } from "@/lib/actions";

import { useFormState } from "react-dom";

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [errorMessage, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction}>
      <div className="login-page">
        <div className="login-container">
          <Input
            type="email"
            label="Username"
            className="max-w-xs"
            isInvalid={!!errorMessage}
            errorMessage={errorMessage}
          />
          {/* <Input type="password" label="Password" className="max-w-xs" /> */}
          <Input
            label="Password"
            // variant="bordered"
            // placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
            isInvalid={!!errorMessage}
            errorMessage={errorMessage}
          />
          <Button type="submit" className="button">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
