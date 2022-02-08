export default () => ({
  electionMetaOptions: {
    HowManyCandidatesRange: [
      {
        minRange: 1,
      },
      {
        maxRange: 20,
      }
    ],
    HowManyCandidatesCanWinRange: [
      {
        minRange: 1,
      },
      {
        maxRange: 10,
      }
    ],
    HowManyVotesDoVotersHaveRange: [
      {
        minRange: 1,
      },
      {
        maxRange: 10,
      }
    ],
    HowMuchOfAPercentageMustCandidatesNeedToWinRange: [
      {
        minRange: 20,
      },
      {
        maxRange: 70,
      }
    ],
    HowManyElectionRoundsRange: [
      {
        minRange: 1,
      },
      {
        maxRange: 10,
      },
      {
        infinite: true,
      },
    ],
    DoVotesTransferRange: [
      {
        minRange: 1,
      },
      {
        maxRange: 10,
      },
      {
        infinite: true,
      },
    ],
  },
  users: [
    {
      id: 0,
      username: "Zalron",
      fullName: "David Lawson"
    }
  ],
  electionCards: [
    {
      id: 0,
      authorId: 0,
      title: "Example Election",
      subtitle: "Example Subtitle",
      textInformation: "Example text to so the underlying example long text information",

      HowManyCandidates: 1,
      HowManyCandidatesCanWin: 1,
      HowManyVotesDoVotersHave: 1,
      DoVotesTransfer: false,
      HowManyElectionRounds: 1,
      HowManyVotesCandidatesNeedToWin: 51,
      CanYouVoteForParties: false,
      HowManyVoters: 1,

      specificElectionCandidates: [
        {
          electionCandidatesId: 0,
          votedFor: false,
        },
      ],
      voters: [
        {
          UserId: 0,
          hasVoted: false,
        }
      ]
    },
    {
      id: 1,
      authorId: 0,
      title: "Example Election",
      subtitle: "Example Subtitle",
      textInformation: "Example text to so the underlying example long text information",



      specificElectionCandidates: [
        {
          electionCandidatesId: 0,
          votedFor: false,
        },
      ],
      voters: [
        {
          UserId: 0,
          hasVoted: false,
        }
      ]
    },
  ],
  electionCandidates: [
    {
      id: 0,
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
