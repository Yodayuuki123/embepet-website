// 产品评价种子数据（真实感示例，后台可增删改）

export const reviewsData: {
  productSlug: string;
  authorName: string;
  petName?: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
  daysAgo: number;
}[] = [
  // Hip & Joint
  { productSlug: "hip-joint-mobility-chews", authorName: "Sarah M.", petName: "Cooper", rating: 5, title: "My 9-year-old Lab jumps on the couch again", body: "Cooper started hesitating at the stairs last winter. Six weeks into these chews he's doing his old two-step leap onto the couch. He thinks they're treats, which makes my job easy.", verified: true, daysAgo: 12 },
  { productSlug: "hip-joint-mobility-chews", authorName: "Derek T.", petName: "Luna", rating: 5, title: "Agility dog approved", body: "Luna competes in agility and I'm picky about actual dosages. 450mg glucosamine per two chews is printed right on the jar — that's why I switched. Recovery after trial weekends is noticeably smoother.", verified: true, daysAgo: 34 },
  { productSlug: "hip-joint-mobility-chews", authorName: "Grace W.", petName: "Bruno", rating: 4, title: "Working, slowly but surely", body: "Week 5 with our senior Frenchie. Morning stiffness is clearly better, though it took a full month to see it. Wish the jar were bigger for the price, hence 4 stars.", verified: true, daysAgo: 58 },
  // Probiotic
  { productSlug: "probiotic-gut-health-chews", authorName: "Jenna K.", petName: "Miso", rating: 5, title: "Ended the sensitive stomach saga", body: "We tried three brands before this one. Two weeks in, Miso's stools went from 'yard roulette' to boring and perfect. Boring is beautiful.", verified: true, daysAgo: 8 },
  { productSlug: "probiotic-gut-health-chews", authorName: "Marcus L.", rating: 5, title: "Boarding week savior", body: "Our kennel recommended starting a probiotic before boarding. Zero stress-diarrhea for the first time ever. These go in the travel bag permanently now.", verified: true, daysAgo: 41 },
  { productSlug: "probiotic-gut-health-chews", authorName: "Priya S.", petName: "Biscuit", rating: 4, title: "Picky eater accepted after day 2", body: "Biscuit side-eyed the first chew, ate the second, now begs for them. Stool quality improved within 10 days. Docking one star only because I'd love a bigger jar option.", verified: false, daysAgo: 77 },
  // Skin & Coat
  { productSlug: "skin-coat-salmon-chews", authorName: "Olivia R.", petName: "Maple", rating: 5, title: "The groomer asked what changed", body: "Maple's golden coat was dull and flaky all winter. Two months on these and our groomer literally asked what we switched. Shine is back, snowstorm of shedding is not.", verified: true, daysAgo: 15 },
  { productSlug: "skin-coat-salmon-chews", authorName: "Tom B.", petName: "Rex", rating: 5, title: "Scratching stopped around week 3", body: "Rex used to wake us up scratching at 3am every spring. Started these in March, by April the night scratching basically stopped. No fishy breath either, which surprised me.", verified: true, daysAgo: 29 },
  { productSlug: "skin-coat-salmon-chews", authorName: "Hannah D.", rating: 4, title: "Solid, be patient", body: "Took the full 6 weeks the label promises before the coat changed. Now it's visibly glossier. Patience required — this is nutrition, not magic.", verified: true, daysAgo: 63 },
  // Multivitamin
  { productSlug: "multivitamin-10-in-1-chews", authorName: "Carlos G.", petName: "Nala", rating: 5, title: "Replaced three jars with one", body: "We were juggling separate joint, probiotic and vitamin bottles. This consolidated everything and Nala is doing great — energy up, coat great, wallet happier.", verified: true, daysAgo: 19 },
  { productSlug: "multivitamin-10-in-1-chews", authorName: "Amy F.", rating: 5, title: "Vet was impressed with the label", body: "Brought the jar to our annual checkup. Vet read the actual amounts and said 'this is properly dosed, keep going.' That's all I needed to hear.", verified: true, daysAgo: 47 },
  { productSlug: "multivitamin-10-in-1-chews", authorName: "Steve H.", petName: "Duke", rating: 4, title: "Big dog, big appetite for these", body: "Duke (85lbs) gets three a day and would eat thirty. Seems more energetic on walks. Four stars because the 180 count lasts our giant exactly two months.", verified: false, daysAgo: 90 },
  // Calming
  { productSlug: "calming-chews", authorName: "Rachel P.", petName: "Waffles", rating: 5, title: "July 4th was… quiet?", body: "First fireworks season where Waffles wasn't panting under the bed. Gave two chews an hour before dusk like the guide said. He watched the window, sighed, and went to sleep. I almost cried.", verified: true, daysAgo: 16 },
  { productSlug: "calming-chews", authorName: "Ben C.", rating: 4, title: "Takes the edge off alone time", body: "Our rescue has mild separation issues. Daily chew + camera shows way less pacing. Not a miracle cure — we're still doing training — but it clearly helps him settle.", verified: true, daysAgo: 38 },
  { productSlug: "calming-chews", authorName: "Yuki T.", petName: "Mochi", rating: 5, title: "Car rides are possible now", body: "Mochi used to drool and shake on every drive. One chew 45 minutes before departure and she now naps in her seat. Road trip unlocked.", verified: true, daysAgo: 71 },
  // Allergy & Immune
  { productSlug: "allergy-immune-chews", authorName: "Dana W.", petName: "Pickle", rating: 5, title: "Paw licking down 80%", body: "Our Westie's spring paw-licking obsession is dramatically better. Started 5 weeks before pollen season like the article suggested. Lamb flavor was instantly accepted.", verified: true, daysAgo: 22 },
  { productSlug: "allergy-immune-chews", authorName: "Miguel A.", rating: 4, title: "Good support alongside vet plan", body: "Used with our vet's plan for seasonal allergies. Belly redness comes back much milder this year. It supports, doesn't cure — exactly as advertised, which I respect.", verified: true, daysAgo: 49 },
  // Flea & Tick
  { productSlug: "flea-tick-defense-chews", authorName: "Kelly N.", petName: "Scout", rating: 4, title: "Nice chemical-free layer", body: "We hike a lot and I wanted something on top of regular prevention. Scout's had a clean season so far. I appreciate the honest 'complements, not replaces' labeling.", verified: true, daysAgo: 27 },
  { productSlug: "flea-tick-defense-chews", authorName: "Robert J.", rating: 4, title: "Easy to feed, coat looks great too", body: "Bonus: the brewer's yeast made his coat softer. Two chews with breakfast, zero fuss.", verified: false, daysAgo: 66 },
  // NAD+
  { productSlug: "nad-longevity-chews", authorName: "Linda M.", petName: "Charlie", rating: 5, title: "Our 12-year-old is present again", body: "Charlie had started staring at walls and pacing at night. Two months on these and he greets us at the door again, sleeps through the night most nights. Whatever years we have left, we want them like this.", verified: true, daysAgo: 11 },
  { productSlug: "nad-longevity-chews", authorName: "Paul V.", petName: "Sadie", rating: 5, title: "Evening zoomies at age 11", body: "Sadie did a full zoomie lap yesterday. Haven't seen that in two years. Placebo? Maybe. Continuing? Absolutely.", verified: true, daysAgo: 40 },
  { productSlug: "nad-longevity-chews", authorName: "Karen O.", rating: 4, title: "Subtle but real", body: "Changes are subtle — more engaged evenings, better sleep rhythm. It's expensive but NMN always is. Week 7 and we're keeping it.", verified: true, daysAgo: 55 },
  // Omega-3
  { productSlug: "omega-3-wild-fish-oil", authorName: "Ashley B.", petName: "Théo", rating: 5, title: "One pump, two species, zero drama", body: "The dog and the cat both get it over dinner. Cat licks the bowl clean first. Coats on both are visibly shinier after a month.", verified: true, daysAgo: 9 },
  { productSlug: "omega-3-wild-fish-oil", authorName: "James R.", rating: 5, title: "EPA/DHA actually printed on the label", body: "As someone who reads labels: 525mg combined per pump, printed. No 'proprietary marine blend' nonsense. Refrigerated after opening, no fishy smell.", verified: true, daysAgo: 33 },
  { productSlug: "omega-3-wild-fish-oil", authorName: "Sofia L.", petName: "Bella", rating: 4, title: "Senior joints appreciate it", body: "Vet suggested omega-3s for Bella's stiff hips alongside her joint chews. The combination is clearly better than either alone was.", verified: true, daysAgo: 60 },
  // Cat urinary
  { productSlug: "cat-urinary-support-drops", authorName: "Emily H.", petName: "Ziggy", rating: 5, title: "Peace of mind after our ER scare", body: "Ziggy blocked last year — $4,000 and the worst week of my life. Our vet approved adding this to his aftercare routine with wet food. One year later: clean checkups, and he drinks visibly more with the broth taste.", verified: true, daysAgo: 14 },
  { productSlug: "cat-urinary-support-drops", authorName: "Nathan C.", rating: 5, title: "Both cats accept it, which is a miracle", body: "Two male indoor cats, both suspicious of everything. Mixed into wet food, bowls licked clean. The hydration angle alone makes this worth it.", verified: true, daysAgo: 36 },
  { productSlug: "cat-urinary-support-drops", authorName: "Isabelle F.", petName: "Comte", rating: 4, title: "Part of our prevention routine", body: "Fountain + wet food + these drops, per the guide on their blog. Six months, no flare-ups. Four stars only because I wish it came in a bigger bottle.", verified: true, daysAgo: 68 },
  // Lysine
  { productSlug: "cat-lysine-immune-powder", authorName: "Monica D.", petName: "Pepper", rating: 5, title: "Watery eyes cleared up", body: "Pepper's eyes water every time we travel. Started the powder a week before our move — smoothest transition she's ever had. Truly invisible in wet food.", verified: true, daysAgo: 21 },
  { productSlug: "cat-lysine-immune-powder", authorName: "Alex K.", rating: 4, title: "Shelter recommended, works quietly", body: "Our adopted boy came with chronic sniffles. Daily scoop keeps things calm. Cheap insurance at pennies a day.", verified: false, daysAgo: 52 },
  // Hairball
  { productSlug: "cat-hairball-control-chews", authorName: "Tina S.", petName: "Fluff", rating: 5, title: "From weekly hairballs to monthly", body: "Maine Coon problems. We went from stepping on weekly surprises to maybe one a month. She thinks the chews are treats and yells for them at 6pm sharp.", verified: true, daysAgo: 18 },
  { productSlug: "cat-hairball-control-chews", authorName: "George M.", rating: 4, title: "Better than the paste wrestling match", body: "Applying paste to a cat's paw is a contact sport I've retired from. Chews get eaten voluntarily. Fewer hairballs, no wrestling. Good trade.", verified: true, daysAgo: 44 },
  // Goat milk
  { productSlug: "lactoferrin-goat-milk-powder", authorName: "Rebecca L.", petName: "Peanut (litter)", rating: 5, title: "Foster kittens thrived on it", body: "Used as a supplemental milk for our foster litter during weaning. All four gained steadily and the runt caught up. Mixes smooth, no clumps.", verified: true, daysAgo: 25 },
  { productSlug: "lactoferrin-goat-milk-powder", authorName: "Frank W.", petName: "Ollie", rating: 5, title: "Got our senior eating again", body: "After his dental surgery Ollie refused everything. Warm goat milk over soft food was the only thing he'd touch — carried him through recovery week.", verified: true, daysAgo: 50 },
  // Collagen
  { productSlug: "collagen-mobility-chews", authorName: "Diane P.", petName: "Rosie", rating: 5, title: "Paw pads went from sandpaper to supple", body: "Rosie's pads were cracking every summer on hot pavement walks. Eight weeks of collagen chews and they're soft again. Coat bonus too.", verified: true, daysAgo: 31 },
  { productSlug: "collagen-mobility-chews", authorName: "Victor E.", rating: 4, title: "Nice complement to glucosamine", body: "Stacking with their joint chews per the FAQ. My senior shepherd moves better on the combo than he did on glucosamine alone.", verified: true, daysAgo: 73 },
];
