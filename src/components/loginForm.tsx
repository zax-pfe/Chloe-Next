"use client";

import "../styles/loginForm.css";

import { Input, Button, Textarea } from "@nextui-org/react";

export default function LoginForm() {
  return (
    <div className="login-page">
      <div className="login-container">
        <Input type="email" label="userName" />
        <Input type="password" label="password" />
      </div>
      ;
    </div>
  );
}
