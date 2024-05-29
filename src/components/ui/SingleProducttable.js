import { useRouter } from "next/router";

export default function SingleProducttable({product}) {
  const router = useRouter();
  const { slug,id } = router.query;
  return (
        <tr className={`product-list ${product?.slug ===slug || id ? "bg-gray-500  !text-white":" "} table-auto `}>
          <td className="!text-sm" >{product?.title}</td>
          <td className="!text-sm">{product?.categories[0]?.title}</td>
        </tr>
      );
  
}
