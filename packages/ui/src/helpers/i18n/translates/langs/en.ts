export const en = {
  menu: {
    menu: 'Menu',
    home: 'Home',
    profile: 'Profile',
    wiki: 'Wiki',
    about: 'About',
  },
  room: {
    errorNotFound: 'This is wrong uuid',
    backToLobby: 'Back to lobby',
    restartGame: 'Restart game',
  },
  mainPage: {
    createRoom: 'Create room',
    watch: 'Watch',
    join: 'Join',
    gamesList: 'Games list',
    players: 'Players',
  },
  game: {
    winner: 'Winner',
    evil: 'evil',
    good: 'good',
    stage: 'stage',
    voteStage: 'Vote stage',
    voting: 'voting',
    excalibur: 'excalibur',
    'team building': 'team building',
    mission: 'mission',
    initialization: 'initialization',
    'lady of lake': 'lady of lake',
    end: 'end',
    lancelots: 'lancelots',
    assassinate: 'assassinate',
    hidden: 'hidden',
    historyMode: 'History mode',
    gameIsEnded: 'Game is ended',
    rolesAndAddons: 'Roles and addons',
  },
  endReason: {
    manualy: 'The game is finished manually',
    evilTeamMissions: 'The evil team failed 3 missions',
    goodTeamMissions: 'The good team successes 3 missions',
    missMerlin: 'The evil team tried to kill Merlin but missed',
    missGuinevere: 'The evil team tried to kill Guinevere but missed',
    missLovers: 'The evil team tried to kill Lovers but missed',
    killGuinevere: 'The evil team killed Guinevere',
    killLovers: 'The evil team killed Lovers',
    killMerlin: 'The evil team killed Merlin',
  },
  roles: {
    merlin: 'Merlin',
    merlinPure: 'Merlin Pure',
    guinevere: 'Guinevere',
    percival: 'Percival',
    tristan: 'Tristan',
    isolde: 'Isolde',
    troublemaker: 'Troublemaker',
    servant: 'Servant',
    goodLancelot: 'Good Lancelot',
    evilLancelot: 'Evil Lancelot',
    lancelots: 'Lancelots',
    mordred: 'Mordred',
    trickster: 'Trickster',
    morgana: 'Morgana',
    oberon: 'Oberon',
    lunatic: 'Lunatic',
    brute: 'Brute',
    minion: 'Minion',
  },
  addons: {
    ladyOfLake: 'Lady of the lake',
    excalibur: 'Excalibur',
  },
  lady: {
    announceGood: 'Announce Good',
    announceEvil: 'Announce Evil',
  },
  options: {
    roles: 'Roles',
    extraRoles: 'Extra roles',
    addons: 'Addons',
    features: 'Features',
    ladyHint: 'The lady allows you to find out the loyalty of another player',
    excaliburHint: 'Excalibur allows you to change the decision of one of the participants of the mission',
    anonymousVoting: 'Anonymous voting',
    anonymousVotingHint: "With anonymous voting, you don't know who approves the mission and who rejects it",
    hiddenHistory: 'Hidden history',
    hiddenHistoryHint: 'With a hidden history, past actions in the game are hidden',
    displayIndex: 'Display index',
    displayIndexHint: 'Displays the index number of each player at the table',
  },
  startPanel: {
    copyLink: 'Copy link',
    discord: 'Discord',
    leaveGame: 'Leave Game',
    joinGame: 'Join Game',
    lockGame: 'Lock Game',
    unlockGame: 'Unlock game',
    startGame: 'Start Game',
    options: 'Options',
  },
  wiki: {
    rules: 'Rules',
    roles: 'Roles',
    addons: 'Addons',
  },
  onlineStatus: {
    connecting: 'Connecting...',
    connected: 'Connected',
    error: 'Error',
  },
  settings: {
    username: 'Username',
    usernameRequired: 'You must enter a username.',
    language: 'Language',
    usernameHint: 'Select your username for game',
    hideSpoilersHint: 'Hide spoilers',
    hideIndexHint: 'Hide Indexes In History',
    animeMode: 'Anime mode',
    submit: 'Submit',
    update: 'Update',
    colorTheme: 'Color theme',
    darkTheme: 'Dark theme',
    lightTheme: 'Light theme',
  },
  inGame: {
    sendTeam: 'Send Team',
    approve: 'Approve',
    reject: 'Reject',
    success: 'Success',
    fail: 'Fail',
    checkLoyalty: 'Check Loyalty',
    giveExcalibur: 'Give excalibur',
    skipExcalibur: 'Skip excalibur',
    useExcalibur: 'Use excalibur',
  },
  assassinate: {
    lovers: 'Lovers',
    assassinate: 'Assassinate',
    shot: '{killerName} assassinate {killedName}',
    shotResultHit: '{killedName} is {roleName}',
    shotResultMiss: '{killedName} is not {roleName}',
  },
  rolesInfo: {
    roles: 'Roles',
    inGameRoles: 'Roles in game',
    visibleRoles: 'Roles visible to you',
    merlinInfo: 'Knows evil, must remain hidden',
    merlinPureInfo: 'Knows evil and their roles, must remain hidden',
    percivalInfo: 'Knows two wizards (Merlin and Morgana), but does not know which of them is which',
    servantInfo: 'Loyal Servant of Arthur',
    troublemakerInfo: 'Obliged to lie about his loyalty',
    guinevereInfo: 'Knows two Lancelots but does not know their loyalty',
    goodLancelotInfo: 'Good lancelot, can switch role to evil in game',
    evilLancelotInfo: 'Evil lancelot, can switch role to good in game',
    mordredInfo: 'Unknown to Merlin',
    morganaInfo: 'Appears as Merlin for Percival',
    oberonInfo: 'Unknown to Evil',
    minionInfo: 'Minion of Mordred',
    isoldeInfo: 'Lover. Knows Tristan, must remain hidden',
    tristanInfo: 'Lover. Knows Isolde, must remain hidden',
    evilInfo: 'Evil player with an unknown role',
    goodInfo: 'Good player with an unknown role',
    tricksterInfo: 'Lying about his loyalty',
    lunaticInfo: 'Must fail on every mission',
    bruteInfo: 'May fail only first three missions',
    unknownInfo: 'Unknown role',
    mysteryWizardInfo: 'One of the two wizards is good (Merlin) or evil (Morgana)',
    unknownLancelotInfo: 'Lancelot, whose loyalty is not known',
  },
  hostMenu: {
    host: 'Host',
    hostPanel: 'Host panel',
    endRestartGameHint: 'The buttons will start voting for the end or restart of the game',
    endGame: 'End game',
    restartGame: 'Restart game',
    shuffle: 'Shuffle',
    shuffleHint: 'Shuffle players positions in lobby',
  },
  history: {
    history: 'History',
    live: 'Live',
    vote: 'Vote',
    checkLoyalty: 'Lady',
    mission: 'Mission',
    assassinate: 'Assassinate',
    switchResult: 'Excalibur',
    switchLancelots: 'Lancelots',
    hidden: 'Hidden',
  },
  mission: {
    players: 'Players',
    fails: 'Fails',
  },
  chat: {
    message: 'message',
  },
  infoMessage: {
    loginToMessage: 'Log in to send a message',
    disableSpoilers: 'Disable the "hide spoiler" option to see the content',
    waitForAction: 'The game updated! We are waiting for your action',
    loginToJoin: 'Log in to join game',
    linkCopied: 'Link has been copied to the clipboard',
    loginToCreate: 'Log in to create a game',
    close: 'Close',
  },
  votes: {
    yes: 'Yes',
    no: 'No',
    endGame: 'Voting to end the game',
    endAndRestartGame: 'Voting to end the game and start a new one',
  },
  notFound: {
    error: 'Oops! Sorry, page not found.',
    switch: 'Switch the route',
  },
  previewLink: {
    'Minions of Mordred(*)': 'Minions of Mordred(*)',
    Minions: 'Minions',
  },
};
