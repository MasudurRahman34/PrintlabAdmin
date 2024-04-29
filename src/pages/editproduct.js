import SelectItem from '@/components/SelectItem';
import { AdminLayout } from '@/layout/AdminLayout';
import React from 'react';

const EditProduct = () => {
    return (
        <AdminLayout>
               <div className="main-content">
            <div className="block justify-between page-header md:flex">
                <div>
                    <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold"> Edit Product</h3>
                </div>
                <ol className="flex items-center whitespace-nowrap min-w-0">
                    <li className="text-[0.813rem] ps-[0.5rem]">
                      <a className="flex items-center text-primary hover:text-primary dark:text-primary truncate" href="javascript:void(0);">
                        Ecommerce
                        <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
                      </a>
                    </li>
                    <li className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 " aria-current="page">
                        Edit Product
                    </li>
                </ol>
            </div>
                <div className="grid grid-cols-12">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box custom-box">
                            <div className="box-body add-products !p-0">
                                <div className="p-6">
                                    <SelectItem/>
                                </div>
                                <div className="px-4 py-3 border-t border-dashed dark:border-defaultborder/10 sm:flex justify-end">
                                    <button type="button" className="ti-btn ti-btn-primary m-1">Add Product<i className="bi bi-plus-lg ms-2"></i></button>
                                    <button type="button" className="ti-btn ti-btn-success m-1">Save Product<i className="bi bi-download ms-2"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
};

export default EditProduct;