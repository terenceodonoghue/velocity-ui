import faker from 'faker';

export const conversations = {
  data: [
    {
      avatarSrc: faker.image.avatar(),
      isOnline: true,
      name: 'Lisa F. Bogar',
      preview: "If you're still having trouble loading...",
      time: '2m',
    },
    {
      avatarSrc: faker.image.avatar(),
      isOnline: false,
      name: 'Kathey K. Hernandez',
      preview: 'You are most welcome Kathey!',
      time: '40m',
    },
    {
      avatarSrc: faker.image.avatar(),
      isOnline: true,
      name: 'Nora M. Buchanan',
      preview: 'I have an issue with...',
      time: '51m',
    },
    {
      avatarSrc: faker.image.avatar(),
      isOnline: false,
      name: 'James A. Parker',
      preview: "Let's look into this together.",
      time: '2h',
    },
    {
      avatarSrc: faker.image.avatar(),
      isOnline: false,
      name: 'Emma R. Joiner',
      preview: "We're happy to take a look into...",
      time: '7h',
    },
    {
      avatarSrc: faker.image.avatar(),
      isOnline: false,
      name: 'Martin L. Sherrod',
      preview: 'The download should now start...',
      time: '7h',
    },
    {
      avatarSrc: faker.image.avatar(),
      isOnline: true,
      name: 'Angel V. Mason',
      preview: 'Sorry to hear about the syncing...',
      time: '10h',
    },
  ],
};

export const dialog = {
  data: [
    {
      avatarSrc: faker.image.avatar(),
      message:
        'Hello John, thank you for calling Provide Support. How may I help you?',
      name: 'Anna',
      time: '18:54',
    },
    {},
    {
      avatarSrc: faker.image.avatar(),
      message:
        "I'm sorry, I don't have the answer to that question. May I put you on hold for a few minutes while I check with my manager?",
      name: 'Anna',
      time: '18:54',
    },
    {},
    {},
  ],
};
