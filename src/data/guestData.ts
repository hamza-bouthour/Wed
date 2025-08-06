export interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  siblingsInvited?: string;
}

export interface Invitation {
  id: string;
  username: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  receptionTime: string;
  receptionVenue: string;
  receptionAddress: string;
  storyText: string;
  proposalText: string;
  photos: string[];
}

export const invitation: Invitation = {
  id: "hamza-andrea-invitation",
  username: "hamza-andrea",
  groomName: "Hamza",
  brideName: "Andrea",
  weddingDate: "Saturday, Aug 22nd, 2025",
  receptionTime: "6:00 PM - 11:00 PM",
  receptionVenue: "The Social Studio",
  receptionAddress: "3520 Seagate Way\nOceanside, CA 92056",
  storyText: "Our paths crossed on a beautiful spring morning at the local Walmart in Escondido. Hamza was searching for the perfect spices for his pasta, while Andrea was looking for fresh ingredients for a special dinner. A chance encounter over the most beautiful peonies led to our first conversation.",
  proposalText: "Under the same stars where we first shared our dreams, Hamza got down on one knee in our favorite spot overlooking the ocean. With tears of joy and hearts full of love, Andrea said yes to forever together.",
  photos: [
     "https://i.postimg.cc/kgDxkhyZ/5c58ba37-3836-4212-95bd-2caac37d7514.jpg",
    "https://i.postimg.cc/vmBS2z1H/2e017fa1-b21c-4ac3-b297-7527991d3717.jpg",
    "https://i.postimg.cc/m2gMH6KD/27cd7684-4839-47e8-a75e-67f1a246046e.jpg",
    "https://i.postimg.cc/FK3JvtkP/5c0a14dc-24ae-48d6-a81d-7aa3c2d7c7c7.jpg",
    "https://i.postimg.cc/NMt2fN1Q/04b3ffcc-a37c-4442-85c8-c1d1d59533db.jpg",
    "https://i.postimg.cc/1X5gDfCT/4da7a5e3-9567-4e85-a4c0-a0cc5e22e056.jpg",
    "https://i.postimg.cc/XqzvFxyG/468a85cc-7581-4bd2-be29-785f443fcc88.jpg",
  ]
};

export const guests: Guest[] = [
  {
    id: "guest-sahar",
    firstName: "Sahar",
    lastName: "Bouthour",
  },
  {
    id: "guest-khoubeib",
    firstName: "Khoubeib", 
    lastName: "Bouthour",
    siblingsInvited: "Soumaya, Skander, Yasmine"
  },
  {
    id: "guest-afef",
    firstName: "Afef",
    lastName: "Triki",
  }
];

export function getGuestByName(firstName: string): Guest | undefined {
  return guests.find(guest => guest.firstName.toLowerCase() === firstName.toLowerCase());
}
