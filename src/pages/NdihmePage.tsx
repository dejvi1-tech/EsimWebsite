import { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle, Smartphone, Check, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const helpData = [
  {
    category: 'Përdorimi i eSIM',
    questions: [
      {
        question: 'Si ta aktivizoj eSIM-in tim?',
        answer: 'Për të aktivizuar eSIM-in tuaj, shkoni te cilësimet e telefonit tuaj, zgjidhni "Celular" ose "Të dhëna celulare", pastaj "Shto Plan të Dhënash" ose "Shto eSIM". Skanoni kodin QR që ju kemi dërguar dhe ndiqni udhëzimet në ekran.'
      },
      {
        question: 'A mund ta përdor eSIM-in me numrin tim aktual?',
        answer: 'Po, mund të përdorni eSIM-in për të dhënat celulare ndërsa mbani numrin tuaj ekzistues për thirrje dhe SMS përmes kartës fizike SIM. Shumica e telefonave modernë mbështesin përdorimin e njëkohshëm të SIM fizike dhe eSIM.'
      }
    ]
  },
  {
    category: 'Mbulimi dhe Shpejtësia',
    questions: [
      {
        question: 'Cilat vende mbulohen nga shërbimi juaj?',
        answer: 'Shërbimi ynë mbulon mbi 190 vende në mbarë botën, duke përfshirë të gjitha vendet e Evropës, Amerikën e Veriut, dhe shumë destinacione të tjera. Çdo plan specifikon saktësisht vendet ku mund të përdoret.'
      },
      {
        question: 'Çfarë shpejtësie interneti mund të pres?',
        answer: 'Shpejtësia varet nga mbulimi i rrjetit në zonën tuaj. Në shumicën e vendeve, do të keni akses në rrjetet 4G/LTE, dhe 5G ku është i disponueshëm. Shpejtësitë mesatare variojnë nga 20-100 Mbps.'
      }
    ]
  },
  {
    category: 'Pagesa dhe Çmimet',
    questions: [
      {
        question: 'Si funksionon pagesa?',
        answer: 'Pranojmë pagesa me të gjitha kartat kryesore të kreditit dhe debitit. Pagesa bëhet një herë për planin që zgjidhni, pa detyrime të fshehura ose rinovime automatike.'
      },
      {
        question: 'A ka kosto shtesë?',
        answer: 'Jo, çmimi që shihni është çmimi përfundimtar. Nuk ka tarifa të fshehura ose kosto shtesë. Të gjitha taksat dhe tarifat janë të përfshira në çmimin e shfaqur.'
      }
    ]
  }
];

const deviceDatabase = [
  {
    brand: 'Apple',
    models: [
      { name: 'iPhone 16 Pro Max', compatible: true },
      { name: 'iPhone 16 Pro', compatible: true },
      { name: 'iPhone 16 Plus', compatible: true },
      { name: 'iPhone 16', compatible: true },
      { name: 'iPhone 15 Pro Max', compatible: true },
      { name: 'iPhone 15 Pro', compatible: true },
      { name: 'iPhone 15 Plus', compatible: true },
      { name: 'iPhone 15', compatible: true },
      { name: 'iPhone 14 Pro Max', compatible: true },
      { name: 'iPhone 14 Pro', compatible: true },
      { name: 'iPhone 14 Plus', compatible: true },
      { name: 'iPhone 14', compatible: true },
      { name: 'iPhone 13 Pro Max', compatible: true },
      { name: 'iPhone 13 Pro', compatible: true },
      { name: 'iPhone 13', compatible: true },
      { name: 'iPhone 13 Mini', compatible: true },
      { name: 'iPhone 12 Pro Max', compatible: true },
      { name: 'iPhone 12 Pro', compatible: true },
      { name: 'iPhone 12', compatible: true },
      { name: 'iPhone 12 Mini', compatible: true },
      { name: 'iPhone 11 Pro Max', compatible: true },
      { name: 'iPhone 11 Pro', compatible: true },
      { name: 'iPhone 11', compatible: true },
      { name: 'iPhone XS Max', compatible: true },
      { name: 'iPhone XS', compatible: true },
      { name: 'iPhone XR', compatible: true },
      { name: 'iPhone X', compatible: false, notes: 'eSIM not supported' },
      { name: 'iPhone 8 or earlier', compatible: false, notes: 'eSIM not supported' }
    ]
  },
  {
    brand: 'Samsung',
    models: [
      { name: 'Galaxy S25 Ultra', compatible: true },
      { name: 'Galaxy S25+', compatible: true },
      { name: 'Galaxy S25', compatible: true },
      { name: 'Galaxy S24 Ultra', compatible: true },
      { name: 'Galaxy S24+', compatible: true },
      { name: 'Galaxy S24', compatible: true },
      { name: 'Galaxy S23 Ultra', compatible: true },
      { name: 'Galaxy S23+', compatible: true },
      { name: 'Galaxy S23', compatible: true },
      { name: 'Galaxy S22 Ultra', compatible: true },
      { name: 'Galaxy S22+', compatible: true },
      { name: 'Galaxy S22', compatible: true },
      { name: 'Galaxy Z Fold 5', compatible: true },
      { name: 'Galaxy Z Fold 4', compatible: true },
      { name: 'Galaxy Z Flip 5', compatible: true },
      { name: 'Galaxy Z Flip 4', compatible: true },
      { name: 'Galaxy Note 20 Ultra', compatible: true },
      { name: 'Galaxy Note 20', compatible: true },
      { name: 'Galaxy S21 Ultra', compatible: true },
      { name: 'Galaxy S21+', compatible: true },
      { name: 'Galaxy S21', compatible: true },
      { name: 'Galaxy S20 Ultra', compatible: true, notes: 'International version only' },
      { name: 'Galaxy S20+', compatible: true, notes: 'International version only' },
      { name: 'Galaxy S20', compatible: true, notes: 'International version only' }
    ]
  },
  {
    brand: 'Google',
    models: [
      { name: 'Pixel 8 Pro', compatible: true },
      { name: 'Pixel 8', compatible: true },
      { name: 'Pixel 7 Pro', compatible: true },
      { name: 'Pixel 7', compatible: true },
      { name: 'Pixel 7a', compatible: true },
      { name: 'Pixel 6 Pro', compatible: true },
      { name: 'Pixel 6', compatible: true },
      { name: 'Pixel 6a', compatible: true },
      { name: 'Pixel 5', compatible: true },
      { name: 'Pixel 4a 5G', compatible: true },
      { name: 'Pixel 4', compatible: true },
      { name: 'Pixel 4 XL', compatible: true },
      { name: 'Pixel 3a', compatible: true, notes: 'Limited carrier support' },
      { name: 'Pixel 3', compatible: true, notes: 'Limited carrier support' }
    ]
  },
  {
    brand: 'Motorola',
    models: [
      { name: 'Razr 40 Ultra', compatible: true },
      { name: 'Edge 40 Pro', compatible: true },
      { name: 'Edge 30 Ultra', compatible: true },
      { name: 'Edge+ (2022)', compatible: true },
      { name: 'Edge (2022)', compatible: true },
      { name: 'Other Models', compatible: false, notes: 'eSIM support varies by model' }
    ]
  },
  {
    brand: 'Huawei',
    models: [
      { name: 'P50 Pro', compatible: true },
      { name: 'P40 Pro+', compatible: true },
      { name: 'P40 Pro', compatible: true },
      { name: 'P40', compatible: true },
      { name: 'Mate 40 Pro', compatible: true },
      { name: 'Other Models', compatible: false, notes: 'eSIM support varies by model and region' }
    ]
  }
];

const NdihmePage = () => {
  const [activeCategory, setActiveCategory] = useState('Përdorimi i eSIM');
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  
  const toggleQuestion = (question: string) => {
    if (openQuestions.includes(question)) {
      setOpenQuestions(openQuestions.filter(q => q !== question));
    } else {
      setOpenQuestions([...openQuestions, question]);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Ndihma dhe Mbështetja</h1>
            <p className="text-lg text-white/90">
              Gjeni përgjigje për pyetjet tuaja më të shpeshta rreth shërbimit tonë eSIM.
            </p>
          </div>
        </div>
      </section>

      <section className="-mt-8">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl">
            <a 
              href="#whatsapp-number-here" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150"></div>
                <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-black/10 transition-transform duration-500 group-hover:scale-150"></div>
                
                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <MessageCircle className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">24/7 WhatsApp Support</h3>
                        <p className="text-white/90">Get instant help from our experts</p>
                      </div>
                    </div>
                    <div className="hidden rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm md:block">
                      Online Now
                    </div>
                  </div>
                  
                  <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-lg font-semibold text-white">Fast Response</div>
                      <div className="text-sm text-white/80">Average reply in 2 mins</div>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-lg font-semibold text-white">Expert Team</div>
                      <div className="text-sm text-white/80">Dedicated support staff</div>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-lg font-semibold text-white">24/7 Available</div>
                      <div className="text-sm text-white/80">Support in all timezones</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-white/90">
                      <div className="text-sm">Need help? Chat with us on</div>
                      <div className="text-lg font-semibold">WhatsApp</div>
                    </div>
                    <div className="flex items-center rounded-full bg-white px-6 py-3 font-medium text-[#25D366] transition-transform group-hover:scale-105">
                      Start Chat
                      <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <div className="mb-8 flex items-center space-x-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Smartphone size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Device Compatibility Checker</h2>
                <p className="text-gray-600">Check if your device supports eSIM technology</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Select Your Device Brand
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {deviceDatabase.map((brand) => (
                      <button
                        key={brand.brand}
                        className={`rounded-lg border-2 p-4 text-center transition-all ${
                          selectedBrand === brand.brand
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                        onClick={() => {
                          setSelectedBrand(brand.brand);
                          setSelectedModel(null);
                        }}
                      >
                        {brand.brand}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedBrand && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Select Your Model
                    </label>
                    <div className="space-y-2">
                      {deviceDatabase
                        .find(b => b.brand === selectedBrand)
                        ?.models.map((model) => (
                          <button
                            key={model.name}
                            className={`flex w-full items-center justify-between rounded-lg border-2 p-4 text-left transition-all ${
                              selectedModel === model.name
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-primary/50'
                            }`}
                            onClick={() => setSelectedModel(model.name)}
                          >
                            <span>{model.name}</span>
                            {model.compatible ? (
                              <Check size={20} className="text-success" />
                            ) : (
                              <X size={20} className="text-error" />
                            )}
                          </button>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                {selectedBrand && selectedModel ? (
                  <div>
                    {deviceDatabase
                      .find(b => b.brand === selectedBrand)
                      ?.models.find(m => m.name === selectedModel)?.compatible ? (
                      <div>
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
                          <Check size={32} className="text-success" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-success">
                          Good News! Your Device is Compatible
                        </h3>
                        <p className="mb-6 text-gray-600">
                          Your {selectedBrand} {selectedModel} supports eSIM technology. You can proceed with purchasing and installing an eSIM plan.
                        </p>
                        <Link to="/plans" className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-white transition-all hover:bg-primary-dark">
                          Browse eSIM Plans
                          <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-error/20">
                          <X size={32} className="text-error" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-error">
                          Device Not Compatible
                        </h3>
                        <p className="mb-4 text-gray-600">
                          Unfortunately, your {selectedBrand} {selectedModel} doesn't support eSIM technology.
                        </p>
                        <div className="rounded-lg bg-white p-4">
                          <h4 className="mb-2 font-medium">Alternative Options:</h4>
                          <ul className="ml-4 list-disc text-sm text-gray-600">
                            <li>Consider using a physical SIM card</li>
                            <li>Check our partner stores for compatible devices</li>
                            <li>Contact support for more assistance</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-lg font-medium">Select your device</p>
                    <p className="mt-2 text-gray-600">
                      Choose your device brand and model to check eSIM compatibility
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="sticky top-32 space-y-2 rounded-2xl bg-white p-6 shadow-lg">
                <h2 className="mb-6 text-lg font-semibold">Categories</h2>
                {helpData.map((category) => (
                  <button
                    key={category.category}
                    className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                      activeCategory === category.category
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveCategory(category.category)}
                  >
                    {category.category}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-8 flex items-center space-x-3">
                  <HelpCircle size={28} className="text-primary" />
                  <h2 className="text-2xl font-bold">{activeCategory}</h2>
                </div>
                
                <div className="space-y-6">
                  {helpData
                    .find(category => category.category === activeCategory)
                    ?.questions.map((help, index) => (
                      <div 
                        key={index} 
                        className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300"
                      >
                        <button
                          className="flex w-full items-center justify-between p-6 text-left font-medium"
                          onClick={() => toggleQuestion(help.question)}
                        >
                          <span className="flex-1 text-lg">{help.question}</span>
                          <span className={`ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 transition-transform ${
                            openQuestions.includes(help.question) ? 'rotate-45' : ''
                          }`}>
                            <Plus size={16} />
                          </span>
                        </button>
                        
                        {openQuestions.includes(help.question) && (
                          <div className="border-t border-gray-200 bg-gray-50 p-6">
                            <p className="text-gray-600">{help.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-dark p-8 text-center md:p-16">
            <div className="relative">
              <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-white opacity-5"></div>
              <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-white opacity-5"></div>
              
              <div className="relative">
                <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Still Need Help?</h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                  Our support team is here to help you 24/7. Contact us through WhatsApp and we'll get back to you as soon as possible.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <a 
                    href="#whatsapp-number-here"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center rounded-full bg-[#25D366] px-8 py-4 font-medium text-white transition-transform hover:scale-105"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    WhatsApp Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NdihmePage;