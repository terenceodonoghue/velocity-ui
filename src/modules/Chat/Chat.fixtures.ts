import faker from 'faker';

export const conversations = {
  data: [
    {
      isOnline: true,
      message: "If you're still having trouble loading...",
      name: 'Lisa F. Bogar',
      src: faker.image.avatar(),
      time: '2m',
    },
    {
      isOnline: false,
      message: 'You are most welcome Kathey!',
      name: 'Kathey K. Hernandez',
      src: faker.image.avatar(),
      time: '40m',
    },
    {
      isOnline: true,
      message: 'I have an issue with...',
      name: 'Nora M. Buchanan',
      src: faker.image.avatar(),
      time: '51m',
    },
    {
      isOnline: false,
      message: "Let's look into this together.",
      name: 'James A. Parker',
      src: faker.image.avatar(),
      time: '2h',
    },
    {
      isOnline: false,
      message: "We're happy to take a look into...",
      name: 'Emma R. Joiner',
      src: faker.image.avatar(),
      time: '7h',
    },
    {
      isOnline: false,
      message: 'The download should now start...',
      name: 'Martin L. Sherrod',
      src: faker.image.avatar(),
      time: '7h',
    },
    {
      isOnline: true,
      message: 'Sorry to hear about the syncing...',
      name: 'Angel V. Mason',
      src: faker.image.avatar(),
      time: '10h',
    },
  ],
};

export const dialog = {
  data: [
    {
      message:
        'Hello John, thank you for calling Provide Support. How may I help you?',
      name: 'Anna',
      src: faker.image.avatar(),
      time: '18:54',
    },
    {
      message:
        "I'm sorry, I don't have the answer to that question. May I put you on hold for a few minutes while I check with my manager?",
      name: 'Anna',
      src: faker.image.avatar(),
      time: '18:54',
    },
  ],
};
