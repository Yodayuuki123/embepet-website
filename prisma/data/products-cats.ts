// 猫用与犬猫通用产品线 —— 基于恩贝宠真实产品目录

export const catAndSharedProducts = [
  {
    slug: "omega-3-wild-fish-oil",
    name: "Omega-3 Wild Fish Oil",
    subtitle: "Wild Alaskan pollock + salmon oil, one pump over every bowl",
    answerCapsule:
      "Omega-3 Wild Fish Oil blends wild Alaskan pollock and salmon oil delivering 525 mg combined EPA and DHA per pump. Pumped over food once daily, it supports skin, coat, joints, heart and brain health in both dogs and cats — the single highest-leverage supplement for most pets.",
    description: `## The one supplement almost every bowl is missing

If you add only one thing to your pet's diet, omega-3s carry the most published evidence: skin, coat, joints, heart, kidneys, brain. Dry diets are naturally low in EPA and DHA — a daily pump fixes that in five seconds.

**Who it's for:** dogs and cats of all ages; especially itchy skin, dull coats, stiff seniors, and kibble-fed pets.

## What makes it different

- Wild-caught Alaskan pollock and salmon, molecularly distilled
- EPA/DHA amounts printed per pump — no "proprietary blend" vagueness
- Third-party tested for heavy metals every batch
- Pump bottle keeps oil away from light and air`,
    species: "dog_cat",
    format: "oil",
    colorKey: "amber",
    badges: "bestseller,vet-informed",
    featured: true,
    bestSeller: true,
    benefits: [
      { title: "Skin & coat foundation", body: "EPA and DHA are the fatty acids the skin barrier and coat shine are built on.", icon: "sparkles" },
      { title: "Joint comfort", body: "Omega-3s support a normal inflammatory response in working joints.", icon: "bone" },
      { title: "Heart & kidney support", body: "Long-chain omega-3s support cardiovascular and renal function as pets age.", icon: "heart" },
      { title: "Five-second routine", body: "One pump over the bowl. Cats included — the fish taste does the persuading.", icon: "clock" },
    ],
    ingredients: [
      { name: "Wild Alaskan pollock oil", amount: "700 mg", purpose: "Primary EPA/DHA source" },
      { name: "Wild salmon oil", amount: "300 mg", purpose: "Flavor & additional omega-3" },
      { name: "EPA", amount: "315 mg", purpose: "Inflammatory-response support" },
      { name: "DHA", amount: "210 mg", purpose: "Brain, eye & skin support" },
      { name: "Natural vitamin E", amount: "5 IU", purpose: "Freshness antioxidant" },
    ],
    feedingGuide: [
      { weight: "Cats & dogs up to 15 lbs", amount: "1 pump daily" },
      { weight: "16–50 lbs", amount: "2 pumps daily" },
      { weight: "51–75 lbs", amount: "3 pumps daily" },
      { weight: "Over 75 lbs", amount: "4 pumps daily" },
    ],
    faqs: [
      { q: "Fish oil vs. salmon oil vs. this blend?", a: "Pollock oil offers one of the highest EPA/DHA densities per calorie with a mild taste; salmon oil adds palatability. The blend gives you clinical-level omega-3s that pets actually lick clean." },
      { q: "Will it make my pet smell fishy?", a: "Fresh, properly distilled oil has minimal odor. Store away from heat and use within 90 days of opening for best freshness." },
      { q: "Can kittens and puppies have it?", a: "Yes, from weaning age at the smallest serving. DHA is especially valuable during brain development." },
      { q: "Why refrigerate after opening?", a: "Omega-3s oxidize with warmth and air. Refrigeration keeps the oil fresh and the benefits intact." },
    ],
    images: ["/products/omega-3-wild-fish-oil.png"],
    variants: [
      { name: "8.5 fl oz pump", sku: "EP-OMG-8", priceCents: 2199, isDefault: true },
      { name: "16 fl oz pump", sku: "EP-OMG-16", priceCents: 3599, compareAtCents: 4299 },
    ],
    collections: ["skin-coat", "daily-essentials", "dogs", "cats"],
    translations: JSON.stringify({
      es: {
        subtitle: "Abadejo salvaje de Alaska + aceite de salmón, una pulsación sobre cada plato",
        answerCapsule: "Mezcla de abadejo salvaje de Alaska y salmón con 525 mg de EPA y DHA por pulsación. Sobre la comida una vez al día, apoya piel, pelaje, articulaciones, corazón y cerebro de perros y gatos.",
      },
      fr: {
        subtitle: "Colin sauvage d'Alaska + huile de saumon, une pression sur chaque gamelle",
        answerCapsule: "Colin sauvage d'Alaska et saumon : 525 mg d'EPA et DHA par pression. Une fois par jour sur la nourriture, soutient peau, pelage, articulations, cœur et cerveau des chiens et chats.",
      },
      de: {
        subtitle: "Wilder Alaska-Pollack + Lachsöl, ein Pumpstoß über jeden Napf",
        answerCapsule: "Wilder Alaska-Pollack und Lachsöl liefern 525 mg EPA und DHA pro Pumpstoß. Täglich übers Futter gegeben, unterstützt es Haut, Fell, Gelenke, Herz und Gehirn von Hunden und Katzen.",
      },
      ja: {
        subtitle: "天然アラスカポロック＋サーモンオイル。毎日のごはんにワンプッシュ",
        answerCapsule: "天然アラスカポロックとサーモンのブレンドで、1プッシュにEPA・DHA計525mg。1日1回ごはんにかけるだけで、犬猫の皮膚・被毛・関節・心臓・脳の健康をサポートします。",
      },
    }),
  },
  {
    slug: "cat-urinary-support-drops",
    name: "Cat Urinary Support Drops",
    subtitle: "Cranberry PACs + D-mannose daily bladder defense for cats",
    answerCapsule:
      "Cat Urinary Support Drops combine standardized cranberry proanthocyanidins (PACs), D-mannose, taurine and marshmallow root in a palatable liquid. Mixed into wet food daily, the formula supports urinary tract health, normal bladder wall function and healthy hydration habits — designed for prevention-minded cat parents, especially of male indoor cats.",
    description: `## Prevention beats a 2 a.m. emergency

Urinary issues are among the most common — and most feared — reasons cats visit the vet. Male indoor cats that don't drink enough sit at the highest risk. This daily liquid takes the prevention-first approach: bladder-wall support plus a hydration nudge, built into mealtime.

**Who it's for:** male indoor cats, cats recovered from urinary episodes (as vet-approved aftercare support), multi-cat homes, and low-drinkers.

**Red flag reminder:** straining, crying in the litter box or producing no urine is an emergency. Go to the vet immediately — no supplement addresses a blockage.

## What makes it different

- PAC content standardized and printed, not "cranberry powder, some"
- D-mannose pairs with PACs for complementary support
- Liquid format doubles as a hydration boost in wet food`,
    species: "cat",
    format: "dropper",
    colorKey: "sky",
    badges: "bestseller,vet-informed",
    featured: true,
    bestSeller: true,
    benefits: [
      { title: "Bladder wall support", body: "Cranberry PACs support the bladder lining's natural defenses.", icon: "shield" },
      { title: "Complementary D-mannose", body: "The most-studied pairing in urinary-support nutrition.", icon: "droplets" },
      { title: "Hydration built in", body: "Liquid format adds moisture to every meal — the #1 urinary health lever.", icon: "cup" },
      { title: "Cats accept it", body: "Savory chicken-broth base, tested on famously suspicious cats.", icon: "cat" },
    ],
    ingredients: [
      { name: "Cranberry extract (36:1)", amount: "80 mg (7.2 mg PACs)", purpose: "Bladder lining defense" },
      { name: "D-mannose", amount: "250 mg", purpose: "Urinary tract support" },
      { name: "Taurine", amount: "50 mg", purpose: "Bladder muscle function" },
      { name: "Marshmallow root", amount: "40 mg", purpose: "Soothes the urinary lining" },
      { name: "Omega-3 (krill)", amount: "30 mg", purpose: "Normal inflammatory response" },
    ],
    feedingGuide: [
      { weight: "Cats up to 10 lbs", amount: "1 dropper (1 ml) daily" },
      { weight: "Cats over 10 lbs", amount: "1.5 droppers daily" },
    ],
    faqs: [
      { q: "My male cat had a urinary episode. Can this prevent another?", a: "No product can promise prevention, and recurrence risk is real. What this formula does is support bladder health and hydration daily — use it as part of the aftercare plan your vet outlines, alongside increased water intake and stress reduction." },
      { q: "Why is hydration such a big deal?", a: "Concentrated urine is the common thread in most feline urinary problems. More moisture means more dilute urine and more frequent flushing — this liquid rides along with wet food to help." },
      { q: "How do I know if it's an emergency?", a: "A cat straining with little or no urine, crying in the box, or licking the area repeatedly needs a vet immediately — a blocked cat can become critical within 24 hours." },
      { q: "Will my cat taste it?", a: "The base is a savory broth. Most cats accept it mixed into wet food from day one; start with half a dose mixed well if yours is extra suspicious." },
    ],
    images: ["/products/cat-urinary-support-drops.png"],
    variants: [
      { name: "2 fl oz (60 ml)", sku: "EP-URI-60", priceCents: 2499, isDefault: true },
      { name: "2-pack", sku: "EP-URI-120", priceCents: 4299, compareAtCents: 4998 },
    ],
    collections: ["urinary", "cats"],
    translations: JSON.stringify({
      es: {
        subtitle: "PACs de arándano + D-manosa: defensa diaria de la vejiga felina",
        answerCapsule: "Combinan proantocianidinas de arándano estandarizadas, D-manosa, taurina y raíz de malvavisco en un líquido apetecible. Con la comida húmeda diaria, apoyan la salud del tracto urinario y la hidratación del gato.",
      },
      fr: {
        subtitle: "PACs de canneberge + D-mannose : la défense quotidienne de la vessie du chat",
        answerCapsule: "Proanthocyanidines de canneberge standardisées, D-mannose, taurine et guimauve dans un liquide appétent. Mélangé à la pâtée, soutient la santé urinaire et l'hydratation — pensé pour la prévention, surtout chez les mâles d'intérieur.",
      },
      de: {
        subtitle: "Cranberry-PACs + D-Mannose: tägliche Blasenunterstützung für Katzen",
        answerCapsule: "Standardisierte Cranberry-Proanthocyanidine, D-Mannose, Taurin und Eibischwurzel in schmackhafter Flüssigkeit. Täglich ins Nassfutter gemischt, unterstützt es Harnwege und Trinkverhalten — ideal für Wohnungskater.",
      },
      ja: {
        subtitle: "クランベリーPACs＋D-マンノースで、猫の毎日の膀胱ケアを",
        answerCapsule: "規格化クランベリープロアントシアニジン、D-マンノース、タウリン、マシュマロウルートを配合した液体タイプ。毎日ウェットフードに混ぜて、尿路の健康と水分摂取をサポート。特に室内飼いのオス猫に。",
      },
    }),
  },
  {
    slug: "cat-lysine-immune-powder",
    name: "Cat L-Lysine Immune Powder",
    subtitle: "500 mg lysine per scoop for eye, sniffle and seasonal immune support",
    answerCapsule:
      "Cat L-Lysine Immune Powder delivers 500 mg of pure L-lysine per scoop in an unflavored, food-topping powder. Lysine is the most widely used nutritional support for feline immune health, commonly recommended for cats prone to watery eyes, sneezing episodes and stress-triggered flare-ups in multi-cat homes.",
    description: `## The multi-cat household staple

Stress — a move, a new cat, boarding — is the classic trigger for feline sniffles and watery eyes. L-lysine is the best-known nutritional support in exactly these moments, and a staple recommendation in shelters and multi-cat homes.

**Who it's for:** cats prone to eye discharge and sneezy weeks, shelter alumni, multi-cat households, and boarding/travel prep.

## What makes it different

- Pure pharmaceutical-grade lysine, zero fillers
- Unflavored micro-fine powder disappears into wet food
- 100+ scoops per jar — pennies per day`,
    species: "cat",
    format: "powder",
    colorKey: "oat",
    badges: "",
    featured: false,
    bestSeller: false,
    benefits: [
      { title: "Immune amino acid", body: "Lysine is the most widely used nutritional support for feline immune resilience.", icon: "shield" },
      { title: "Eye & nose comfort", body: "Commonly used for cats prone to watery eyes and seasonal sneezes.", icon: "eye" },
      { title: "Stress-period support", body: "Moves, new pets, boarding — feed through the weeks that trigger flare-ups.", icon: "home" },
      { title: "Invisible to cats", body: "Unflavored powder mixes into wet food without a trace.", icon: "check" },
    ],
    ingredients: [
      { name: "L-lysine HCl", amount: "500 mg per scoop", purpose: "Immune support amino acid" },
    ],
    feedingGuide: [
      { weight: "Adult cats", amount: "1 scoop daily in wet food" },
      { weight: "During stress periods", amount: "1 scoop twice daily" },
      { weight: "Kittens (8+ weeks)", amount: "½ scoop daily" },
    ],
    faqs: [
      { q: "When is lysine most useful?", a: "Around predictable stress: moving, introducing a new pet, boarding, shows. Many families in multi-cat homes feed it daily as a baseline." },
      { q: "My cat has goopy eyes right now — supplement or vet?", a: "Active discharge, squinting or a closed eye deserves a vet visit first. Lysine is nutritional support, not a treatment for active infection." },
      { q: "Will my cat taste it?", a: "The powder is unflavored and micro-fine. Mixed into wet food, virtually all cats eat it without noticing." },
      { q: "Is long-term daily use okay?", a: "Yes, lysine is an amino acid with a long history of safe daily use in cats at labeled amounts." },
    ],
    images: ["/products/cat-lysine-immune-powder.png"],
    variants: [
      { name: "120 g jar (100+ scoops)", sku: "EP-LYS-120", priceCents: 1899, isDefault: true },
      { name: "2-pack", sku: "EP-LYS-240", priceCents: 3199 },
    ],
    collections: ["immunity-allergy", "cats"],
    translations: JSON.stringify({
      es: {
        subtitle: "500 mg de lisina por cacito para ojos llorosos y defensas felinas",
        answerCapsule: "Aporta 500 mg de L-lisina pura por cacito en polvo sin sabor. Es el apoyo nutricional más utilizado para la inmunidad felina, habitual en gatos con lagrimeo, estornudos y brotes por estrés.",
      },
      fr: {
        subtitle: "500 mg de lysine par dosette pour les yeux qui coulent et l'immunité féline",
        answerCapsule: "500 mg de L-lysine pure par dosette, en poudre neutre à mélanger. Le soutien nutritionnel le plus utilisé pour l'immunité du chat, notamment en cas d'yeux humides, d'éternuements et de stress.",
      },
      de: {
        subtitle: "500 mg Lysin pro Messlöffel für Augen, Näschen und Immunbalance",
        answerCapsule: "500 mg reines L-Lysin pro Messlöffel als geschmacksneutrales Pulver. Die meistgenutzte Nahrungsunterstützung für das Immunsystem der Katze — bei tränenden Augen, Niesphasen und Stress im Mehrkatzenhaushalt.",
      },
      ja: {
        subtitle: "1スクープにリジン500mg。目や鼻、季節の免疫ケアに",
        answerCapsule: "無味・微粉末のL-リジンを1スクープに500mg。涙目やくしゃみが出やすい猫、多頭飼いのストレスケアに最も広く使われる栄養サポートです。",
      },
    }),
  },
  {
    slug: "cat-hairball-control-chews",
    name: "Cat Hairball Control Chews",
    subtitle: "Psyllium fiber + fish oil to move hair through, not up",
    answerCapsule:
      "Cat Hairball Control Chews combine psyllium husk fiber, pumpkin, fish oil and lecithin in a salmon-flavored soft chew. The formula supports the natural passage of swallowed hair through the digestive tract and a healthy coat that sheds less — reducing hairballs the way nature intended, without petroleum pastes.",
    description: `## Hair should exit quietly

Every groom swallows hair; the question is which door it leaves by. Our chew works both ends of the problem: fiber escorts swallowed hair through the gut, while omega-3s and lecithin reduce the loose hair swallowed in the first place.

**Who it's for:** long-haired breeds, heavy seasonal shedders, enthusiastic groomers, and any home tired of carpet surprises.

## What makes it different

- Fiber + coat-care dual mechanism, not just lubricant
- No petroleum jelly, no mineral oil
- Salmon flavor cats ask for by name`,
    species: "cat",
    format: "chew",
    colorKey: "amber",
    badges: "",
    featured: false,
    bestSeller: false,
    benefits: [
      { title: "Moves hair through", body: "Psyllium and pumpkin fiber support normal transit of swallowed hair.", icon: "arrow-right" },
      { title: "Less hair swallowed", body: "Omega-3s and lecithin support a coat that sheds less during grooming.", icon: "sparkles" },
      { title: "Gentle on digestion", body: "Food-based fibers, no petroleum or mineral oil.", icon: "leaf" },
      { title: "Treat-format compliance", body: "Soft salmon chew — no paste-on-paw wrestling.", icon: "smile" },
    ],
    ingredients: [
      { name: "Psyllium husk", amount: "200 mg", purpose: "Transit fiber" },
      { name: "Pumpkin powder", amount: "150 mg", purpose: "Gentle bulk fiber" },
      { name: "Fish oil", amount: "100 mg", purpose: "Coat & shedding support" },
      { name: "Lecithin", amount: "100 mg", purpose: "Skin & coat conditioning" },
      { name: "Slippery elm bark", amount: "50 mg", purpose: "Digestive comfort" },
    ],
    feedingGuide: [
      { weight: "Cats up to 10 lbs", amount: "2 chews daily" },
      { weight: "Cats over 10 lbs", amount: "3 chews daily" },
      { weight: "Shedding season", amount: "Up to 4 chews daily" },
    ],
    faqs: [
      { q: "How is this different from hairball paste?", a: "Pastes lubricate with petroleum derivatives. Our chews use food-based fiber to support natural transit plus omega-3s to reduce shedding at the source — addressing the cause, not just the exit." },
      { q: "How soon will hairballs decrease?", a: "Most families report fewer incidents within 2–4 weeks, with the biggest difference during seasonal shedding once coat benefits kick in around week 6." },
      { q: "My cat vomits frequently — is that just hairballs?", a: "Frequent vomiting (more than 1–2 times monthly) or retching without producing anything warrants a vet visit; it can signal issues beyond normal hairballs." },
      { q: "Can kittens take them?", a: "They're formulated for adult cats. Kittens rarely need hairball support; ask your vet if you're seeing issues in a young cat." },
    ],
    images: ["/products/cat-hairball-control-chews.png"],
    variants: [
      { name: "60 chews", sku: "EP-HRB-60", priceCents: 1999, isDefault: true },
      { name: "120 chews", sku: "EP-HRB-120", priceCents: 3399 },
    ],
    collections: ["digestion", "skin-coat", "cats"],
    translations: JSON.stringify({
      es: {
        subtitle: "Fibra de psyllium + aceite de pescado para que el pelo salga por donde debe",
        answerCapsule: "Combinan fibra de psyllium, calabaza, aceite de pescado y lecitina en un snack sabor salmón. Apoyan el tránsito natural del pelo ingerido y un pelaje que muda menos, sin pastas de petróleo.",
      },
      fr: {
        subtitle: "Fibres de psyllium + huile de poisson pour que les poils passent, au lieu de remonter",
        answerCapsule: "Psyllium, citrouille, huile de poisson et lécithine dans une bouchée au saumon. Soutient le transit naturel des poils avalés et un pelage qui perd moins — sans pâte au pétrole.",
      },
      de: {
        subtitle: "Psyllium-Fasern + Fischöl: Haare sollen durchwandern, nicht hochkommen",
        answerCapsule: "Psyllium, Kürbis, Fischöl und Lecithin im lachsigen Soft Chew. Unterstützt die natürliche Passage verschluckter Haare und ein Fell, das weniger haart — ganz ohne Vaseline-Pasten.",
      },
      ja: {
        subtitle: "サイリウム＋フィッシュオイルで、毛を「戻す」ではなく「送り出す」",
        answerCapsule: "サイリウムハスク、パンプキン、フィッシュオイル、レシチンを配合したサーモン風味チュウ。飲み込んだ毛の自然な排出と、抜け毛の少ない被毛をサポート。石油系ペーストは不使用です。",
      },
    }),
  },
  {
    slug: "lactoferrin-goat-milk-powder",
    name: "Lactoferrin Goat Milk Powder",
    subtitle: "Gentle whole goat milk + lactoferrin for puppies, kittens and picky recoveries",
    answerCapsule:
      "Lactoferrin Goat Milk Powder combines whole goat milk — naturally easier to digest than cow's milk — with immune-supporting lactoferrin, colostrum and probiotics. Mixed with warm water, it supports growing puppies and kittens, nursing mothers, seniors with fading appetites and pets recovering from illness.",
    description: `## Comfort food, upgraded

Goat milk is the gentle classic: smaller fat globules and different casein than cow's milk make it famously easy on young and sensitive stomachs. We add lactoferrin — the immune protein of first milk — plus colostrum and probiotics.

**Who it's for:** weaning puppies and kittens, pregnant and nursing mothers, picky seniors, post-illness appetite rebuilding, and hydration encouragement.

## What makes it different

- Whole goat milk, not whey byproduct
- 100 mg lactoferrin per serving — the ingredient that separates this from grocery milk replacers
- Instant-dissolve spray-dried powder`,
    species: "dog_cat",
    format: "powder",
    colorKey: "oat",
    badges: "new",
    featured: false,
    bestSeller: false,
    benefits: [
      { title: "Gentle first nutrition", body: "Goat milk's small fat globules digest easily in young and sensitive stomachs.", icon: "baby" },
      { title: "Immune head start", body: "Lactoferrin and colostrum are the immune proteins of early life.", icon: "shield" },
      { title: "Appetite rescue", body: "Warm milk aroma tempts picky seniors and post-illness recoveries.", icon: "cup" },
      { title: "Hydration helper", body: "A tasty way to add fluid for pets that under-drink.", icon: "droplets" },
    ],
    ingredients: [
      { name: "Whole goat milk powder", amount: "8 g per serving", purpose: "Digestible base nutrition" },
      { name: "Lactoferrin", amount: "100 mg", purpose: "Immune-supporting milk protein" },
      { name: "Bovine colostrum", amount: "200 mg", purpose: "Antibody-rich first milk" },
      { name: "Bacillus coagulans", amount: "1 × 10⁸ CFU", purpose: "Gentle probiotic" },
      { name: "DHA", amount: "20 mg", purpose: "Brain development support" },
    ],
    feedingGuide: [
      { weight: "Puppies & kittens (weaning+)", amount: "1 scoop in 60 ml warm water, 2–3× daily" },
      { weight: "Adults up to 25 lbs", amount: "1–2 scoops daily" },
      { weight: "Adults over 25 lbs", amount: "2–3 scoops daily" },
    ],
    faqs: [
      { q: "Can it replace mother's milk for orphans?", a: "It is a supplemental milk, not a complete milk replacer for orphaned newborns. Orphans under 4 weeks need a species-specific complete formula — ask your vet." },
      { q: "Why goat milk instead of cow's milk?", a: "Goat milk's smaller fat globules and different casein profile make it substantially easier to digest for most puppies, kittens and lactose-sensitive adults." },
      { q: "What does lactoferrin add?", a: "Lactoferrin is an iron-binding immune protein concentrated in early milk, studied for supporting immune balance and gut flora — the upgrade over plain milk powders." },
      { q: "How do I serve it?", a: "Whisk into warm (not hot) water and serve alone or over food. Refrigerate mixed milk and use within 24 hours." },
    ],
    images: ["/products/lactoferrin-goat-milk-powder.png"],
    variants: [
      { name: "300 g canister", sku: "EP-GMK-300", priceCents: 2399, isDefault: true },
      { name: "2-pack", sku: "EP-GMK-600", priceCents: 4099 },
    ],
    collections: ["daily-essentials", "dogs", "cats"],
    translations: JSON.stringify({
      es: {
        subtitle: "Leche de cabra entera + lactoferrina para cachorros, gatitos y convalecencias",
        answerCapsule: "Combina leche de cabra entera —más digestible que la de vaca— con lactoferrina, calostro y probióticos. Apoya a cachorros y gatitos en crecimiento, madres lactantes y mascotas en recuperación.",
      },
      fr: {
        subtitle: "Lait de chèvre entier + lactoferrine pour chiots, chatons et convalescents",
        answerCapsule: "Lait de chèvre entier — naturellement plus digeste que le lait de vache — avec lactoferrine, colostrum et probiotiques. Soutient chiots et chatons en croissance, mères allaitantes et animaux en convalescence.",
      },
      de: {
        subtitle: "Vollwertige Ziegenmilch + Lactoferrin für Welpen, Kitten und mäkelige Rekonvaleszenten",
        answerCapsule: "Vollwertige Ziegenmilch — leichter verdaulich als Kuhmilch — mit Lactoferrin, Kolostrum und Probiotika. Unterstützt wachsende Welpen und Kitten, säugende Mütter und Tiere in der Genesung.",
      },
      ja: {
        subtitle: "全脂ヤギミルク＋ラクトフェリン。子犬・子猫や食の細い子の回復に",
        answerCapsule: "牛乳より消化にやさしい全脂ヤギミルクに、ラクトフェリン、初乳、乳酸菌を配合。成長期の子犬・子猫、授乳中の母親、病後の食欲回復をサポートします。",
      },
    }),
  },
  {
    slug: "collagen-mobility-chews",
    name: "Multi-Collagen Soft Chews",
    subtitle: "Five collagen types for joints, skin, tendons and strong paw pads",
    answerCapsule:
      "Multi-Collagen Soft Chews deliver five collagen types (I, II, III, V, X) from bovine, chicken, fish and eggshell membrane sources, plus vitamin C for collagen synthesis. The formula supports joint cartilage, tendon elasticity, skin structure, coat quality and paw pad resilience in dogs and cats.",
    description: `## The structural protein, restocked

Collagen is 30% of your pet's total protein — the scaffolding of joints, tendons, skin and paw pads. Production declines from early adulthood. One chew restocks all five major types, with the vitamin C the body needs to weave them in.

**Who it's for:** active and aging dogs, cats with thinning coats, cracked paw pads, and pets recovering from activity strain.

## What makes it different

- Five collagen types, four food sources — not just bovine type I
- Eggshell membrane adds naturally occurring glucosamine and elastin
- Vitamin C included because collagen synthesis requires it`,
    species: "dog_cat",
    format: "chew",
    colorKey: "rose",
    badges: "new",
    featured: false,
    bestSeller: false,
    benefits: [
      { title: "Joint & tendon structure", body: "Types I and II collagen are the primary proteins of cartilage and tendons.", icon: "bone" },
      { title: "Skin from within", body: "Type III supports skin elasticity and wound-ready resilience.", icon: "sparkles" },
      { title: "Paw pad strength", body: "Structural protein for the pads that hit pavement every day.", icon: "paw" },
      { title: "Synthesis support", body: "Vitamin C is the cofactor that turns collagen peptides into new tissue.", icon: "zap" },
    ],
    ingredients: [
      { name: "Multi-collagen blend (I, II, III, V, X)", amount: "500 mg", purpose: "Full-spectrum structural protein" },
      { name: "Eggshell membrane", amount: "100 mg", purpose: "Natural glucosamine & elastin" },
      { name: "Vitamin C", amount: "30 mg", purpose: "Collagen synthesis cofactor" },
      { name: "Hyaluronic acid", amount: "10 mg", purpose: "Tissue hydration" },
    ],
    feedingGuide: [
      { weight: "Cats & dogs up to 25 lbs", amount: "1 chew daily" },
      { weight: "26–75 lbs", amount: "2 chews daily" },
      { weight: "Over 75 lbs", amount: "3 chews daily" },
    ],
    faqs: [
      { q: "Collagen vs. glucosamine — which for joints?", a: "They're complementary: glucosamine supports the fluid and cushioning inside the joint, collagen supports the cartilage and tendon structure itself. Active seniors often take both." },
      { q: "Why five types instead of one?", a: "Different tissues use different types — II for cartilage, I and III for skin and tendons, V and X for cell surfaces and bone formation. Multi-sourcing covers the full map." },
      { q: "Will it help cracked paw pads?", a: "Paw pads are collagen-dense tissue. Families commonly report more supple pads after 4–8 weeks, alongside topical care and avoiding hot pavement." },
      { q: "Is it safe for cats?", a: "Yes, dosed for both species — see the feeding guide. The chew is small and fish-flavored for feline approval." },
    ],
    images: ["/products/collagen-mobility-chews.png"],
    variants: [
      { name: "90 chews", sku: "EP-COL-90", priceCents: 2799, isDefault: true },
      { name: "180 chews", sku: "EP-COL-180", priceCents: 4799 },
    ],
    collections: ["hip-joint", "skin-coat", "dogs", "cats"],
    translations: JSON.stringify({
      es: {
        subtitle: "Cinco tipos de colágeno para articulaciones, piel, tendones y almohadillas fuertes",
        answerCapsule: "Aportan cinco tipos de colágeno de fuentes bovina, pollo, pescado y membrana de cáscara de huevo, más vitamina C. Apoyan cartílago, tendones, piel, pelaje y almohadillas en perros y gatos.",
      },
      fr: {
        subtitle: "Cinq types de collagène pour articulations, peau, tendons et coussinets solides",
        answerCapsule: "Cinq types de collagène (bœuf, poulet, poisson, membrane de coquille d'œuf) plus vitamine C. Soutient cartilage, tendons, peau, pelage et coussinets chez les chiens et chats.",
      },
      de: {
        subtitle: "Fünf Kollagentypen für Gelenke, Haut, Sehnen und starke Pfotenballen",
        answerCapsule: "Fünf Kollagentypen aus Rind, Huhn, Fisch und Eierschalenmembran plus Vitamin C. Unterstützt Gelenkknorpel, Sehnenelastizität, Hautstruktur, Fellqualität und Ballenwiderstandskraft bei Hund und Katze.",
      },
      ja: {
        subtitle: "5種類のコラーゲンで、関節・皮膚・腱・肉球を丈夫に",
        answerCapsule: "牛・鶏・魚・卵殻膜由来の5種コラーゲン（I・II・III・V・X型）にビタミンCを配合。犬猫の関節軟骨、腱の弾力、皮膚構造、肉球の強さをサポートします。",
      },
    }),
  },
];
