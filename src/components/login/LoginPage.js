import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();
  const [show, setshow] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      await login(data);
      reset();
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-center h-full authentication authentication-basic text-defaultsize text-defaulttextcolor">
          <div className="grid grid-cols-12">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            <div className="col-span-12 xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8">
              <div className="box">
                <div className="box-body !p-[3rem]">
                  <p className="mb-2 font-semibold text-center h5">Sign In</p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-12 gap-y-4">
                      <div className="col-span-12 xl:col-span-12">
                        <label
                          for="signin-username"
                          className="form-label text-default"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg w-full !rounded-md"
                          id="signin-username"
                          placeholder="Enter Email"
                          {...register("email", {
                            required: true,
                            validate: (value) => value.includes("@"),
                          })}
                        />
                      </div>
                      <div className="col-span-12 mb-2 xl:col-span-12">
                        <label
                          for="signin-password"
                          className="flex justify-between form-label text-default "
                        >
                          Password
                        </label>
                        <div className="input-group">
                          <input
                            type={`${show ? "text" : "password"}`}
                            className="form-control form-control-lg !rounded-s-md"
                            id="signin-password"
                            placeholder="password"
                            {...register("password", { required: true })}
                          />
                          <button
                            aria-label="button"
                            className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                            type="button"
                            onclick="createpassword('signin-password',this)"
                            id="button-addon2"
                          >
                            <i
                              onClick={() => setshow(!show)}
                              className="align-middle ri-eye-off-line"
                            ></i>
                          </button>
                        </div>
                      </div>
                      <div className="grid col-span-12 mt-2 xl:col-span-12">
                        <button
                          type="submit"
                          href="index.html"
                          className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium"
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
