import { useState } from 'react';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';

interface CountryCoverageProps {
  title?: string;
}

const CountryCoverage = ({ title = "Countries Covered" }: CountryCoverageProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const countries = [
    "Shqipëri", "Algjeri", "Armeni", "Australi", "Austri", "Azerbajxhan", "Bahrein", 
    "Bjellorusi", "Belgjikë", "Bosnjë dhe Hercegovinë", "Brazil", "Bullgari", "Kanada", 
    "Kroaci", "Qipro", "Republika Çeke", "Danimarkë", "Egjipt", "Estoni", "Ishujt Faroe", 
    "Finlandë", "Francë", "Gjeorgji", "Gjermani", "Greqi", "Hong Kong", "Hungari", 
    "Islandë", "Indi", "Indonezi", "Irlandë", "Izrael", "Itali", "Kazakistan", "Kuvajt", 
    "Kirgistan", "Letoni", "Lihtenshtajn", "Lituani", "Luksemburg", "Makao Kinë", 
    "Maqedoni", "Malajzi", "Maltë", "Moldavi", "Mal i Zi", "Holandë", "Zelandë e Re", 
    "Norvegji", "Oman", "Pakistan", "Filipine", "Poloni", "Portugali", "Katar", "Reunion", 
    "Rumani", "Federata Ruse", "Serbi", "Singapor", "Sllovaki", "Slloveni", "Spanjë", 
    "Sri Lanka", "Suedi", "Zvicër", "Tajvan", "Tajlandë", "Tunizi", "Turqi", "Ukrainë", 
    "Mbretëria e Bashkuar", "Shtetet e Bashkuara", "Uzbekistan", "Vietnam"
  ];

  return (
    <div className="rounded-lg bg-gray-50 p-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between"
      >
        <div className="flex items-center space-x-2">
          <Globe size={20} className="text-primary" />
          <span className="font-medium">{title}</span>
          <span className="text-sm text-gray-500">({countries.length} countries)</span>
        </div>
        {isExpanded ? (
          <ChevronUp size={20} className="text-gray-400" />
        ) : (
          <ChevronDown size={20} className="text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600 md:grid-cols-3">
          {countries.map((country) => (
            <div key={country} className="flex items-center space-x-2">
              <span>• {country}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryCoverage;