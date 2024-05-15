import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
const  [show ,setshow] = useState(false)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
          <div className="grid grid-cols-12">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
              <div className="box">
                <div className="box-body !p-[3rem]">
                  <p className="h5 font-semibold mb-2 text-center">Sign In</p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-12 gap-y-4">
                      <div className="xl:col-span-12 col-span-12">
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
                          {...register("email", { required: true})}
                        />
                      </div>
                      <div className="xl:col-span-12 col-span-12 mb-2">
                        <label
                          for="signin-password"
                          className="form-label text-default flex justify-between "
                        >
                          Password
                          <a
                            href="reset-password-basic.html"
                            className="ltr:float-right rtl:float-left text-danger"
                          >
                            Forget password ?
                          </a>
                        </label>
                        <div className="input-group">
                          <input
                            type={`${show?"text":"password"}`}
                            className="form-control form-control-lg !rounded-s-md"
                            id="signin-password"
                            placeholder="password"
                            {...register("password", { required: true})}
                          />
                          <button
                            aria-label="button"
                            className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                            type="button"
                            onclick="createpassword('signin-password',this)"
                            id="button-addon2"
                          >
                            <i onClick={()=>setshow(!show)} className="ri-eye-off-line align-middle"></i>
                          </button>
                        </div>
                        <div className="mt-2">
                          <div className="form-check !ps-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label text-[#8c9097] dark:text-white/50 font-normal"
                              for="defaultCheck1"
                            >
                              Remember password ?
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="xl:col-span-12 col-span-12 grid mt-2">
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
                  <div className="text-center">
                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">
                      Dont have an account?{" "}
                      <a href="sign-up-basic.html" className="text-primary">
                        Sign Up
                      </a>
                    </p>
                  </div>
                  <div className="text-center my-4 authentication-barrier">
                    <span>OR</span>
                  </div>
                  <div className="btn-list text-center">
                    <button
                      aria-label="button"
                      type="button"
                      className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]"
                    >
                      <i className="ri-facebook-line font-bold text-dark opacity-[0.7]"></i>
                    </button>
                    <button
                      aria-label="button"
                      type="button"
                      className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]"
                    >
                      <i className="ri-google-line font-bold text-dark opacity-[0.7]"></i>
                    </button>
                    <button
                      aria-label="button"
                      type="button"
                      className="ti-btn ti-btn-icon ti-btn-light"
                    >
                      <i className="ri-twitter-line font-bold text-dark opacity-[0.7]"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
