import React from 'react';

const TopSellingProducts = () => {
    return (
        <tbody className="top-selling">
        <tr className="border-y border-inherit border-solid dark:border-defaultborder/10 ">
            <td className="text-center leading-none">
                <span className="avatar avatar-md !rounded-full">
                    <img src="../assets/images/ecommerce/png/36.png" className="p-2 !rounded-full bg-light" alt=""/>
                </span>
            </td>
            <td>Ethnic School bag for children (24L)</td>
            <td>Bags</td>
            <td><span className="badge badge-sm bg-success/10 text-success !font-normal">In Stock</span></td>
            <td>
                <span className="font-semibold">5,093</span>
            </td>
        </tr>
        <tr className="border-y border-inherit border-solid dark:border-defaultborder/10 ">
            <td className="text-center leading-none">
                <span className="avatar avatar-md !rounded-full">
                    <img src="../assets/images/ecommerce/png/38.png" className="p-2 !rounded-full bg-light" alt=""/>
                </span>
            </td>
            <td>Leather jacket for men (S,M,L,XL)</td>
            <td>Clothing</td>
            <td><span className="badge badge-sm bg-success/10 text-success !font-normal">In Stock</span></td>
            <td>
                <span className="font-semibold">6,890</span>
            </td>
        </tr>
        <tr className="border-y border-inherit border-solid dark:border-defaultborder/10 ">
            <td className="text-center leading-none">
                <span className="avatar avatar-md !rounded-full">
                    <img src="../assets/images/ecommerce/png/39.png" className="p-2 !rounded-full bg-light" alt=""/>
                </span>
            </td>
            <td>Childrens Teddy toy of high quality</td>
            <td>Toys</td>
            <td><span className="badge badge-sm bg-danger/10 text-danger !font-normal">Out Of Stock</span></td>
            <td>
                <span className="font-semibold">5,423</span>
            </td>
        </tr>
        <tr>
            <td className="text-center leading-none">
                <span className="avatar avatar-md !rounded-full">
                    <img src="../assets/images/ecommerce/png/40.png" className="p-2 !rounded-full bg-light" alt=""/>
                </span>
            </td>
            <td>Orange smart watch with square dial (24mm)</td>
            <td>Fashion</td>
            <td><span className="badge badge-sm bg-danger/10 text-danger !font-normal">Out Of Stock</span></td>
            <td>
                <span className="font-semibold">10,234</span>
            </td>
        </tr>
    </tbody>
    );
};

export default TopSellingProducts;