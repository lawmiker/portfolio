import { ProjectData } from './project.model';

export const Basket_Data: ProjectData = {
  slug: 'picnic-basket',
  projectName: 'Picnic Basket',

  softwareLabels: ['Angular', 'TS', 'html', 'css'],
  projectIcon: 'picnic-basket.svg',

  devsList: ['Étienne Assick', 'Marian Grau', 'Oleksandra Pyrogova', 'Marvin Becker', 'Tim Apel', 'David Durasin'],
  misc: 'Software-Project 2025 Group 07\nUniversität Konstanz, AG-HCI',

  featureSlides: [
    {
      name: 'Login und Register',
      description: 'The app provides a simple and intuitive authentication flow, allowing users to either log in to an existing account or create a new one. An account is required in order to use the app.\nThe registration process enables new users to quickly create an account by entering their personal details and setting up secure login credentials. The registration is designed to be responsive and inform user of invalid input.\n\nIn case entered e-mail has already been bound to an existing account, the user will be redirected to the login page. Returning users can securely log in using their registered email address and password.',
      images: ['1.png', '3.png', 'register.PNG', 'login2.PNG']
    },
    {
      name: 'View',
      description: 'The app offers both a map view and a list view, allowing users to browse and select restaurants in their preferred way.',
      images: ['mapland.PNG', 'list.PNG']
    },
    {
      name: 'Filter',
      description: 'Users can filter restaurants by:\n\n- Currently open\n- Vegetarian options\n- Price range\n- Distance\n\nThe distance filter is available only if the user grants the app access to their location.',
      images: ['filtermap.PNG', 'listfilter.PNG']
    },
    {
      name: 'Restaurant Page',
      description: 'Each restaurant has its own dedicated page containing detailed information as well as the option to order a picnic basket directly through the app.',
      images: ['rest.PNG', 'rest2.PNG', '5.PNG']
    },
    {
      name: 'Order & Payment',
      description: 'If no payment method has been added to the user account yet, the “Order Now” button remains disabled until a payment method is registered. A dedicated “Add Payment Method” button guides the user through the setup process. Once a payment method has been successfully added, the user is automatically redirected back to the order process, with the newly added payment method preselected for convenience. If multiple payment methods are available, the user can choose their preferred option during checkout.',
      images: ['best2.PNG', 'payments.PNG', 'zahl.PNG', 'zahl2.PNG']
    },
    {
      name: 'Order Confirmation',
      description: 'After completing an order, the user receives an order confirmation including the estimated pickup time. If the order fails, an error message is displayed together with the reason for the failure.',
      images: ['load.PNG', 'erfolg.PNG', 'bestfehler.PNG']
    },
    {
      name: 'My Orders',
      description: 'Users can access all previous and current orders at any time under “My Orders” and download the corresponding invoices directly from the app. Since the app is designed for a cross-border region, users can choose between displaying prices in either EUR \(€\) or CHF \(Swiss Francs\).',
      images: ['besteur.PNG', 'bestchf.PNG', 'whrung.PNG']
    },
    {
      name: 'Favorites',
      description: 'Users can add restaurants to their favorites list.',
      images: ['favs.PNG', 'map.PNG']
    },
    {
      name: 'Account',
      description: 'All account information, including payment methods, passwort reset and account deactivation can be easily accessed in the settings section.',
      images: ['setting.PNG', 'passwreset1.PNG', 'passwreset.PNG', 'zahlg.PNG', 'acclsch.PNG', 'acclsch2.PNG']
    },
    {
      name: 'About',
      description: 'Our about page.',
      images: ['abt.PNG', 'abt2.PNG']
    },
  ]
};

export const HR_Game: ProjectData = {
  slug: 'hr-game',
  projectName: 'HR Self-Regulation Game',

  softwareLabels: ['Unity', 'C#', 'Polar'],
  projectIcon: 'hr-game.svg',

  devsList: ['Oleksandra Pyrogova', '', 'Advisors:', 'Dr. Anke Reinschlüssel', 'TT.-Prof. Dr. Tiare Feuchtner'],
  misc: 'Training a Player\'s Heart Rate Self-Regulation using Dynamic Game Experience\nUniversität Konstanz, AG-HCI',

  featureSlides: [
    {
      name: 'Foreword',
      description: 'This project is a heart rate biomechanics-focused game prototype developed as part of a research study exploring heart rate self-regulation in video games.\n\nThe game integrates real-time heart rate monitoring in two different ways:\nContinuous background heart rate tracking and logging for data collection and analysis\nDirect integration of heart rate data into gameplay mechanics\n\nThe core design concept was inspired by research on stress factors and physiological responses, their influence on heart rate and heart rate integration in video games specifically. The game intentionally introduces stressful gameplay situations while encouraging players to maintain a stable heart rate under pressure.',
      images: ['']
    },
    {
      name: 'Play Modes',
      description: 'Two gameplay modes were implemented:\n\nHeart Rate Mode\nIn this mode, the player\'s heart rate directly influences the gameplay mechanics. The game also provides additional feedback and reminders encouraging the player to actively pay attention to and regulate their heart rate.\n\nNormal Mode\nIn this mode, heart rate data is still continuously recorded for research purposes, but it does not affect gameplay mechanics.',
      images: ['hrtut.png', 'dochint.png', 'ecg.png']
    },
    {
      name: 'Dialogues and Storytelling',
      description: 'The overall presentation follows a visual novel-inspired design with a strong emphasis on storytelling and dialogue-driven interactions. A custom dialogue system was implemented specifically for the project.\nThe narrative was simplified into a linear story that is identical for all participants; this removes variability and helps ensure that any observed HR differences are traceable to the manipulated game elements, yet still preserves the element of involvement and immersion. Narrative dialogue sequences also serve an additional gameplay purpose: they act as intentional "cool-down" moments designed to reduce player stress after stress-induced gameplay sections.',
      images: ['dialogue.png', 'dialogueEX.png']
    },
    {
      name: 'Combat',
      description: 'According to the related literature, one of the most successful tools for a heart rate increase in video games were combat and combat mechanics. The game utilizes turn-based combat logic. In player\'s turn, player can choose from six different skills for their action. Two of these skills can give more advantage to the player - \'block\' skill (block/negate opponents damage) and \'ultimate\' skill (deals 20 base damage, potent attack). In Normal Mode, those skills require energy points as well as rage points, that can be acquired by using other skills. In HR Mode, those skills require energy points as well as playe\'s heart rate delta staying in the <= 5 bpm range. Heart rate delta is being updated per frame to keep track of the live heart rate.',
      images: ['Screenshot (151).png', 'HRultiblock.png', 'noHRulti.png', 'Screenshot (148).png']
    },
    {
      name: 'Boss Fight',
      description: 'To make the second combat appearance more intense, the boss fight features a two-phase structure with a heartbeat-matching minigame used as the transition between phases. Successfully completing the minigame rewards the player with a temporary buff, while failure results in reduced player health for the next phase',
      images: ['beatNormal.png', 'beatWHR.png']
    },
     {
      name: 'Hidden guidance',
      description: 'While the design intentionally places participants under conditions of heightened arousal/stress, it also embeds "hidden" forms of guidance within narrative checkpoints to mimic the way games often teach coping strategies through game elements. For example, during the second environmental change appearance \(red light\), the end checkpoint dialogue includes a reference to the Box Breathing and Kapalabhati breathing techniques used by Wang et al. in their Breathero prototype.',
      images: ['breathingtechn.png', 'Screenshot (152).png', 'Screenshot (153).png']
    },
    
    {
      name: 'Visuals',
      description: 'In addition to the gameplay and gameplay-related heart rate data processing implementation, all character illustrations and UI assets were designed and drawn entirely by myself, allowing for a cohesive visual style tailored specifically to the atmosphere and emotional pacing of the game.',
      images: ['IMG_3772.PNG']
    },
  ]
};

export const Flexwear: ProjectData = {
  slug: 'flexwear',
  projectName: 'Flexwear',

  softwareLabels: ['Angular', 'TS', 'html', 'css'],
  projectIcon: 'flexwear.svg',

  devsList: ['Oleksandra Pyrogova', 'Thoralf Trüe', 'Sergio Chan'],
  misc: 'Interactive Systems\nUniversität Konstanz, AG-HCI',

  featureSlides: [
    {
      name: 'Interactive Systems',
      description: 'Flexwear is a simple online clothing store our group has developed as part of the Interactive Systems course. The project focused on applying user-centered design methods and interactive system design principles to create an intuitive shopping experience. We designed the interface using established design patterns and implemented the frontend with Angular. Through a series of weekly assignments, we progressively designed and built key e-commerce features, gaining practical experience in frontend development, component-based architecture, and interactive user interface design.',
      images: ['1.PNG', '2.PNG', '3.PNG', '4.PNG', '5.PNG', '6.PNG', '7.PNG']
    }
  ] 
};

export const Project_Name: Record<string, ProjectData> = {
  'picnic-basket': Basket_Data, 'hr-game': HR_Game, 'flexwear': Flexwear,
};
