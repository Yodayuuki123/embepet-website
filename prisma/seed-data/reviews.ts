// 占位评价数据：真实评价上线后由用户提交+后台审核产生
export type SeedReview = {
  productSlug: string;
  authorName: string;
  petName?: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
  daysAgo: number;
};

export const reviews: SeedReview[] = [
  { productSlug: "hip-joint-advanced-chews", authorName: "Jennifer M.", petName: "Cooper (Golden Retriever, 9)", rating: 5, title: "He's doing stairs again", body: "Cooper started hesitating at the stairs last winter. Six weeks into these chews he trots up like it never happened. We filmed before/after like the guide suggested — the difference is real.", verified: true, daysAgo: 12 },
  { productSlug: "hip-joint-advanced-chews", authorName: "Marcus T.", petName: "Bella (Lab mix, 7)", rating: 5, title: "Vet noticed at her checkup", body: "Our vet asked what changed because Bella's gait looked smoother. Only change was these. She thinks the green-lipped mussel inclusion is smart. Subscribed.", verified: true, daysAgo: 28 },
  { productSlug: "hip-joint-advanced-chews", authorName: "Dana W.", rating: 4, title: "Picky eater approved, wallet less so", body: "My picky shepherd eats them like treats which is a miracle. Four stars only because I wish the 180-count came in a bigger discount. Results at about week 5.", verified: true, daysAgo: 45 },
  { productSlug: "hip-joint-advanced-chews", authorName: "Priya K.", petName: "Max (Rottweiler, 4)", rating: 5, title: "Started early for prevention", body: "Big-breed owner here. Started Max at 4 after reading about early support for large breeds. No stiffness issues to report and he loves the taste. Peace of mind daily.", verified: false, daysAgo: 61 },

  { productSlug: "gut-health-probiotic-chews", authorName: "Sarah L.", petName: "Biscuit (Beagle, 3)", rating: 5, title: "Ended the 3am grass-eating era", body: "Biscuit was a gurgly, grass-obsessed mess every diet change. Two weeks on these and stools firmed right up. Boarding week went by without a single incident. Genuinely grateful.", verified: true, daysAgo: 9 },
  { productSlug: "gut-health-probiotic-chews", authorName: "Tom H.", petName: "Miso (cat, 6)", rating: 5, title: "Works for our cat too", body: "Crumbled over wet food, our picky cat doesn't notice. Litter box situation dramatically more civilized. Love that one jar covers both the dog and the cat.", verified: true, daysAgo: 22 },
  { productSlug: "gut-health-probiotic-chews", authorName: "Alicia R.", rating: 4, title: "Great through antibiotics", body: "Vet suggested a probiotic during Rocky's antibiotic course. No digestive drama the whole time, which was not our previous experience. Minus a star: the jar seal is fiddly.", verified: true, daysAgo: 40 },

  { productSlug: "omega-3-wild-fish-oil", authorName: "Kevin D.", petName: "Luna (Husky, 5)", rating: 5, title: "Coat glow-up is unreal", body: "Groomer asked what we switched. Luna's coat is softer, thicker and the winter dandruff flakes are gone. One pump on dinner, five seconds, done. Week 5 was the turning point.", verified: true, daysAgo: 15 },
  { productSlug: "omega-3-wild-fish-oil", authorName: "Rachel B.", petName: "Mochi (cat, 8)", rating: 5, title: "Senior cat, shinier than her kitten photos", body: "Started for skin, staying for everything else. Mochi's coat gleams and she's weirdly enthusiastic about oil-drizzled dinner now. No fishy room smell either.", verified: true, daysAgo: 33 },
  { productSlug: "omega-3-wild-fish-oil", authorName: "James P.", rating: 4, title: "Quality oil, order the big bottle", body: "You can tell it's fresh — mild ocean smell, no paint-thinner sharpness like the last brand. 8oz goes fast with a 70lb dog, get the 16oz.", verified: false, daysAgo: 52 },

  { productSlug: "calming-chews", authorName: "Monica F.", petName: "Peanut (Chihuahua mix, 4)", rating: 5, title: "First calm July 4th in four years", body: "Followed the two-week head start advice. Peanut settled in her den with a frozen Kong while the sky exploded. Not sedated, just... okay. I nearly cried.", verified: true, daysAgo: 16 },
  { productSlug: "calming-chews", authorName: "Derek S.", rating: 4, title: "Takes the edge off car rides", body: "Give one 45 minutes before drives and the drool-and-shake routine is maybe 70% reduced. Not magic, but combined with a comfy crate it's transformed travel.", verified: true, daysAgo: 38 },

  { productSlug: "10-in-1-multivitamin-chews", authorName: "Hannah G.", petName: "Scout (Border Collie, 6)", rating: 5, title: "Replaced three separate jars", body: "We were juggling joint chews, a probiotic and fish oil caps. This consolidated everything for our healthy girl and she's thriving — energy up, coat great, stools boring (the dream).", verified: true, daysAgo: 11 },
  { productSlug: "10-in-1-multivitamin-chews", authorName: "Robert C.", rating: 5, title: "Senior dog acting like a puppy", body: "Our 10-year-old spaniel perked up noticeably within a month. Could be placebo, but his bloodwork this year was the best in three years and the vet said keep doing whatever we're doing.", verified: true, daysAgo: 47 },

  { productSlug: "goat-milk-nutrition-powder", authorName: "Emily V.", petName: "Waffles (foster kittens)", rating: 5, title: "Foster kitten fuel", body: "We foster underweight kittens and this mixed into warm water gets even the sad ones lapping. Weight gain has been steady and gentle on tummies. A staple in our foster kit now.", verified: true, daysAgo: 19 },
  { productSlug: "goat-milk-nutrition-powder", authorName: "Grace N.", rating: 4, title: "Picky senior approved", body: "My 13-year-old dog inhales kibble dusted with this. Wish the scoop was bigger but the ingredient list is short and honest.", verified: false, daysAgo: 58 },

  { productSlug: "recovery-nutrition-gel", authorName: "Olivia J.", petName: "Tank (Bulldog, 7)", rating: 5, title: "Post-surgery appetite saver", body: "After Tank's dental surgery he refused everything. He licked this off my finger when he wouldn't touch food, and it bridged us to normal eating in four days. Keeping a tube in the pet first-aid kit forever.", verified: true, daysAgo: 25 },

  { productSlug: "hairball-control-paste", authorName: "Sophie T.", petName: "Duchess (Maine Coon, 5)", rating: 5, title: "Longhair household essential", body: "Maine Coon + spring shed used to equal weekly carpet surprises. Daily paw-dab of this and we're down to maybe one hairball a month. She licks it off like a treat.", verified: true, daysAgo: 14 },
  { productSlug: "hairball-control-paste", authorName: "Brian K.", rating: 4, title: "Works, cat pretends to hate it", body: "Performative disgust, then licks it clean every time. Cat logic. Hairballs way down, coat looks better too from the salmon oil.", verified: true, daysAgo: 41 },

  { productSlug: "l-lysine-immune-powder", authorName: "Nina A.", petName: "3-cat household", rating: 5, title: "Sniffle season non-event this year", body: "Every winter our rescue trio passes sniffles around. Started daily lysine in October — this year, nothing. Powder is truly invisible in wet food. Multi-cat homes, this is the move.", verified: true, daysAgo: 30 },
  { productSlug: "l-lysine-immune-powder", authorName: "Paul M.", rating: 5, title: "Shelter-recommended, cat-undetected", body: "Our shelter suggested lysine when we adopted. Mixed in food, zero detection by a cat who can find a pill in a mountain of tuna. Eye watering is way down.", verified: true, daysAgo: 49 },

  { productSlug: "salmon-skin-coat-bites", authorName: "Laura E.", petName: "Rusty (Dachshund, 6)", rating: 5, title: "Paw-licking finally quieted down", body: "Rusty's spring paw-obsession is 80% gone after six weeks. Coat is glossy enough that strangers comment. He thinks they're treats which makes dosing the easiest part of my day.", verified: true, daysAgo: 13 },
  { productSlug: "salmon-skin-coat-bites", authorName: "Chris W.", rating: 4, title: "Less hair on the couch", body: "Measurable difference in shedding by week 5. Not a miracle cure for allergy season but definitely raised his itch threshold. Smells fishy — dog considers this a feature.", verified: false, daysAgo: 36 },
];
