export const settings = {
  listCreatorText: 'Add new list',
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  defaultSearchColumnTitle: 'Search result for ',
  defaultSearchColumnIcon: 'search',
  logoIcon: 'clipboard-list',
};

export const pageContents = {
  title: 'To do app with React',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const infoPageContent = {
  title: 'Info title',
  description: 'Info description',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

export const faqPageContent = {
  title: 'FAQ title',
  description: 'FAQ description',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

export const listData = {
  title: 'Old: Things to do <sup>soon!</sup>',
  description: 'Old: Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Old: Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'Old: This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Old: Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Old: Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Old: Harry Potter',
        },
        {
          key: 1,
          title: 'Old: Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Old: Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'Old: The Witcher',
        },
        {
          key: 1,
          title: 'Old: Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 'list-2',
    title: 'Kitchen <sup>recipes</sup>',
    description: 'A lot of things to cook!',
    image: 'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?cs=srgb&dl=black-frying-pan-with-spaghetti-sauce-near-brown-wooden-691114.jpg&fm=jpg',
  },
  {
    id: 'list-3',
    title: 'Mountain <sup>checklist</sup>',
    description: 'let\'s get ready to climb!',
    image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Simple Recipes',
    icon: 'cookie-bite',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Ingredients to buy',
    icon: 'shopping-cart',
  },
  {
    id: 'column-6',
    listId: 'list-3',
    title: 'One-day trip',
    icon: 'mountain',
  },
  {
    id: 'column-7',
    listId: 'list-3',
    title: 'Few days trip',
    icon: 'suitcase-rolling',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
  {
    id: 'card-7',
    columnId: 'column-4',
    title: 'Best fluffy pancakes',
  },
  {
    id: 'card-8',
    columnId: 'column-5',
    title: 'Plain flour',
  },
  {
    id: 'card-9',
    columnId: 'column-6',
    title: 'Jacket',
  },
  {
    id: 'card-10',
    columnId: 'column-7',
    title: 'sleeping bag',
  },
  {
    id: 'card-11',
    columnId: 'column-7',
    title: 'mat',
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
