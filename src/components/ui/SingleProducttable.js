import Link from "next/link";
import { useRouter } from "next/router";

export default function SingleProducttable({ product }) {
  const router = useRouter();
  const { slug, id } = router.query;
  return (
    <tr
      className={`product-list cursor-pointer ${
        product?.slug === slug || id ? "bg-primary  !text-white" : " "
      }  `}
      onClick={() => {
        router.push(`/products/${product?.slug || id}`);
      }}
    >
      <td>
        <span className="text-xs">{product?.title}</span>
      </td>
      <td>
        <span className="text-xs">{product?.categories[0]?.title}</span>
      </td>
    </tr>
  );
}
