export interface Item {
  name: String;
  id: number;
  time?: String;
}

export const fakeItems: Item[] = [
  { name: 'Algebra', id: Math.random() },
  { name: 'Ebn Alhitham', id: Math.random() },
  { name: 'Alkhawarzmi', id: Math.random() }
];
