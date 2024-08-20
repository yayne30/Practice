"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface VerifyFormProps {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  role: "user";
}

const VerifyForm: React.FC<VerifyFormProps> = ({ email, name, password, confirmPassword, role }) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [timer, setTimer] = useState<number>(30);
  const [resendEnabled, setResendEnabled] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          setResendEnabled(true);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleResend = async () => {
    if (!resendEnabled) return;

    try {
      const res = await fetch("https://akil-backend.onrender.com/signup", {
        method: "POST",
        body: JSON.stringify({ email, name, password, confirmPassword, role }),
        headers: {
          "Content-Type": "application/json",
        }
      }).then(res => res.json());

      console.log(res);
      setResendEnabled(false);
      setTimer(30); // Reset timer
    } catch (error) {
      console.error("An error occurred while resending the code:", error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpValue = otp.join('');
    try {
      const res = await fetch("https://akil-backend.onrender.com/verify-email", {
        method: "POST",
        body: JSON.stringify({ email, OTP: otpValue }),
        headers: {
          "Content-Type": "application/json",
        }
      }).then(res => res.json());

      console.log(res);
      if (res.success) {
        router.push("/");
      } else {
        console.error("Verification failed:", res.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex flex-col gap-10 w-[45%] h-[70vh] my-[15vh] mx-auto items-center justify-center px-20 text-justify">
      <h1 className="font-bold text-3xl text-blue-950">Verify Email</h1>
      <p className="text-gray-500 text-[11pt]">
        We've sent a verification code to the email address you provided. To
        complete the verification process, please enter the code here.
      </p>
      <div className="flex gap-2">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex gap-4 items-center justify-center mb-4">
              {otp.map((value, index) => (
                <input
                  key={index}
                  className="w-12 text-center px-2 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="0"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              ))}
            </div>
            <div className="mb-4 text-center">
              <p className="text-gray-500 text-[11pt]">
                You can request to{' '}
                <button
                  type="button"
                  className="py-2 rounded-[20px] text-blue-700 font-bold text-[10pt]"
                  onClick={handleResend}
                  disabled={!resendEnabled}
                >
                  Resend
                </button>{' '}
                the code in {`0:${timer < 10 ? `0${timer}` : timer}`} seconds
              </p>
            </div>
            <button
              className="bg-purple-300 w-[100%] py-2 rounded-[20px] text-white font-bold text-[10pt] hover:bg-purple-400" 
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyForm;
