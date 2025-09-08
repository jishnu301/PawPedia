import { Breed } from './types';

export const DOG_BREEDS: Breed[] = [
  {
    id: 'retriever/golden',
    name: 'Golden Retriever',
    description: 'Friendly, intelligent, and devoted, Golden Retrievers are one of the most popular family dogs.',
    traits: {
      Size: 'Large',
      Temperament: 'Intelligent, Friendly, Devoted',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Medium',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹25,000 - ₹50,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,300 - 1,700 kcal',
        commonAllergies: 'Grains, chicken, beef',
        feedingTips: 'Feed two meals per day. Prone to obesity, so monitor weight and food intake carefully.'
      },
      grooming: {
        frequency: 'Brushing 2-3 times a week, more during shedding seasons.',
        tools: 'Undercoat rake, slicker brush, nail clippers.',
        coatType: 'Dense, water-repellent double coat.'
      }
    }
  },
  {
    id: 'labrador',
    name: 'Labrador Retriever',
    description: 'Outgoing, even-tempered, and gentle, Labs are America\'s most popular breed for a reason.',
    traits: {
      Size: 'Large',
      Temperament: 'Outgoing, Gentle, Kind',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Medium',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹20,000 - ₹45,000',
    },
     pupCare: {
      nutrition: {
        dailyCalories: '1,200 - 1,600 kcal',
        commonAllergies: 'Corn, wheat, soy',
        feedingTips: 'High-quality protein diet. Labs love to eat, so portion control is crucial to prevent weight gain.'
      },
      grooming: {
        frequency: 'Weekly brushing to manage shedding.',
        tools: 'Bristle brush, shedding blade.',
        coatType: 'Short, dense double coat.'
      }
    }
  },
  {
    id: 'bulldog/french',
    name: 'French Bulldog',
    description: 'Playful, smart, and adaptable, the French Bulldog is a charming companion for city dwellers.',
    traits: {
      Size: 'Small',
      Temperament: 'Playful, Smart, Adaptable',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Low',
      'Energy Level': 'Low',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹70,000 - ₹1,00,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '500 - 700 kcal',
        commonAllergies: 'Dairy, chicken',
        feedingTips: 'Keep facial wrinkles clean. Prone to flatulence; a grain-free diet may help.'
      },
      grooming: {
        frequency: 'Minimal brushing, but regular cleaning of facial folds.',
        tools: 'Soft brush, damp cloth for wrinkles.',
        coatType: 'Short, smooth, fine coat.'
      }
    }
  },
  {
    id: 'germanshepherd',
    name: 'German Shepherd',
    description: 'A courageous, confident, and smart breed. German Shepherds are noble and loyal protectors.',
    traits: {
      Size: 'Large',
      Temperament: 'Courageous, Confident, Smart',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'Medium',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹20,000 - ₹40,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,700 - 2,100 kcal',
        commonAllergies: 'Grains, skin allergies are common',
        feedingTips: 'Prone to hip dysplasia and bloat; feed smaller meals and avoid exercise after eating.'
      },
      grooming: {
        frequency: 'Brushing a few times a week to control heavy shedding.',
        tools: 'Undercoat rake, de-shedding tool.',
        coatType: 'Double coat with a dense outer coat.'
      }
    }
  },
  {
    id: 'poodle/standard',
    name: 'Poodle (Standard)',
    description: 'Proud, smart, and elegant, Poodles are impressive dogs. They are also hypoallergenic.',
    traits: {
      Size: 'Large',
      Temperament: 'Smart, Proud, Active',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹50,000 - ₹80,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,200 - 1,500 kcal',
        commonAllergies: 'Lamb, soy',
        feedingTips: 'Can be picky eaters. Prone to bloat, so feed multiple small meals.'
      },
      grooming: {
        frequency: 'Professional grooming every 4-6 weeks is required.',
        tools: 'Slicker brush, pin brush, comb.',
        coatType: 'Curly, dense, single-layer coat that is considered hypoallergenic.'
      }
    }
  },
  {
    id: 'beagle',
    name: 'Beagle',
    description: 'Merry and fun-loving, Beagles are curious hounds that follow their noses everywhere.',
    traits: {
      Size: 'Small',
      Temperament: 'Merry, Curious, Friendly',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Low',
      'Energy Level': 'High',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹25,000 - ₹40,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '650 - 900 kcal',
        commonAllergies: 'Corn, wheat',
        feedingTips: 'Highly food-motivated; prone to obesity. Use puzzle feeders to slow eating.'
      },
      grooming: {
        frequency: 'Weekly brushing. Ears need regular checks to prevent infections.',
        tools: 'Hound glove, bristle brush.',
        coatType: 'Short, dense coat.'
      }
    }
  },
  {
    id: 'rottweiler',
    name: 'Rottweiler',
    description: 'A loyal, loving, and confident guardian. Rottweilers are calm and courageous dogs.',
    traits: {
      Size: 'Large',
      Temperament: 'Loyal, Loving, Confident',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'Low',
      'Energy Level': 'Medium',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹25,000 - ₹50,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '2,100 - 2,500 kcal',
        commonAllergies: 'Chicken, grains',
        feedingTips: 'Powerful jaws need durable chew toys. Prone to bloat and joint issues.'
      },
      grooming: {
        frequency: 'Weekly brushing with a rubber curry brush.',
        tools: 'Curry brush, shedding blade.',
        coatType: 'Short, dense outer coat with a soft undercoat.'
      }
    }
  },
  {
    id: 'pointer/german',
    name: 'German Shorthaired Pointer',
    description: 'Friendly, smart, and willing to please, GSPs are enthusiastic dogs who thrive on activity.',
    traits: {
      Size: 'Medium',
      Temperament: 'Friendly, Smart, Enthusiastic',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Low',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹40,000 - ₹60,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,300 - 1,800 kcal',
        commonAllergies: 'Wheat, soy',
        feedingTips: 'High-energy breed needs a diet rich in protein and fat. Susceptible to bloat.'
      },
      grooming: {
        frequency: 'Minimal grooming needed; weekly brushing.',
        tools: 'Firm bristle brush, hound glove.',
        coatType: 'Short, thick, and water-repellent coat.'
      }
    }
  },
  {
    id: 'dachshund',
    name: 'Dachshund',
    description: 'Known for their long bodies and spunky personality, Dachshunds are clever and brave.',
    traits: {
      Size: 'Small',
      Temperament: 'Spunky, Clever, Brave',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'Medium',
      'Energy Level': 'Medium',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹20,000 - ₹35,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '400 - 600 kcal',
        commonAllergies: 'Artificial additives',
        feedingTips: 'Prone to back problems (IVDD), so maintaining a healthy weight is critical.'
      },
      grooming: {
        frequency: 'Varies by coat type; smooth coats need little, longhaired need regular brushing.',
        tools: 'Slicker brush (longhaired), hound glove (smooth).',
        coatType: 'Comes in three varieties: smooth, wirehaired, and longhaired.'
      }
    }
  },
  {
    id: 'pembroke',
    name: 'Pembroke Welsh Corgi',
    description: 'Smart and affectionate, Corgis are low-set herders that are agreeable and outgoing.',
    traits: {
      Size: 'Small',
      Temperament: 'Affectionate, Smart, Tenacious',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Medium',
      'Energy Level': 'Medium',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹60,000 - ₹90,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '750 - 1,000 kcal',
        commonAllergies: 'Grains',
        feedingTips: 'Can easily become overweight, which strains their long back. Monitor food intake.'
      },
      grooming: {
        frequency: 'Daily brushing during heavy shedding seasons (twice a year).',
        tools: 'Slicker brush, undercoat rake.',
        coatType: 'Thick double coat that sheds significantly.'
      }
    }
  },
    {
    id: 'australian/shepherd',
    name: 'Australian Shepherd',
    description: 'A smart, work-oriented herding dog, the Aussie is eager to please and full of energy.',
    traits: {
      Size: 'Medium',
      Temperament: 'Smart, Work-Oriented, Exuberant',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Medium',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹45,000 - ₹70,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,200 - 1,600 kcal',
        commonAllergies: 'Some can have the MDR1 gene mutation, affecting drug sensitivity.',
        feedingTips: 'Needs a high-quality diet to fuel their high energy levels. Mental stimulation is as important as physical.'
      },
      grooming: {
        frequency: 'Weekly brushing to prevent matting.',
        tools: 'Undercoat rake, slicker brush.',
        coatType: 'Medium-length, weather-resistant double coat.'
      }
    }
  },
  {
    id: 'terrier/yorkshire',
    name: 'Yorkshire Terrier',
    description: 'Feisty, brave, and bossy, the Yorkie is a tiny terrier with a big personality.',
    traits: {
      Size: 'Small',
      Temperament: 'Feisty, Brave, Affectionate',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'High',
      'Energy Level': 'Medium',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹40,000 - ₹60,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '150 - 250 kcal',
        commonAllergies: 'Sensitive stomachs; may need specific formulas.',
        feedingTips: 'Prone to dental issues, so dental care is important. Small kibble is best.'
      },
      grooming: {
        frequency: 'Daily brushing is required to prevent tangles in their long, silky coat.',
        tools: 'Pin brush, steel comb.',
        coatType: 'Fine, silky, human-like hair that grows continuously.'
      }
    }
  },
  {
    id: 'boxer',
    name: 'Boxer',
    description: 'Playful and high-energy, Boxers are known for their loyalty and protective nature.',
    traits: {
      Size: 'Large',
      Temperament: 'Playful, Patient, Protective',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Low',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹20,000 - ₹40,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,500 - 2,000 kcal',
        commonAllergies: 'Grains, sensitive stomachs.',
        feedingTips: 'Deep-chested breed prone to bloat. Feed smaller meals and avoid activity after eating.'
      },
      grooming: {
        frequency: 'Minimal grooming; weekly wipe-down with a hound glove.',
        tools: 'Hound glove, soft bristle brush.',
        coatType: 'Short, tight-fitting coat.'
      }
    }
  },
  {
    id: 'husky',
    name: 'Siberian Husky',
    description: 'Graceful and mischievous, Huskies are friendly pack dogs bred for sledding.',
    traits: {
      Size: 'Medium',
      Temperament: 'Friendly, Mischievous, Outgoing',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Medium',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹50,000 - ₹80,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,000 - 1,400 kcal',
        commonAllergies: 'Zinc deficiency can occur.',
        feedingTips: 'Bred to need less food than other breeds of their size. High protein diet works well.'
      },
      grooming: {
        frequency: 'Weekly brushing, but daily during shedding season ("blowing coat").',
        tools: 'Undercoat rake, pin brush.',
        coatType: 'Thick double coat designed for cold climates.'
      }
    }
  },
  {
    id: 'dane/great',
    name: 'Great Dane',
    description: 'Known as "Apollo of Dogs," Great Danes are gentle giants that are friendly and patient.',
    traits: {
      Size: 'Large',
      Temperament: 'Friendly, Patient, Dependable',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Low',
      'Energy Level': 'Medium',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹40,000 - ₹70,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '2,500 - 3,000+ kcal',
        commonAllergies: 'Wheat, dairy',
        feedingTips: 'Extremely prone to bloat; feed with a slow-feeder bowl and give multiple small meals.'
      },
      grooming: {
        frequency: 'Minimal; a weekly brush is sufficient.',
        tools: 'Rubber curry brush, hound glove.',
        coatType: 'Short and sleek coat.'
      }
    }
  },
  {
    id: 'shiba',
    name: 'Shiba Inu',
    description: 'An ancient Japanese breed, the Shiba Inu is alert, active, and known for its spirited personality.',
    traits: {
      Size: 'Small',
      Temperament: 'Alert, Active, Attentive',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'Medium',
      'Energy Level': 'High',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹70,000 - ₹1,20,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '700 - 900 kcal',
        commonAllergies: 'Prone to skin allergies from food like chicken or beef.',
        feedingTips: 'Can be picky eaters. Tend to stay lean naturally.'
      },
      grooming: {
        frequency: 'Fastidious cleaners, but shed heavily twice a year.',
        tools: 'Undercoat rake, slicker brush.',
        coatType: 'Stiff, straight outer coat with a soft, thick undercoat.'
      }
    }
  },
  {
    id: 'doberman',
    name: 'Doberman Pinscher',
    description: 'Sleek and powerful, Dobermans are known for being fearless, loyal, and highly intelligent.',
    traits: {
      Size: 'Large',
      Temperament: 'Fearless, Loyal, Alert',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'Low',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹30,000 - ₹60,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,800 - 2,400 kcal',
        commonAllergies: 'Soy, corn',
        feedingTips: 'High-protein diet to support lean muscle. Prone to bloat.'
      },
      grooming: {
        frequency: 'Very low maintenance; a quick wipe-down weekly.',
        tools: 'Grooming mitt, soft brush.',
        coatType: 'Short, sleek, and close-fitting coat.'
      }
    }
  },
  {
    id: 'schnauzer/miniature',
    name: 'Miniature Schnauzer',
    description: 'Friendly and smart, the Miniature Schnauzer is a tough but charming terrier.',
    traits: {
      Size: 'Small',
      Temperament: 'Friendly, Smart, Obedient',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'Medium',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹40,000 - ₹60,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '500 - 750 kcal',
        commonAllergies: 'Prone to pancreatitis; need a low-fat diet.',
        feedingTips: 'Avoid feeding fatty table scraps. Monitor for skin allergies.'
      },
      grooming: {
        frequency: 'Regular grooming (every 5-8 weeks) is needed. Daily beard cleaning.',
        tools: 'Stripping knife (for show coats), clippers, pin brush.',
        coatType: 'Wiry double coat.'
      }
    }
  },
  {
    id: 'shihtzu',
    name: 'Shih Tzu',
    description: 'Known for its flowing hair, the Shih Tzu is a playful and charming toy dog breed.',
    traits: {
      Size: 'Small',
      Temperament: 'Playful, Affectionate, Outgoing',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'Low',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹30,000 - ₹50,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '250 - 400 kcal',
        commonAllergies: 'Chicken, grains',
        feedingTips: 'Brachycephalic (flat-faced) breed may need shallow bowls. Prone to dental issues.'
      },
      grooming: {
        frequency: 'Daily brushing and combing is essential to prevent mats.',
        tools: 'Pin brush, steel comb, small elastics for topknots.',
        coatType: 'Long, flowing double coat.'
      }
    }
  },
  {
    id: 'spaniel/cocker',
    name: 'Cocker Spaniel',
    description: 'With their big, dreamy eyes, Cocker Spaniels are gentle, smart, and happy dogs.',
    traits: {
      Size: 'Medium',
      Temperament: 'Gentle, Smart, Happy',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'Medium',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹35,000 - ₹55,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '700 - 1,000 kcal',
        commonAllergies: 'Beef, dairy',
        feedingTips: 'Prone to ear infections; keep ears clean and dry. Can gain weight easily.'
      },
      grooming: {
        frequency: 'Brushing several times a week. Professional grooming recommended.',
        tools: 'Slicker brush, comb, groomer visits.',
        coatType: 'Silky, flat or slightly wavy coat with long feathering.'
      }
    }
  },
  {
    id: 'mountain/bernese',
    name: 'Bernese Mountain Dog',
    description: 'Good-natured and calm, the Bernese Mountain Dog is a large, strong worker with a sweet disposition.',
    traits: {
      Size: 'Large',
      Temperament: 'Good-natured, Calm, Strong',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'Medium',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹60,000 - ₹1,00,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,800 - 2,400 kcal',
        commonAllergies: 'Wheat, dairy',
        feedingTips: 'Prone to bloat and joint issues. Feed a diet formulated for large breeds.'
      },
      grooming: {
        frequency: 'Brushing 2-3 times a week due to heavy shedding.',
        tools: 'Slicker brush, undercoat rake, comb.',
        coatType: 'Thick, silky, moderately long double coat.'
      }
    }
  },
  {
    id: 'pomeranian',
    name: 'Pomeranian',
    description: 'The tiny Pomeranian is an inquisitive, bold, and lively companion with a beautiful plumed tail.',
    traits: {
      Size: 'Small',
      Temperament: 'Inquisitive, Bold, Lively',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'High',
      'Energy Level': 'High',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹50,000 - ₹80,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '200 - 300 kcal',
        commonAllergies: 'Grains, artificial preservatives',
        feedingTips: 'Prone to dental problems. Small kibble and regular teeth cleaning are important.'
      },
      grooming: {
        frequency: 'Brushing several times a week to prevent matting of the undercoat.',
        tools: 'Pin brush, slicker brush, comb.',
        coatType: 'Abundant textured double coat.'
      }
    }
  },
  {
    id: 'sheepdog/shetland',
    name: 'Shetland Sheepdog',
    description: 'The Shetland Sheepdog, or Sheltie, is a bright, playful, and energetic herder.',
    traits: {
      Size: 'Small',
      Temperament: 'Playful, Energetic, Bright',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹40,000 - ₹60,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '600 - 900 kcal',
        commonAllergies: 'Soy, corn',
        feedingTips: 'Can be sensitive to certain drugs (MDR1 gene). High-quality protein is key.'
      },
      grooming: {
        frequency: 'Thorough brushing 2-3 times a week. Sheds a lot.',
        tools: 'Slicker brush, pin brush, undercoat rake.',
        coatType: 'Long, dense, harsh double coat.'
      }
    }
  },
  {
    id: 'collie/border',
    name: 'Border Collie',
    description: 'A brilliant workaholic, the Border Collie is an amazing and athletic dog of boundless energy.',
    traits: {
      Size: 'Medium',
      Temperament: 'Tenacious, Keen, Energetic',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'Medium',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹30,000 - ₹50,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,000 - 1,400 kcal',
        commonAllergies: 'None particularly common, but check for MDR1 gene sensitivity.',
        feedingTips: 'Diet must support extreme activity levels. Mental exercise is crucial.'
      },
      grooming: {
        frequency: 'Weekly brushing for both rough and smooth coats.',
        tools: 'Pin brush, slicker brush, comb.',
        coatType: 'Comes in two types: a rough, longer coat and a smooth, shorter coat.'
      }
    }
  },
  {
    id: 'frise/bichon',
    name: 'Bichon Frise',
    description: 'The Bichon Frise is a cheerful, small dog breed with a love of mischief and a lot of love to give.',
    traits: {
      Size: 'Small',
      Temperament: 'Cheerful, Playful, Curious',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'Medium',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹45,000 - ₹65,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '400 - 650 kcal',
        commonAllergies: 'Prone to skin allergies; grain-free diets often help.',
        feedingTips: 'Can be prone to bladder stones; ensure constant access to fresh water.'
      },
      grooming: {
        frequency: 'Professional grooming is needed every 4-6 weeks, with daily brushing.',
        tools: 'Pin brush, slicker brush, comb.',
        coatType: 'Soft, curly double coat considered hypoallergenic.'
      }
    }
  },
  {
    id: 'bulldog/boston',
    name: 'Boston Terrier',
    description: 'Known as "The American Gentleman," the Boston Terrier is a lively, bright, and amicable breed.',
    traits: {
      Size: 'Small',
      Temperament: 'Friendly, Bright, Amusing',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Low',
      'Energy Level': 'Medium',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹50,000 - ₹75,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '500 - 800 kcal',
        commonAllergies: 'Corn, wheat, prone to food allergies.',
        feedingTips: 'Can have sensitive digestion and flatulence. A high-quality, easily digestible food is best.'
      },
      grooming: {
        frequency: 'Minimal grooming; weekly brushing.',
        tools: 'Soft bristle brush, hound glove.',
        coatType: 'Short, smooth "tuxedo" coat.'
      }
    }
  },
  {
    id: 'pug',
    name: 'Pug',
    description: 'Pugs are charming, mischievous, and loving companions with a distinctive wrinkled face.',
    traits: {
      Size: 'Small',
      Temperament: 'Charming, Mischievous, Loving',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Medium',
      'Energy Level': 'Low',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹25,000 - ₹45,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '400 - 600 kcal',
        commonAllergies: 'Chicken, corn',
        feedingTips: 'Strong tendency to overeat and become obese. Facial wrinkles must be cleaned daily.'
      },
      grooming: {
        frequency: 'Regular brushing as they shed a lot. Facial folds need daily cleaning.',
        tools: 'Curry comb, bristle brush, damp cloth for wrinkles.',
        coatType: 'Fine, smooth, short coat.'
      }
    }
  },
  {
    id: 'cattledog/australian',
    name: 'Australian Cattle Dog',
    description: 'Alert, curious, and pleasant, the Australian Cattle Dog is a loyal and hard-working herder.',
    traits: {
      Size: 'Medium',
      Temperament: 'Alert, Curious, Loyal',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'Low',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹35,000 - ₹55,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,100 - 1,500 kcal',
        commonAllergies: 'Relatively hardy breed, few common allergies.',
        feedingTips: 'High-energy working breed requires a diet rich in protein.'
      },
      grooming: {
        frequency: 'Needs only occasional brushing to remove dead hair.',
        tools: 'Stiff bristle brush.',
        coatType: 'Short, dense, weather-resistant double coat.'
      }
    }
  },
  // START OF 15 NEW BREEDS
  {
    id: 'spaniel/blenheim',
    name: 'Cavalier King Charles Spaniel',
    description: 'The Cavalier is a gentle and affectionate toy breed, happy to cuddle on the couch or go for a walk.',
    traits: {
      Size: 'Small',
      Temperament: 'Affectionate, Gentle, Graceful',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Medium',
      'Energy Level': 'Medium',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹60,000 - ₹90,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '400 - 600 kcal',
        commonAllergies: 'Prone to heart conditions (MVD), a diet rich in taurine is beneficial.',
        feedingTips: 'Can easily become overweight; monitor treat intake closely.'
      },
      grooming: {
        frequency: 'Brushing 3-4 times a week to prevent tangles, especially in the ears.',
        tools: 'Slicker brush, comb.',
        coatType: 'Long, silky coat with feathering.'
      }
    }
  },
  {
    id: 'akita',
    name: 'Akita',
    description: 'A courageous and dignified breed from Japan, the Akita is a loyal guardian for its family.',
    traits: {
      Size: 'Large',
      Temperament: 'Courageous, Dignified, Loyal',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'Medium',
      'Energy Level': 'Medium',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹50,000 - ₹80,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,800 - 2,200 kcal',
        commonAllergies: 'Corn, soy, and wheat. Prone to autoimmune diseases.',
        feedingTips: 'Akitas can be possessive over food. Feed in a separate, calm area.'
      },
      grooming: {
        frequency: 'Brushing a few times a week, but sheds heavily twice a year.',
        tools: 'Undercoat rake, pin brush.',
        coatType: 'Thick double coat, similar to a husky.'
      }
    }
  },
  {
    id: 'maltese',
    name: 'Maltese',
    description: 'The tiny Maltese is a gentle, playful, and charming companion known for its long, white hair.',
    traits: {
      Size: 'Small',
      Temperament: 'Gentle, Playful, Charming',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'Medium',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹50,000 - ₹70,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '200 - 300 kcal',
        commonAllergies: 'Prone to dental issues and sensitive stomachs.',
        feedingTips: 'Clean tear stains daily. Can be a picky eater, so be consistent.'
      },
      grooming: {
        frequency: 'Daily brushing and combing is essential to prevent mats and tangles.',
        tools: 'Pin brush, steel comb.',
        coatType: 'Long, silky white hair that is considered hypoallergenic.'
      }
    }
  },
  {
    id: 'chihuahua',
    name: 'Chihuahua',
    description: 'The Chihuahua is a tiny dog with a huge personality. A graceful, alert, and swift-moving companion.',
    traits: {
      Size: 'Small',
      Temperament: 'Graceful, Sassy, Charming',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'Low',
      'Energy Level': 'Medium',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹20,000 - ₹40,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '150 - 250 kcal',
        commonAllergies: 'Prone to hypoglycemia (low blood sugar); needs frequent, small meals.',
        feedingTips: 'Very small kibble is necessary. Keep them warm as they get cold easily.'
      },
      grooming: {
        frequency: 'Minimal for smooth coats; weekly brushing for long coats.',
        tools: 'Soft bristle brush or comb.',
        coatType: 'Comes in smooth (short) and long-coated varieties.'
      }
    }
  },
  {
    id: 'dalmatian',
    name: 'Dalmatian',
    description: 'Famous for its spotted coat, the Dalmatian is an alert, energetic, and dignified coach dog.',
    traits: {
      Size: 'Large',
      Temperament: 'Dignified, Smart, Outgoing',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Medium',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹30,000 - ₹50,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,400 - 1,800 kcal',
        commonAllergies: 'Unique uric acid metabolism; requires a low-purine diet to prevent stones.',
        feedingTips: 'Ensure constant access to fresh water. Avoid organ meats and game.'
      },
      grooming: {
        frequency: 'Sheds a lot; brushing a few times a week is beneficial.',
        tools: 'Rubber curry brush, hound glove.',
        coatType: 'Short, dense, and glossy coat.'
      }
    }
  },
  {
    id: 'stbernard',
    name: 'St. Bernard',
    description: 'A famously watchful and patient nanny dog, the St. Bernard is a gentle giant with a sweet nature.',
    traits: {
      Size: 'Large',
      Temperament: 'Patient, Watchful, Sweet',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'Low',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹50,000 - ₹90,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '2,500 - 3,500 kcal',
        commonAllergies: 'Bloat is a major concern. Prone to hip dysplasia.',
        feedingTips: 'Feed large-breed puppy food to ensure slow, steady growth. Prone to drooling.'
      },
      grooming: {
        frequency: 'Brushing several times a week to manage drool and shedding.',
        tools: 'Undercoat rake, slicker brush, drool rag.',
        coatType: 'Comes in both shorthaired and longhaired varieties.'
      }
    }
  },
  {
    id: 'hound/basset',
    name: 'Basset Hound',
    description: 'Known for its long, droopy ears and sad-looking eyes, the Basset is a charming, patient, and low-key family dog.',
    traits: {
      Size: 'Medium',
      Temperament: 'Charming, Patient, Low-Key',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Medium',
      'Energy Level': 'Low',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹35,000 - ₹55,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '900 - 1,200 kcal',
        commonAllergies: 'Prone to obesity, which strains their back and joints.',
        feedingTips: 'Ears need to be cleaned weekly to prevent infections. Prone to drooling.'
      },
      grooming: {
        frequency: 'Weekly brushing. Regular ear cleaning and wrinkle checks are vital.',
        tools: 'Hound glove, soft brush, ear cleaning solution.',
        coatType: 'Short, smooth, dense coat that sheds moderately.'
      }
    }
  },
  {
    id: 'havanese',
    name: 'Havanese',
    description: 'The Havanese is a cheerful and sociable small breed from Cuba, known for its cuddly nature and silky coat.',
    traits: {
      Size: 'Small',
      Temperament: 'Cheerful, Sociable, Intelligent',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'Medium',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹55,000 - ₹80,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '400 - 600 kcal',
        commonAllergies: 'Chicken, wheat',
        feedingTips: 'They thrive on companionship and can get separation anxiety if left alone too long.'
      },
      grooming: {
        frequency: 'Daily brushing is needed to keep their long coat free of mats.',
        tools: 'Pin brush, comb.',
        coatType: 'Long, soft, silky double coat which can be wavy or corded.'
      }
    }
  },
  {
    id: 'ridgeback/rhodesian',
    name: 'Rhodesian Ridgeback',
    description: 'Known for the distinctive ridge of hair on its back, this breed is dignified, athletic, and loyal.',
    traits: {
      Size: 'Large',
      Temperament: 'Dignified, Athletic, Even-tempered',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'Low',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹45,000 - ₹70,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,600 - 2,200 kcal',
        commonAllergies: 'Wheat and corn.',
        feedingTips: 'Needs plenty of exercise to prevent destructive behavior. A very sensitive breed.'
      },
      grooming: {
        frequency: 'Minimal grooming required, just a weekly wipe-down.',
        tools: 'Rubber curry brush.',
        coatType: 'Short, dense, glossy coat.'
      }
    }
  },
  {
    id: 'terrier/westhighland',
    name: 'West Highland White Terrier',
    description: 'The Westie is a charming, confident, and tough little dog that is always ready for an adventure.',
    traits: {
      Size: 'Small',
      Temperament: 'Confident, Charming, Hardy',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'Medium',
      'Apartment Living': 'Yes',
      'Price Range (INR)': '₹40,000 - ₹60,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '400 - 600 kcal',
        commonAllergies: 'Very prone to skin allergies; may require a special diet.',
        feedingTips: 'A grain-free diet with a novel protein source (like fish) often helps with skin issues.'
      },
      grooming: {
        frequency: 'Regular grooming is needed to maintain their wiry coat.',
        tools: 'Stripping comb or professional grooming.',
        coatType: 'Harsh, wiry double coat.'
      }
    }
  },
  {
    id: 'vizsla',
    name: 'Vizsla',
    description: 'The Vizsla is a gentle, affectionate, and energetic Hungarian sporting dog known as the "Velcro dog".',
    traits: {
      Size: 'Medium',
      Temperament: 'Affectionate, Energetic, Gentle',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Low',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹50,000 - ₹75,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,400 - 1,800 kcal',
        commonAllergies: 'Few common allergies, but can have sensitive skin.',
        feedingTips: 'Needs a high-protein diet to support their active lifestyle. Does not like to be left alone.'
      },
      grooming: {
        frequency: 'Very low maintenance; occasional brushing.',
        tools: 'Rubber grooming mitt.',
        coatType: 'Short, smooth, and golden-rust colored coat.'
      }
    }
  },
  {
    id: 'weimaraner',
    name: 'Weimaraner',
    description: 'Known as the "Gray Ghost" for its unique coat, the Weimaraner is a friendly, fearless, and athletic dog.',
    traits: {
      Size: 'Large',
      Temperament: 'Friendly, Fearless, Alert',
      'Good with Kids': 'With Supervision',
      'Grooming Needs': 'Low',
      'Energy Level': 'High',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹45,000 - ₹70,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '1,500 - 2,000 kcal',
        commonAllergies: 'Prone to bloat.',
        feedingTips: 'Requires significant exercise to avoid anxiety and destructive behaviors.'
      },
      grooming: {
        frequency: 'Minimal grooming needed for their short coat.',
        tools: 'Hound glove.',
        coatType: 'Short, sleek, and solid gray coat.'
      }
    }
  },
  {
    id: 'newfoundland',
    name: 'Newfoundland',
    description: 'A massive dog with a sweet temperament, the Newfoundland is a world-class working and rescue dog.',
    traits: {
      Size: 'Large',
      Temperament: 'Sweet, Patient, Devoted',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'Low',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹60,000 - ₹1,00,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '2,200 - 2,800 kcal',
        commonAllergies: 'Joint issues are common; a diet with glucosamine is helpful.',
        feedingTips: 'Prone to drooling. A gentle giant that needs space but not excessive exercise.'
      },
      grooming: {
        frequency: 'Brushing several times a week to manage their thick coat and heavy shedding.',
        tools: 'Undercoat rake, long-bristled slicker brush.',
        coatType: 'Heavy, water-resistant double coat.'
      }
    }
  },
  {
    id: 'mastiff/english',
    name: 'English Mastiff',
    description: 'A gentle giant, the Mastiff is a courageous but good-natured and docile companion.',
    traits: {
      Size: 'Large',
      Temperament: 'Good-natured, Courageous, Docile',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'Low',
      'Energy Level': 'Low',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹70,000 - ₹1,20,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '2,500 - 3,500+ kcal',
        commonAllergies: 'Bloat is a major concern.',
        feedingTips: 'Despite their size, they require minimal exercise. Drools heavily.'
      },
      grooming: {
        frequency: 'Weekly brushing is sufficient for their short coat.',
        tools: 'Rubber curry brush.',
        coatType: 'Short double coat.'
      }
    }
  },
  {
    id: 'pyrenees',
    name: 'Great Pyrenees',
    description: 'A majestic and calm guardian of the flock, the Great Pyrenees is a patient and courageous dog.',
    traits: {
      Size: 'Large',
      Temperament: 'Calm, Patient, Smart',
      'Good with Kids': 'Yes',
      'Grooming Needs': 'High',
      'Energy Level': 'Low',
      'Apartment Living': 'No',
      'Price Range (INR)': '₹50,000 - ₹80,000',
    },
    pupCare: {
      nutrition: {
        dailyCalories: '2,000 - 2,600 kcal',
        commonAllergies: 'Can have sensitive skin and allergies to grain.',
        feedingTips: 'Nocturnal barkers by nature. Independent thinkers, can be stubborn.'
      },
      grooming: {
        frequency: 'Brushing at least twice a week to prevent heavy matting.',
        tools: 'Slicker brush, pin brush, undercoat rake.',
        coatType: 'Thick, weather-resistant double coat.'
      }
    }
  }
];