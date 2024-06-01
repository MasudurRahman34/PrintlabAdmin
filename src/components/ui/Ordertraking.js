export default function Ordertraking() {
  return (
    <div className="box">
    <div className="box-header">
        <div className="box-title">
            Order Tracking
        </div>
        <div className="ms-auto text-success">#SPK1218153635</div>
    </div>
    <div className="box-body">
        <div className="order-track">
          <div className="hs-accordion-group" data-hs-accordion-always-open>
            <div className="hs-accordion active" id="order-heading-one">
              <a href="javascript:void(0);" className="hs-accordion-toggle group pb-3 inline-flex items-center gap-x-3 w-full font-semibold text-start transition"
                aria-controls="order-collapse-one">
                <div className="flex mb-0">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../assets/images/ecommerce/png/32.png" alt=""/>
                        </span>
                    </div>
                    <div className="flex-grow">
                        <p className="font-semibold mb-0 text-[0.875rem]">Order Placed</p>
                        <span className="text-[0.6875rem] text-success">Nov 03, 2022</span>
                    </div>
                </div>
              </a>
              <div id="order-collapse-one" className="space-y-3 hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="order-heading-one">
                <div className="accordion-body !pt-0 !ps-8">
                    <div className="text-[0.6875rem]">
                        <p className="mb-0 ps-4">Order placed successfully by <a href="javascript:void(0);" className="font-weight-semibold text-primary">Sansa Taylor</a></p>
                        <span className="text-[#8c9097] dark:text-white/50 opacity-[0.5] ps-4">Nov 03, 2022, 15:36</span>
                    </div>
                  </div>
              </div>
            </div>
            <div className="hs-accordion active" id="order-heading-two">
              <a href="javascript:void(0);" className="hs-accordion-toggle group pb-3 inline-flex items-center gap-x-3 w-full font-semibold text-start transition"
                aria-controls="order-collapse-two">
                <div className="flex mb-0">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../assets/images/ecommerce/png/33.png" alt=""/>
                        </span>
                    </div>
                    <div className="flex-grow">
                        <p className="font-semibold mb-0 text-[0.875rem]">Picked</p>
                        <span className="text-[0.75rem]">Nov 03, 15:10</span>
                    </div>
                </div>
              </a>
              <div id="order-collapse-two"
                className="space-y-3 hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="order-heading-two">
                <div className="accordion-body !pt-0 !ps-8">
                    <div className="text-[0.6875rem]">
                        <p className="mb-0 ps-4">Your order has been picked up by <span className="font-weight-semibold">Smart Good Services</span></p>
                        <span className="text-[#8c9097] dark:text-white/50 opacity-[0.5] ps-4">Nov 03, 2022, 15:36</span>
                    </div>
                  </div>
              </div>
            </div>
            <div className="hs-accordion active" id="order-heading-three">
              <a href="javascript:void(0);" className="hs-accordion-toggle group pb-3 inline-flex items-center gap-x-3 w-full font-semibold text-start transition" aria-controls="order-collapse-three">
                <div className="flex mb-0">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded">
                            <img src="../assets/images/ecommerce/png/34.png" alt=""/>
                        </span>
                    </div>
                    <div className="flex-grow">
                        <p className="font-semibold mb-0 text-[0.875rem]">Shipping</p>
                        <span className="text-[0.75rem]">Nov 03, 15:10</span>
                    </div>
                </div>
              </a>
              <div id="order-collapse-three"
                className="space-y-3 hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="order-heading-three">
                <div className="accordion-body !pt-0 !ps-8">
                    <div className="text-[0.6875rem] mb-4 ps-4">
                        <p className="mb-0">Arrived USA <span className="font-weight-semibold">SGS Warehouse</span></p>
                        <span className="text-[#8c9097] dark:text-white/50 opacity-[0.5]">Nov 03, 2022, 15:36</span>
                    </div>
                    <div className="text-[0.6875rem] mb-4 ps-4">
                        <p className="mb-0">picked up by <span className="font-weight-semibold">SGS Agent</span> and on the way to Hyderabad</p>
                        <span className="text-[#8c9097] dark:text-white/50 opacity-[0.5]">Nov 03, 2022, 15:36</span>
                    </div>
                    <div className="text-[0.6875rem] ps-4">
                        <p className="mb-0">Arrived in Hyderabad and expected Delivery is <span className="font-weight-semibold">Apr 16, 2022</span> </p>
                        <span className="text-[#8c9097] dark:text-white/50 opacity-[0.5]">Nov 03, 2022, 15:36</span>
                    </div>
                  </div>
              </div>
            </div>
            <div className="hs-accordion" id="order-heading-four">
              <a href="javascript:void(0);" className="hs-accordion-toggle group pb-3 inline-flex items-center gap-x-3 w-full font-semibold text-start transition">
                <div className="flex mb-0">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded bg-primary/10 !text-primary border !border-primary/10"><i className="fe fe-package text-[0.75rem]"></i></span>
                    </div>
                    <div className="flex-grow">
                        <p className="font-semibold mb-0 text-[0.875rem]">Out For Delivery</p>
                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">Nov 03, 15:10 (expected)</span>
                    </div>
                </div>
              </a>
              <div id="order-collapse-four"
                className="space-y-3 hs-accordion-content hidden  w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="order-heading-four">
                <div className="accordion-body !pt-0 !ps-8">
                  <div className="text-[0.6875rem]">
                      <p className="mb-0 ps-4">Your order is out for devlivery</p>
                      <span className="text-[#8c9097] dark:text-white/50 opacity-[0.5] ps-4">Nov 03, 2022, 15:36 (expected)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hs-accordion" id="order-heading-five">
              <a href="javascript:void(0);" className="group inline-flex items-center gap-x-3 w-full font-semibold text-start transition">
                <div className="flex mb-0">
                    <div className="me-2">
                        <span className="avatar avatar-md avatar-rounded bg-primary/10 !text-primary border !border-primary/10"><i className="fe fe-package text-[0.75rem]"></i></span>
                    </div>
                    <div className="flex-grow">
                        <p className="font-semibold mb-0 text-[0.875rem]">Delivered</p>
                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Nov 03, 18:42</span>
                    </div>
                </div>
              </a>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}
