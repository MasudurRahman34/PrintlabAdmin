const EcommerceCard = () => {
  return (
    <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
      <div className="box">
        <div className="box-body">
          <div className="grid grid-cols-12">
            <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon secondary  px-0">
              <span className="rounded-md p-4 bg-secondary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-white secondary"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0,0h24v24H0V0z" fill="none" />
                  <g>
                    <path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
                    <rect height="2" width="6" x="9" y="7" />
                    <rect height="2" width="2" x="16" y="7" />
                    <rect height="2" width="6" x="9" y="10" />
                    <rect height="2" width="2" x="16" y="10" />
                  </g>
                </svg>
              </span>
            </div>
            <div className="xxxl:col-span-9 col-span-8 ps-0">
              <div className="mb-2">Total Expenses</div>
              <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                <span className="font-semibold text-[1.25rem] leading-none text-defaulttextcolor vertical-bottom">
                  $28,346.00
                </span>
              </div>
              <div>
                <span className="text-[0.75rem] mb-0">
                  Increase by{" "}
                  <span className="badge bg-success/10 text-success mx-1">
                    +12.0%
                  </span>{" "}
                  this month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceCard;
