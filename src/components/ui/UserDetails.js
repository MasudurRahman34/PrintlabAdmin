export default function UserDetails() {
  return (
    <div className="box">
    <div className="box-header">
        <div className="box-title">
            User Details
        </div>
    </div>
    <div className="box-body !p-0">
        <div className="flex items-center border-b border-dashed dark:border-defaultborder/10 p-3 flex-wrap">
            <div className="me-2">
                <span className="avatar avatar-lg avatar-rounded">
                    <img src="../assets/images/faces/9.jpg" alt=""/>
                </span>
            </div>
            <div className="flex-grow">
                <p className="mb-0">Json Taylor</p>
                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">jsontaylor2135@gmail.com</p>
            </div>
            {/* <div>
                <span className="badge bg-primary/10 text-primary">Prime User</span>
            </div> */}
        </div>
        <div className="grid grid-cols-12 gap-x-5">
        <div className="p-4 border-b border-dashed dark:border-defaultborder/10 lg:col-span-4 col-span-12">
            <div className="flex items-center justify-between mb-4">
                <span className="text-[0.875rem] font-semibold">User address :</span>
                <button aria-label="button" type="button" className="ti-btn bg-primary ti-btn-sm text-white"><i className="ri-pencil-line"></i></button>
            </div>
            <p className="mb-2 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">Name : </span>Hassan</p>
            <p className="mb-2 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">Email : </span>a@b.com</p>
            <p className="mb-2 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">Phone : </span>+88014525552</p>
            <p className="mb-2 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">City : </span>Georgetown</p>
            <p className="mb-2 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">State : </span>Washington,D.C</p>
            <p className="mb-2 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">Country : </span>USA</p>
            <p className="mb-0 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">Zipcode : </span>200071</p>
        </div>
        <div className="p-4 border-b border-dashed dark:border-defaultborder/10 lg:col-span-4 col-span-12">
            <div className="flex items-center justify-between mb-4">
                <span className="text-[0.875rem] font-semibold">Shapping address :</span>
                <button aria-label="button" type="button" className="ti-btn bg-primary ti-btn-sm text-white"><i className="ri-pencil-line"></i></button>
            </div>
            <p className="mb-2 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">Landmark : </span>MIG-1-11</p>
            <p className="mb-2 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">Street : </span>Monroe Street</p>
            <p className="mb-2 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">City : </span>Georgetown</p>
            <p className="mb-2 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">State : </span>Washington,D.C</p>
            <p className="mb-2 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">Country : </span>USA</p>
            <p className="mb-0 text-[#8c9097] dark:text-white/50"><span className="font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70">Zipcode : </span>200071</p>
        </div>
        <div className="p-4 border-b border-dashed dark:border-defaultborder/10 lg:col-span-4 col-span-12">
            <div className="mb-4">
                <span className="text-[0.875rem] font-semibold">Order Summary</span>
            </div>
            <p className="mb-2 text-[#8c9097] dark:text-white/50">
                <span className="font-semibold text-default">Ordered Date</span>
                24,Nov 2022
            </p>
            <p className="mb-2 text-[#8c9097] dark:text-white/50">
                <span className="font-semibold text-default">Ordered Time :</span>
                11:47AM
            </p>
            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                <span className="font-semibold text-default">Payment Interface :</span>
                UPI
            </p>
        </div>
        </div>
       
    </div>
    <div className="box-footer">Total
        <span className="text-success">294 items</span> purchased upto now
    </div>
</div>
  )
}
