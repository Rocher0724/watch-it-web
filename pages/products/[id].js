import React from 'react';
import {getSegmentParam} from "next/dist/server/app-render/get-segment-param";

function Product1(props) {
  const asd = getSegmentParam('id')
  return (
    <div>product 페이지 {asd} </div>
  );
}

export default Product1;
