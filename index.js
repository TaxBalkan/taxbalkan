export default function Home() {
  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 text-center'>
      <h1 className='text-4xl md:text-6xl font-bold mb-4'>
        <span className='text-white'>Tax</span>
        <span className='text-red-600'>Balkan</span>
      </h1>
      <p className='text-lg md:text-xl mb-6 max-w-2xl'>
        Pomoć pri popunjavanju formulara i zahtjeva u Njemačkoj
      </p>
      <h2 className='text-3xl md:text-5xl font-bold text-white mb-8'>
        Mini vodič za obrazac <span className='text-red-600'>V0800</span>
      </h2>
      <div className='space-y-3 w-full max-w-md'>
        <div className='border border-red-600 py-3 px-6 rounded-md'>Ko treba da ga koristi</div>
        <div className='border border-red-600 py-3 px-6 rounded-md'>Kada se podnosi</div>
        <div className='border border-red-600 py-3 px-6 rounded-md'>Šta trebaš da pripremiš</div>
        <div className='border border-red-600 py-3 px-6 rounded-md'>Kako ga popuniti</div>
      </div>
      <p className='mt-8 text-sm text-gray-300'>
        Prije nego što preuzmeš vodič, potvrdi prijavu za newsletter (<span className='font-bold text-white'>obavezno Abonnement</span>)
      </p>
      <p className='text-sm text-gray-300 mt-1'>info@taxbalkan.de</p>
    </div>
  );
}
