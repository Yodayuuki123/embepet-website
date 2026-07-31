// 占位产品线：按恩贝宠典型品类构建，真实产品到位后在后台替换
type SeedVariant = {
  name: string;
  sku: string;
  priceCents: number;
  compareAtCents?: number;
  stock?: number;
  isDefault?: boolean;
};

export type SeedProduct = {
  slug: string;
  name: string;
  subtitle: string;
  answerCapsule: string;
  description: string;
  species: "dog" | "cat" | "dog_cat";
  format: "chew" | "powder" | "oil" | "paste";
  colorKey: string;
  badges: string;
  benefits: { title: string; body: string; icon: string }[];
  ingredients: { name: string; amount: string; purpose: string }[];
  feedingGuide: { weight: string; amount: string }[];
  faqs: { q: string; a: string }[];
  featured: boolean;
  bestSeller: boolean;
  collections: string[];
  variants: SeedVariant[];
  seoTitle: string;
  seoDescription: string;
};

export const products: SeedProduct[] = [
  {
    slug: "hip-joint-advanced-chews",
    name: "Hip & Joint Advanced Chews",
    subtitle: "Glucosamine + Green-Lipped Mussel mobility support",
    answerCapsule:
      "Hip & Joint Advanced Chews combine 450 mg glucosamine HCl, 150 mg chondroitin, 250 mg MSM, and 100 mg green-lipped mussel per chew to support joint cartilage, flexibility, and everyday mobility in dogs of all breeds and ages.",
    description: `Every fetch, every stair, every happy zoomie depends on healthy joints. Our most advanced mobility formula pairs the classic glucosamine–chondroitin–MSM trio with green-lipped mussel from New Zealand, a whole-food source of omega-3s and glycosaminoglycans.

**Why dog parents choose it**

- Formulated by veterinary nutritionists at clinically informed inclusion levels
- Cold-pressed chews preserve ingredient integrity — no high-heat extrusion
- Chicken-liver flavor dogs take like a treat, not a chore

Give it daily and keep the tail wagging through every season of life.`,
    species: "dog",
    format: "chew",
    colorKey: "forest",
    badges: "bestseller,vet-formulated",
    benefits: [
      { title: "Supports cartilage & cushioning", body: "Glucosamine and chondroitin are building blocks of healthy cartilage and joint fluid.", icon: "Bone" },
      { title: "Promotes flexibility", body: "MSM provides bioavailable sulfur that supports connective tissue and normal recovery after exercise.", icon: "Activity" },
      { title: "Whole-food omega boost", body: "Green-lipped mussel adds natural EPA, DHA and ETA fatty acids that support joint comfort.", icon: "Waves" },
      { title: "Senior-friendly", body: "Gentle daily support that helps aging dogs keep up with their favorite routines.", icon: "Heart" },
    ],
    ingredients: [
      { name: "Glucosamine HCl (shellfish)", amount: "450 mg", purpose: "Cartilage building block" },
      { name: "Methylsulfonylmethane (MSM)", amount: "250 mg", purpose: "Connective tissue support" },
      { name: "Chondroitin Sulfate", amount: "150 mg", purpose: "Joint fluid & cushioning" },
      { name: "Green-Lipped Mussel", amount: "100 mg", purpose: "Natural omega-3s & GAGs" },
      { name: "Turmeric (95% curcuminoids)", amount: "50 mg", purpose: "Antioxidant support" },
      { name: "Hyaluronic Acid", amount: "10 mg", purpose: "Joint lubrication support" },
    ],
    feedingGuide: [
      { weight: "Up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–75 lbs", amount: "2 chews daily" },
      { weight: "76 lbs and over", amount: "3 chews daily" },
    ],
    faqs: [
      { q: "How long until I notice a difference?", a: "Most pet parents report changes in activity and ease of movement after 4–6 weeks of consistent daily use, as joint-support ingredients build up gradually in the body." },
      { q: "Can I give it with food?", a: "Yes. The chews can be given as a treat or crumbled over meals. Giving them with food is gentler for dogs with sensitive stomachs." },
      { q: "Is it safe for long-term daily use?", a: "Yes. The formula uses ingredient levels aligned with veterinary guidance for ongoing daily support. Consult your veterinarian for dogs with existing medical conditions." },
      { q: "My dog is young — is joint support pointless?", a: "Large breeds and highly active dogs can benefit from early support, since cartilage maintenance is easier than repair. Many owners start at 1–2 years for at-risk breeds." },
      { q: "Does it contain shellfish?", a: "Yes — glucosamine is derived from shellfish and the formula includes green-lipped mussel. Avoid it if your dog has a known shellfish sensitivity." },
    ],
    featured: true,
    bestSeller: true,
    collections: ["hip-joint", "dogs"],
    variants: [
      { name: "90 chews", sku: "EMB-HJ-90", priceCents: 2999, compareAtCents: 3599, isDefault: true },
      { name: "180 chews", sku: "EMB-HJ-180", priceCents: 4999, compareAtCents: 6499 },
    ],
    seoTitle: "Hip & Joint Advanced Chews for Dogs — Glucosamine + Green-Lipped Mussel",
    seoDescription:
      "Vet-formulated dog joint chews with 450mg glucosamine, chondroitin, MSM and green-lipped mussel. Supports mobility, flexibility and joint comfort. Free US shipping over $49.",
  },
  {
    slug: "gut-health-probiotic-chews",
    name: "Gut Health Probiotic Chews",
    subtitle: "5 Billion CFU probiotics + pumpkin prebiotic fiber",
    answerCapsule:
      "Gut Health Probiotic Chews deliver 5 billion CFU across six probiotic strains plus pumpkin and inulin prebiotics per chew, supporting balanced gut flora, firm stools, and comfortable digestion for both dogs and cats.",
    description: `A balanced gut shows up everywhere: better stools, calmer tummies, fresher breath, brighter energy. Each duck-flavored chew pairs six shelf-stable probiotic strains with the prebiotic fibers they feed on, so good bacteria arrive alive — and thrive.

**Built for real digestive life**

- Helps maintain normal stool quality during diet changes, travel and boarding
- Supports pets with occasional gas, gurgling or grass-eating habits
- Shelf-stable strains, no refrigeration needed`,
    species: "dog_cat",
    format: "chew",
    colorKey: "clay",
    badges: "bestseller",
    benefits: [
      { title: "Balances gut flora", body: "Six probiotic strains including B. coagulans and L. acidophilus support a healthy microbiome.", icon: "Leaf" },
      { title: "Firms things up", body: "Pumpkin fiber supports normal stool consistency through everyday diet hiccups.", icon: "CircleCheck" },
      { title: "Feeds the good guys", body: "Inulin prebiotic gives beneficial bacteria the fuel to colonize and multiply.", icon: "Sprout" },
      { title: "Occasional-upset ally", body: "Great for travel, boarding, and food transitions that can unsettle digestion.", icon: "Luggage" },
    ],
    ingredients: [
      { name: "Probiotic Blend (6 strains)", amount: "5 Billion CFU", purpose: "Gut flora balance" },
      { name: "Pumpkin Powder", amount: "200 mg", purpose: "Prebiotic fiber & stool support" },
      { name: "Inulin (from chicory root)", amount: "100 mg", purpose: "Feeds beneficial bacteria" },
      { name: "Ginger Root", amount: "50 mg", purpose: "Digestive comfort" },
      { name: "Papaya (source of papain)", amount: "50 mg", purpose: "Enzyme digestion support" },
    ],
    feedingGuide: [
      { weight: "Cats & dogs up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–75 lbs", amount: "2 chews daily" },
      { weight: "76 lbs and over", amount: "3 chews daily" },
    ],
    faqs: [
      { q: "When should I expect results?", a: "Stool quality changes are often visible within 1–2 weeks. A full microbiome adjustment typically takes 4 weeks of daily use." },
      { q: "Do the chews need refrigeration?", a: "No. We use shelf-stable spore-forming strains that survive room temperature storage and stomach acid." },
      { q: "Can cats really take the same chew?", a: "Yes — the strains and dosing suit both species. For picky cats, crumble one chew over wet food." },
      { q: "Can I give it alongside antibiotics?", a: "Probiotics are commonly given during and after antibiotic courses — space them a few hours apart and confirm with your veterinarian." },
      { q: "What if my pet has a chicken allergy?", a: "This formula is duck-flavored and chicken-free, making it a common pick for poultry-sensitive pets." },
    ],
    featured: true,
    bestSeller: true,
    collections: ["digestive-health", "dogs", "cats"],
    variants: [
      { name: "90 chews", sku: "EMB-GH-90", priceCents: 2699, compareAtCents: 3199, isDefault: true },
      { name: "180 chews", sku: "EMB-GH-180", priceCents: 4599 },
    ],
    seoTitle: "Probiotic Chews for Dogs & Cats — 5 Billion CFU + Pumpkin",
    seoDescription:
      "Shelf-stable probiotic chews with 6 strains, pumpkin and inulin. Supports gut flora, firm stools and digestive comfort for dogs and cats.",
  },
  {
    slug: "omega-3-wild-fish-oil",
    name: "Omega-3 Wild Fish Oil",
    subtitle: "Triple-strength EPA & DHA skin and coat support",
    answerCapsule:
      "Omega-3 Wild Fish Oil provides 800 mg combined EPA and DHA per teaspoon from wild-caught anchovies and sardines, supporting soft skin, a glossy coat, normal shedding, and heart, brain, and joint health in dogs and cats.",
    description: `One pump over dinner is the easiest upgrade in pet nutrition. Sourced from wild-caught anchovies and sardines — small fish, short lifespans, minimal accumulation — then molecularly distilled for purity and freshness.

**The daily glow-up**

- Supports itchy, flaky skin from the inside out
- Promotes a soft, glossy, photo-ready coat
- EPA & DHA also support heart, brain, eye and joint health
- Third-party tested for heavy metals and oxidation`,
    species: "dog_cat",
    format: "oil",
    colorKey: "amber",
    badges: "vet-formulated",
    benefits: [
      { title: "Skin barrier support", body: "EPA supports the skin's natural moisture barrier and calms seasonal itchiness.", icon: "Droplets" },
      { title: "Show-ring shine", body: "DHA and omega-6s promote coat softness, thickness and shine within weeks.", icon: "Sparkles" },
      { title: "Whole-body omegas", body: "The same fatty acids support heart rhythm, kidney function and cognitive health.", icon: "HeartPulse" },
      { title: "Purity you can verify", body: "Every batch is molecularly distilled and third-party tested; certificates on request.", icon: "BadgeCheck" },
    ],
    ingredients: [
      { name: "Wild Anchovy & Sardine Oil", amount: "1 tsp (4.5 g)", purpose: "Omega-3 base oil" },
      { name: "EPA (eicosapentaenoic acid)", amount: "480 mg", purpose: "Skin & normal inflammatory response" },
      { name: "DHA (docosahexaenoic acid)", amount: "320 mg", purpose: "Brain, eye & coat support" },
      { name: "Mixed Tocopherols (Vitamin E)", amount: "10 IU", purpose: "Natural freshness preservation" },
    ],
    feedingGuide: [
      { weight: "Cats & dogs up to 15 lbs", amount: "1/2 tsp daily" },
      { weight: "16–50 lbs", amount: "1 tsp daily" },
      { weight: "51 lbs and over", amount: "2 tsp daily" },
    ],
    faqs: [
      { q: "Will it make my pet's food smell fishy?", a: "There is a mild ocean scent — most pets consider it a feature, not a bug. It disappears into wet food almost entirely." },
      { q: "How should I store it after opening?", a: "Refrigerate after opening and use within 90 days. The pump top limits air exposure to keep the oil fresh." },
      { q: "Fish oil vs. salmon oil — what's the difference?", a: "Anchovies and sardines are lower on the food chain than salmon, which means naturally lower contaminant risk and higher EPA/DHA concentration per gram." },
      { q: "Can it replace a skin medication?", a: "No. Fish oil is nutritional support for normal skin function, not a treatment. Talk to your vet about persistent skin issues." },
      { q: "Is the fishery sustainable?", a: "Yes — sourced from Friend of the Sea certified Pacific fisheries with full batch traceability." },
    ],
    featured: true,
    bestSeller: false,
    collections: ["skin-coat", "dogs", "cats"],
    variants: [
      { name: "8 oz bottle", sku: "EMB-O3-8", priceCents: 2199, isDefault: true },
      { name: "16 oz bottle", sku: "EMB-O3-16", priceCents: 3499, compareAtCents: 4399 },
    ],
    seoTitle: "Omega-3 Wild Fish Oil for Dogs & Cats — 800mg EPA/DHA",
    seoDescription:
      "Triple-strength omega-3 fish oil from wild anchovies and sardines. Supports itchy skin, shiny coats, heart and brain health. Third-party tested.",
  },
  {
    slug: "calming-chews",
    name: "Calming Chews",
    subtitle: "L-Theanine + chamomile relaxation without drowsiness",
    answerCapsule:
      "Calming Chews blend 100 mg L-theanine, 120 mg chamomile, and 30 mg valerian root per chew to promote relaxation during storms, fireworks, travel, grooming, and alone time — helping dogs stay settled without sedation.",
    description: `Thunder rolls in, suitcases come out, the doorbell rings — some moments are just harder for dogs. These peanut-butter flavored chews promote a calm, settled state while keeping your dog fully alert and themselves.

**Designed for high-stress moments**

- Give 30–60 minutes before a known trigger, or daily for generally anxious pups
- Non-drowsy botanical blend — no melatonin hangover option available
- Works beautifully alongside training and enrichment`,
    species: "dog",
    format: "chew",
    colorKey: "plum",
    badges: "new",
    benefits: [
      { title: "Settles storm stress", body: "L-theanine promotes alpha-wave relaxation, supporting calm focus during loud events.", icon: "CloudLightning" },
      { title: "Travel companion", body: "Helps dogs settle in crates, cars and unfamiliar places without sedation.", icon: "Car" },
      { title: "Botanical, not knockout", body: "Chamomile and passionflower relax without making your dog groggy.", icon: "Flower2" },
      { title: "Everyday steadiness", body: "Daily use supports dogs with generally nervous or reactive temperaments.", icon: "Anchor" },
    ],
    ingredients: [
      { name: "L-Theanine", amount: "100 mg", purpose: "Calm, focused relaxation" },
      { name: "Chamomile Flower", amount: "120 mg", purpose: "Gentle nervous system support" },
      { name: "Passionflower", amount: "50 mg", purpose: "Relaxation support" },
      { name: "Valerian Root", amount: "30 mg", purpose: "Settling support for acute stress" },
      { name: "L-Tryptophan", amount: "25 mg", purpose: "Serotonin precursor" },
      { name: "Thiamine (Vitamin B1)", amount: "10 mg", purpose: "Nervous system nutrition" },
    ],
    feedingGuide: [
      { weight: "Up to 25 lbs", amount: "1 chew" },
      { weight: "26–75 lbs", amount: "2 chews" },
      { weight: "76 lbs and over", amount: "3 chews" },
    ],
    faqs: [
      { q: "How fast does it work?", a: "For situational stress, give chews 30–60 minutes before the trigger. For general anxiety support, daily use for 2–3 weeks builds the best baseline." },
      { q: "Will my dog act sedated?", a: "No. The blend promotes relaxation while keeping dogs alert — think 'settled on their bed', not 'out cold'." },
      { q: "Can I combine it with training?", a: "Absolutely — calming support works best alongside desensitization training, and many trainers recommend pairing the two." },
      { q: "Is it okay for daily long-term use?", a: "Yes, the botanical levels are designed for ongoing daily support. Check with your vet if your dog takes behavioral medication." },
      { q: "Why no melatonin?", a: "We skip melatonin so the chews relax without drowsiness — and so you can give them daytime or evening alike." },
    ],
    featured: false,
    bestSeller: false,
    collections: ["calming", "dogs"],
    variants: [
      { name: "60 chews", sku: "EMB-CA-60", priceCents: 2499, isDefault: true },
      { name: "120 chews", sku: "EMB-CA-120", priceCents: 4299 },
    ],
    seoTitle: "Calming Chews for Dogs — L-Theanine + Chamomile, Non-Drowsy",
    seoDescription:
      "Non-drowsy calming chews for dogs with L-theanine, chamomile and valerian. Support relaxation during storms, fireworks, travel and separation.",
  },
  {
    slug: "10-in-1-multivitamin-chews",
    name: "10-in-1 Multivitamin Chews",
    subtitle: "Complete daily nutrition in one bacon-flavored bite",
    answerCapsule:
      "10-in-1 Multivitamin Chews cover ten daily health areas — joints, gut, skin, coat, heart, brain, eyes, immunity, energy, and liver — combining 21 vitamins and minerals with glucosamine, probiotics, and omega-3s in one daily dog chew.",
    description: `One chew, ten bases covered. For healthy dogs who deserve an everyday edge, this is the daily foundation: a complete vitamin-mineral profile fused with functional levels of glucosamine, probiotics and omegas.

**Ten systems, one ritual**

Joints · Digestion · Skin · Coat · Heart · Brain · Eyes · Immunity · Energy · Liver

Perfect for kibble-fed dogs whose diets could use rounding out, and multi-dog households that want one jar instead of five.`,
    species: "dog",
    format: "chew",
    colorKey: "moss",
    badges: "bestseller,vet-formulated",
    benefits: [
      { title: "Full-spectrum coverage", body: "21 vitamins and minerals fill everyday gaps that kibble alone can leave open.", icon: "LayoutGrid" },
      { title: "Functional, not token", body: "Meaningful inclusions of glucosamine, probiotics and omega-3 — not fairy dust.", icon: "Gauge" },
      { title: "Every life stage", body: "From adolescent athletes to seasoned seniors, one formula scales by weight.", icon: "PawPrint" },
      { title: "Simplifies your shelf", body: "Replaces separate joint, gut and coat products for generally healthy dogs.", icon: "Package" },
    ],
    ingredients: [
      { name: "Vitamin & Mineral Blend", amount: "21 nutrients", purpose: "Daily nutritional foundation" },
      { name: "Glucosamine HCl", amount: "150 mg", purpose: "Joint maintenance" },
      { name: "Probiotic Blend", amount: "1 Billion CFU", purpose: "Digestive balance" },
      { name: "Fish Oil Powder (EPA/DHA)", amount: "100 mg", purpose: "Skin, coat & brain" },
      { name: "Milk Thistle", amount: "25 mg", purpose: "Liver support" },
      { name: "Taurine", amount: "50 mg", purpose: "Heart & eye support" },
    ],
    feedingGuide: [
      { weight: "Up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–75 lbs", amount: "2 chews daily" },
      { weight: "76 lbs and over", amount: "3 chews daily" },
    ],
    faqs: [
      { q: "Does my dog need a multivitamin on complete kibble?", a: "Complete diets meet minimums, but activity level, age and individual variation create gaps. A multivitamin provides everyday insurance at safe levels." },
      { q: "Can I give it with the Hip & Joint chews?", a: "Yes for most dogs — the combined glucosamine stays within typical daily support ranges. For seniors on multiple products, ask your vet." },
      { q: "Is it suitable for puppies?", a: "It's formulated for dogs 12 months and older. Puppies on complete puppy food generally don't need supplementation." },
      { q: "Any artificial colors or preservatives?", a: "None. The chews use natural bacon flavor, mixed tocopherols and rosemary extract for freshness." },
    ],
    featured: true,
    bestSeller: true,
    collections: ["daily-essentials", "dogs"],
    variants: [
      { name: "90 chews", sku: "EMB-MV-90", priceCents: 2799, compareAtCents: 3299, isDefault: true },
      { name: "180 chews", sku: "EMB-MV-180", priceCents: 4799 },
    ],
    seoTitle: "10-in-1 Dog Multivitamin Chews — Joints, Gut, Skin & More",
    seoDescription:
      "Daily 10-in-1 multivitamin chews for dogs with 21 vitamins, glucosamine, probiotics and omega-3s. One bacon-flavored chew covers ten health areas.",
  },
  {
    slug: "goat-milk-nutrition-powder",
    name: "Goat Milk Nutrition Powder",
    subtitle: "Gentle whole-food topper for puppies, kittens & seniors",
    answerCapsule:
      "Goat Milk Nutrition Powder is a gently dried whole goat milk topper fortified with colostrum, DHA, and probiotics. It supports hydration, digestion, and healthy weight in puppies, kittens, seniors, and picky eaters of both species.",
    description: `The original comfort food, reimagined for pets. Goat milk is naturally easier to digest than cow's milk — smaller fat globules, gentler proteins, less lactose — making it a beloved topper for tiny tummies and senior appetites alike.

**How families use it**

- Whisk into warm water as a hydrating milk drink
- Pour over kibble to win over picky eaters
- Support nursing mothers and weaning litters
- Add easy calories for underweight or recovering pets`,
    species: "dog_cat",
    format: "powder",
    colorKey: "oat",
    badges: "",
    benefits: [
      { title: "Gentle on tummies", body: "Naturally small fat globules and gentle proteins digest more easily than cow dairy.", icon: "Milk" },
      { title: "Colostrum boost", body: "Added bovine colostrum provides immunoglobulins that support immune health.", icon: "Shield" },
      { title: "Hydration helper", body: "Turns a bowl of water into a drink pets actually finish — great for cats.", icon: "GlassWater" },
      { title: "Picky-eater magic", body: "A dusting over kibble transforms mealtime refusals into clean bowls.", icon: "Utensils" },
    ],
    ingredients: [
      { name: "Whole Goat Milk Powder", amount: "4.8 g per scoop", purpose: "Digestible whole-food base" },
      { name: "Bovine Colostrum", amount: "100 mg", purpose: "Immunoglobulin support" },
      { name: "DHA (from algae)", amount: "20 mg", purpose: "Brain & eye development" },
      { name: "Probiotic Blend", amount: "500 Million CFU", purpose: "Gentle digestive support" },
    ],
    feedingGuide: [
      { weight: "Kittens & puppies", amount: "1 scoop in 60 ml warm water" },
      { weight: "Cats & dogs up to 25 lbs", amount: "1–2 scoops daily" },
      { weight: "Dogs 26 lbs and over", amount: "2–4 scoops daily" },
    ],
    faqs: [
      { q: "Is goat milk safe for lactose-sensitive pets?", a: "Goat milk contains notably less lactose than cow's milk and most sensitive pets handle it well in topper amounts. Introduce gradually over 3–4 days." },
      { q: "Can very young puppies and kittens have it?", a: "It works as a weaning-support topper from 4 weeks. It is not a complete milk replacer for orphaned newborns — use a dedicated formula for that." },
      { q: "How do I prepare it?", a: "Whisk one scoop into about 60 ml of warm (not hot) water, or sprinkle dry over wet food. Refrigerate prepared milk and use within 24 hours." },
      { q: "Why add colostrum and DHA?", a: "Colostrum supplies immune-supporting antibodies while DHA supports brain and eye development — turning simple milk into functional nutrition." },
    ],
    featured: false,
    bestSeller: false,
    collections: ["daily-essentials", "dogs", "cats"],
    variants: [
      { name: "8 oz jar (45 scoops)", sku: "EMB-GM-8", priceCents: 1999, isDefault: true },
      { name: "16 oz jar (90 scoops)", sku: "EMB-GM-16", priceCents: 3399 },
    ],
    seoTitle: "Goat Milk Powder for Dogs & Cats — Colostrum + DHA Topper",
    seoDescription:
      "Whole goat milk nutrition powder with colostrum, DHA and probiotics. Gentle hydration and appetite support for puppies, kittens, seniors and picky eaters.",
  },
  {
    slug: "recovery-nutrition-gel",
    name: "Recovery Nutrition Gel",
    subtitle: "High-calorie vitamin gel for appetite & recovery",
    answerCapsule:
      "Recovery Nutrition Gel packs 28 calories, 14 vitamins, and omega fatty acids into each teaspoon of palatable malt-flavored gel — supporting underweight pets, picky eaters, post-op recovery, and high-energy working dogs and cats.",
    description: `When eating is the hard part, every lick counts. This dense, malt-flavored gel concentrates calories, vitamins and fatty acids into a format pets accept straight from the tube — no bowl negotiations required.

**Reach for it when**

- Appetite dips after surgery, illness or medication courses
- Underweight rescues need to rebuild condition
- Working and sporting dogs burn more than they eat
- Senior pets graze instead of finishing meals`,
    species: "dog_cat",
    format: "paste",
    colorKey: "rose",
    badges: "",
    benefits: [
      { title: "Dense, gentle calories", body: "28 kcal per teaspoon from easily digestible fats and malt extract.", icon: "Flame" },
      { title: "14-vitamin safety net", body: "Covers B-complex, A, D3 and E while regular appetite rebuilds.", icon: "Grid3x3" },
      { title: "Straight-from-tube easy", body: "Most pets lick it off a finger or paw — medicating has never been simpler.", icon: "Hand" },
      { title: "Vet-clinic staple format", body: "The same style of nutrition support gel long trusted in clinical recovery settings.", icon: "Stethoscope" },
    ],
    ingredients: [
      { name: "Malt Extract & Cod Liver Oil base", amount: "5 g per tsp", purpose: "Calorie-dense palatable base" },
      { name: "Vitamin Blend (14 vitamins)", amount: "—", purpose: "Micronutrient safety net" },
      { name: "Omega-3 & Omega-6 Fatty Acids", amount: "180 mg", purpose: "Skin, coat & cellular energy" },
      { name: "Iron & B12", amount: "—", purpose: "Normal red blood cell support" },
    ],
    feedingGuide: [
      { weight: "Cats & small dogs", amount: "1/2–1 tsp daily" },
      { weight: "Medium dogs (26–75 lbs)", amount: "1–2 tsp daily" },
      { weight: "Large dogs (76+ lbs)", amount: "2–3 tsp daily" },
    ],
    faqs: [
      { q: "Is this a meal replacement?", a: "No — it's concentrated supplemental nutrition to bridge appetite gaps. Pets should still be offered their regular complete diet." },
      { q: "My pet refuses food entirely. Will this fix it?", a: "A pet refusing all food for more than 24 hours needs a veterinarian. The gel supports recovery; it doesn't diagnose the cause of appetite loss." },
      { q: "How do I give it?", a: "Offer from a finger, spoon or paw. Dabbed on a cat's paw, it gets licked off by reflex — the classic trick." },
      { q: "How long does an opened tube last?", a: "Cap tightly and store cool; use within 60 days of opening." },
    ],
    featured: false,
    bestSeller: false,
    collections: ["daily-essentials", "dogs", "cats"],
    variants: [
      { name: "4.25 oz tube", sku: "EMB-RG-4", priceCents: 1499, isDefault: true },
      { name: "2-pack tubes", sku: "EMB-RG-2PK", priceCents: 2599 },
    ],
    seoTitle: "High-Calorie Nutrition Gel for Dogs & Cats — Recovery Support",
    seoDescription:
      "Malt-flavored high-calorie gel with 14 vitamins and omegas. Appetite and recovery support for underweight, senior and post-op pets.",
  },
  {
    slug: "hairball-control-paste",
    name: "Hairball Control Paste",
    subtitle: "Slippery elm + fiber comfort for self-grooming pros",
    answerCapsule:
      "Hairball Control Paste combines plant fiber, slippery elm, and lubricating oils in a salmon-flavored paste that helps swallowed hair pass naturally through digestion — reducing hairball frequency in shorthair and longhair cats alike.",
    description: `Your cat's grooming standards are impeccable. Their digestive tract pays the price. This petroleum-free paste pairs gentle plant fiber with lubricating oils so swallowed hair keeps moving the way nature intended.

**Groomed, not gagging**

- Salmon flavor cats lick willingly off a finger or paw
- Petroleum-free formula built on slippery elm and psyllium
- Doubles as skin & coat support with added omega oils`,
    species: "cat",
    format: "paste",
    colorKey: "slate",
    badges: "",
    benefits: [
      { title: "Keeps hair moving", body: "Psyllium fiber and oils help ingested hair pass through the digestive tract.", icon: "MoveRight" },
      { title: "Soothing slippery elm", body: "A traditional botanical that supports the digestive lining's comfort.", icon: "Leaf" },
      { title: "Petroleum-free", body: "No mineral oil or petrolatum — plant fibers and nourishing oils do the work.", icon: "Ban" },
      { title: "Less shedding intake", body: "Omega oils support coat health, which means less loose hair to swallow.", icon: "Cat" },
    ],
    ingredients: [
      { name: "Psyllium Husk Fiber", amount: "150 mg", purpose: "Moves hair through GI tract" },
      { name: "Slippery Elm Bark", amount: "100 mg", purpose: "Digestive lining comfort" },
      { name: "Salmon Oil", amount: "300 mg", purpose: "Coat health & palatability" },
      { name: "Lecithin", amount: "80 mg", purpose: "Healthy fat metabolism" },
    ],
    feedingGuide: [
      { weight: "Adult cats", amount: "1/2 tsp daily during shedding season" },
      { weight: "Longhair breeds", amount: "1/2 tsp twice daily" },
      { weight: "Maintenance", amount: "1/2 tsp 2–3 times weekly" },
    ],
    faqs: [
      { q: "How often will my cat still get hairballs?", a: "Occasional hairballs are normal cat life. With daily use during shedding seasons, most owners report a clear drop in frequency within 2–3 weeks." },
      { q: "Why petroleum-free?", a: "Traditional hairball gels rely on petrolatum, which can interfere with nutrient absorption when overused. Plant fiber and food oils achieve the effect nutritionally." },
      { q: "My cat won't take pastes. Tips?", a: "Dab a strip on the front paw — grooming instinct does the rest. Mixing into a spoon of wet food also works well with salmon flavor." },
      { q: "When should I see a vet instead?", a: "Retching without producing anything, appetite loss, or constipation are vet-visit signs — hairballs should never cause distress." },
    ],
    featured: false,
    bestSeller: false,
    collections: ["digestive-health", "cats"],
    variants: [
      { name: "3.5 oz tube", sku: "EMB-HB-3", priceCents: 1399, isDefault: true },
      { name: "2-pack tubes", sku: "EMB-HB-2PK", priceCents: 2399 },
    ],
    seoTitle: "Hairball Control Paste for Cats — Petroleum-Free Slippery Elm",
    seoDescription:
      "Petroleum-free hairball paste for cats with psyllium, slippery elm and salmon oil. Helps swallowed hair pass naturally and supports coat health.",
  },
  {
    slug: "l-lysine-immune-powder",
    name: "L-Lysine Immune Powder",
    subtitle: "Feline immune & respiratory support that hides in food",
    answerCapsule:
      "L-Lysine Immune Powder delivers 500 mg of pure L-lysine per scoop in an unflavored, food-invisible powder that supports normal immune function, eye comfort, and respiratory health in cats of all ages, especially multi-cat households.",
    description: `The quiet workhorse of feline wellness. L-lysine is one of the most widely used feline supplements, and our fermentation-derived powder disappears into wet food — no pilling, no wrestling, no drama.

**Multi-cat household essential**

- Supports normal immune defenses year-round
- Popular support during stressful transitions: new pets, moves, boarding
- Unflavored micro-fine texture cats don't detect`,
    species: "cat",
    format: "powder",
    colorKey: "sage",
    badges: "vet-formulated",
    benefits: [
      { title: "Immune foundation", body: "L-lysine supports the immune system's normal response, especially under stress.", icon: "Shield" },
      { title: "Eye & sniffle comfort", body: "Commonly used to support normal eye and upper respiratory comfort in cats.", icon: "Eye" },
      { title: "Truly unflavored", body: "Micro-fine, taste-neutral powder vanishes into wet food — even for picky cats.", icon: "EyeOff" },
      { title: "Multi-cat friendly", body: "Economical scoop dosing scales easily across whole feline households.", icon: "Users" },
    ],
    ingredients: [
      { name: "L-Lysine HCl (fermentation-derived)", amount: "500 mg per scoop", purpose: "Immune & respiratory support" },
    ],
    feedingGuide: [
      { weight: "Kittens (8 weeks+)", amount: "1/2 scoop daily" },
      { weight: "Adult cats", amount: "1 scoop daily" },
      { weight: "During stress periods", amount: "1 scoop twice daily" },
    ],
    faqs: [
      { q: "What is L-lysine used for in cats?", a: "It's a widely used nutritional support for normal immune function, eye comfort and respiratory health — particularly popular in multi-cat homes and shelters." },
      { q: "Can kittens take it?", a: "Yes, from 8 weeks at half dosing. Many breeders introduce it during the socialization period." },
      { q: "Will my cat taste it?", a: "The powder is unflavored and micro-fine. Mixed into wet food, cats almost never detect it." },
      { q: "How long can my cat stay on it?", a: "L-lysine is an amino acid suitable for long-term daily use at label doses. Your vet can tailor duration to your cat's needs." },
    ],
    featured: false,
    bestSeller: false,
    collections: ["immune-support", "cats"],
    variants: [
      { name: "100 g jar (100 scoops)", sku: "EMB-LY-100", priceCents: 1699, isDefault: true },
      { name: "200 g jar (200 scoops)", sku: "EMB-LY-200", priceCents: 2899 },
    ],
    seoTitle: "L-Lysine Powder for Cats — Immune & Respiratory Support",
    seoDescription:
      "Unflavored L-lysine powder for cats, 500mg per scoop. Supports immune function, eye comfort and respiratory health. Ideal for multi-cat homes.",
  },
  {
    slug: "salmon-skin-coat-bites",
    name: "Salmon Skin & Coat Bites",
    subtitle: "Omega + biotin chews for itchy, flaky, shed-heavy pups",
    answerCapsule:
      "Salmon Skin & Coat Bites pair wild salmon oil with biotin, zinc, and vitamin E in a fish-first chew that supports itchy skin, reduces excessive shedding, and promotes a soft, glossy coat in dogs within 4 to 6 weeks.",
    description: `For the scratchers, the shedders and the dull-coat crew. Real wild salmon leads the ingredient list, backed by the vitamin trio skin actually uses: biotin, zinc and vitamin E.

**Coat goals, met**

- Supports dogs with seasonal itch and paw-licking habits
- Promotes thick, soft, camera-ready coats
- Fish-first recipe doubles as a high-value training treat`,
    species: "dog",
    format: "chew",
    colorKey: "amber",
    badges: "",
    benefits: [
      { title: "Calms the itch cycle", body: "Omega-3s support the skin's normal response to seasonal and environmental irritants.", icon: "Droplets" },
      { title: "Shine catalysts", body: "Biotin and zinc are the micronutrients most tied to coat quality and skin renewal.", icon: "Sparkles" },
      { title: "Shed less, glow more", body: "Healthier follicles hold coat longer — meaning less hair on your couch.", icon: "Sofa" },
      { title: "Treat-level tasty", body: "Cold-pressed salmon bites dogs will sit, stay and spin for.", icon: "Fish" },
    ],
    ingredients: [
      { name: "Wild Salmon Oil", amount: "350 mg", purpose: "EPA/DHA skin support" },
      { name: "Biotin", amount: "500 mcg", purpose: "Coat growth & strength" },
      { name: "Zinc (chelated)", amount: "10 mg", purpose: "Skin renewal" },
      { name: "Vitamin E", amount: "15 IU", purpose: "Antioxidant skin protection" },
      { name: "Flaxseed", amount: "200 mg", purpose: "Plant omega balance" },
    ],
    feedingGuide: [
      { weight: "Up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–75 lbs", amount: "2 chews daily" },
      { weight: "76 lbs and over", amount: "3 chews daily" },
    ],
    faqs: [
      { q: "Bites or fish oil bottle — which should I pick?", a: "Same mission, different format. Choose bites for treat-motivated dogs and travel convenience; choose liquid oil for maximum EPA/DHA per dollar." },
      { q: "When will I see coat changes?", a: "Skin renews on a 3–4 week cycle, so expect visible coat improvements at 4–6 weeks with daily use." },
      { q: "Can it help with hot spots?", a: "It supports overall skin resilience, but active hot spots need veterinary care first. Use the bites as ongoing support after treatment." },
    ],
    featured: false,
    bestSeller: false,
    collections: ["skin-coat", "dogs"],
    variants: [
      { name: "90 chews", sku: "EMB-SC-90", priceCents: 2399, isDefault: true },
      { name: "180 chews", sku: "EMB-SC-180", priceCents: 3999 },
    ],
    seoTitle: "Salmon Skin & Coat Chews for Dogs — Omega-3 + Biotin",
    seoDescription:
      "Fish-first skin and coat chews for dogs with wild salmon oil, biotin, zinc and vitamin E. Support itchy skin, reduce shedding, boost shine.",
  },
];
