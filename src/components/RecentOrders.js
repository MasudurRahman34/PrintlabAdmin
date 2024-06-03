import React from 'react';

const RecentOrders = () => {
    return (
        <li className="mb-4">
        <a href="javascript:void(0);">
            <div className="flex tems-center">
                <div className="leading-none">
                    <span className="inline-flex justify-center items-center">
                        <img src="../assets/images/ecommerce/jpg/1.jpg" alt="" className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md"/>
                    </span>
                </div>
                <div className="flex-grow ms-2">
                    <p className="font-semibold mb-0">Smart Phone</p>
                    <p className="text-[0.75rem] !text-[#8c9097] dark:text-white/50 mb-0">Mobiles</p>
                </div>
                <div>
                    <span className="text-success font-semibold">$199.99</span>
                </div>
            </div>
        </a>
    </li>
    );
};

export default RecentOrders;