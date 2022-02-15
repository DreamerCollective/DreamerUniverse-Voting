export default () => ({
  electionMetaOptions: [
    {
      minRange: 1,
      maxRange: 20,
    },
    {
      minRange: 1,
      maxRange: 10,
    },
    {
      minRange: 1,
      maxRange: 10,
    },
    {
      minRange: 10,
      maxRange: 70,
    },
    {
      minRange: 1,
      maxRange: 10,
      infinite: true,
    },
    {
      minRange: 1,
      maxRange: 1000,
      infinite: true,
    },
  ],
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
      HowManyVotesCandidatesNeedToWin:10,
      HowManyVotesDoVotersHave: 1,
      HowManyElectionRounds: 1,
      HowManyVoters: 1,
      CanYouVoteForParties: false,
      DoVotesTransfer: false,
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

      HowManyCandidates: 1,
      HowManyCandidatesCanWin: 1,
      HowManyVotesCandidatesNeedToWin:10,
      HowManyVotesDoVotersHave: 1,
      HowManyElectionRounds: 1,
      HowManyVoters: 1,
      CanYouVoteForParties: false,
      DoVotesTransfer: false,


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
