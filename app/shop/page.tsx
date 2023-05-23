import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Shop | MacBro App",
};

const Shop = async () => {
  const getData = async () => {
    const res = await fetch("https://flowers-api-yqhj.onrender.com/products", {
      next: {
        revalidate: 60,
      },
    });
    // if (res.ok) throw new Error("Oops, Unable to fetch products! Sorry...");
    return res.json();
  };

  const products = await getData();
  return (
    <>
      <section>
        <div className="container">
          <div className="parent">
            {products.slice(0, 60).map((el: any) => {
              return (
                <Link href={`/shop/${el._id}`} className="card" key={el._id}>
                  <img src={el.image} alt={el.name} />
                  <p>
                    {el.name.slice(0, 27)}
                    {"..."}
                  </p>
                  <br />
                  <br />
                  <strong>от {el.price} сум</strong>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
