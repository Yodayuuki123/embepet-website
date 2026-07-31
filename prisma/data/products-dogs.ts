// 犬用产品线 —— 基于恩贝宠真实产品目录（1688 主图 + 选品文档）
// 文案全部使用结构功能声称（supports/promotes），符合 FDA/NASC 合规要求

export const dogProducts = [
  {
    slug: "hip-joint-mobility-chews",
    name: "Hip & Joint Mobility Chews",
    subtitle: "Glucosamine + chondroitin + green-lipped mussel for joints that keep up",
    answerCapsule:
      "Hip & Joint Mobility Chews combine 450 mg glucosamine HCl, 250 mg chondroitin and 250 mg MSM with green-lipped mussel in a chicken-flavored soft chew. The formula supports cartilage structure, joint lubrication and everyday mobility in dogs of all breeds, from young athletes to easing-into-it seniors.",
    description: `## Built for every walk, fetch and stair sprint

Joints wear quietly. By the time a dog slows down on stairs or hesitates before the couch jump, cartilage has often been under strain for years. Our mobility formula pairs the most-studied joint actives at meaningful dosages — not sprinkle amounts.

**Who it's for:** adult dogs of any size, large breeds from their first year, seniors, and active dogs that hike, run or compete.

## What makes it different

- Clinically relevant dosages per two-chew serving, printed on the label
- Green-lipped mussel adds natural omega-3s and glycosaminoglycans
- Cold-press extrusion protects heat-sensitive actives
- Chicken flavor tested on real picky eaters before launch`,
    species: "dog",
    format: "chew",
    colorKey: "clay",
    badges: "bestseller,vet-informed",
    featured: true,
    bestSeller: true,
    benefits: [
      { title: "Supports cartilage & cushioning", body: "Glucosamine and chondroitin are building blocks of healthy cartilage and joint fluid.", icon: "bone" },
      { title: "Eases everyday stiffness", body: "MSM and green-lipped mussel support a normal inflammatory response after exercise.", icon: "activity" },
      { title: "Keeps seniors moving", body: "Hyaluronic acid supports joint lubrication for smoother sits, stands and stairs.", icon: "heart" },
      { title: "Loved at first bite", body: "Soft, chicken-flavored chew that feeds like a treat — no pill pockets needed.", icon: "smile" },
    ],
    ingredients: [
      { name: "Glucosamine HCl", amount: "450 mg", purpose: "Cartilage building block" },
      { name: "Chondroitin sulfate", amount: "250 mg", purpose: "Supports cartilage elasticity" },
      { name: "MSM", amount: "250 mg", purpose: "Supports normal inflammatory response" },
      { name: "Green-lipped mussel", amount: "100 mg", purpose: "Natural omega-3s & GAGs" },
      { name: "Hyaluronic acid", amount: "10 mg", purpose: "Joint lubrication support" },
      { name: "Vitamin C & E blend", amount: "30 mg", purpose: "Antioxidant support" },
    ],
    feedingGuide: [
      { weight: "Up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–50 lbs", amount: "2 chews daily" },
      { weight: "51–75 lbs", amount: "3 chews daily" },
      { weight: "Over 75 lbs", amount: "4 chews daily" },
    ],
    faqs: [
      { q: "How long until I see a difference?", a: "Joint actives build up gradually. Most pet parents report smoother movement within 4–6 weeks of consistent daily feeding; full effect is typically seen around week 8." },
      { q: "Can I give these to a young, healthy dog?", a: "Yes. Large and giant breeds especially benefit from early joint support, since cartilage stress starts long before visible stiffness. Follow the weight-based feeding guide." },
      { q: "Can they be combined with vet-prescribed medication?", a: "The formula is supplement-grade and generally well tolerated, but always confirm combinations with your veterinarian if your dog takes prescription medication." },
      { q: "Do they contain anything artificial?", a: "No artificial colors or preservatives. Palatability comes from real chicken flavor, not sugar." },
    ],
    images: ["/products/hip-joint-mobility-chews.png"],
    variants: [
      { name: "90 chews", sku: "EP-JNT-90", priceCents: 2699, compareAtCents: 3299, isDefault: true },
      { name: "180 chews", sku: "EP-JNT-180", priceCents: 4599, compareAtCents: 5999 },
    ],
    collections: ["hip-joint", "dogs"],
    translations: JSON.stringify({
      es: {
        subtitle: "Glucosamina + condroitina + mejillón de labio verde para articulaciones que siguen el ritmo",
        answerCapsule: "Combinan 450 mg de glucosamina HCl, 250 mg de condroitina y 250 mg de MSM con mejillón de labio verde en un snack blando sabor pollo. Apoyan el cartílago, la lubricación articular y la movilidad diaria de perros de todas las razas.",
      },
      fr: {
        subtitle: "Glucosamine + chondroïtine + moule verte pour des articulations qui suivent le rythme",
        answerCapsule: "450 mg de glucosamine HCl, 250 mg de chondroïtine et 250 mg de MSM avec moule verte, dans une bouchée tendre au poulet. Soutient le cartilage, la lubrification articulaire et la mobilité quotidienne des chiens de toutes races.",
      },
      de: {
        subtitle: "Glucosamin + Chondroitin + Grünlippmuschel für Gelenke, die mithalten",
        answerCapsule: "450 mg Glucosamin HCl, 250 mg Chondroitin und 250 mg MSM mit Grünlippmuschel in einem weichen Chew mit Hühnchengeschmack. Unterstützt Knorpelstruktur, Gelenkschmierung und die tägliche Beweglichkeit von Hunden aller Rassen.",
      },
      ja: {
        subtitle: "グルコサミン＋コンドロイチン＋緑イ貝で、いつまでも軽やかな足取りを",
        answerCapsule: "グルコサミンHCl 450mg、コンドロイチン250mg、MSM 250mgに緑イ貝を配合したチキン風味のソフトチュウ。軟骨の構造、関節の潤滑、毎日の動きやすさをサポートします。",
      },
    }),
  },
  {
    slug: "probiotic-gut-health-chews",
    name: "Probiotic Gut Health Chews",
    subtitle: "3 billion CFU probiotics + pumpkin for steady digestion and solid stools",
    answerCapsule:
      "Probiotic Gut Health Chews deliver 3 billion CFU of shelf-stable Bacillus coagulans with inulin prebiotic, pumpkin and ginger in a pumpkin-flavored soft chew. The formula supports digestion, firm stools, seasonal tummy balance and the gut-immune axis in dogs of all ages.",
    description: `## A calmer gut, visible in the yard

Loose stools, gurgly evenings, grass-eating phases — most of it starts in the microbiome. Our probiotic chew pairs a hardy, shelf-stable strain with the prebiotic fiber it feeds on, so good bacteria arrive alive and stay fed.

**Who it's for:** dogs with sensitive stomachs, diet transitions, antibiotic recovery (ask your vet), boarding and travel weeks, and any dog whose stools could use more consistency.

## What makes it different

- Bacillus coagulans survives stomach acid without refrigeration
- Inulin prebiotic feeds beneficial bacteria
- Real pumpkin and ginger soothe the everyday rumbles
- CFU count guaranteed at expiry, not just at manufacture`,
    species: "dog",
    format: "chew",
    colorKey: "amber",
    badges: "bestseller",
    featured: true,
    bestSeller: true,
    benefits: [
      { title: "Supports balanced digestion", body: "3B CFU of Bacillus coagulans help maintain a healthy gut flora through diet changes and stress.", icon: "leaf" },
      { title: "Firmer, more regular stools", body: "Pumpkin fiber and prebiotics support stool quality you can see on the walk.", icon: "check" },
      { title: "Gut-immune connection", body: "About 70% of immune tissue lives in the gut — a balanced microbiome supports whole-body resilience.", icon: "shield" },
      { title: "Travel & boarding ready", body: "Shelf-stable strain, no fridge needed — toss the jar in the travel bag.", icon: "map" },
    ],
    ingredients: [
      { name: "Bacillus coagulans", amount: "3 × 10⁹ CFU", purpose: "Shelf-stable probiotic strain" },
      { name: "Inulin (chicory root)", amount: "200 mg", purpose: "Prebiotic fiber" },
      { name: "Pumpkin powder", amount: "150 mg", purpose: "Gentle fiber for stool quality" },
      { name: "Ginger root", amount: "50 mg", purpose: "Soothes occasional tummy upset" },
      { name: "Papaya extract", amount: "25 mg", purpose: "Digestive enzyme support" },
    ],
    feedingGuide: [
      { weight: "Up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–75 lbs", amount: "2 chews daily" },
      { weight: "Over 75 lbs", amount: "3 chews daily" },
    ],
    faqs: [
      { q: "When should I expect firmer stools?", a: "Many parents notice steadier digestion within 7–14 days. A full microbiome adjustment typically takes 4 weeks of daily feeding." },
      { q: "Does it need refrigeration?", a: "No. Bacillus coagulans is spore-forming and shelf-stable — it survives heat, transport and stomach acid far better than many dairy-based strains." },
      { q: "Can puppies take it?", a: "Yes, from 12 weeks of age at the lowest feeding amount. Probiotics are commonly used during diet transitions in growing dogs." },
      { q: "Is it safe long term?", a: "Yes. It is designed as an everyday supplement. Pause and consult your vet if your dog develops persistent digestive issues, which can signal something beyond normal imbalance." },
    ],
    images: ["/products/probiotic-gut-health-chews.png"],
    variants: [
      { name: "90 chews", sku: "EP-PRO-90", priceCents: 2399, compareAtCents: 2999, isDefault: true },
      { name: "180 chews", sku: "EP-PRO-180", priceCents: 3999 },
    ],
    collections: ["digestion", "dogs"],
    translations: JSON.stringify({
      es: {
        subtitle: "3 mil millones de UFC + calabaza para una digestión estable y heces firmes",
        answerCapsule: "Aportan 3 mil millones de UFC de Bacillus coagulans estable con inulina prebiótica, calabaza y jengibre. Apoyan la digestión, las heces firmes y el eje intestino-inmunidad en perros de todas las edades.",
      },
      fr: {
        subtitle: "3 milliards d'UFC + citrouille pour une digestion stable et des selles fermes",
        answerCapsule: "3 milliards d'UFC de Bacillus coagulans stable, inuline prébiotique, citrouille et gingembre dans une bouchée tendre. Soutient la digestion, des selles fermes et l'axe intestin-immunité chez les chiens de tout âge.",
      },
      de: {
        subtitle: "3 Mrd. KBE Probiotika + Kürbis für stabile Verdauung und festen Stuhl",
        answerCapsule: "3 Milliarden KBE lagerstabiler Bacillus coagulans mit Inulin, Kürbis und Ingwer im weichen Chew. Unterstützt Verdauung, feste Ausscheidung und die Darm-Immun-Achse bei Hunden jeden Alters.",
      },
      ja: {
        subtitle: "30億CFUの乳酸菌＋パンプキンで、毎日のおなかを安定させる",
        answerCapsule: "常温保存可能なバチルス コアグランス30億CFUに、イヌリン、パンプキン、ジンジャーを配合。消化、便の状態、腸と免疫のつながりをサポートします。",
      },
    }),
  },
  {
    slug: "skin-coat-salmon-chews",
    name: "Skin & Coat Chews + Salmon Oil",
    subtitle: "Omega-3s, biotin and zinc for less itching and a show-day shine",
    answerCapsule:
      "Skin & Coat Chews pair wild salmon oil rich in EPA and DHA with biotin, zinc and vitamin E in a bacon-flavored soft chew. The formula supports the skin barrier, soothes seasonal itch and dryness, reduces excessive shedding and promotes a visibly glossier coat within weeks.",
    description: `## The glow is a symptom of health

A dull coat and itchy skin usually point to the same root: a skin barrier short on fatty acids and micronutrients. This formula feeds the barrier directly — omega-3s for suppleness, biotin and zinc for the keratin that hair is built from.

**Who it's for:** dogs with seasonal itch, dry flaky skin, heavy shedders, and any coat that deserves compliments.

## What makes it different

- Real wild salmon oil, not generic "fish oil blend"
- EPA/DHA amounts printed per serving
- Biotin + zinc + vitamin E complete the skin-nutrition triangle
- Bacon flavor that outranks the treat jar`,
    species: "dog",
    format: "chew",
    colorKey: "rose",
    badges: "vet-informed",
    featured: true,
    bestSeller: false,
    benefits: [
      { title: "Supports the skin barrier", body: "EPA and DHA omega-3s support skin hydration and a normal response to seasonal irritants.", icon: "shield" },
      { title: "Visibly shinier coat", body: "Biotin and zinc feed keratin production — the protein your dog's coat is made of.", icon: "sparkles" },
      { title: "Less hair on the sofa", body: "Balanced fatty acids support a healthy shedding cycle.", icon: "sofa" },
      { title: "Soothes itchy seasons", body: "Vitamin E and omega-3s support comfort through pollen and dry-air months.", icon: "sun" },
    ],
    ingredients: [
      { name: "Wild salmon oil", amount: "300 mg", purpose: "EPA & DHA omega-3s" },
      { name: "Flaxseed", amount: "200 mg", purpose: "Plant omega-3 (ALA)" },
      { name: "Biotin", amount: "500 mcg", purpose: "Keratin & coat growth" },
      { name: "Zinc (chelated)", amount: "10 mg", purpose: "Skin repair & coat pigment" },
      { name: "Vitamin E", amount: "15 IU", purpose: "Antioxidant skin support" },
    ],
    feedingGuide: [
      { weight: "Up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–75 lbs", amount: "2 chews daily" },
      { weight: "Over 75 lbs", amount: "3 chews daily" },
    ],
    faqs: [
      { q: "How fast will the coat improve?", a: "Coat changes follow the hair growth cycle. Expect softer texture in 3–4 weeks and visible shine and reduced shedding around 6–8 weeks." },
      { q: "My dog has diagnosed allergies — will this fix them?", a: "No supplement treats allergies. This formula supports the skin barrier and normal comfort levels; diagnosed allergic dogs should stay on their vet's plan, with this as nutritional support." },
      { q: "Fish smell?", a: "The chews carry a light bacon aroma. The salmon oil is encapsulated in the matrix, so no fishy breath or greasy fingers." },
      { q: "Can cats eat these?", a: "These chews are formulated and sized for dogs. For cats, we recommend our Omega-3 Fish Oil, which is dosed for both species." },
    ],
    images: ["/products/skin-coat-salmon-chews.png"],
    variants: [
      { name: "90 chews", sku: "EP-SKN-90", priceCents: 2499, compareAtCents: 2999, isDefault: true },
      { name: "180 chews", sku: "EP-SKN-180", priceCents: 4199 },
    ],
    collections: ["skin-coat", "dogs"],
    translations: JSON.stringify({
      es: {
        subtitle: "Omega-3, biotina y zinc para menos picor y un brillo de exposición",
        answerCapsule: "Combinan aceite de salmón salvaje rico en EPA y DHA con biotina, zinc y vitamina E. Apoyan la barrera cutánea, alivian el picor estacional, reducen la muda excesiva y aportan un pelaje visiblemente más brillante.",
      },
      fr: {
        subtitle: "Oméga-3, biotine et zinc pour moins de démangeaisons et une brillance de concours",
        answerCapsule: "Huile de saumon sauvage riche en EPA et DHA, biotine, zinc et vitamine E dans une bouchée au bacon. Soutient la barrière cutanée, apaise les démangeaisons saisonnières et révèle un pelage visiblement plus brillant.",
      },
      de: {
        subtitle: "Omega-3, Biotin und Zink für weniger Juckreiz und glänzendes Fell",
        answerCapsule: "Wildlachsöl reich an EPA und DHA, kombiniert mit Biotin, Zink und Vitamin E. Unterstützt die Hautbarriere, lindert saisonalen Juckreiz, reduziert übermäßiges Haaren und sorgt für sichtbar glänzenderes Fell.",
      },
      ja: {
        subtitle: "オメガ3＋ビオチン＋亜鉛で、かゆみの少ないツヤ被毛へ",
        answerCapsule: "EPA・DHA豊富な天然サーモンオイルに、ビオチン、亜鉛、ビタミンEを配合したベーコン風味のチュウ。皮膚バリアを支え、季節のかゆみや乾燥をケアし、数週間で目に見えるツヤへ。",
      },
    }),
  },
  {
    slug: "multivitamin-10-in-1-chews",
    name: "10-in-1 Multivitamin Chews",
    subtitle: "Ten daily bases covered in one chew — vitamins, joints, gut, skin and more",
    answerCapsule:
      "10-in-1 Multivitamin Chews cover ten daily health bases in one soft chew: essential vitamins and minerals, glucosamine for joints, probiotics for digestion, omega-3s for skin and coat, plus taurine for heart support. One chew a day builds a complete nutritional foundation for adult dogs.",
    description: `## One chew. Ten jobs.

Kibble covers survival; a multivitamin covers thriving. Our 10-in-1 combines the everyday essentials into one soft chew, so busy families don't have to juggle five jars.

**The ten bases:** multivitamins, minerals, joint support, digestion, skin & coat, immunity, heart, cognition, energy metabolism, and antioxidants.

## What makes it different

- Meaningful inclusion rates, not fairy-dust amounts
- Chelated minerals for better absorption
- Works alongside any complete diet
- The simplest possible daily routine: one chew, done`,
    species: "dog",
    format: "chew",
    colorKey: "moss",
    badges: "bestseller",
    featured: false,
    bestSeller: true,
    benefits: [
      { title: "Fills dietary gaps", body: "B-complex, vitamins A, D3, E and chelated minerals top up what bowls may miss.", icon: "layers" },
      { title: "Joints + gut + coat in one", body: "Glucosamine, probiotics and omega-3s at supportive daily baseline levels.", icon: "grid" },
      { title: "Heart & brain support", body: "Taurine and DHA support cardiac function and cognitive sharpness.", icon: "heart" },
      { title: "Routine made easy", body: "One tasty chew replaces a shelf of separate supplements.", icon: "check" },
    ],
    ingredients: [
      { name: "Vitamin blend (A, B-complex, D3, E)", amount: "Daily baseline", purpose: "Metabolic & immune foundation" },
      { name: "Chelated mineral blend", amount: "Daily baseline", purpose: "Zinc, iron, manganese absorption" },
      { name: "Glucosamine HCl", amount: "150 mg", purpose: "Everyday joint maintenance" },
      { name: "Bacillus coagulans", amount: "5 × 10⁸ CFU", purpose: "Digestive balance" },
      { name: "Fish oil omega-3", amount: "100 mg", purpose: "Skin, coat & brain" },
      { name: "Taurine", amount: "50 mg", purpose: "Heart muscle support" },
    ],
    feedingGuide: [
      { weight: "Up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–75 lbs", amount: "2 chews daily" },
      { weight: "Over 75 lbs", amount: "3 chews daily" },
    ],
    faqs: [
      { q: "Does my dog need a multivitamin on complete kibble?", a: "Complete diets meet minimums. A multivitamin adds supportive levels of joint, gut, skin and heart nutrients that minimums don't target — think foundation, not replacement." },
      { q: "Can I combine it with your targeted formulas?", a: "Yes. The 10-in-1 provides baselines; targeted formulas (like Hip & Joint) add therapeutic-level support. Avoid doubling more than two glucosamine products." },
      { q: "Is it suitable for puppies?", a: "It is formulated for adult maintenance. For puppies under 12 months, ask your vet before adding any multivitamin." },
      { q: "Why chews instead of tablets?", a: "Compliance. A chew your dog begs for gets fed every day — a tablet hidden in cheese gets skipped." },
    ],
    images: ["/products/multivitamin-10-in-1-chews.png"],
    variants: [
      { name: "90 chews", sku: "EP-MLT-90", priceCents: 2299, compareAtCents: 2799, isDefault: true },
      { name: "180 chews", sku: "EP-MLT-180", priceCents: 3899 },
    ],
    collections: ["daily-essentials", "dogs"],
    translations: JSON.stringify({
      es: {
        subtitle: "Diez bases diarias en un solo snack: vitaminas, articulaciones, digestión, piel y más",
        answerCapsule: "Cubren diez bases diarias en un snack: vitaminas y minerales esenciales, glucosamina, probióticos, omega-3 y taurina. Un snack al día construye una base nutricional completa para perros adultos.",
      },
      fr: {
        subtitle: "Dix bases quotidiennes en une bouchée : vitamines, articulations, digestion, peau et plus",
        answerCapsule: "Dix bases quotidiennes en une bouchée : vitamines et minéraux essentiels, glucosamine, probiotiques, oméga-3 et taurine. Une bouchée par jour pose une fondation nutritionnelle complète pour chiens adultes.",
      },
      de: {
        subtitle: "Zehn tägliche Grundlagen in einem Chew — Vitamine, Gelenke, Darm, Haut und mehr",
        answerCapsule: "Zehn Gesundheitsgrundlagen in einem Chew: essenzielle Vitamine und Mineralien, Glucosamin, Probiotika, Omega-3 und Taurin. Ein Chew täglich schafft ein komplettes Nährstofffundament für erwachsene Hunde.",
      },
      ja: {
        subtitle: "ビタミン・関節・おなか・皮膚など、毎日の10の基本をこれ1粒で",
        answerCapsule: "必須ビタミン・ミネラル、グルコサミン、乳酸菌、オメガ3、タウリンなど10の健康基盤を1粒に。1日1粒で成犬の栄養土台をつくります。",
      },
    }),
  },
  {
    slug: "calming-chews",
    name: "Calming Chews",
    subtitle: "L-theanine + chamomile calm for storms, travel and alone time — without drowsiness",
    answerCapsule:
      "Calming Chews blend 100 mg L-theanine with tryptophan, chamomile, valerian root and GABA in a peanut-butter flavored soft chew. The formula promotes relaxation during fireworks, thunderstorms, travel, grooming, boarding and daily alone time — supporting calm behavior without sedation.",
    description: `## Calm, not sedated

Whether it's the 4th of July, a thunderstorm, a car ride or the everyday 9-to-5 alone stretch, anxious energy has the same chemistry. Our calming blend supports the neurotransmitters of relaxation — so your dog stays calm and still themselves.

**Who it's for:** noise-phobic dogs, separation whiners, restless boarders, travel shakers and rescue dogs settling into new homes.

## When to feed

- Daily for general anxious tendencies
- 30–60 minutes before a known trigger (fireworks, car ride, vet)
- Double serving allowed on high-stress days (see label)`,
    species: "dog",
    format: "chew",
    colorKey: "plum",
    badges: "vet-informed",
    featured: true,
    bestSeller: false,
    benefits: [
      { title: "Promotes relaxation", body: "L-theanine supports alpha-brain-wave activity — the calm-but-alert state.", icon: "cloud-moon" },
      { title: "Serotonin building blocks", body: "Tryptophan is the dietary precursor of serotonin, the mood-balance neurotransmitter.", icon: "sun" },
      { title: "Botanical comfort", body: "Chamomile and valerian have centuries of use for gentle nervous-system support.", icon: "leaf" },
      { title: "No zombie mode", body: "Supports composure without sedation — your dog stays playful and present.", icon: "smile" },
    ],
    ingredients: [
      { name: "L-theanine", amount: "100 mg", purpose: "Calm-alert brain state" },
      { name: "L-tryptophan", amount: "150 mg", purpose: "Serotonin precursor" },
      { name: "Chamomile extract", amount: "100 mg", purpose: "Gentle botanical relaxation" },
      { name: "Valerian root", amount: "50 mg", purpose: "Eases nervous tension" },
      { name: "GABA", amount: "50 mg", purpose: "Inhibitory neurotransmitter support" },
    ],
    feedingGuide: [
      { weight: "Up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–50 lbs", amount: "2 chews daily" },
      { weight: "Over 50 lbs", amount: "3 chews daily" },
    ],
    faqs: [
      { q: "How long before an event should I give a chew?", a: "Feed 30–60 minutes before a known trigger like fireworks or a car ride. For general anxiety, daily feeding builds a steadier baseline over 2–4 weeks." },
      { q: "Will it make my dog sleepy?", a: "No. L-theanine promotes a calm-but-alert state rather than sedation. Some dogs nap more simply because they're finally relaxed." },
      { q: "Is it safe with long-term daily use?", a: "Yes, it's designed for everyday feeding. For severe or worsening anxiety, pair nutrition with training and consult a veterinary behaviorist." },
      { q: "Can it replace prescription anxiety medication?", a: "No. Never stop prescriptions without your vet. Many families use calming chews alongside behavior plans as gentle nutritional support." },
    ],
    images: ["/products/calming-chews.png"],
    variants: [
      { name: "60 chews", sku: "EP-CLM-60", priceCents: 2199, isDefault: true },
      { name: "120 chews", sku: "EP-CLM-120", priceCents: 3699, compareAtCents: 4399 },
    ],
    collections: ["calming", "dogs"],
    translations: JSON.stringify({
      es: {
        subtitle: "Calma con L-teanina y manzanilla para tormentas, viajes y soledad, sin somnolencia",
        answerCapsule: "Mezclan 100 mg de L-teanina con triptófano, manzanilla, valeriana y GABA. Promueven la relajación durante fuegos artificiales, tormentas, viajes y tiempo a solas, sin sedar.",
      },
      fr: {
        subtitle: "L-théanine + camomille pour l'orage, les trajets et la solitude — sans somnolence",
        answerCapsule: "100 mg de L-théanine avec tryptophane, camomille, valériane et GABA. Favorise la détente pendant feux d'artifice, orages, trajets et absences — le calme sans sédation.",
      },
      de: {
        subtitle: "L-Theanin + Kamille für Gewitter, Reisen und Alleinsein — ohne Müdigkeit",
        answerCapsule: "100 mg L-Theanin mit Tryptophan, Kamille, Baldrian und GABA im weichen Chew. Fördert Entspannung bei Feuerwerk, Gewitter, Reisen und Alleinsein — Gelassenheit ohne Sedierung.",
      },
      ja: {
        subtitle: "L-テアニン＋カモミールで、花火・移動・お留守番の不安をやさしくケア",
        answerCapsule: "L-テアニン100mgにトリプトファン、カモミール、バレリアン、GABAを配合。花火や雷、移動、お留守番時のリラックスを、眠らせずにサポートします。",
      },
    }),
  },
  {
    slug: "allergy-immune-chews",
    name: "Allergy & Immune Chews",
    subtitle: "Quercetin + colostrum skin-barrier support for itchy seasons",
    answerCapsule:
      "Allergy & Immune Chews combine quercetin — often called nature's antihistamine — with bovine colostrum, postbiotics and omega-3s in a lamb-flavored soft chew. The formula supports the skin barrier, a balanced immune response and everyday comfort for dogs prone to seasonal and environmental itch.",
    description: `## For the dogs who scratch through spring

Pollen, dust mites, grass — itchy seasons hit some dogs harder. This formula approaches the itch from the inside: quercetin supports a normal histamine response, colostrum trains balanced immunity, and the skin barrier gets the fatty acids it needs.

**Who it's for:** paw-lickers, belly-scratchers, seasonal shedders with pink skin, and breeds prone to sensitivities (Frenchies, Westies, Goldens, we see you).

## What makes it different

- Quercetin + bromelain pairing for absorption
- Colostrum and postbiotics for gut-immune training
- No chicken protein — lamb flavor for sensitive dogs`,
    species: "dog",
    format: "chew",
    colorKey: "teal",
    badges: "new,vet-informed",
    featured: false,
    bestSeller: false,
    benefits: [
      { title: "Normal histamine response", body: "Quercetin supports mast-cell stability during pollen-heavy months.", icon: "shield" },
      { title: "Immune training", body: "Colostrum antibodies and postbiotics support balanced, not overreactive, immunity.", icon: "activity" },
      { title: "Skin barrier repair", body: "Omega-3s feed the lipid layer that keeps allergens out.", icon: "layers" },
      { title: "Sensitive-dog friendly", body: "Lamb flavor, no chicken, no artificial colors.", icon: "check" },
    ],
    ingredients: [
      { name: "Quercetin", amount: "150 mg", purpose: "Natural histamine-response support" },
      { name: "Bovine colostrum", amount: "200 mg", purpose: "Immune-training antibodies" },
      { name: "Postbiotic blend", amount: "100 mg", purpose: "Gut-immune axis balance" },
      { name: "Fish oil omega-3", amount: "150 mg", purpose: "Skin barrier lipids" },
      { name: "Bromelain", amount: "25 mg", purpose: "Supports quercetin absorption" },
    ],
    feedingGuide: [
      { weight: "Up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–75 lbs", amount: "2 chews daily" },
      { weight: "Over 75 lbs", amount: "3 chews daily" },
    ],
    faqs: [
      { q: "When should I start before allergy season?", a: "Start 4–6 weeks before your dog's known itchy season. Immune-support nutrients work best building up in advance rather than reacting after symptoms appear." },
      { q: "Will this cure my dog's allergies?", a: "No supplement cures allergies. This formula supports normal immune balance and skin comfort. Dogs with diagnosed allergic disease should follow their veterinarian's treatment plan." },
      { q: "Can I use it with Apoquel or Cytopoint?", a: "Many families use nutritional support alongside prescriptions — confirm with your vet for your dog's specific plan." },
      { q: "How is it different from the Skin & Coat chews?", a: "Skin & Coat focuses on coat quality and shine; Allergy & Immune targets the immune side of seasonal itch. Itchy-but-dull dogs sometimes rotate both." },
    ],
    images: ["/products/allergy-immune-chews.png"],
    variants: [
      { name: "90 chews", sku: "EP-ALG-90", priceCents: 2599, isDefault: true },
      { name: "180 chews", sku: "EP-ALG-180", priceCents: 4399 },
    ],
    collections: ["immunity-allergy", "skin-coat", "dogs"],
    translations: JSON.stringify({
      es: {
        subtitle: "Quercetina + calostro para la barrera cutánea en temporadas de picor",
        answerCapsule: "Combinan quercetina —el antihistamínico de la naturaleza— con calostro bovino, postbióticos y omega-3. Apoyan la barrera cutánea y una respuesta inmune equilibrada en perros propensos al picor estacional.",
      },
      fr: {
        subtitle: "Quercétine + colostrum pour la barrière cutanée pendant les saisons qui grattent",
        answerCapsule: "Quercétine — l'antihistaminique de la nature — avec colostrum bovin, postbiotiques et oméga-3. Soutient la barrière cutanée et une réponse immunitaire équilibrée chez les chiens sujets aux démangeaisons saisonnières.",
      },
      de: {
        subtitle: "Quercetin + Kolostrum für die Hautbarriere in juckenden Jahreszeiten",
        answerCapsule: "Quercetin — das Antihistamin der Natur — mit Rinderkolostrum, Postbiotika und Omega-3. Unterstützt Hautbarriere und ein ausgewogenes Immunsystem bei Hunden mit saisonalem Juckreiz.",
      },
      ja: {
        subtitle: "ケルセチン＋初乳で、かゆみの季節の皮膚バリアをサポート",
        answerCapsule: "「天然の抗ヒスタミン」ケルセチンに、初乳、ポストバイオティクス、オメガ3を配合。季節性のかゆみが出やすい犬の皮膚バリアとバランスのとれた免疫をサポートします。",
      },
    }),
  },
  {
    slug: "flea-tick-defense-chews",
    name: "Flea & Tick Defense Chews",
    subtitle: "Brewer's yeast + B-vitamin natural defense support, chemical-free",
    answerCapsule:
      "Flea & Tick Defense Chews use brewer's yeast, flaxseed and B-vitamins (B1, B6, B12) in a chicken-flavored soft chew to support the skin's natural defenses during flea and tick season. A gentle, chemical-free nutritional layer that complements — not replaces — your vet's parasite prevention plan.",
    description: `## A nutritional layer of defense

Parasites choose the easiest host. Skin fortified with B-vitamins and healthy fats is a less inviting landscape. Our defense chew builds that landscape daily — no harsh chemicals, no greasy topicals on the couch.

**Important:** this is nutritional support, not a pesticide. In high-risk areas, keep your veterinarian's prevention plan and use this as a complementary layer.

## What makes it different

- Classic brewer's yeast + thiamine approach, done at proper dosage
- Omega oils support the skin barrier ticks probe first
- Zero harsh chemicals — safe around kids' hugs`,
    species: "dog",
    format: "chew",
    colorKey: "forest",
    badges: "",
    featured: false,
    bestSeller: false,
    benefits: [
      { title: "Supports natural defenses", body: "Brewer's yeast and thiamine support the skin environment during peak season.", icon: "shield" },
      { title: "Skin barrier nutrition", body: "Flaxseed omegas keep the coat and skin layer resilient.", icon: "layers" },
      { title: "Chemical-free layer", body: "A gentle addition for families cautious about extra pesticides.", icon: "leaf" },
      { title: "Easy season routine", body: "Feed daily through spring and summer months.", icon: "sun" },
    ],
    ingredients: [
      { name: "Brewer's yeast", amount: "500 mg", purpose: "B-vitamin rich defense support" },
      { name: "Flaxseed", amount: "200 mg", purpose: "Skin barrier omegas" },
      { name: "Vitamin B1 (thiamine)", amount: "50 mg", purpose: "Traditional skin-defense nutrient" },
      { name: "Vitamins B6 & B12", amount: "Daily baseline", purpose: "Skin metabolism" },
      { name: "Nettle leaf", amount: "50 mg", purpose: "Botanical skin comfort" },
    ],
    feedingGuide: [
      { weight: "Up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–75 lbs", amount: "2 chews daily" },
      { weight: "Over 75 lbs", amount: "3 chews daily" },
    ],
    faqs: [
      { q: "Does this replace my dog's flea medication?", a: "No. It is a nutritional support layer, not a pesticide. In high-risk regions or active infestations, follow your veterinarian's prevention protocol." },
      { q: "When should I feed it?", a: "Start 2–4 weeks before flea season and feed daily through the warm months for continuous support." },
      { q: "Is brewer's yeast safe?", a: "Yes for most dogs. Skip it if your dog has a diagnosed yeast allergy, and introduce gradually over the first week." },
      { q: "Why no garlic?", a: "Garlic's safety margin in dogs is narrow and dose-dependent, so we deliberately formulate without it." },
    ],
    images: ["/products/flea-tick-defense-chews.png"],
    variants: [
      { name: "120 chews", sku: "EP-FLT-120", priceCents: 2299, isDefault: true },
      { name: "240 chews", sku: "EP-FLT-240", priceCents: 3899 },
    ],
    collections: ["immunity-allergy", "dogs"],
    translations: JSON.stringify({
      es: {
        subtitle: "Levadura de cerveza + vitaminas B: defensa natural sin químicos",
        answerCapsule: "Usan levadura de cerveza, linaza y vitaminas B para apoyar las defensas naturales de la piel en temporada de pulgas y garrapatas. Una capa nutricional suave que complementa el plan antiparasitario de tu veterinario.",
      },
      fr: {
        subtitle: "Levure de bière + vitamines B : une défense naturelle sans produits chimiques",
        answerCapsule: "Levure de bière, lin et vitamines B pour soutenir les défenses naturelles de la peau pendant la saison des puces et tiques. Une couche nutritionnelle douce qui complète le plan antiparasitaire de votre vétérinaire.",
      },
      de: {
        subtitle: "Bierhefe + B-Vitamine: natürliche Abwehrunterstützung ohne Chemie",
        answerCapsule: "Bierhefe, Leinsamen und B-Vitamine unterstützen die natürlichen Abwehrmechanismen der Haut in der Floh- und Zeckensaison. Eine sanfte Ergänzung zum Präventionsplan Ihrer Tierarztpraxis.",
      },
      ja: {
        subtitle: "ビール酵母＋ビタミンB群の、ケミカルフリーな防御サポート",
        answerCapsule: "ビール酵母、亜麻仁、ビタミンB群配合。ノミ・マダニの季節に皮膚本来の防御力を栄養面から支えます。獣医師の予防プランを置き換えるものではなく、補完する製品です。",
      },
    }),
  },
  {
    slug: "nad-longevity-chews",
    name: "NAD+ Longevity Chews",
    subtitle: "NMN + DHA + MCT cellular-energy support for the golden years",
    answerCapsule:
      "NAD+ Longevity Chews pair NMN — the precursor of the cellular-energy molecule NAD+ — with DHA, MCT oil, CoQ10 and antioxidants. The formula supports cognitive sharpness, cellular energy and healthy aging in senior dogs, targeting the slow-down that families often mistake for 'just getting old'.",
    description: `## Aging is chemistry. Support the chemistry.

NAD+ — the molecule every cell uses to produce energy — declines steeply with age. The result reads like a senior-dog checklist: afternoon naps that swallow the day, staring at the wrong side of the door, slower recall of names and routes.

Our longevity formula supports NAD+ levels with NMN, feeds the aging brain with DHA and MCT ketones, and rounds it out with mitochondrial antioxidants.

**Who it's for:** dogs 7+ years, earlier for giant breeds; any senior showing napping, pacing, or "off" evenings.

## What makes it different

- NMN at a meaningful dose, stabilized in cold-press extrusion
- MCT provides the alternative brain fuel studied in senior dogs
- CoQ10 + resveratrol complete the mitochondrial stack`,
    species: "dog",
    format: "chew",
    colorKey: "charcoal",
    badges: "new,vet-informed",
    featured: true,
    bestSeller: false,
    benefits: [
      { title: "Cellular energy support", body: "NMN supports NAD+ levels — the energy currency that declines with age.", icon: "zap" },
      { title: "Brain fuel alternative", body: "MCT ketones offer aging brains an energy source they can still use efficiently.", icon: "brain" },
      { title: "Cognitive sharpness", body: "DHA supports memory, learning and nighttime orientation.", icon: "moon" },
      { title: "Antioxidant defense", body: "CoQ10 and resveratrol support mitochondria against age-related oxidative stress.", icon: "shield" },
    ],
    ingredients: [
      { name: "NMN (β-nicotinamide mononucleotide)", amount: "125 mg", purpose: "NAD+ precursor" },
      { name: "MCT oil powder", amount: "300 mg", purpose: "Ketone brain fuel" },
      { name: "DHA (algae)", amount: "100 mg", purpose: "Cognitive support" },
      { name: "CoQ10", amount: "30 mg", purpose: "Mitochondrial antioxidant" },
      { name: "Resveratrol", amount: "25 mg", purpose: "Healthy-aging polyphenol" },
      { name: "Phosphatidylserine", amount: "25 mg", purpose: "Neuronal membrane support" },
    ],
    feedingGuide: [
      { weight: "Up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–60 lbs", amount: "2 chews daily" },
      { weight: "Over 60 lbs", amount: "3 chews daily" },
    ],
    faqs: [
      { q: "At what age should I start?", a: "Around age 7 for most breeds, age 5–6 for giant breeds. Starting at the first subtle signs — longer naps, hesitation at stairs at night — gives nutrition the best runway." },
      { q: "My senior dog paces at night. Can this help?", a: "Nighttime restlessness is a commonly reported concern in aging dogs. The formula supports cognitive function and normal sleep-wake rhythms; persistent changes deserve a vet visit to rule out pain or illness." },
      { q: "Is NMN safe for dogs?", a: "NMN is a naturally occurring NAD+ precursor studied for healthy aging. Our inclusion follows supplement-grade safety margins; consult your vet if your dog has a medical condition." },
      { q: "How long until I notice anything?", a: "Cellular-level support builds slowly. Families typically report more engaged evenings and steadier routines after 4–8 weeks of daily feeding." },
    ],
    images: ["/products/nad-longevity-chews.png"],
    variants: [
      { name: "60 chews", sku: "EP-NAD-60", priceCents: 3299, isDefault: true },
      { name: "120 chews", sku: "EP-NAD-120", priceCents: 5699, compareAtCents: 6599 },
    ],
    collections: ["senior-cognitive", "dogs"],
    translations: JSON.stringify({
      es: {
        subtitle: "NMN + DHA + MCT: energía celular para los años dorados",
        answerCapsule: "Combinan NMN —precursor del NAD+— con DHA, aceite MCT, CoQ10 y antioxidantes. Apoyan la agudeza cognitiva, la energía celular y el envejecimiento saludable de perros senior.",
      },
      fr: {
        subtitle: "NMN + DHA + MCT : l'énergie cellulaire des belles années",
        answerCapsule: "NMN — précurseur du NAD+ — avec DHA, huile MCT, CoQ10 et antioxydants. Soutient la vivacité cognitive, l'énergie cellulaire et un vieillissement en bonne santé chez les chiens seniors.",
      },
      de: {
        subtitle: "NMN + DHA + MCT: Zellenergie für die goldenen Jahre",
        answerCapsule: "NMN — der Vorläufer des Zellenergie-Moleküls NAD+ — mit DHA, MCT-Öl, CoQ10 und Antioxidantien. Unterstützt geistige Klarheit, Zellenergie und gesundes Altern bei Senior-Hunden.",
      },
      ja: {
        subtitle: "NMN＋DHA＋MCTで、シニア期の細胞エネルギーをサポート",
        answerCapsule: "細胞エネルギー分子NAD+の前駆体NMNに、DHA、MCTオイル、CoQ10、抗酸化成分を配合。シニア犬の認知の冴え、細胞エネルギー、健やかなエイジングをサポートします。",
      },
    }),
  },
];
