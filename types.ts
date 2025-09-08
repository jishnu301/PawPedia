
export interface Breed {
  id: string; // e.g., 'retriever/golden'
  name: string; // e.g., 'Golden Retriever'
  description: string;
  traits: {
    Size: 'Small' | 'Medium' | 'Large';
    Temperament: string;
    'Good with Kids': 'Yes' | 'No' | 'With Supervision';
    'Grooming Needs': 'Low' | 'Medium' | 'High';
    'Energy Level': 'Low' | 'Medium' | 'High';
    'Apartment Living': 'Yes' | 'No';
    'Price Range (INR)': string;
  };
  pupCare: {
    nutrition: {
      dailyCalories: string;
      commonAllergies: string;
      feedingTips: string;
    };
    grooming: {
      frequency: string;
      tools: string;
      coatType: string;
    };
  };
}

export type Page = 'home' | 'all' | 'compare' | 'ai' | 'favorites' | 'pupcare';
