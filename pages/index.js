import SectionCards from "../components/SectionCards";
import Head from 'next/head';
import Image from 'next/image';
import { FileText, Users, Home as HomeIcon, Briefcase } from 'lucide-react';

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
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Hilfe beim Ausfüllen von Formularen und Anträgen
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded-md">Erfahre mehr</button>
          <button className="bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded-md">Anleitungen ansehen</button>
        </div>
      </main>

      <SectionCards />

      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TaxBalkan
      </footer>
    </>
  );
}

