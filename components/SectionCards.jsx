import { FileText, Users, Home as HomeIcon, Briefcase } from "lucide-react";

const iconList = [
  [<FileText size={48} color="#a4161a" />, "Steuer / Porez"],
  [<Users size={48} color="#2e2e2e" />, "Familie & Unterstützung / Porodica i podrška"],
  [<HomeIcon size={48} color="#2e2e2e" />, "Wohnen / Stanovanje"],
  [<Briefcase size={48} color="#2e2e2e" />, "Arbeit / Posao"],
];

export default function SectionCards() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {iconList.map(([IconComponent, label]) => (
          <div key={label} className="bg-gray-50 rounded-lg py-6 shadow-md">
            <div className="mb-4 flex justify-center">{IconComponent}</div>
            <p className="font-semibold text-sm">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
