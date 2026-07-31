// Learn Hub 内容 —— GEO 规范：答案胶囊开头、问题式小标题、FAQ、来源引用

export const postsData = [
  {
    slug: "dog-joint-health-complete-guide",
    title: "Dog Joint Health: The Complete Guide to Mobility at Every Age",
    excerpt:
      "How dog joints age, the early signs owners miss, and what actually supports mobility — from weight control to glucosamine dosages backed by research.",
    answerCapsule:
      "Dog joint health depends on four controllable factors: lean body weight, appropriate exercise, early support for at-risk breeds, and targeted nutrition. Research suggests roughly 20% of dogs over age one show signs of osteoarthritis. Glucosamine, chondroitin, omega-3s and green-lipped mussel are the most-studied nutritional supports, working best when started before visible stiffness.",
    category: "guides",
    tags: "joints,mobility,senior dogs,glucosamine",
    species: "dog",
    pillar: true,
    readMinutes: 9,
    coverColorKey: "clay",
    authorName: "EMBEPET Science Team",
    authorTitle: "Formulation & Nutrition",
    authorBio: "Our in-house team of animal nutrition specialists translates published veterinary research into practical feeding guidance.",
    reviewedBy: "Reviewed for accuracy against published veterinary literature",
    content: `## Why do dog joints wear out?

A dog's joint is a precision bearing: cartilage for cushioning, synovial fluid for lubrication, ligaments for stability. Every fetch sprint and staircase loads that bearing. Cartilage has almost no blood supply, which means it repairs slowly — damage accumulates quietly for years before the first visible limp.

Veterinary studies estimate that around 20% of dogs over one year of age show radiographic signs of osteoarthritis, and prevalence climbs steeply with age and body weight. In giant breeds, joint stress begins in puppyhood.

## Which dogs are most at risk?

- **Large and giant breeds** — Labradors, Goldens, German Shepherds, Rottweilers carry genetic predisposition to hip and elbow dysplasia.
- **Overweight dogs** — every extra pound multiplies load across four joints thousands of times a day. Weight is the single most controllable risk factor.
- **Athletes and weekend warriors** — agility dogs, ball-obsessed retrievers and dock divers load joints explosively.
- **Seniors** — cartilage thins and synovial fluid becomes less viscous with age in every breed.

## What early signs do owners miss?

The classic mistake is waiting for limping. Earlier signals include: hesitation before jumping onto furniture, "bunny hopping" up stairs, slower sit-to-stand transitions, licking one joint repeatedly, reluctance on longer walks, and irritability when touched near the hips. Dogs hide discomfort by instinct — by the time limping is obvious, changes are usually well established.

## What actually supports joint health?

### 1. Keep your dog lean

In a landmark 14-year Labrador study, dogs fed to lean body condition developed signs of osteoarthritis years later than their heavier littermates. If you can't easily feel ribs, start there before anything else.

### 2. Move daily, load sensibly

Consistent moderate exercise builds the muscle that stabilizes joints. Swimming and sniff walks beat weekend-only ball marathons. For at-risk breeds, avoid repetitive high-impact jumping during growth.

### 3. Start nutritional support early

The most-studied joint actives are:

| Active | Typical daily amount (50 lb dog) | Role |
| --- | --- | --- |
| Glucosamine HCl | 500–1000 mg | Cartilage building block |
| Chondroitin sulfate | 400–800 mg | Cartilage elasticity |
| MSM | 250–500 mg | Normal inflammatory response |
| Omega-3 (EPA/DHA) | 500–1000 mg | Joint comfort, well-supported by studies |
| Green-lipped mussel | 50–100 mg/kg food | Natural GAGs and omega-3s |

Supplements support structure and comfort; they do not reverse established arthritis. Dogs with diagnosed joint disease should follow a veterinary plan, where nutrition plays a supporting role.

### 4. Rethink the environment

Rugs on slippery floors, ramps to the car, raised bowls for tall seniors, and a warm orthopedic bed reduce daily micro-strain — cheap changes with outsized comfort returns.

## When should supplements start?

For large breeds and athletes: in early adulthood, before symptoms. For everyone else: at the first subtle sign, or by age 7. Joint nutrition works on the timescale of cartilage turnover — weeks to months — so the best time to start is before you think you need it.`,
    faqs: [
      { q: "What is the best joint supplement for dogs?", a: "Look for products that disclose exact amounts of glucosamine (450+ mg per serving for a mid-size dog), chondroitin, MSM and ideally omega-3s or green-lipped mussel, with third-party batch testing. Undisclosed 'proprietary blends' are a red flag." },
      { q: "How long does glucosamine take to work in dogs?", a: "Most owners report smoother movement after 4–6 weeks of consistent daily feeding, with full effect around 8 weeks. It builds up gradually rather than acting like a painkiller." },
      { q: "Can young dogs take joint supplements?", a: "Yes — large and giant breeds in particular benefit from early support since joint stress starts during growth. Use weight-based label dosing." },
      { q: "Do omega-3s really help joints?", a: "EPA/DHA omega-3s have some of the strongest published evidence among joint nutrients in dogs, supporting normal inflammatory response and measured improvements in weight-bearing." },
      { q: "Is my dog's limping an emergency?", a: "Sudden non-weight-bearing lameness, a hot swollen joint, or limping with fever or lethargy warrants a vet visit promptly. Gradual stiffness deserves an exam too — just less urgently." },
    ],
    sources: [
      { label: "American Kennel Club — Osteoarthritis in Dogs", url: "https://www.akc.org/expert-advice/health/osteoarthritis-signs-treatment/" },
      { label: "Kealy et al., Effects of diet restriction on life span and age-related changes in dogs (JAVMA, 14-year Labrador study)" },
      { label: "WSAVA Global Nutrition Guidelines", url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/" },
      { label: "Cornell University College of Veterinary Medicine — Canine Health Information" },
    ],
    translations: JSON.stringify({
      es: { title: "Salud articular canina: guía completa de movilidad a cualquier edad", excerpt: "Cómo envejecen las articulaciones, las señales tempranas que se escapan y qué apoya realmente la movilidad." },
      fr: { title: "Articulations du chien : le guide complet de la mobilité à tout âge", excerpt: "Comment vieillissent les articulations, les signes précoces qui passent inaperçus et ce qui soutient vraiment la mobilité." },
      de: { title: "Gelenkgesundheit beim Hund: der komplette Mobilitätsguide", excerpt: "Wie Hundegelenke altern, welche frühen Zeichen übersehen werden und was Beweglichkeit wirklich unterstützt." },
      ja: { title: "犬の関節ケア完全ガイド：いくつになっても軽やかに", excerpt: "関節はどう老いるのか、見逃しがちな初期サイン、そして本当に役立つケアとは。" },
    }),
  },
  {
    slug: "cat-urinary-health-prevention-guide",
    title: "Cat Urinary Health: The Prevention-First Guide Every Cat Parent Needs",
    excerpt:
      "Urinary issues are among the most common — and dangerous — feline health problems. Why male indoor cats are at risk, the emergency signs, and the daily habits that protect the bladder.",
    answerCapsule:
      "Feline lower urinary tract disease (FLUTD) affects roughly 1.5–4.5% of cats seen by vets and recurs in over half of affected cats. The three most protective daily habits are: maximizing water intake (wet food plus fountains), reducing household stress, and maintaining lean body weight. A straining cat that produces no urine is a life-threatening emergency requiring immediate veterinary care.",
    category: "guides",
    tags: "cats,urinary,FLUTD,hydration",
    species: "cat",
    pillar: true,
    readMinutes: 8,
    coverColorKey: "sky",
    authorName: "EMBEPET Science Team",
    authorTitle: "Formulation & Nutrition",
    authorBio: "Our in-house team of animal nutrition specialists translates published veterinary research into practical feeding guidance.",
    reviewedBy: "Reviewed for accuracy against published veterinary literature",
    content: `## Why are cat urinary problems such a big deal?

Feline lower urinary tract disease (FLUTD) is an umbrella for bladder and urethra problems: idiopathic cystitis, crystals, stones, and — most dangerous — urethral obstruction. Studies place FLUTD at roughly 1.5–4.5% of feline veterinary visits, making it one of the most common reasons cats see a vet.

Two facts make it uniquely serious. First, **male cats can block**: their long, narrow urethra can obstruct completely, which becomes life-threatening within 24 hours. Second, **it comes back**: long-term studies report recurrence in more than half of affected cats.

## Which cats are at highest risk?

- **Male cats** — anatomy makes obstruction possible; neutered males top the statistics.
- **Indoor, low-activity cats** — less drinking, less litter box traffic, more concentrated urine.
- **Overweight cats** — consistently overrepresented in FLUTD cases.
- **Multi-cat and high-stress homes** — stress is the best-documented trigger of idiopathic cystitis, the most common FLUTD form.
- **Cats on dry-only diets** — lower total water intake means more concentrated urine.

## What are the emergency signs?

Go to a vet immediately — same day, not next week — if your cat shows:

- Straining in the litter box with little or no urine produced
- Crying or yowling while urinating
- Repeatedly entering the box without results
- Licking the genital area persistently
- Vomiting, lethargy or hiding combined with any of the above

A blocked cat cannot wait overnight. If in doubt at 2 a.m., call an emergency clinic.

## What daily habits actually protect the bladder?

### 1. Water is the whole game

Concentrated urine is the common thread across nearly every FLUTD type. Practical levers, in order of impact:

1. **Feed wet food** — a wet-food diet can double total water intake versus dry-only.
2. **Add water bowls and a fountain** — many cats drink measurably more from moving water.
3. **Broth toppers and liquid supplements** — savory liquids mixed into meals add moisture cats accept happily.

### 2. Subtract stress

Idiopathic cystitis is strongly stress-linked. One litter box per cat plus one extra, boxes in quiet locations, vertical territory, predictable routines, and pheromone diffusers in multi-cat homes all measurably reduce flare risk.

### 3. Keep weight lean

Lean cats move more, drink more relative to body mass, and appear less often in FLUTD statistics.

### 4. Consider daily nutritional support

Cranberry proanthocyanidins (PACs) and D-mannose are the most-studied nutritional supports for urinary tract health, complemented by omega-3s for normal inflammatory response. Supplements support prevention habits — they never replace veterinary care for an active episode.

## What does recovery aftercare look like?

After a urinary episode, most vets outline: transition toward wet food, aggressive hydration encouragement, stress audit of the home, and often long-term monitoring. This is where prevention-minded daily support earns its keep — recurrence is the rule, not the exception, and the habits above are your leverage.`,
    faqs: [
      { q: "How can I get my cat to drink more water?", a: "Feed wet food (the biggest lever), add a fountain, place several wide bowls away from food and litter, and mix savory liquids or broths into meals. Aim for multiple small hydration wins daily." },
      { q: "Do cranberry supplements work for cats?", a: "Standardized cranberry PACs are the most-studied nutritional support for urinary tract health and are commonly used in prevention-focused routines. They support bladder defenses; they do not treat infections or blockages." },
      { q: "Why does my male cat keep getting urinary problems?", a: "Recurrence affects more than half of FLUTD cats. Male anatomy, stress sensitivity, weight and hydration all stack. Work the daily habits and keep your vet in the loop." },
      { q: "Is a cat straining in the litter box always an emergency?", a: "Straining with little or no urine in a male cat is a drop-everything emergency. In females, same-day veterinary attention is still warranted — obstruction is rarer but pain and infection are not." },
      { q: "Wet food vs dry food for urinary health?", a: "Wet food's moisture advantage makes it the standard recommendation for urinary-prone cats. If dry food stays in the rotation, compensate deliberately with fountains, broths and liquid toppers." },
    ],
    sources: [
      { label: "Cornell Feline Health Center — Feline Lower Urinary Tract Disease", url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-lower-urinary-tract-disease" },
      { label: "Frontiers in Veterinary Science — FLUTD/FIC epidemiology reviews" },
      { label: "Journal of Feline Medicine and Surgery — long-term FLUTD recurrence studies" },
      { label: "International Cat Care — Urinary problems in cats", url: "https://icatcare.org/" },
    ],
    translations: JSON.stringify({
      es: { title: "Salud urinaria felina: la guía de prevención que todo cuidador necesita", excerpt: "Por qué los gatos machos de interior son los más vulnerables, las señales de emergencia y los hábitos diarios que protegen la vejiga." },
      fr: { title: "Santé urinaire du chat : le guide prévention indispensable", excerpt: "Pourquoi les mâles d'intérieur sont les plus à risque, les signes d'urgence et les habitudes quotidiennes qui protègent la vessie." },
      de: { title: "Harnwegsgesundheit bei Katzen: der Präventionsguide für alle Katzeneltern", excerpt: "Warum Wohnungskater am stärksten gefährdet sind, welche Notfallzeichen zählen und welche täglichen Gewohnheiten die Blase schützen." },
      ja: { title: "猫の泌尿器ケア：すべての飼い主に必要な「予防ファースト」ガイド", excerpt: "室内飼いのオス猫がリスクを抱える理由、緊急サイン、膀胱を守る毎日の習慣。" },
    }),
  },
  {
    slug: "dog-anxiety-calming-guide",
    title: "Dog Anxiety: What Actually Calms a Stressed Dog (and What Doesn't)",
    excerpt:
      "Separation distress, fireworks panic, travel shakes — anxiety is one of the most common behavior complaints in dogs. A practical guide to triggers, training, environment and calming nutrition.",
    answerCapsule:
      "Studies estimate 17–48% of dogs show anxiety-related behaviors, with separation distress and noise phobia the most common. Effective management combines four layers: identifying triggers, gradual desensitization training, environmental management (safe spaces, white noise), and calming nutrition such as L-theanine and tryptophan given 30–60 minutes before known stressors. Punishment reliably makes anxiety worse.",
    category: "behavior",
    tags: "anxiety,calming,behavior,fireworks",
    species: "dog",
    pillar: true,
    readMinutes: 8,
    coverColorKey: "plum",
    authorName: "EMBEPET Science Team",
    authorTitle: "Formulation & Nutrition",
    authorBio: "Our in-house team of animal nutrition specialists translates published veterinary research into practical feeding guidance.",
    reviewedBy: "Reviewed for accuracy against published veterinary literature",
    content: `## How common is dog anxiety, really?

Very. Large epidemiological studies (Tiira 2016; Salonen 2020 across nearly 14,000 dogs) estimate 17–48% of dogs show anxiety-related behaviors. Noise sensitivity tops the list, followed by fear of strangers and separation distress. Dogs left alone more than six hours daily show meaningfully higher rates of separation-related behavior — a structural reality of the 9-to-5 household.

## What does anxiety look like beyond the obvious?

Everyone recognizes trembling during fireworks. Subtler and equally telling signs include: pacing that doesn't settle, excessive lip-licking and yawning outside mealtimes/sleep, shadowing you room to room, destruction targeted at exits (door frames, window sills), drooling in the car, house soiling only when alone, and "shutdown" stillness that owners misread as calm.

## What are the four layers of effective calming?

### Layer 1: Name the trigger

Keep a one-week log: what happened in the 10 minutes before each episode? Separation, noise, novel people, travel, or unpredictability? Precision here decides everything downstream.

### Layer 2: Train the brain (desensitization + counter-conditioning)

The gold standard: expose the dog to a *tiny* version of the trigger (a recording of thunder at whisper volume) while pairing it with something wonderful, then increase intensity so slowly the dog never tips over threshold. Five-minute sessions beat weekend marathons. For separation: practice departures of 30 seconds before 30 minutes.

**What doesn't work:** punishment or flooding (locking a panicked dog in with the trigger). Both reliably deepen fear — the research is unambiguous.

### Layer 3: Engineer the environment

- A den-like safe space the dog chose (never used for punishment)
- White noise or music to mask trigger sounds
- Sniffing outlets: scatter feeding, snuffle mats, decompression walks
- Predictable daily rhythm — anxiety feeds on unpredictability

### Layer 4: Nutritional support

The most-studied calming nutrients work on the neurotransmitters of relaxation:

| Ingredient | Mechanism | Note |
| --- | --- | --- |
| L-theanine | Promotes alpha-wave "calm alert" state | Best studied; non-drowsy |
| L-tryptophan | Serotonin precursor | Builds over days–weeks |
| Alpha-casozepine | Milk-protein-derived calming peptide | Used in veterinary calming diets |
| Chamomile / valerian | Botanical GABA-adjacent support | Traditional, gentle |

Timing matters: give calming chews 30–60 minutes before a known trigger, or daily for generalized anxiety. Nutrition raises the baseline; it does not replace training for severe cases.

## When is it time for professional help?

If your dog injures themselves, can't be left alone at all, stops eating, or the behavior is worsening despite consistent work — recruit a veterinary behaviorist. Severe cases sometimes need prescription support to make training possible, and that's not a failure; it's medicine doing its job while training does its work.`,
    faqs: [
      { q: "What can I give my dog for fireworks anxiety?", a: "Give a calming supplement with L-theanine 30–60 minutes before fireworks start, set up a sound-masked safe room, and stay matter-of-fact calm yourself. For severe panic, ask your vet about event medication — modern options work well." },
      { q: "Do calming chews actually work?", a: "L-theanine and tryptophan have supportive published evidence for promoting relaxation without sedation. They shine for mild-to-moderate anxiety and predictable events, and work best layered with training rather than alone." },
      { q: "How long can a dog be left alone?", a: "Adult dogs manage 4–6 hours routinely; longer stretches raise separation-stress risk. Beyond 8 hours regularly, build in a midday walker, enrichment feeding, and gradual alone-time training." },
      { q: "Should I comfort my scared dog or ignore the fear?", a: "Comfort. The idea that comforting 'rewards fear' is outdated — fear is an emotion, not a behavior choice. Calm, low-key reassurance helps; frantic fussing doesn't." },
      { q: "Can dog anxiety be cured?", a: "Managed, often dramatically — 'cured' oversells it. With trigger work, training, environment and support, most dogs improve substantially within weeks to months." },
    ],
    sources: [
      { label: "Salonen et al. 2020 — Prevalence of anxiety-related traits in 13,700 Finnish pet dogs (Scientific Reports)" },
      { label: "Tiira et al. 2016 — Prevalence and comorbidity of anxieties in dogs" },
      { label: "American College of Veterinary Behaviorists — position resources", url: "https://www.dacvb.org/" },
      { label: "AKC — Dog Anxiety: Signs and Treatment", url: "https://www.akc.org/expert-advice/health/treating-dog-anxiety/" },
    ],
    translations: JSON.stringify({
      es: { title: "Ansiedad canina: qué calma de verdad a un perro estresado (y qué no)", excerpt: "Guía práctica de desencadenantes, entrenamiento, entorno y nutrición calmante." },
      fr: { title: "Anxiété du chien : ce qui apaise vraiment (et ce qui ne marche pas)", excerpt: "Guide pratique des déclencheurs, de l'entraînement, de l'environnement et de la nutrition apaisante." },
      de: { title: "Angst beim Hund: Was gestresste Hunde wirklich beruhigt (und was nicht)", excerpt: "Ein praxisnaher Leitfaden zu Auslösern, Training, Umgebung und beruhigender Ernährung." },
      ja: { title: "犬の不安ケア：本当に効くこと、効かないこと", excerpt: "トリガーの特定、トレーニング、環境づくり、そしてリラックスをサポートする栄養の実践ガイド。" },
    }),
  },
  {
    slug: "how-long-glucosamine-dogs",
    title: "How Long Does Glucosamine Take to Work in Dogs?",
    excerpt: "The realistic timeline for joint supplements, week by week — and the three reasons they sometimes 'don't work'.",
    answerCapsule:
      "Glucosamine typically takes 4–6 weeks of consistent daily feeding to show visible effects in dogs, with full benefit around 8 weeks. Unlike painkillers, it works by supporting cartilage metabolism, so results build gradually. The three most common reasons for 'no result' are underdosing, inconsistent feeding, and expecting drug-like speed.",
    category: "nutrition",
    tags: "glucosamine,joints,dosage",
    species: "dog",
    pillar: false,
    readMinutes: 4,
    coverColorKey: "clay",
    authorName: "EMBEPET Science Team",
    authorTitle: "Formulation & Nutrition",
    authorBio: "Our in-house team of animal nutrition specialists translates published veterinary research into practical feeding guidance.",
    reviewedBy: "Reviewed for accuracy against published veterinary literature",
    content: `## The week-by-week timeline

**Weeks 1–2: nothing visible.** Glucosamine is reaching steady state in joint tissue. This is normal — don't quit here.

**Weeks 3–4: first hints.** Many owners notice slightly easier mornings, more willingness on stairs, longer comfortable walks.

**Weeks 5–6: visible change.** Smoother sit-to-stand, renewed interest in play. This is the window where most "it's working" reviews are written.

**Week 8: full effect.** Cartilage-support nutrients have reached their working plateau. Whatever you see now is the supplement's honest contribution.

## Why joint supplements "don't work" for some dogs

1. **Underdosing.** A 70-lb dog needs roughly 900–1000 mg of glucosamine daily. Many treats sprinkle in 100 mg and call it a joint chew. Check labels for exact amounts per serving.
2. **Inconsistency.** Skipping days resets the accumulation curve. Tie feeding to a daily anchor — breakfast works.
3. **Wrong expectations.** Glucosamine supports structure; it is not a painkiller. A dog in significant pain needs a vet visit and possibly medication, with nutrition as the long-game layer underneath.

## How to run a fair 8-week trial

Film your dog doing three benchmark moves on day 0: stairs, sit-to-stand, getting up from bed. Feed daily at label dose. Re-film at week 4 and week 8 and compare — memory is unreliable, video isn't.`,
    faqs: [
      { q: "Can I speed up glucosamine results?", a: "You can't rush cartilage metabolism, but you can pair glucosamine with omega-3s (well-evidenced for joint comfort), keep your dog lean, and stay perfectly consistent — those three multiply the outcome." },
      { q: "Should glucosamine be given forever?", a: "Joint support is a maintenance nutrient — benefits fade if feeding stops. Most owners keep seniors and at-risk breeds on it for life." },
      { q: "Are there side effects?", a: "Glucosamine is well tolerated; occasional mild digestive upset at introduction resolves by splitting the dose across meals for the first week." },
    ],
    sources: [
      { label: "AKC — Glucosamine for Dogs", url: "https://www.akc.org/expert-advice/health/glucosamine-for-dogs/" },
      { label: "Open Veterinary Journal — reviews of nutraceutical use in canine osteoarthritis" },
    ],
    translations: JSON.stringify({
      es: { title: "¿Cuánto tarda la glucosamina en hacer efecto en perros?", excerpt: "El calendario realista de los suplementos articulares, semana a semana." },
      fr: { title: "Combien de temps la glucosamine met-elle à agir chez le chien ?", excerpt: "Le calendrier réaliste des compléments articulaires, semaine par semaine." },
      de: { title: "Wie lange braucht Glucosamin beim Hund bis zur Wirkung?", excerpt: "Der realistische Zeitplan für Gelenkergänzungen, Woche für Woche." },
      ja: { title: "犬のグルコサミン、効果が出るまでどれくらい？", excerpt: "関節サプリのリアルなタイムラインを週ごとに解説。" },
    }),
  },
  {
    slug: "probiotics-for-dogs-basics",
    title: "Probiotics for Dogs: When They Help and How to Choose",
    excerpt: "Diet changes, stress diarrhea, antibiotic recovery — the four scenarios where probiotics earn their keep, and what CFU numbers actually mean.",
    answerCapsule:
      "Probiotics help dogs most in four scenarios: diet transitions, stress-related digestive upset (boarding, travel), post-antibiotic flora recovery, and chronic soft stools without diagnosed disease. Choose products naming a specific strain (e.g., Bacillus coagulans), guaranteeing CFU count at expiry — 1–5 billion CFU daily is a typical effective range for dogs.",
    category: "nutrition",
    tags: "probiotics,digestion,gut health",
    species: "dog",
    pillar: false,
    readMinutes: 5,
    coverColorKey: "amber",
    authorName: "EMBEPET Science Team",
    authorTitle: "Formulation & Nutrition",
    authorBio: "Our in-house team of animal nutrition specialists translates published veterinary research into practical feeding guidance.",
    reviewedBy: "Reviewed for accuracy against published veterinary literature",
    content: `## What probiotics actually do

A dog's gut hosts trillions of bacteria that digest fiber, train immune cells (roughly 70% of immune tissue lives gut-adjacent) and crowd out troublemakers. Probiotics are reinforcements: live beneficial bacteria that help the resident community stay balanced when life disturbs it.

## The four moments probiotics earn their keep

1. **Diet transitions.** New food means new substrate for the microbiome. Probiotics smooth the handover week.
2. **Stress events.** Boarding, moving, travel — stress diarrhea is common enough that many kennels recommend starting probiotics a week before check-in.
3. **After antibiotics.** Antibiotics clear bad and good bacteria alike. Rebuilding flora afterward is the classic probiotic use case (ask your vet about timing).
4. **Chronically unimpressive stools.** For soft-serve stools without diagnosed disease, a strain-plus-prebiotic combo is a sensible first nutritional step.

## How to read a probiotic label

- **Named strain** — "Bacillus coagulans" beats "probiotic blend". Spore-forming strains survive stomach acid and room-temperature storage far better than many dairy strains.
- **CFU guaranteed at expiry** — counts "at time of manufacture" quietly decay in the jar.
- **A prebiotic included** — inulin or FOS feeds the arriving bacteria; the pairing is called a synbiotic.
- **Realistic dose** — 1–5 billion CFU daily is a typical effective range for dogs.

## When probiotics are the wrong tool

Bloody diarrhea, vomiting with lethargy, black stools or a puppy with watery diarrhea are vet visits, not supplement decisions. Probiotics maintain balance; they don't treat disease.`,
    faqs: [
      { q: "Can I give my dog human probiotics?", a: "Human products aren't dosed or strain-selected for dogs, and some contain xylitol — a serious toxin for dogs. Use a canine-specific product." },
      { q: "How long until probiotics work?", a: "For acute wobbles: often within days. For rebuilding after antibiotics or chronic soft stools: 2–4 weeks of daily feeding." },
      { q: "Can probiotics be given daily forever?", a: "Yes — they're a maintenance supplement, and many dogs stay on a daily synbiotic indefinitely, especially in high-stress or sensitive-stomach households." },
    ],
    sources: [
      { label: "Cornell Riney Canine Health Center — Probiotics for dogs" },
      { label: "AAHA nutrition resources", url: "https://www.aaha.org/" },
    ],
    translations: JSON.stringify({
      es: { title: "Probióticos para perros: cuándo ayudan y cómo elegirlos", excerpt: "Los cuatro escenarios donde los probióticos valen la pena y qué significan los números de UFC." },
      fr: { title: "Probiotiques pour chiens : quand ils aident et comment choisir", excerpt: "Les quatre situations où les probiotiques font leurs preuves et ce que signifient les UFC." },
      de: { title: "Probiotika für Hunde: Wann sie helfen und wie man wählt", excerpt: "Die vier Szenarien, in denen Probiotika sich lohnen, und was KBE-Zahlen wirklich bedeuten." },
      ja: { title: "犬の乳酸菌サプリ：効果的な場面と選び方", excerpt: "乳酸菌が本領を発揮する4つの場面と、CFU表示の読み方。" },
    }),
  },
  {
    slug: "why-cat-hairballs-often",
    title: "Why Is My Cat Getting Hairballs So Often?",
    excerpt: "Occasional hairballs are feline life; weekly ones are a signal. The grooming-transit equation and when frequent hairballs mean a vet visit.",
    answerCapsule:
      "Healthy cats typically produce a hairball only once or twice a month. More frequent hairballs usually trace to three causes: excessive grooming from stress or itchy skin, heavy seasonal shedding, or slowed digestive transit. Fiber support, regular brushing and omega-3s reduce frequency; hairballs more than weekly — or retching without production — warrant a veterinary check.",
    category: "guides",
    tags: "cats,hairballs,grooming,digestion",
    species: "cat",
    pillar: false,
    readMinutes: 4,
    coverColorKey: "amber",
    authorName: "EMBEPET Science Team",
    authorTitle: "Formulation & Nutrition",
    authorBio: "Our in-house team of animal nutrition specialists translates published veterinary research into practical feeding guidance.",
    reviewedBy: "Reviewed for accuracy against published veterinary literature",
    content: `## The hairball equation

Hairballs are input minus throughput: hair swallowed during grooming, minus hair that passes normally through the gut. Frequency rises when either side shifts — more swallowing, or slower passing.

## Three reasons the equation tips

### 1. Over-grooming

Stress, boredom, fleas, allergies and skin discomfort all raise licking time. If you see thinning patches, barbered fur or grooming that interrupts everything else, the hairballs are a symptom — address the itch or the stress.

### 2. Shedding season

Spring and fall coat turnover can triple loose hair. Long-haired breeds run this math year-round. Daily brushing during peaks removes hair before the tongue does.

### 3. Slow transit

Hair that lingers in the stomach clumps. Low-fiber diets, dehydration and age-slowed motility all keep hair around long enough to felt together.

## What actually reduces hairballs

- **Brush daily in season** — the single highest-impact habit; every brushful is a hairball that never happens.
- **Fiber support** — psyllium and pumpkin escort hair through the gut. Fiber-based chews beat petroleum pastes on mechanism.
- **Omega-3s** — a healthier coat sheds less, shrinking the input side.
- **Hydration** — moisture keeps gut contents moving; wet food and fountains help transit too.

## When hairballs are a red flag

Retching repeatedly without producing anything, weekly-or-more hairballs, lethargy, appetite loss or constipation alongside hairballs — book a vet. Frequent hairballs can mask gastrointestinal disease, and a "hairball cough" is sometimes actually asthma.`,
    faqs: [
      { q: "How many hairballs are normal for a cat?", a: "One or two a month is typical for healthy short-haired cats; long-haired breeds may run slightly higher. Weekly or more deserves investigation." },
      { q: "Do hairball pastes work?", a: "Petroleum pastes lubricate transit and can help short-term. Fiber-plus-coat-care approaches address both sides of the equation for daily use." },
      { q: "My cat retches but nothing comes out — hairball?", a: "Maybe — but repeated unproductive retching is also the classic presentation of feline asthma. Video it and show your vet." },
    ],
    sources: [
      { label: "Cornell Feline Health Center — Hairballs", url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center" },
      { label: "International Cat Care — grooming and coat health" },
    ],
    translations: JSON.stringify({
      es: { title: "¿Por qué mi gato tiene tantas bolas de pelo?", excerpt: "La ecuación acicalado-tránsito y cuándo las bolas de pelo frecuentes requieren veterinario." },
      fr: { title: "Pourquoi mon chat a-t-il si souvent des boules de poils ?", excerpt: "L'équation toilettage-transit et quand consulter le vétérinaire." },
      de: { title: "Warum hat meine Katze so oft Haarballen?", excerpt: "Die Putz-Transit-Gleichung und wann häufige Haarballen zum Tierarzt gehören." },
      ja: { title: "うちの猫、毛玉を吐く回数が多いのはなぜ？", excerpt: "グルーミングと消化の方程式、そして受診すべきサイン。" },
    }),
  },
  {
    slug: "fish-oil-dosage-dogs-cats",
    title: "Fish Oil for Dogs and Cats: How Much EPA and DHA Is Enough?",
    excerpt: "The dosing math behind omega-3s — why 'one softgel' means nothing, and the EPA+DHA targets by body weight.",
    answerCapsule:
      "Fish oil dosing runs on combined EPA+DHA, not total oil volume. A common supportive target for dogs is roughly 20–55 mg of combined EPA+DHA per pound of body weight daily (about 700–1900 mg for a 35 lb dog depending on goal); cats typically take 200–500 mg daily. Always increase gradually and check labels for EPA/DHA amounts — 1000 mg of 'fish oil' may contain only 300 mg of actives.",
    category: "nutrition",
    tags: "fish oil,omega-3,dosage,skin",
    species: "dog",
    pillar: false,
    readMinutes: 5,
    coverColorKey: "amber",
    authorName: "EMBEPET Science Team",
    authorTitle: "Formulation & Nutrition",
    authorBio: "Our in-house team of animal nutrition specialists translates published veterinary research into practical feeding guidance.",
    reviewedBy: "Reviewed for accuracy against published veterinary literature",
    content: `## The only number that matters: EPA + DHA

"1000 mg fish oil" tells you the size of the capsule, not the dose. What works is the combined EPA and DHA inside — often just 300 mg of that 1000. Flip the bottle and add the two numbers; that's your real dose.

## Typical supportive ranges

| Pet | Combined EPA+DHA per day | Context |
| --- | --- | --- |
| Dogs — general wellness | ~20 mg per lb body weight | Skin, coat, everyday support |
| Dogs — joint/skin focus | ~30–55 mg per lb | Common in published joint studies |
| Cats | 200–500 mg total | Smaller bodies, cap conservatively |

A 35 lb dog lands around 700 mg for wellness and up to ~1900 mg in focused-support contexts. Stay under veterinary guidance at the high end — more is not linearly better, and very high doses affect platelet function and add meaningful calories.

## Five practical rules

1. **Start at half dose for a week.** Fatty stools are the classic too-much-too-fast sign.
2. **Feed with meals.** Better absorption, gentler stomach.
3. **Count the calories.** Oil is energy-dense; trim kibble slightly for small dogs on full doses.
4. **Protect freshness.** Refrigerate after opening, use pumps or dark bottles, finish within ~90 days. Rancid oil undoes the point.
5. **Check testing.** Molecular distillation plus third-party heavy-metal testing is the quality bar for marine oils.

## Which pets benefit most?

Itchy or flaky skin, dull coats, stiff joints, aging hearts and kidneys, and developing puppies/kittens (DHA for brains). If you supplement only one thing, omega-3s carry the broadest evidence base in companion animals.`,
    faqs: [
      { q: "Can dogs and cats share the same fish oil?", a: "Yes, if it's a plain oil with published EPA/DHA content — dose by the table above. Skip human products with added flavors or vitamin D." },
      { q: "Salmon oil vs pollock oil vs krill?", a: "Pollock and salmon deliver the best EPA/DHA per dollar with strong palatability; krill offers phospholipid-form omega-3s at a higher price. The dose you'll actually feed daily beats theoretical form advantages." },
      { q: "How long until skin and coat improve?", a: "Fatty-acid incorporation follows the hair cycle: expect texture changes at 3–4 weeks and visible shine plus calmer skin around 6–8 weeks." },
    ],
    sources: [
      { label: "Bauer JE — Therapeutic use of fish oils in companion animals (JAVMA review)" },
      { label: "WSAVA Global Nutrition Guidelines", url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/" },
    ],
    translations: JSON.stringify({
      es: { title: "Aceite de pescado para perros y gatos: ¿cuánto EPA y DHA necesitan?", excerpt: "La matemática de la dosis de omega-3 y los objetivos por peso corporal." },
      fr: { title: "Huile de poisson pour chiens et chats : combien d'EPA et DHA ?", excerpt: "Le calcul des doses d'oméga-3 et les cibles selon le poids." },
      de: { title: "Fischöl für Hunde und Katzen: Wie viel EPA und DHA?", excerpt: "Die Dosierungsrechnung hinter Omega-3 und die Zielwerte nach Körpergewicht." },
      ja: { title: "犬猫のフィッシュオイル：EPA・DHAはどれくらい必要？", excerpt: "「オイル1000mg」に意味がない理由と、体重別の目安量。" },
    }),
  },
  {
    slug: "senior-dog-cognitive-decline-signs",
    title: "Is It Just Old Age? 7 Signs of Cognitive Decline in Senior Dogs",
    excerpt: "Fewer than 2% of affected dogs ever get diagnosed. The DISHA checklist, what's normal aging vs. what isn't, and the nutrition that supports aging brains.",
    answerCapsule:
      "Canine cognitive dysfunction (CCD) affects an estimated 14–35% of dogs over eight, rising to over two-thirds by age 15 — yet fewer than 2% are ever diagnosed. Vets screen with the DISHA signs: Disorientation, Interaction changes, Sleep-cycle disruption, House soiling, and Activity changes. MCT oil, DHA, and antioxidants have published evidence for supporting cognitive function in aging dogs.",
    category: "guides",
    tags: "senior dogs,cognition,aging,NAD+",
    species: "dog",
    pillar: false,
    readMinutes: 6,
    coverColorKey: "charcoal",
    authorName: "EMBEPET Science Team",
    authorTitle: "Formulation & Nutrition",
    authorBio: "Our in-house team of animal nutrition specialists translates published veterinary research into practical feeding guidance.",
    reviewedBy: "Reviewed for accuracy against published veterinary literature",
    content: `## The most underdiagnosed condition in senior dogs

Studies estimate canine cognitive dysfunction affects 14–35% of dogs over age 8, climbing to roughly two-thirds of dogs by 15. Yet fewer than 2% ever receive a diagnosis — because families file the signs under "just getting old," and dogs can't tell us they're confused.

The distinction matters: some of what looks like aging is supportable, and earlier support means more good months.

## The DISHA checklist

Veterinarians screen cognition with five sign clusters:

- **D — Disorientation:** staring at walls, getting "stuck" behind furniture, standing at the hinge side of doors, getting lost in familiar rooms.
- **I — Interaction changes:** a social dog turning distant, or a independent dog turning clingy; slower to greet; irritability.
- **S — Sleep-wake disruption:** pacing and panting at 2 a.m., sleeping through the day, nighttime vocalizing.
- **H — House soiling:** accidents from a previously reliable dog, forgetting the door routine.
- **A — Activity changes:** aimless wandering, repetitive circling, loss of interest in toys, staring into space.

Two or more clusters, worsening over months, is the classic pattern.

## Normal aging vs. cognitive decline

Slower stairs and longer naps are normal aging. Getting lost in the backyard is not. Graying muzzle: normal. Barking at the wall at 3 a.m.: not. The difference is *confusion* — normal aging slows the body; cognitive decline scrambles the map.

## What has evidence for aging brains?

- **MCT oil** — aging brains use glucose less efficiently; MCT-derived ketones are an alternative fuel, with published trials showing improved cognitive task performance in senior dogs.
- **DHA & EPA** — structural fats of neurons, supporting memory and learning.
- **Antioxidant + mitochondrial nutrients** — vitamin E, CoQ10, and NAD+ precursors (like NMN) target the cellular-energy decline behind brain aging.
- **Enrichment** — sniff walks, food puzzles, new (gentle) routes. Neurons that fire keep wiring.

**Rule out the impostors first:** pain, hearing/vision loss, kidney disease and UTIs all mimic cognitive signs. A senior wellness exam earns its fee here.`,
    faqs: [
      { q: "At what age do dogs get cognitive dysfunction?", a: "Risk begins around 8 (earlier in giant breeds) and roughly doubles every two years after. By 15, most dogs show at least one sign cluster." },
      { q: "Can cognitive decline in dogs be treated?", a: "It can be meaningfully supported: MCT/DHA nutrition, enrichment, predictable routines and in some cases prescription options from your vet. Started early, support preserves more function for longer." },
      { q: "Why does my senior dog pace all night?", a: "Sleep-cycle reversal is a hallmark DISHA sign — but pain and kidney issues cause night restlessness too. Vet exam first, then brain-support nutrition and a consistent evening routine." },
    ],
    sources: [
      { label: "Journal of Veterinary Science — canine cognitive dysfunction prevalence reviews" },
      { label: "Purina Institute — MCT and brain-aging research in senior dogs" },
      { label: "AKC — Canine Cognitive Dysfunction", url: "https://www.akc.org/expert-advice/health/canine-cognitive-dysfunction/" },
    ],
    translations: JSON.stringify({
      es: { title: "¿Solo es la edad? 7 señales de deterioro cognitivo en perros mayores", excerpt: "La lista DISHA, qué es envejecimiento normal y qué no, y la nutrición que apoya al cerebro." },
      fr: { title: "Simple vieillesse ? 7 signes de déclin cognitif chez le chien senior", excerpt: "La grille DISHA, vieillissement normal ou non, et la nutrition du cerveau âgé." },
      de: { title: "Nur das Alter? 7 Zeichen kognitiven Abbaus bei Senior-Hunden", excerpt: "Die DISHA-Checkliste, normales Altern vs. Abbau, und Nährstoffe für alternde Gehirne." },
      ja: { title: "それ、ただの老化？シニア犬の認知機能低下・7つのサイン", excerpt: "DISHAチェックリスト、正常な老化との見分け方、脳をサポートする栄養。" },
    }),
  },
  {
    slug: "calming-supplements-before-fireworks",
    title: "Fireworks Tonight? How to Prep an Anxious Dog in 3 Hours",
    excerpt: "A same-day action plan: timing calming chews, building a sound bunker, and the calm-owner protocol that actually helps.",
    answerCapsule:
      "With three hours before fireworks: give a calming supplement with L-theanine now (it peaks in 30–90 minutes), exercise your dog while it's quiet, set up an interior sound-buffered room with white noise, and plan to act boring and calm during the show. Comforting a scared dog does not reinforce fear — frantic energy does.",
    category: "behavior",
    tags: "fireworks,anxiety,calming,july 4th",
    species: "dog",
    pillar: false,
    readMinutes: 4,
    coverColorKey: "plum",
    authorName: "EMBEPET Science Team",
    authorTitle: "Formulation & Nutrition",
    authorBio: "Our in-house team of animal nutrition specialists translates published veterinary research into practical feeding guidance.",
    reviewedBy: "Reviewed for accuracy against published veterinary literature",
    content: `## T-minus 3 hours: the checklist

**Now — feed the calming support.** L-theanine and tryptophan blends peak around 30–90 minutes and hold for several hours. Feeding early beats feeding during the first bang. Double-check your dog's weight dose on the label.

**T-2.5 hours — drain the tank.** A long sniff walk or fetch session now means a tired nervous system later. Get bathroom business done before dusk; many dogs refuse to go out once the noise starts.

**T-1 hour — build the bunker.** Choose the most interior, window-poor room. Add: your dog's bed and an unwashed shirt of yours, water, white noise or a fan plus TV/music at normal volume, and curtains drawn. Open the crate door if crate-trained — never lock a panicking dog in.

**T-30 min — set the mood.** Bring out a long-lasting project: frozen stuffed Kong, lick mat, chew. Licking and chewing are self-soothing behaviors.

## During the show

Act like it's the most boring evening of the year. Stay in the room, read your phone, speak in a flat warm voice. If your dog seeks contact, give slow calm strokes — **comforting does not reward fear**; fear is an emotion, not a trick. What does transmit is your own frantic energy, so don't hover, coo dramatically, or chase them around the house.

If your dog prefers the bathtub or a closet, let them. Hiding is coping.

## After tonight

One rough night is management; every-event panic is a training project. Off-season desensitization (recordings at whisper volume, paired with treats, over weeks) plus pre-event support is the durable fix. For dogs that injure themselves or can't recover, talk to your vet about event medication — modern options are safe and effective.`,
    faqs: [
      { q: "How early should I give calming chews before fireworks?", a: "30–60 minutes minimum; with a big evening ahead, feeding at the 2–3 hour mark and topping up at label-allowed intervals works well." },
      { q: "Should I crate my dog during fireworks?", a: "Only with the door open, and only if the crate is already a beloved den. A locked crate turns panic into entrapment." },
      { q: "My dog won't eat treats during fireworks — why?", a: "Refusing food is a classic over-threshold sign. It means the fear is too high for counter-conditioning in the moment — focus on the bunker tonight and desensitization training later." },
    ],
    sources: [
      { label: "AKC — Fireworks anxiety in dogs", url: "https://www.akc.org/expert-advice/health/dog-fireworks-anxiety/" },
      { label: "American College of Veterinary Behaviorists — noise aversion resources" },
    ],
    translations: JSON.stringify({
      es: { title: "¿Fuegos artificiales esta noche? Prepara a tu perro ansioso en 3 horas", excerpt: "Plan de acción del mismo día: tiempos del suplemento, búnker de sonido y protocolo de calma." },
      fr: { title: "Feu d'artifice ce soir ? Préparez votre chien anxieux en 3 heures", excerpt: "Plan d'action du jour J : timing des friandises calmantes, bunker sonore et protocole du maître calme." },
      de: { title: "Heute Feuerwerk? So bereiten Sie Ihren ängstlichen Hund in 3 Stunden vor", excerpt: "Der Same-Day-Plan: Timing der Calming-Chews, Geräusch-Bunker und das Ruhe-Protokoll." },
      ja: { title: "今夜花火大会？不安な犬のための3時間準備プラン", excerpt: "当日でも間に合う：サプリのタイミング、防音シェルターづくり、飼い主の落ち着きプロトコル。" },
    }),
  },
  {
    slug: "pet-supplement-quality-checklist",
    title: "How to Judge a Pet Supplement Before You Buy: The 7-Point Quality Checklist",
    excerpt: "Exact dosages, named strains, batch testing, realistic claims — the label-reading skills that separate real formulas from treat-jar theater.",
    answerCapsule:
      "A trustworthy pet supplement discloses exact active amounts per serving, names its ingredient sources and probiotic strains, is produced in a certified facility (cGMP, SQF or NASC), batch-tests for heavy metals and microbes, makes only 'supports/promotes' claims rather than cure promises, and matches doses to published research. Any product hiding behind 'proprietary blend' fails the first test.",
    category: "nutrition",
    tags: "quality,how to choose,manufacturing",
    species: "dog",
    pillar: false,
    readMinutes: 5,
    coverColorKey: "forest",
    authorName: "EMBEPET Science Team",
    authorTitle: "Formulation & Nutrition",
    authorBio: "Our in-house team of animal nutrition specialists translates published veterinary research into practical feeding guidance.",
    reviewedBy: "Reviewed for accuracy against published veterinary literature",
    content: `## The 7-point checklist

### 1. Exact amounts, per serving

"Glucosamine 450 mg per 2 chews" is a formula. "Joint blend 800 mg" is theater. If you can't compare the dose to published research, you can't evaluate the product. Proprietary blends exist to hide underdosing.

### 2. Named sources and strains

"Bacillus coagulans, 3 billion CFU guaranteed at expiry" beats "probiotics." "Wild Alaskan pollock oil" beats "marine oil blend." Specificity is expensive; vagueness is a choice.

### 3. Certified manufacturing

cGMP (current Good Manufacturing Practices), SQF, HACCP or NASC audit membership mean an outside party inspects the facility, the processes and the paper trail. No certification, no way to verify anything else on the label.

### 4. Batch testing

Heavy metals in marine oils, microbial counts in powders, label-claim verification for actives. Good brands test every batch and will show the certificate of analysis if asked. Try asking — the response is itself a test.

### 5. Claims that respect the law (and biology)

Supplements may say "supports joint health," never "treats arthritis." A brand promising to cure allergies or prevent disease is either ignorant of the rules or hoping you are. Both are disqualifying.

### 6. Doses aligned with research

A 70 lb dog needs ~900+ mg glucosamine daily to match study ranges. If the label's max serving delivers 200 mg, the product references the research without participating in it.

### 7. Palatability you can verify

The best formula fails if the pet refuses it. Look for real-pet testing claims, money-back taste guarantees, and reviews that mention picky eaters specifically.

## The 30-second version at the shelf

Flip the jar. Can you see exact actives per serving? A named facility standard? A supports-not-cures claim? If all three: shortlist. If none: back on the shelf, regardless of how nice the label dog looks.`,
    faqs: [
      { q: "What does cGMP certified mean for pet supplements?", a: "It means the facility follows FDA-defined current Good Manufacturing Practices — controlled processes, cleaning validation, documentation and recall readiness — verified by audit rather than self-declared." },
      { q: "Are expensive pet supplements better?", a: "Price correlates loosely at best. The checklist beats the price tag: a $25 product with disclosed doses and batch testing outranks a $60 proprietary blend." },
      { q: "What is a certificate of analysis (COA)?", a: "A per-batch lab report verifying identity, potency and contaminant limits. Reputable manufacturers produce one for every run and share it on request." },
    ],
    sources: [
      { label: "FDA — Structure/Function Claims guidance", url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/small-entity-compliance-guide-structurefunction-claims" },
      { label: "National Animal Supplement Council (NASC)", url: "https://nasc.cc/" },
    ],
    translations: JSON.stringify({
      es: { title: "Cómo evaluar un suplemento para mascotas antes de comprar: lista de 7 puntos", excerpt: "Dosis exactas, cepas con nombre, análisis por lote: las claves para leer etiquetas." },
      fr: { title: "Juger un complément animalier avant d'acheter : la checklist en 7 points", excerpt: "Dosages exacts, souches nommées, tests par lot — savoir lire une étiquette." },
      de: { title: "Ergänzungsmittel fürs Tier richtig beurteilen: die 7-Punkte-Checkliste", excerpt: "Exakte Dosierungen, benannte Stämme, Chargentests — Etiketten lesen wie ein Profi." },
      ja: { title: "買う前に見抜く：ペットサプリ品質チェックリスト7項目", excerpt: "正確な配合量、菌株名、ロット検査——ラベルの読み方で本物を見分ける。" },
    }),
  },
];
