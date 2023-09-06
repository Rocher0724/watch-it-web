import Image from "next/image";

export default function Test() {
  return (
    <>
      <img
        src="/images/product.jpeg"
        width="400"
        height="400"
        alt="상품 이미지"
      />
      <div style={{
        position: 'relative',
        width: '50%',
        height: '200px'
      }}>
        <Image
          src="/images/product.jpeg"
          fill
          style={{
            objectFit: 'cover'
          }}
          alt="상품 이미지"
        />

      </div>
    </>
  );
}
