import Link from "next/link";
import { useRouter } from "next/router";

export default function SingleProducttable({ product }) {
  const router = useRouter();
  const { slug, id } = router.query;
  return (
    <tr
      className={`product-list ${
        product?.slug === slug || id ? "bg-gray-500  !text-white" : " "
      }  `}
      onClick={() => router.push(`/products/${product?.slug || product?.id}`)}
    >
      <td>{product?.title}</td>
      <td>{product?.categories[0]?.title}</td>
    </tr>
  );
}
