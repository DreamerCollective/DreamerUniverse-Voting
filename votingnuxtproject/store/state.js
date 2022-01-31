export default () => ({
  users: [
    {
      id: 0,
      username: "Zalron",
      fullName: "David Lawson"
    }
  ],
  electionCard: {
    id: 0,
    authorId: 0,
    title: "Example Election",
    subtitle: "Example Subtitle",
    textInformation: "Example text to so the underlying example long text information",
    reveal: false,
    electionOptions: [
      {
        id: 0,
        title: "Plurality System", selected: false, hide: false,
        SystemOptions: [
          {id: 0, title: "Vote For One", selected: false,  hide: false,},
          {id: 1, title: "Vote For Many", selected: false,  hide: false,},
          {id: 2, title: "Vote For Few", selected: false,  hide: false,},
          {id: 3, title: "Vote For One Of Many", selected: false,  hide: false,}
        ]
      },
      {
        id: 1,
        title: "Majority System", selected: false,  hide: false,
        SystemOptions: [
          {id: 0, title: "Two Rounds Voting", selected: false,  hide: false,},
          {id: 1, title: "Many Rounds Voting", selected: false,  hide: false,},
          {id: 2, title: "Instant Rounds Voting", selected: false,  hide: false,}
        ]
      },
      {
        id: 2,
        title: "Proportional System", selected: false,  hide: false,
        SystemOptions: [
          {id: 0, title: "Party-List Open Voting", selected: false,  hide: false,},
          {id: 1, title: "Party-List Closed Voting", selected: false,  hide: false,},
          {id: 2, title: "Transferable Voting", selected: false,  hide: false,},
        ]
      },
      {
        id: 3,
        title: "Mixed System", selected: false,  hide: false,
        SystemOptions: [
          {id: 0, title: "...", selected: false,  hide: false,},
          {id: 1, title: "...", selected: false,  hide: false,},
          {id: 2, title: "...", selected: false,  hide: false,},
        ]
      },
    ],
    specificElectionCandidates: [
      {
        electionCandidatesId: 0,
        votedFor: false,
      },
    ],
  },
  electionCards: [
    {
      id: 0,
      authorId: 0,
      title: "Example Election",
      subtitle: "Example Subtitle",
      textInformation: "Example text to so the underlying example long text information",
      reveal: false,
      electionOptions: [
        {
          id: 0,
          title: "Plurality System", selected: false, hide: false,
          SystemOptions: [
            {id: 0, title: "Vote For One", selected: false, hide: false,},
            {id: 1, title: "Vote For Many", selected: false, hide: false,},
            {id: 2, title: "Vote For Few", selected: false, hide: false,},
            {id: 3, title: "Vote For One Of Many", selected: false, hide: false,}
          ]
        },
        {
          id: 1,
          title: "Majority System", selected: false, hide: false,
          SystemOptions: [
            {id: 0, title: "Two Rounds Voting", selected: false, hide: false,},
            {id: 1, title: "Many Rounds Voting", selected: false, hide: false,},
            {id: 2, title: "Instant Rounds Voting", selected: false, hide: false,}
          ]
        },
        {
          id: 2,
          title: "Proportional System", selected: false, hide: false,
          SystemOptions: [
            {id: 0, title: "Party-List Open Voting", selected: false, hide: false,},
            {id: 1, title: "Party-List Closed Voting", selected: false, hide: false,},
            {id: 2, title: "Transferable Voting", selected: false, hide: false,},
          ]
        },
        {
          id: 3,
          title: "Mixed System", selected: false, hide: false,
          SystemOptions: [
            {id: 0, title: "...", selected: false, hide: false,},
            {id: 1, title: "...", selected: false, hide: false,},
            {id: 2, title: "...", selected: false, hide: false,},
          ]
        },
      ],
      specificElectionCandidates: [
        {
          electionCandidatesId: 0,
          votedFor: false,
        },
      ],
    },
    {
      id: 1,
      authorId: 0,
      title: "Example Election",
      subtitle: "Example Subtitle",
      textInformation: "Example text to so the underlying example long text information",
      reveal: false,
      electionOptions: [
        {
          id: 0,
          title: "Plurality System", selected: false, hide: false,
          SystemOptions: [
            {id: 0, title: "Vote For One", selected: false,  hide: false,},
            {id: 1, title: "Vote For Many", selected: false,  hide: false,},
            {id: 2, title: "Vote For Few", selected: false,  hide: false,},
            {id: 3, title: "Vote For One Of Many", selected: false,  hide: false,}
          ]
        },
        {
          id: 1,
          title: "Majority System", selected: false,  hide: false,
          SystemOptions: [
            {id: 0, title: "Two Rounds Voting", selected: false,  hide: false,},
            {id: 1, title: "Many Rounds Voting", selected: false,  hide: false,},
            {id: 2, title: "Instant Rounds Voting", selected: false,  hide: false,}
          ]
        },
        {
          id: 2,
          title: "Proportional System", selected: false,  hide: false,
          SystemOptions: [
            {id: 0, title: "Party-List Open Voting", selected: false,  hide: false,},
            {id: 1, title: "Party-List Closed Voting", selected: false,  hide: false,},
            {id: 2, title: "Transferable Voting", selected: false,  hide: false,},
          ]
        },
        {
          id: 3,
          title: "Mixed System", selected: false,  hide: false,
          SystemOptions: [
            {id: 0, title: "...", selected: false,  hide: false,},
            {id: 1, title: "...", selected: false,  hide: false,},
            {id: 2, title: "...", selected: false,  hide: false,},
          ]
        },
      ],
      specificElectionCandidates: [
        {
          electionCandidatesId: 0,
          votedFor: false,
        },
      ],
    },
  ],
  electionCandidates: [
    {
      id: 0,
      electionId: 0,
      partyId: 0,
      candidateName: "Bob",
      candidateDescription: "Bob likes ice-cream, bob will give everyone ice-cream if elected",
      votedFor: false,
      issues: [
        {
          id: 0,
          issueName: "ICE-CREAM",
          issueDescription: "Bob really likes ice-cream"
        },
        {
          id: 1,
          issueName: "Lamas",
          issueDescription: "Bob likes Lamas"
        },
      ],
    },
  ],
  Party: [
    {
      id: 0,
      electionIds: [
        {
          electionId: 0
        },
      ],
      PartyName: "Ice Cream Party",
      PartyDescription: "The Party for more Ice Creams"
    }
  ],
})
