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
                                    <div className="grid grid-cols-12 gap-y-4 md:gap-[3rem]">
                                        <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6 col-span-12">
                                            <div className="grid grid-cols-12 gap-4">
                                                <div className="xl:col-span-12 col-span-12">
                                                    <label for="product-name-add" className="form-label">Product Name</label>
                                                    <input type="text" className="form-control" id="product-name-add" placeholder="Name" value="Light Blue Sweat Shirt"/>
                                                    <label for="product-name-add" className="form-label mt-1 text-[0.75rem] opacity-[0.5] text-muted mb-0">*Product Name should not exceed 30 characters</label>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label for="product-category-add" className="form-label">Category</label>
                                                    <select className="form-control" data-trigger name="product-category-add" id="product-category-add">
                                                        <option value="">Category</option>
                                                        <option value="Clothing">Clothing</option>
                                                        <option value="Footwear">Footwear</option>
                                                        <option value="Accesories">Accesories</option>
                                                        <option value="Grooming">Grooming</option>
                                                        <option value="Watches" selected>Watches</option>
                                                        <option value="Ethnic & Festive">Ethnic &amp; Festive</option>
                                                        <option value="Jewellery">Jewellery</option>
                                                        <option value="Toys & Babycare">Toys &amp; Babycare</option>
                                                        <option value="Festive Gifts">Festive Gifts</option>
                                                        <option value="Kitchen">Kitchen</option>
                                                        <option value="Dining">Dining</option>
                                                        <option value="Home Decors">Home Decors</option>
                                                        <option value="Stationery">Stationery</option>
                                                    </select>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label for="product-gender-add" className="form-label">Gender</label>
                                                    <select className="form-control" data-trigger name="product-gender-add" id="product-gender-add">
                                                        <option value="">Select</option>
                                                        <option value="All" selected>All</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label for="product-size-add" className="form-label">Size</label>
                                                    <select className="form-control" data-trigger name="product-size-add" id="product-size-add">
                                                        <option value="">Select</option>
                                                        <option value="Extra Small">Extra Small</option>
                                                        <option value="Small">Small</option>
                                                        <option value="Medium" selected>Medium</option>
                                                        <option value="Large">Large</option>
                                                        <option value="Extra Large">Extra Large</option>
                                                    </select>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label for="product-brand-add" className="form-label">Brand</label>
                                                    <select className="form-control" data-trigger name="product-brand-add" id="product-brand-add">
                                                        <option value="">Select</option>
                                                        <option value="Armani">Armani</option>
                                                        <option value="Lacoste">Lacoste</option>
                                                        <option value="Puma">Puma</option>
                                                        <option value="Spykar">Spykar</option>
                                                        <option value="Mufti" selected>Mufti</option>
                                                        <option value="Home Town">Home Town</option>
                                                        <option value="Arrabi">Arrabi</option>
                                                    </select>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12 color-selection">
                                                    <label for="product-color-add" className="form-label">Colors</label>
                                                    <select className="form-control" name="product-color-add" id="product-color-add"
                                                         multiple>
                                                        <option value="White">White</option>
                                                        <option value="Black">Black</option>
                                                        <option value="Red">Red</option>
                                                        <option value="Orange">Orange</option>
                                                        <option value="Yellow">Yellow</option>
                                                        <option value="Green">Green</option>
                                                        <option value="Blue" selected>Blue</option>
                                                        <option value="Pink">Pink</option>
                                                        <option value="Purple">Purple</option>
                                                    </select>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label for="product-cost-add" className="form-label">Enter Cost</label>
                                                    <input type="text" className="form-control" id="product-cost-add" placeholder="Cost" value="$1299.99"/>
                                                    <label for="product-cost-add" className="form-label mt-1 text-[0.75rem] opacity-[0.5] text-muted mb-0">*Mention final price of the product</label>
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <label for="product-description-add" className="form-label">Product Description</label>
                                                    <textarea className="form-control" id="product-description-add" rows="2">Ultra Soft: The fabric is extremely soft and comfortable, keeping you at ease for hours</textarea>
                                                    <label for="product-description-add" className="form-label mt-1 text-[0.75rem] opacity-[0.5] text-muted mb-0">*Description should not exceed 500 letters</label>
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <label className="form-label">Product Features</label>
                                                    <div id="product-features">
                                                        <ul>
                                                            <li>Care Instructions: Machine Wash</li>
                                                            <li>Neckline: The pullover is framed with a Crew Neck</li>
                                                            <li>Fit Type: Regular Fit</li>
                                                            <li>Long Sleeves: The pullover is designed with Long Sleeves.</li>
                                                            <li>Soft Hand feel: The fabric is extremely soft and comfortable, keeping you at ease for hours.</li>
                                                            <li>Solid: The pullover is available in solid pattern.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6 col-span-12">
                                            <div className="grid grid-cols-12 gap-4">
                                                <div className="xl:col-span-4 col-span-12">
                                                    <label for="product-actual-price" className="form-label">Actual Price</label>
                                                    <input type="text" className="form-control" id="product-actual-price" placeholder="Actual Price" value="$1,499.90"/>
                                                </div>
                                                <div className="xl:col-span-4 col-span-12">
                                                    <label for="product-dealer-price" className="form-label">Dealer Price</label>
                                                    <input type="text" className="form-control" id="product-dealer-price" placeholder="Dealer Price" value="$1,299.99"/>
                                                </div>
                                                <div className="xl:col-span-4 col-span-12">
                                                    <label for="product-discount" className="form-label">Discount</label>
                                                    <input type="text" className="form-control" id="product-discount" placeholder="Discount in %" value="0.75%"/>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label for="product-type" className="form-label">Product Type</label>
                                                    <input type="text" className="form-control" id="product-type" placeholder="Type" value="Watch"/>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label for="product-weight" className="form-label">Item Weight</label>
                                                    <input type="text" className="form-control" id="product-weight" placeholder="Weight in gms" value="180gms"/>
                                                </div>
                                                <div className="xl:col-span-12 col-span-12 product-documents-container">
                                                    <p className="font-semibold mb-2 text-[.875rem]">Product Images :</p>
                                                    <input type="file" className="product-Images" name="filepond" multiple data-allow-reorder="true" data-max-file-size="3MB" data-max-files="6"/>
                                                </div>
                                                <label className="xl:col-span-12 col-span-12 form-label opacity-[0.5] mt-3">Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. </label>
                                                <div className="xl:col-span-12 col-span-12 product-documents-container">
                                                    <p className="font-semibold mb-2 text-[.875rem]">Warrenty Documents :</p>
                                                    <input type="file" className="product-documents" name="filepond1" multiple data-allow-reorder="true" data-max-file-size="3MB" data-max-files="6"/>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label for="publish-date" className="form-label">Publish Date</label>
                                                    <input type="text" className="form-control" id="publish-date" placeholder="Choose date"/>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label for="publish-time" className="form-label">Publish Time</label>
                                                    <input type="text" className="form-control" id="publish-time" placeholder="Choose time"/>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label for="product-status-add" className="form-label">Published Status</label>
                                                    <select className="form-control" data-trigger name="product-status-add" id="product-status-add">
                                                        <option value="">Select</option>
                                                        <option value="Published">Published</option>
                                                        <option value="Scheduled" selected>Scheduled</option>
                                                    </select>
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label for="product-tags" className="form-label">Product Tags</label>
                                                    <select className="form-control" name="product-tags" id="product-tags" multiple>
                                                        <option value="Relaxed" selected>Relaxed</option>
                                                        <option value="Solid">Solid</option>
                                                        <option value="Washed">Washed</option>
                                                        <option value="Plain" selected>Plain</option>
                                                    </select>
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <label for="product-availability" className="form-label">Availability</label>
                                                    <select className="form-control" data-trigger name="product-availability" id="product-availability">
                                                        <option value="">Select</option>
                                                        <option value="In Stock" selected>In Stock</option>
                                                        <option value="Out Of Stock">Out Of Stock</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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