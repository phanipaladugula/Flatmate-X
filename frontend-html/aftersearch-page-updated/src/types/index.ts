export interface Flatmate {
  title: string;
  habits: string[];
  desc: string;
  loc: string;
  img: string;
  tags: string[];
}

export interface Flat {
  type: string;
  title: string;
  price: number;
  images: string[];
  desc: string;
  loc: string;
  tags: string[];
  mates: Flatmate[];
}