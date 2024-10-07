import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Sidebar, Header } from "@/components";
import { ProductCard, Button } from "@/components/ui";
import { ProductTable } from "@/components/tables/Product";
import { Switch } from "@/components/ui/switch";

const products = [
  {
    id: 1,
    name: "Bricks",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/19688828/pexels-photo-19688828/free-photo-of-close-up-of-man-building-bricks-wall.jpeg?auto=compress&cs=tinysrgb&w=400",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Ksh 35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Ksh 35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Ksh 35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Ksh 35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Ksh 35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Ksh 35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Ksh 35",
    color: "Black",
  },
];

export const Route = createFileRoute("/products")({
  component: () => <ProductPage />,
});

function ProductPage() {
  const [isGridLayout, setIsGridLayout] = React.useState(true);
  return (
    <div className="flex flex-col gap-4 px-6 pt-4">
      <section className="flex gap-2 items-center">
        <Sidebar
          trigger={
            <img
              src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/menu-512.png"
              className="w-6"
            />
          }
        />
        <Header location="Products" />
      </section>
      <div className="mt-10 flex justify-between items-center">
        <h1 className="text-3xl leading-9">Manage Products</h1>
        <div className="flex items-center">
          <Button variant="outline">Add Product</Button>
          <Switch onclick={() => {setIsGridLayout(!isGridLayout)}} />
        </div>
      </div>
      {isGridLayout ? (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <ProductTable data={products} />
      )}
    </div>
  );
}
