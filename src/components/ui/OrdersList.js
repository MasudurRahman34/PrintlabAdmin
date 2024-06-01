export default function OrdersList() {
  return (
    <div className="box">
    <div className="box-header sm:flex justify-between">
        <div className="box-title">
            Orders No - <span className="text-primary">#SPK-1023</span>
        </div>
        <div>
            <span className="badge bg-primary/10 text-primary">
                Estimated delivery : 30,Nov 2022
            </span>
        </div>
    </div>
    <div className="card-body !p-0">
        <div className="table-responsive">
            <table className="table whitespace-nowrap min-w-full">
                <thead>
                    <tr>
                        <th scope="col" className="text-start min-w-[22rem]">Item</th>
                        <th scope="col" className="text-start">Tracking No</th>
                        <th scope="col" className="text-start">Price</th>
                        <th scope="col" className="text-start">Quantity</th>
                        <th scope="col" className="text-start">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                        <td>
                            <div className="flex items-center">
                                <div className="me-4">
                                    <span className="  bg-light">
                                        <img className="!w-[60px] !h-[60px] rounded-full " src="../assets/images/ecommerce/png/14.png" alt=""/>
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 text-[0.875rem] font-semibold">
                                        <a href="javascript:void(0);">Orange Watch Series 4</a>
                                    </div>
                                    <div className="mb-1">
                                        <span className="me-1">Dial Size:</span><span className="text-[#8c9097] dark:text-white/50">44mm</span>
                                    </div>
                                   
                                </div>
                            </div>
                        </td>
                        <td><a href="javascript:void(0);" className="text-primary">SPK1218153635</a></td>
                        <td>
                            <span className="text-[0.9375rem] font-semibold">$1,249</span>
                        </td>
                        <td>1</td>
                        <td>$1,249</td>
                    </tr>
                  
                    <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                        <td colspan="2"></td>
                        <td colspan="2">
                            <div className="font-semibold">Total Items :</div>
                        </td>
                        <td>
                            04
                        </td>
                    </tr>
                    <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                        <td colspan="2"></td>
                        <td colspan="2">
                            <div className="font-semibold">Sub Total :</div>
                        </td>
                        <td>
                            $3,100
                        </td>
                    </tr>
                    <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                        <td colspan="2"></td>
                        <td colspan="2">
                            <div className="font-semibold">Applied Coupon :</div>
                        </td>
                        <td>
                            <span className="badge bg-success/10 text-success">SPKFIR</span>
                        </td>
                    </tr>
                    <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                        <td colspan="2"></td>
                        <td colspan="2">
                            <div className="font-semibold">Delivery Fees :</div>
                        </td>
                        <td>
                            <span className="text-danger">+$29</span>
                        </td>
                    </tr>
                    <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                        <td colspan="2"></td>
                        <td colspan="2">
                            <div className="font-semibold">Total Saved :</div>
                        </td>
                        <td>
                            <span className="text-[0.875rem] font-semibold text-success">$3,799</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2"></td>
                        <td colspan="2">
                            <div className="font-semibold">Total Price :</div>
                        </td>
                        <td>
                            <span className="text-[1rem] font-semibold">$3,129</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="box-footer border-t-0">
        <div className="btn-list ltr:float-right rtl:float-left">
            <button  aria-label="button" type="button" className="ti-btn bg-primary text-white !py-1 !px-2 !font-medium mr-4 " onclick="javascript:window.print();"><i className="ri-printer-line me-1 align-middle inline-block"></i>Print</button>
            <button aria-label="button" type="button" className="ti-btn bg-secondary text-white !py-1 !px-2 !font-medium"><i className="ri-share-forward-line me-1 align-middle inline-block"></i>Share Details</button>
        </div>
    </div>
</div>
  )
}
