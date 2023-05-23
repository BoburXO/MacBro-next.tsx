import { Metadata } from "next";
import React from "react";

const getOfficialData = async (_id: string) => {
  const res = await fetch(
    `https://flowers-api-yqhj.onrender.com/products/${_id}`,
    {
      next: {
        revalidate: 60,
        //revalidate bu hohlangan vaqt beriladi va u berilganidan keyn har usha vaqtda serverni refresh qilib beradi, masalan saytda 10 minut qolgan odam har 2minutta yengi post qo'yilsa u ulani refresh qmagunicha ko'romidi biza bergan vaqtda esa u har gal refsesh bo'p turadi!
        //har 60 sekundda
      },
    }
  );

  return res.json();
};

interface Props {
  params: {
    _id: string;
  };
}

export async function generateMetadata({
  params: { _id },
}: Props): Promise<Metadata> {
  const product = await getOfficialData(_id);
  return { title: product.name };
}

const OfficialPage = async ({ params: { _id } }: Props) => {
  const paramsProduct = await getOfficialData(_id);
  return (
    <div className="shop">
      <br />
      <div className="container">
      <div className="params_page">
        <div className="left">
          <img src={paramsProduct?.image} alt="" />
          <span>--</span>
          <h3>{paramsProduct?.name}</h3>
          <span>--</span>
          <h2>{paramsProduct?.price} сум</h2>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OfficialPage;
