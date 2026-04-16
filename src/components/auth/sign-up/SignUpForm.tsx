"use client"

import { useState, useEffect } from "react"
import { authApi } from "@/api/auth/auth.api";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup } from "@/components/ui/field"
import PasswordInput from "./PasswordInput"
import UsernameInput from "./UsernameInput"
import SocialLogin from "./SocialLogin"
import EmailInput from "./EmailInput"
import PhoneInput from "./PhoneInput"
import { NameInput } from "./NameInput"
import ConfirmPasswordInput from "./ConfirmPasswordInput"
import { useRegisterStore } from "@/store/register.store"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
  const router = useRouter()

  const setData = useRegisterStore((state) => state.setData)

  const [showPassword, setShowPassword] = useState(false)
  const [emailStatus, setEmailStatus] = useState<"idle" | "checking" | "taken" | "available" | "invalid">("idle");
  const [usernameStatus, setUsernameStatus] = useState<"idle" | "checking" | "taken" | "available" | "invalid">("idle");
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean | null>(null);
  const [passwordStrength, setPasswordStrength] =
    useState<"idle" | "weak" | "medium" | "good" | "strong">("idle");
  const [confirmPasswordStrength, setConfirmPasswordStrength] =
    useState<"idle" | "weak" | "medium" | "good" | "strong">("idle");
  const [phoneStatus, setPhoneStatus] = useState<
    "idle" | "checking" | "invalid" | "valid"
  >("idle");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  useEffect(() => {
    if (!formData.phone) {
      setPhoneStatus("idle");
      return;
    }
    const timeout = setTimeout(() => {
      setPhoneStatus("checking");

      const onlyNumberRegex = /^[0-9]+$/;

      if (!onlyNumberRegex.test(formData.phone)) {
        setPhoneStatus("invalid");
        return;
      }
      setPhoneStatus("valid");
    }, 300);

    return () => clearTimeout(timeout);
  }, [formData.phone]);


  // check password match
  useEffect(() => {
    if (!formData.confirmPassword) {
      setIsPasswordMatch(null);
      return;
    }

    setIsPasswordMatch(
      formData.password === formData.confirmPassword
    );
  }, [formData.password, formData.confirmPassword]);


  // Check password
  useEffect(() => {
    if (!formData.password) {
      setPasswordStrength("idle");
      return;
    }

    const password = formData.password;

    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[@$!%*?&#]/.test(password);
    const hasLength = password.length >= 8;

    const score =
      Number(hasLower) +
      Number(hasUpper) +
      Number(hasNumber) +
      Number(hasSpecial) +
      Number(hasLength);

    if (score <= 2) {
      setPasswordStrength("weak");
    } else if (score === 3) {
      setPasswordStrength("medium");
    } else if (score === 4) {
      setPasswordStrength("good");
    } else {
      setPasswordStrength("strong");
    }
  }, [formData.password]);

  // Check username
  useEffect(() => {
    if (!formData.username) {
      setUsernameStatus("idle")
      return
    };

    const timeout = setTimeout(async () => {
      try {

        setUsernameStatus("checking");
        const usernameRegex = /^[a-zA-Z0-9._]{3,20}$/;
        const isValidUsername = usernameRegex.test(formData.username)

        if (!isValidUsername) {
          setUsernameStatus("invalid");
          return;
        }

        const res = await authApi.checkUsername(formData.username);

        if (res.exists) {
          setUsernameStatus("taken");
        } else {
          setUsernameStatus("available");
        }
      } catch (err) {
        setUsernameStatus("idle");
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [formData.username]);

  //Check Email
  useEffect(() => {
    if (!formData.email) return;

    const timeout = setTimeout(async () => {
      try {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = regex.test(formData.email)

        if (!isValidEmail) {
          setEmailStatus("invalid");
          return;
        }
        setEmailStatus("checking");

        const res = await authApi.checkEmail(formData.email);

        if (res.exists) {
          setEmailStatus("taken");
        } else {
          setEmailStatus("available");
        }
      } catch (err) {
        setEmailStatus("idle");
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [formData.email]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      username,
      email,
      phone,
      password,
      confirmPassword,
    } = formData;

    // 1. check empty
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    // 2. check invalid UI states
    if (emailStatus === "invalid" || emailStatus === "taken") {
      alert("Email không hợp lệ hoặc đã tồn tại");
      return;
    }

    if (usernameStatus === "invalid" || usernameStatus === "taken") {
      alert("Username không hợp lệ hoặc đã tồn tại");
      return;
    }

    if (phoneStatus === "invalid") {
      alert("Số điện thoại không hợp lệ");
      return;
    }

    // 3. password match
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    // 4. password strength
    if (passwordStrength === "weak") {
      alert("Mật khẩu quá yếu");
      return;
    }

    // 5. confirm password match state (optional extra safety)
    if (isPasswordMatch === false) {
      alert("Mật khẩu xác nhận không khớp");
      return;
    }

    // 6. save to store
    setData(formData);

    // 7. next step
    router.push("/sign-up/otp-verification");
  };

  return (
    <div className="w-full max-w-xl ">
      <h1 className="text-center py-10 text-4xl font-bold">Đăng ký</h1>

      <form onSubmit={handleSubmit}>
        <FieldGroup className="py-6 ">
          <div className="flex flex-col gap-5 md:flex-row md:gap-20">

            <div className="flex flex-col gap-5 flex-1">
              <NameInput
                firstName={formData.firstName}
                lastName={formData.lastName}
                onChange={handleChange}
              />

              <UsernameInput
                username={formData.username}
                onChange={handleChange}
                usernameStatus={usernameStatus}
              />

              <EmailInput
                email={formData.email}
                onChange={handleChange}
                emailStatus={emailStatus}
              />
            </div>

            <div className="flex flex-col gap-5 flex-1">
              <PhoneInput
                phone={formData.phone}
                onChange={handleChange}
                phoneStatus={phoneStatus}
              />

              <PasswordInput
                value={formData.password}
                show={showPassword}
                onChange={handleChange}
                toggle={() => setShowPassword(!showPassword)}
                passwordStrength={passwordStrength}
                isPasswordMatch={isPasswordMatch}
              />

              <ConfirmPasswordInput
                value={formData.confirmPassword}
                onChange={handleChange}
                isPasswordMatch={isPasswordMatch}
              />
            </div>

          </div>
        </FieldGroup>

        <Field orientation="horizontal" className="flex gap-2 mt-6 px-20">
          <Button type="submit" className="w-1/2">
            Đăng ký
          </Button>

          <Button type="button" className="w-1/2" variant="outline" asChild>
            <Link href="/login">Đã có tài khoản</Link>
          </Button>
        </Field>
      </form>

      <div className="flex flex-col justify-center px-30">
        <SocialLogin />
      </div>
    </div>
  )
}
