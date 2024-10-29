import Image from 'next/image';

export default function Banner() {
  return (
    <section >
      <Image
        src="https://vttu.edu.vn/wp-content/uploads/2024/10/Asset-24.jpg"
        alt="Description of image"
        width={2000} // Specify width
        height={2000} // Specify height
        priority // Optional: for high-priority images
      />
    </section>
  );
}

