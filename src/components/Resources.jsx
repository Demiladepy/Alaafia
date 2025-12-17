import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle } from 'lucide-react';

const content = {
    en: {
        title: "Health Education & Resources",
        subtitle: "Understanding Chronic Kidney Disease (CKD) in Nigeria",
        sections: [
            {
                title: "Common Myths vs Facts",
                items: [
                    { myth: "Herbal mixtures (Agbo) can wash the kidneys and cure CKD.", fact: "Unregulated herbal mixtures can actually damage the kidneys further due to unknown toxicity levels." },
                    { myth: "Kidney disease is a spiritual attack.", fact: "CKD is a medical condition caused by diabetes, hypertension, and other factors. It requires medical treatment." },
                    { myth: "I feel fine, so my kidneys are okay.", fact: "CKD is often silent until late stages. Regular screening is essential." }
                ]
            },
            {
                title: "Dietary Advice",
                text: "Avoid high-sodium foods like bouillon cubes, processed meats, and canned soups. Limit potassium-rich foods if advised (e.g., bananas, oranges, plantains). Protein intake (moin-moin, fish) should be moderated based on your doctor's advice."
            }
        ]
    },
    yo: {
        title: "Ẹ̀kọ́ Ilera & Awọn Ohun Eelo",
        subtitle: "Lílóye Àìsàn Kíndìnrín (CKD) ní Nàìjíríà",
        sections: [
            {
                title: "Àwọn Àìgbọ́dọ̀máà vs Òtítọ́",
                items: [
                    { myth: "Agbo lè fọ kíndìnrín mọ́ kí ó sì wo CKD sàn.", fact: "Àwọn àpòpọ̀ egbòigi tí kò ní àkóso lè ba kíndìnrín jẹ́ síi nítorí pé a kò mọ bí wọ́n ṣe lágbára tó." },
                    { myth: "Àìsàn kíndìnrín jẹ́ àrùn tẹ̀mí.", fact: "CKD jẹ́ àìsàn ara tí ó máa ń ṣẹlẹ̀ nítorí àtọ̀gbẹ, ẹ̀jẹ̀ ríru, àti àwọn okunfa mìíràn. Ó nílò ìtọ́jú ilé-ìwòsàn." },
                    { myth: "Ara mi dá, nítorí náà kíndìnrín mi wà dáadáa.", fact: "CKD kì í sábà fi àmì hàn títí tí ó fi máa le gan-an. Àyẹ̀wò déédéé ṣe pàtàkì." }
                ]
            },
            {
                title: "Ìmọ̀ràn Lórí Oúnjẹ",
                text: "Yẹra fún oúnjẹ tí iyọ̀ pọ̀ nínú rẹ̀ bíi maggi, ẹran tí a ti ṣe sínú agolo. Dín oúnjẹ bíi ọ̀gẹ̀dẹ̀ àti ọ̀sàn kù tí dókítà bá sọ bẹ́ẹ̀. Jẹ ẹja àti mọ́ín-mọ́ín níwọ̀nba."
            }
        ]
    },
    ha: {
        title: "Ilimin Kiwon Lafiya & Albarkatu",
        subtitle: "Fahimtar Cutar Koda (CKD) a Najeriya",
        sections: [
            {
                title: "Tatsuniyoyi vs Gaskiya",
                items: [
                    { myth: "Magungunan gargajiya (Agbo) na iya wanke koda da warkar da CKD.", fact: "Magungunan gargajiya marasa ka'ida suna iya kara lalata koda saboda rashin sanin karfinsu." },
                    { myth: "Cutar koda harin aljanu ne.", fact: "CKD cuta ce ta likitanci da ke haifar da ciwon sukari, hawan jini, da sauran dalilai. Tana bukatar magani a asibiti." },
                    { myth: "Ina jin dadi, don haka kodata tana lafiya.", fact: "CKD galibi ba ta nuna alamomi har sai ta yi tsanani. Gwaje-gwaje akai-akai suna da mahimmanci." }
                ]
            },
            {
                title: "Shawara kan Abinci",
                text: "Kuyi nesa da abinci mai gishiri da yawa kamar maggi da naman gwangwani. Rage abinci mai potassium idan likita ya bada shawara (misali, ayaba, lemu). Ku ci kifi da wake daidai gwargwado bisa shawarar likita."
            }
        ]
    },
    ig: {
        title: "Agụmakwụkwọ Ahụike & Akụrụngwa",
        subtitle: "Ịghọta Ọrịa Akụrụ (CKD) na Naịjirịa",
        sections: [
            {
                title: "Akụkọ Ifo vs Eziokwu",
                items: [
                    { myth: "Agwọ ọdịnala (Agbo) nwere ike ịsacha akụrụ ma gwọọ CKD.", fact: "Ngwakọta ọgwụ ọdịnala na-enweghị nchịkwa nwere ike imebi akụrụ karịa n'ihi na amaghị ike ha." },
                    { myth: "Ọrịa akụrụ bụ ọgụ ime mmụọ.", fact: "CKD bụ ọnọdụ ahụike nke ọrịa shuga, ọbara mgbali elu, na ihe ndị ọzọ na-akpata. Ọ chọrọ ọgwụgwọ ụlọ ọgwụ." },
                    { myth: "Ahụ dị m mma, yabụ na akụrụ m dị mma.", fact: "CKD anaghị egosipụtakarị ihe mgbaàmà ruo mgbe ọ ga-aka njọ. Nyocha oge niile dị mkpa." }
                ]
            },
            {
                title: "Ndụmọdụ Nri",
                text: "Zere nri nwere nnu dị ukwuu dị ka maggi, anụ edoziri edozi. Belata nri nwere potassium ma ọ bụrụ na adụrụ ọdụ (dịka, unere, oroma). Rie azụ na mọị-mọị n'ụzọ kwesịrị ekwesị dabere na ndụmọdụ dọkịta gị."
            }
        ]
    }
};

const Resources = () => {
    const [lang, setLang] = useState('en');

    return (
        <div className="max-w-4xl mx-auto space-y-8">

            {/* Header & Language Switcher */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold mb-1">{content[lang].title}</h1>
                    <p className="text-gray-500">{content[lang].subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {[
                        { code: 'en', label: 'English' },
                        { code: 'yo', label: 'Yorùbá' },
                        { code: 'ha', label: 'Hausa' },
                        { code: 'ig', label: 'Igbo' }
                    ].map(l => (
                        <button
                            key={l.code}
                            onClick={() => setLang(l.code)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${lang === l.code
                                    ? 'bg-black text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Myths vs Facts */}
                <div className="md:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-accent" /> {content[lang].sections[0].title}
                    </h2>
                    <div className="space-y-6">
                        {content[lang].sections[0].items.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-2xl">
                                <div className="flex items-start gap-3 mb-3">
                                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                    <p className="font-semibold text-gray-900">{item.myth}</p>
                                </div>
                                <div className="flex items-start gap-3 pl-2 border-l-2 border-green-500 ml-2.5">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.fact}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Diet Advice */}
                <div className="md:col-span-2 bg-[#E8F0E5] p-8 rounded-[2rem] shadow-sm">
                    <h2 className="text-xl font-bold mb-4 text-green-900">
                        {content[lang].sections[1].title}
                    </h2>
                    <p className="text-gray-800 leading-relaxed font-medium">
                        {content[lang].sections[1].text}
                    </p>
                </div>

            </div>

            <div className="text-center py-8">
                <p className="text-xs text-gray-400 max-w-2xl mx-auto">
                    Reference: *Chronic Kidney Disease: Global Dimension and Perspectives*, with specific focus on cultural misconceptions in Nigeria (based on PMC11339929). Always consult a qualified medical professional.
                </p>
            </div>

        </div>
    );
};

export default Resources;
