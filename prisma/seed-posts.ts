// 博客种子数据：3 篇支柱长文 + 6 篇问答短文
// 全部按 GEO 规范写作：开头答案胶囊、问题式小标题、短段落、FAQ、可引用来源
// 合规：仅使用结构功能声称（supports/promotes/maintains），不出现治疗/预防疾病用语

export type SeedPost = {
  slug: string;
  title: string;
  excerpt: string;
  answerCapsule: string;
  content: string;
  category: string;
  tags: string;
  species: string;
  authorName: string;
  authorTitle: string;
  authorBio: string;
  reviewedBy: string;
  pillar: boolean;
  readMinutes: number;
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  coverColorKey: string;
  seoTitle: string;
  seoDescription: string;
};

const TEAM = {
  authorName: "EMBEPET Science Team",
  authorTitle: "Pet Nutrition Research",
  authorBio:
    "The EMBEPET Science Team researches ingredient science and formulation standards for companion animal supplements, working with veterinary advisors and GMP-certified manufacturing partners.",
  reviewedBy: "Dr. Emily Hart, DVM",
};

export const seedPosts: SeedPost[] = [
  // ---------- 支柱文章 1：狗关节健康 ----------
  {
    slug: "dog-joint-health-complete-guide",
    title: "Dog Joint Health: The Complete Guide for Every Life Stage",
    excerpt:
      "How dog joints age, the early signs owners miss, and what the research says about glucosamine, chondroitin, MSM, green-lipped mussel, and omega-3s.",
    answerCapsule:
      "Dog joint health depends on weight management, appropriate exercise, and cartilage-supporting nutrients. Research-backed ingredients include glucosamine, chondroitin, MSM, green-lipped mussel, and omega-3 fatty acids. Support works best when started early — before stiffness appears — especially in large breeds and highly active dogs.",
    content: `## Why do dog joints wear down?

A dog's joints are cushioned by cartilage and lubricated by synovial fluid. With age, activity, and body weight, cartilage naturally breaks down faster than the body rebuilds it. Large breeds, working dogs, and overweight dogs experience this sooner.

By some veterinary estimates, a significant share of dogs over age eight show reduced joint comfort — but most owners only notice when changes become obvious.

## What are the early signs of joint discomfort in dogs?

Watch for these subtle changes before limping ever appears:

- Hesitating at stairs or before jumping onto the couch
- Slower to stand up after rest, especially in the morning
- Choosing shorter walks or lagging behind
- Licking or chewing at one joint area
- A stiff, "bunny-hopping" gait after exercise

If you notice persistent changes, talk to your veterinarian first to rule out conditions that need medical care.

## Which nutrients support joint health in dogs?

**Glucosamine** is a building block of cartilage. Supplemental glucosamine HCl helps maintain healthy cartilage structure and joint function. It is the most widely used joint support ingredient in both human and pet nutrition.

**Chondroitin sulfate** works alongside glucosamine, supporting the elasticity and water retention of cartilage tissue.

**MSM (methylsulfonylmethane)** is a natural source of sulfur, a mineral involved in maintaining connective tissue and supporting a normal response to exercise-related stress.

**Green-lipped mussel (GLM)** from New Zealand provides a unique combination of omega-3s (including ETA), glycosaminoglycans, and minerals. Multiple veterinary studies have evaluated GLM for supporting joint comfort and mobility in dogs.

**Omega-3 fatty acids (EPA & DHA)** from fish oil support a normal inflammatory response and are among the most studied nutrients in canine mobility research.

## When should a dog start joint support?

Earlier than most owners think. Cartilage has limited blood supply and repairs slowly, so maintaining it is easier than rebuilding it:

- **Large & giant breeds** (Labs, Shepherds, Goldens): from around age 2–3
- **Active/sporting dogs**: during their working years, not after
- **All breeds**: by the senior years (7+ for most dogs)

## What else protects joints besides supplements?

1. **Keep your dog lean.** Every extra pound multiplies load across the joints. Body condition is the single most powerful factor owners control.
2. **Favor consistent, low-impact exercise.** Daily walks and swimming beat weekend-only intensity.
3. **Add traction and ramps at home.** Rugs on slick floors and car ramps reduce repetitive strain.
4. **Schedule regular vet checks.** Early professional evaluation matters more than any supplement.`,
    category: "guides",
    tags: "joint health,mobility,glucosamine,senior dogs",
    species: "dog",
    ...TEAM,
    pillar: true,
    readMinutes: 8,
    faqs: [
      {
        q: "What is the best joint supplement ingredient for dogs?",
        a: "No single ingredient does everything. Formulas combining glucosamine, chondroitin, MSM, green-lipped mussel, and omega-3s cover cartilage structure, tissue elasticity, and a normal inflammatory response together — which is why multi-ingredient formulas are the standard in veterinary-formulated products.",
      },
      {
        q: "How long does it take to see results from a dog joint supplement?",
        a: "Nutritional support builds gradually. Most owners report noticeable changes in mobility and willingness to move after 4–6 weeks of consistent daily use, with full effect around 8–12 weeks.",
      },
      {
        q: "Can I give my dog human glucosamine?",
        a: "It's not recommended. Human products may contain xylitol or dosages inappropriate for dogs. Choose a supplement formulated and dosed specifically for canine body weights.",
      },
      {
        q: "Do puppies need joint supplements?",
        a: "Generally no — growing joints need balanced puppy nutrition, not supplementation, unless your veterinarian advises otherwise for specific breeds or conditions.",
      },
      {
        q: "Are joint supplements safe for long-term daily use?",
        a: "Glucosamine, chondroitin, MSM, and fish oil have long safety records in dogs at labeled doses. Always follow the feeding guide for your dog's weight and consult your vet if your dog takes medication.",
      },
    ],
    sources: [
      { label: "American Kennel Club — Canine joint health resources", url: "https://www.akc.org/expert-advice/health/" },
      { label: "American College of Veterinary Surgeons — Osteoarthritis in dogs", url: "https://www.acvs.org/small-animal/osteoarthritis-in-dogs/" },
      { label: "National Animal Supplement Council (NASC) — Quality standards", url: "https://www.nasc.cc/" },
    ],
    coverColorKey: "forest",
    seoTitle: "Dog Joint Health: Complete Guide to Mobility & Joint Supplements",
    seoDescription:
      "Early signs of joint discomfort, when to start support, and what research says about glucosamine, chondroitin, MSM, green-lipped mussel and omega-3 for dogs.",
  },

  // ---------- 支柱文章 2：狗肠道健康 ----------
  {
    slug: "dog-gut-health-probiotics-guide",
    title: "Dog Gut Health & Probiotics: Everything Owners Need to Know",
    excerpt:
      "Your dog's gut does more than digest food. Learn how the canine microbiome works, what CFU counts actually mean, and how to choose an effective probiotic.",
    answerCapsule:
      "A healthy dog gut hosts trillions of bacteria that support digestion, stool quality, skin condition, and immune function — about 70% of a dog's immune system is located in the gut. Probiotics supply beneficial bacteria; prebiotics feed them. Look for named strains, guaranteed CFU counts through the expiration date, and dog-specific formulation.",
    content: `## Why does gut health matter so much for dogs?

The canine digestive tract hosts a vast microbial community — the gut microbiome — that helps break down food, produce vitamins, and maintain the intestinal barrier. Veterinary immunology research consistently places the majority of a dog's immune tissue in and around the gut.

When the microbiome is balanced, you see it from the outside: consistent stools, comfortable digestion, healthy skin and coat, steady energy.

## What disrupts a dog's gut balance?

- Sudden food changes or rich table scraps
- Courses of antibiotics (which clear beneficial bacteria along with harmful ones)
- Stress: travel, boarding, moving house, new pets
- Age — microbial diversity tends to decline in senior dogs
- Scavenging ("garbage gut")

## What's the difference between probiotics and prebiotics?

**Probiotics** are live beneficial bacteria — commonly *Lactobacillus acidophilus*, *Lactobacillus plantarum*, and *Bifidobacterium animalis* in canine formulas. They temporarily join the resident community and support a balanced gut environment.

**Prebiotics** (like inulin and FOS) are specialized fibers that feed beneficial bacteria. A formula combining both is called a **synbiotic** and is generally the better choice.

## What does CFU mean on a probiotic label?

CFU — colony-forming units — measures live, viable bacteria. For dogs, formulas typically range from 1 to 10 billion CFU per serving. Two details matter more than the biggest number:

1. **Guaranteed at expiration, not at manufacture.** Live cultures die off over time; quality brands guarantee potency through shelf life.
2. **Named strains.** "Proprietary blend" tells you nothing. Specific strains with species designations signal a serious formula.

## How do I choose a good dog probiotic?

Use this checklist:

- Named strains with CFU guaranteed through expiration
- Includes a prebiotic (inulin, FOS, or pumpkin fiber)
- Formulated specifically for dogs
- Third-party tested, made in a GMP-certified facility
- A format your dog will actually take daily — consistency beats potency

## How should I introduce a probiotic?

Start with half the recommended serving for 3–5 days, then move to the full serving. Mild, temporary changes in stool during the first week are normal as the gut community adjusts. If digestive upset is severe or persistent, stop and consult your veterinarian.`,
    category: "guides",
    tags: "gut health,probiotics,digestion,microbiome",
    species: "dog",
    ...TEAM,
    pillar: true,
    readMinutes: 7,
    faqs: [
      {
        q: "How many CFU does my dog need in a probiotic?",
        a: "Most canine formulas provide 1–10 billion CFU per serving. More isn't automatically better — strain selection, prebiotic inclusion, and potency guaranteed through expiration matter more than the raw number.",
      },
      {
        q: "Can I give my dog human probiotics or yogurt?",
        a: "Occasional plain yogurt is safe for most dogs but delivers inconsistent, low CFU counts, and human capsules aren't formulated for canine gut flora. A dog-specific synbiotic is the more reliable choice.",
      },
      {
        q: "Should dogs take probiotics during or after antibiotics?",
        a: "Many veterinarians suggest probiotic support during and for 2–4 weeks after an antibiotic course, spaced a few hours apart from the medication. Always follow your vet's specific guidance.",
      },
      {
        q: "How long until a probiotic makes a difference?",
        a: "Stool quality changes often appear within 1–2 weeks; broader benefits like skin and coat condition typically take 4–8 weeks of daily use.",
      },
    ],
    sources: [
      { label: "WSAVA Global Nutrition Committee — Nutrition toolkit", url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/" },
      { label: "Cornell University College of Veterinary Medicine", url: "https://www.vet.cornell.edu/" },
      { label: "FDA — Animal food & supplement regulation overview", url: "https://www.fda.gov/animal-veterinary" },
    ],
    coverColorKey: "clay",
    seoTitle: "Dog Gut Health & Probiotics Guide: CFU, Strains & How to Choose",
    seoDescription:
      "How the canine microbiome works, what disrupts it, what CFU counts mean, and a vet-informed checklist for choosing an effective dog probiotic.",
  },

  // ---------- 支柱文章 3：猫补充剂指南 ----------
  {
    slug: "cat-supplement-guide",
    title: "Do Cats Need Supplements? A Practical, Vet-Informed Guide",
    excerpt:
      "Cats hide discomfort well and have unique nutritional needs. Here's when supplements genuinely help cats — and when they don't.",
    answerCapsule:
      "Most healthy adult cats on complete diets don't need daily supplements. Targeted support becomes useful in specific situations: L-lysine for immune support, fiber and malt formulas for hairball control, omega-3s for skin and senior joint comfort, and probiotics during stress or diet transitions. Cats are not small dogs — always choose feline-specific formulas.",
    content: `## Do cats actually need supplements?

If your cat eats a complete and balanced commercial diet, their baseline nutrition is covered. Supplements earn their place in **targeted situations** — supporting immune function, managing hairballs, easing seasonal stress, or maintaining aging joints.

The golden rule: cats are obligate carnivores with unique metabolism. Never give dog or human products to cats; several common ingredients are inappropriate or unsafe for felines.

## When is L-lysine used for cats?

L-lysine is an amino acid widely used to support feline immune health, particularly in multi-cat households and shelters where stress runs high. It's typically offered as a palatable powder mixed into wet food at 250–500 mg per day for adult cats.

## What actually helps with hairballs?

Hairballs form when grooming-swallowed fur clumps instead of passing through. Three things help it pass naturally:

1. **Regular brushing** — less loose fur swallowed in the first place
2. **Fiber** (psyllium, pumpkin) — adds bulk that helps move fur through the digestive tract
3. **Malt or oil-based lubrication** — helps ingested fur slide through

Occasional hairballs are normal. Frequent vomiting, retching without producing anything, lethargy, or appetite loss are veterinary matters, not supplement matters.

## Which cats benefit from omega-3s?

Fish oil (EPA/DHA) supports skin condition, coat shine, and normal inflammatory response. It's most useful for cats with dull coats or dry, flaky skin, and for senior cats as part of mobility support. Feline dosing is much lower than canine dosing — use a product with cat-specific guidance.

## What about senior cats?

Cats over 10 often benefit from combined support: omega-3s and joint nutrients for comfortable movement, plus probiotics as digestion becomes more sensitive. Because cats mask discomfort instinctively, twice-yearly senior vet checks matter more than any supplement decision.

## How do I get a supplement into a cat?

The best supplement is the one your cat accepts:

- **Powders** mixed into wet food are the most reliable
- **Pastes/gels** work for cats that lick treats from a finger
- Introduce gradually, starting with a quarter dose mixed into a favorite meal`,
    category: "guides",
    tags: "cat supplements,lysine,hairball,senior cats",
    species: "cat",
    ...TEAM,
    pillar: true,
    readMinutes: 7,
    faqs: [
      {
        q: "Can I give my cat a supplement made for dogs?",
        a: "No. Cats metabolize ingredients differently, and dosages differ dramatically. Some ingredients that are fine for dogs are inappropriate for cats. Only use feline-specific or clearly dual-labeled products with separate cat dosing.",
      },
      {
        q: "How much L-lysine can I give my cat?",
        a: "Typical feline servings are 250–500 mg daily for adult cats, mixed with food. Follow the product label and your veterinarian's advice.",
      },
      {
        q: "Are hairball pastes safe for daily use?",
        a: "Quality malt- and fiber-based pastes are designed for regular use during shedding seasons. Follow label serving sizes, and see a vet if hairball symptoms are frequent or severe.",
      },
      {
        q: "What's the easiest supplement format for cats?",
        a: "Powders with mild flavors mixed into wet food have the highest acceptance rate, followed by lickable pastes. Pills are the hardest — avoid them unless your cat is unusually cooperative.",
      },
    ],
    sources: [
      { label: "Cornell Feline Health Center", url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center" },
      { label: "WSAVA Global Nutrition Guidelines", url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/" },
      { label: "AAFP — American Association of Feline Practitioners", url: "https://catvets.com/" },
    ],
    coverColorKey: "plum",
    seoTitle: "Do Cats Need Supplements? Vet-Informed Guide to Feline Support",
    seoDescription:
      "When supplements genuinely help cats: L-lysine, hairball control, omega-3s, probiotics, and senior support — plus safety rules every cat owner should know.",
  },

  // ---------- 问答短文 4 ----------
  {
    slug: "how-long-does-glucosamine-take-to-work-in-dogs",
    title: "How Long Does Glucosamine Take to Work in Dogs?",
    excerpt: "Glucosamine builds gradually. Here's the realistic timeline, week by week.",
    answerCapsule:
      "Glucosamine typically takes 4–6 weeks of consistent daily use to produce noticeable changes in a dog's mobility and comfort, with full benefit around 8–12 weeks. It works nutritionally — supporting cartilage maintenance over time — not like a fast-acting pain medication. Consistency and correct weight-based dosing matter most.",
    content: `## The realistic timeline

Glucosamine is a nutritional building block, not a quick-relief drug. It supplies raw material that joint tissue uses over time, so the effect compounds gradually:

- **Weeks 1–2:** No visible change for most dogs. The nutrient is accumulating in joint tissue.
- **Weeks 3–4:** Early signs in some dogs — rising more easily, more enthusiasm on walks.
- **Weeks 4–6:** The most common window for owners to notice a difference.
- **Weeks 8–12:** Full nutritional effect at consistent daily dosing.

## Why consistency beats everything

Skipping days resets progress. Tissue concentrations of glucosamine depend on steady daily intake, which is why palatable soft chews outperform pills in practice — dogs take them reliably.

## How to make sure it's working

Take a 10-second video of your dog standing up from rest and climbing stairs before you start. Repeat monthly. Side-by-side video is far more objective than memory.

If you see no change at all after 12 weeks of correct daily dosing, talk to your veterinarian — there may be something going on that nutrition alone can't address.`,
    category: "nutrition",
    tags: "glucosamine,joint health,timeline",
    species: "dog",
    ...TEAM,
    pillar: false,
    readMinutes: 3,
    faqs: [
      {
        q: "Can I speed up glucosamine results?",
        a: "You can't rush tissue nutrition, but combining glucosamine with omega-3s, keeping your dog lean, and consistent low-impact exercise all support the same goal and improve overall results.",
      },
      {
        q: "Should I give a loading dose?",
        a: "Some veterinarians suggest a doubled serving for the first 4–6 weeks. Follow the product's label or your vet's guidance rather than improvising.",
      },
      {
        q: "What if my dog misses a day?",
        a: "One missed day won't undo progress — just resume the normal serving. Avoid doubling up unless the label says otherwise.",
      },
    ],
    sources: [
      { label: "American College of Veterinary Surgeons", url: "https://www.acvs.org/small-animal/osteoarthritis-in-dogs/" },
      { label: "AKC — Joint supplements overview", url: "https://www.akc.org/expert-advice/health/" },
    ],
    coverColorKey: "forest",
    seoTitle: "How Long Does Glucosamine Take to Work in Dogs? (Week-by-Week)",
    seoDescription:
      "A realistic week-by-week timeline for glucosamine in dogs: when to expect changes, why consistency matters, and how to objectively track progress.",
  },

  // ---------- 问答短文 5 ----------
  {
    slug: "can-dogs-take-fish-oil-every-day",
    title: "Can Dogs Take Fish Oil Every Day?",
    excerpt: "Yes — daily use is exactly how fish oil works. Here's how to dose it right.",
    answerCapsule:
      "Yes, dogs can take fish oil daily — consistent daily use is how omega-3s (EPA and DHA) build up in tissues to support skin, coat, joints, and heart health. The keys are correct weight-based dosing, a purified product tested for oxidation and heavy metals, and refrigeration after opening.",
    content: `## Daily is the point

Omega-3 fatty acids incorporate into cell membranes gradually. Skipping days keeps tissue levels low, which is why every credible feeding guide is written as a daily serving.

## What daily fish oil supports

- **Skin & coat:** the most visible change — many owners report softer coats and less flaking within 4–8 weeks
- **Joints:** EPA supports a normal inflammatory response, complementing glucosamine-based support
- **Heart, brain, eyes:** DHA is a structural fat in neural tissue; senior dogs and puppies both benefit

## Getting the dose right

Dosing scales with body weight and is usually expressed as combined EPA+DHA. Follow your product's weight chart, start at half serving for the first week, and give it with food.

## Quality checklist

1. Wild-caught, small-fish sources (anchovy, sardine, salmon) for lower contaminant risk
2. Third-party tested for purity and freshness (oxidized fish oil smells harshly "fishy")
3. Dark bottle, refrigerated after opening, used within 60–90 days

## When to check with your vet first

Fish oil mildly affects platelet function at high doses. If your dog is on blood-thinning medication, has a scheduled surgery, or has a chronic condition, confirm dosing with your veterinarian.`,
    category: "nutrition",
    tags: "fish oil,omega-3,skin and coat",
    species: "dog",
    ...TEAM,
    pillar: false,
    readMinutes: 3,
    faqs: [
      {
        q: "Can too much fish oil hurt a dog?",
        a: "Excessive amounts can cause digestive upset and, long term, affect platelet function and vitamin E status. Stay within the labeled weight-based serving unless your vet directs otherwise.",
      },
      {
        q: "Liquid fish oil or chews — which is better?",
        a: "Liquid pumps are economical and easy to dose precisely over food. Chews win for picky dogs and travel. Both work if EPA+DHA content per serving is adequate.",
      },
      {
        q: "How should fish oil be stored?",
        a: "Refrigerate after opening, keep the cap tight, and use within 60–90 days. Discard if it develops a harsh rancid smell.",
      },
    ],
    sources: [
      { label: "AKC — Fish oil for dogs", url: "https://www.akc.org/expert-advice/health/" },
      { label: "WSAVA Global Nutrition Guidelines", url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/" },
    ],
    coverColorKey: "amber",
    seoTitle: "Can Dogs Take Fish Oil Every Day? Dosing & Safety Guide",
    seoDescription:
      "Daily fish oil is safe and effective for most dogs when dosed by weight. Learn what it supports, how to choose a pure product, and storage rules.",
  },

  // ---------- 问答短文 6 ----------
  {
    slug: "probiotics-for-dogs-with-sensitive-stomachs",
    title: "Probiotics for Dogs With Sensitive Stomachs: A Gentle-Start Plan",
    excerpt: "Sensitive dogs need a slower introduction. This 14-day plan minimizes digestive surprises.",
    answerCapsule:
      "For dogs with sensitive stomachs, introduce probiotics gradually: quarter dose for days 1–4, half dose for days 5–9, full dose from day 10. Choose a synbiotic formula with named strains, added prebiotic fiber, and soothing botanicals like pumpkin. Mild stool changes in week one are normal; severe or persistent upset means stop and call your vet.",
    content: `## Why sensitive dogs react to sudden changes

A sensitive gut has a less resilient microbial community. Even beneficial bacteria arriving all at once can temporarily shift digestion. The fix isn't avoiding probiotics — it's a gradual introduction.

## The 14-day gentle-start plan

- **Days 1–4:** ¼ of the labeled serving, mixed into the main meal
- **Days 5–9:** ½ serving
- **Days 10–14:** full serving
- **Ongoing:** full serving daily, ideally at the same meal each day

Keep everything else constant during these two weeks — same food, same treats — so you can read your dog's response clearly.

## What to look for in the formula

1. **Named strains** (e.g., *L. acidophilus*, *B. animalis*) with guaranteed CFU through expiration
2. **Built-in prebiotics** — inulin or pumpkin fiber feeds the new arrivals
3. **Gentle carriers** — pumpkin and papaya are classic choices for sensitive formulas
4. **Short ingredient list** — fewer variables for a reactive gut

## Normal adjustment vs. red flags

Softer stool or mild gas in the first week: normal, usually resolves by day 10. Vomiting, refusal to eat, lethargy, or watery stool beyond a couple of days: stop the supplement and consult your veterinarian.`,
    category: "nutrition",
    tags: "probiotics,sensitive stomach,digestion",
    species: "dog",
    ...TEAM,
    pillar: false,
    readMinutes: 3,
    faqs: [
      {
        q: "Should I give probiotics with food or on an empty stomach?",
        a: "With food. Meals buffer stomach acid, improving the survival rate of live cultures on their way to the intestines — and mixing into meals guarantees acceptance.",
      },
      {
        q: "My dog got gassy after starting probiotics. Stop or continue?",
        a: "Mild gas in week one is a normal sign of a shifting microbial community. Hold at the current dose a few extra days before increasing. Stop if symptoms are severe or persist past two weeks.",
      },
      {
        q: "Can probiotics replace a diet change for a sensitive dog?",
        a: "No — they complement, not replace, an appropriate diet. If sensitivity persists, work with your vet on the underlying diet question first.",
      },
    ],
    sources: [
      { label: "Cornell University College of Veterinary Medicine", url: "https://www.vet.cornell.edu/" },
      { label: "WSAVA Global Nutrition Guidelines", url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/" },
    ],
    coverColorKey: "clay",
    seoTitle: "Probiotics for Dogs With Sensitive Stomachs: 14-Day Start Plan",
    seoDescription:
      "A gentle 14-day probiotic introduction plan for sensitive dogs, what to look for in a formula, and how to tell normal adjustment from red flags.",
  },

  // ---------- 问答短文 7 ----------
  {
    slug: "is-goat-milk-good-for-puppies",
    title: "Is Goat Milk Good for Puppies? Benefits, Risks & How to Serve It",
    excerpt: "Goat milk is a gentle, nutrient-dense topper for puppies — used the right way.",
    answerCapsule:
      "Goat milk is gentler on puppy digestion than cow's milk: its smaller fat globules and different protein profile are easier to process, and it provides highly digestible protein, calcium, and natural probiotics. Use it as a food topper or treat — up to about 10% of daily calories — never as a replacement for balanced puppy food or proper milk replacer for orphaned newborns.",
    content: `## Why goat milk over cow's milk?

Goat milk's fat globules are naturally smaller and its casein profile differs from cow's milk, making it noticeably easier on most puppies' digestion. It also carries less lactose than cow's milk — though it is not lactose-free.

## What goat milk offers a growing puppy

- Highly digestible protein and fat for steady energy
- Calcium and phosphorus in growth-friendly ratios
- Naturally occurring probiotics (in fermented or properly processed powder forms)
- Strong palatability — useful for picky eaters and food transitions

## The right role: topper, not diet

A puppy's foundation must be a complete and balanced growth diet. Goat milk works as:

- A rehydrating topper poured over kibble (mix powder with warm water)
- A high-value treat or lick-mat filler
- A transition aid when switching foods

Keep it to roughly 10% of daily calories to avoid unbalancing the main diet.

## Important cautions

1. **Newborn orphans need formulated puppy milk replacer** — plain goat milk lacks the correct nutrient density for sole feeding.
2. **Introduce gradually** over 3–5 days and watch stool quality.
3. **Choose powder made for pets** — it's processed for safety and consistent nutrition, unlike raw milk which carries pathogen risk.`,
    category: "nutrition",
    tags: "goat milk,puppies,nutrition",
    species: "dog",
    ...TEAM,
    pillar: false,
    readMinutes: 3,
    faqs: [
      {
        q: "Can adult dogs and cats have goat milk too?",
        a: "Yes — the same digestibility advantages apply. It's a popular hydration booster for cats and a topper for senior pets with reduced appetites.",
      },
      {
        q: "How do I prepare goat milk powder?",
        a: "Mix the labeled scoop amount with warm (not hot) water, stir until smooth, and serve alone or over food. Refrigerate prepared milk and use within 24 hours.",
      },
      {
        q: "Can goat milk cause diarrhea in puppies?",
        a: "Introduced too fast or in large amounts, any rich food can. Start with a small amount over 3–5 days. Persistent loose stool means stop and consult your vet.",
      },
    ],
    sources: [
      { label: "AKC — Puppy feeding fundamentals", url: "https://www.akc.org/expert-advice/nutrition/" },
      { label: "WSAVA Global Nutrition Guidelines", url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/" },
    ],
    coverColorKey: "oat",
    seoTitle: "Is Goat Milk Good for Puppies? Benefits, Risks & Serving Guide",
    seoDescription:
      "Why goat milk is gentler than cow's milk for puppies, what it offers nutritionally, and the right way to serve it as a topper — plus key cautions.",
  },

  // ---------- 问答短文 8 ----------
  {
    slug: "cat-hairball-remedies-that-actually-help",
    title: "Cat Hairball Remedies That Actually Help (And What Doesn't)",
    excerpt: "Brushing, fiber, and lubrication — the three-part approach that works.",
    answerCapsule:
      "Effective hairball management combines three approaches: regular brushing to reduce swallowed fur, dietary fiber (psyllium or pumpkin) to bulk and move fur through the gut, and malt- or oil-based lubrication to help ingested fur pass. Home remedies like butter or mineral oil are not recommended. Frequent hairballs — more than one or two a month — warrant a vet visit.",
    content: `## Why hairballs happen

Cats swallow loose fur while grooming. Most passes through the digestive tract uneventfully; when it accumulates in the stomach instead, it comes back up as the classic tubular hairball. Long-haired breeds and heavy shedders are most affected, especially in spring and fall.

## The three-part approach that works

**1. Reduce intake: brushing.** Five minutes of daily brushing during shedding season removes fur before your cat swallows it. This is the highest-impact step and it's free.

**2. Move it through: fiber.** Psyllium husk and pumpkin add gentle bulk that helps carry fur through the intestines. Fiber-enriched hairball formulas work on this principle.

**3. Help it slide: lubrication.** Malt-based pastes coat ingested fur so it passes with stool instead of accumulating. Offered as a lickable treat, most cats take them willingly.

## What NOT to use

- **Butter or cooking oils** — add calories, do little at digestive level
- **Mineral oil** — aspiration risk; never give directly by mouth
- **Human laxatives** — genuinely dangerous for cats

## When it's more than hairballs

Retching without producing anything, appetite loss, lethargy, or constipation can signal a blockage or another condition. More than one or two hairballs a month is a pattern worth discussing with your veterinarian.`,
    category: "behavior",
    tags: "hairball,cats,grooming",
    species: "cat",
    ...TEAM,
    pillar: false,
    readMinutes: 3,
    faqs: [
      {
        q: "How often should I give a hairball paste?",
        a: "During shedding seasons, 2–3 times weekly is a common maintenance rhythm; daily short-term use is fine per label directions. Follow your product's serving guide.",
      },
      {
        q: "Do hairball control cat foods work?",
        a: "Fiber-enriched diets help many cats, and pairing them with brushing and a malt paste covers all three mechanisms — reduction, movement, and lubrication.",
      },
      {
        q: "Are hairballs ever an emergency?",
        a: "Repeated unproductive retching, no appetite, or no stool can indicate an obstruction — that's a same-day veterinary visit, not a supplement situation.",
      },
    ],
    sources: [
      { label: "Cornell Feline Health Center", url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center" },
      { label: "AAFP — Feline care resources", url: "https://catvets.com/" },
    ],
    coverColorKey: "sage",
    seoTitle: "Cat Hairball Remedies That Actually Help (Vet-Informed Guide)",
    seoDescription:
      "The three-part hairball approach that works — brushing, fiber, lubrication — what to avoid, and when hairballs signal something serious.",
  },

  // ---------- 问答短文 9 ----------
  {
    slug: "natural-calming-aids-for-dog-anxiety",
    title: "Natural Calming Support for Dogs: What Works for Stressful Moments",
    excerpt: "Thunderstorms, fireworks, travel, separation — how calming ingredients work and how to use them well.",
    answerCapsule:
      "Natural calming support for dogs centers on L-theanine (promotes relaxation without drowsiness), L-tryptophan (a serotonin precursor), chamomile, and valerian root. These support calm behavior during predictable stressors — fireworks, travel, grooming, storms — and work best given 60–90 minutes before the event, paired with behavioral strategies like safe spaces and desensitization.",
    content: `## How calming ingredients actually work

**L-theanine**, an amino acid from green tea, promotes relaxed alertness — dogs stay calm without sedation. **L-tryptophan** is a precursor the body uses to make serotonin, supporting balanced mood. **Chamomile** and **valerian root** are traditional botanicals used to promote relaxation. Quality calming chews combine several of these for complementary effects.

These are supportive nutrients, not sedatives — the goal is taking the edge off, not knocking your dog out.

## Timing is everything

Calming support works best **before** stress peaks:

- **Predictable events** (fireworks, car rides, grooming): give 60–90 minutes ahead
- **Ongoing situational stress** (moving, new baby, boarding): daily use through the period
- **Separation-related stress:** give before departure routines begin

## Pair with behavioral basics

Supplements amplify — they don't replace — good management:

1. A safe den space with white noise during storms and fireworks
2. Gradual desensitization to triggers (car, crate, nail trims)
3. Exercise earlier in the day to lower baseline arousal
4. Your own calm behavior — dogs read us constantly

## When it's beyond supplements

Destructive panic, self-injury, or anxiety that dominates daily life needs a veterinarian or veterinary behaviorist. Severe anxiety is a medical topic, and effective help exists.`,
    category: "behavior",
    tags: "calming,anxiety,fireworks,travel",
    species: "dog",
    ...TEAM,
    pillar: false,
    readMinutes: 4,
    faqs: [
      {
        q: "Will calming chews make my dog sleepy?",
        a: "Formulas built on L-theanine and tryptophan promote relaxation without sedation at labeled servings. Valerian-heavy formulas can be mildly drowsy for some dogs — start on a low-stakes day to see your dog's response.",
      },
      {
        q: "Can I use calming chews daily long-term?",
        a: "The common ingredients have good safety records for daily use at labeled servings. For ongoing anxiety, combine with behavior work and loop in your vet.",
      },
      {
        q: "How far in advance should I give a calming chew before fireworks?",
        a: "60–90 minutes before the noise starts, so the ingredients are active when the first bangs hit.",
      },
    ],
    sources: [
      { label: "AKC — Dog anxiety resources", url: "https://www.akc.org/expert-advice/health/" },
      { label: "American College of Veterinary Behaviorists", url: "https://www.dacvb.org/" },
    ],
    coverColorKey: "plum",
    seoTitle: "Natural Calming Support for Dogs: L-Theanine, Chamomile & Timing",
    seoDescription:
      "How L-theanine, tryptophan, chamomile and valerian support calm dogs, when to give them before stressful events, and behavior strategies to pair.",
  },
];
