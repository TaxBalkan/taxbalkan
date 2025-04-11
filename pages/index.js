import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxBalkan - Vodiči i prijave</title>
        <meta name="description" content="Praktične upute i savjeti za obrasce u Njemačkoj" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/">
            <Image
              src="/taxbalkan-logo.png"
              alt="TaxBalkan logo"
              width={180}
              height={50}
              priority
            />
          </a>
          <nav className="space-x-4 text-sm text-gray-600">
            <a href="#" className="hover:text-red-700">Blog</a>
            <a href="#" className="hover:text-red-700">Downloads</a>
            <a href="#" className="hover:text-red-700">Empfehlungen</a>
            <a href="#" className="hover:text-red-700">Kontakt</a>
          </nav>
        </div>
      </header>

      <main className="bg-[#0f172a] text-white py-16 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Praktične upute i savjeti za osobe sa Balkana
          <br />
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Hilfe beim Ausfüllen von Formularen und Anträgen
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded-md">Erfahre mehr</button>
          <button className="bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded-md">Anleitungen ansehen</button>
        </div>
      </main>

      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ['icon-euro.svg', 'Steuer / Porez'],
            ['icon-family.svg', 'Familie & Unterstützung / Porodica i podrška'],
            ['icon-home.svg', 'Wohnen / Stanovanje'],
          ].map(([icon, label]) => (
            <div key={label} className="bg-gray-50 rounded-lg py-6 shadow-md">
              <div className="mb-4 flex justify-center">
                <img src={`/public/${icon}`} alt={label} className="w-12 h-12" />
              </div>
              <p className="font-semibold text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TaxBalkan
      </footer>
    </>
  );
}
