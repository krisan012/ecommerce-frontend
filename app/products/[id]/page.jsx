import ProductPage from "@/app/components/Products/ProductThumbnail";

export default function Product({params}) {

    return <ProductPage productId={params.id} />;
}