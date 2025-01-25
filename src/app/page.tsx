import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const links = [
    {
      label: 'BROSUR PMB UNISRI SOLO 2025',
      url: 'https://drive.google.com/file/d/1QYFMhzs_Min81aNt1kB8ZLe9rbZBeqqZ/view?usp=drive_link',
      download: true,
    },
    {
      label: 'Website PMB UNISRI SOLO 2025',
      url: 'https://www.spmb.unisri.ac.id/',
      download: false,
    },
    {
      label: 'IG UNISRI SOLO',
      url: 'https://www.instagram.com/unisrisolo?igsh=MXFhajA5NTdrZXBxag%3D%3D',
      download: false,
    },
    {
      label: 'TikTok UNISRI SOLO',
      url: 'https://www.tiktok.com/@pmb.unisri.official?_t=8k29Udmper9&_r=1',
      download: false,
    },
    {
      label: 'YouTube UNISRI SOLO',
      url: 'https://www.youtube.com/@unisrisolo413',
      download: false,
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 text-white relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url('/bg.png')`,
        }}
      ></div>

      {/* Content */}
      <div className="flex flex-col items-center z-10">
        <Image
          src="/logo.jpg"
          alt="Logo Unisri Solo"
          width={80}
          height={80}
          className="rounded-full mb-3"
        />

        <h1 className="text-2xl font-bold mb-2">@unisrisolo</h1>
        <p className="mb-8 text-center text-lg">
          INFO PENERIMAAN MAHASISWA BARU UNISRI SOLO
        </p>

        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            download={link.download}
            className="w-80 py-4 px-6 mb-4 bg-blue-600 rounded-lg shadow-lg text-center hover:bg-blue-700 transition-all"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
