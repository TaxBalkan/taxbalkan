import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-center">
      <Image
        src="/taxbalkan-logo.png"
        alt="TaxBalkan logo"
        width={200}
        height={60}
        priority
      />
    </header>
  );
}
