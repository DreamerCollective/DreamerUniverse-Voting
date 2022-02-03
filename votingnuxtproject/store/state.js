export default () => ({
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
      reveal: false,
      PluralitySystemSelected: false, PluralitySystemHide: false,
      VoteForOneSelected: false, VoteForOneHide: false,
      VoteForManySelected: false, VoteForManyHide: false,
      VoteForFewSelected: false, VoteForFewHide: false,
      VoteForOneOfManySelected: false, VoteForOneOfManyHide: false,

      MajoritySystemSelected: false, MajoritySystemHide: false,
      TwoRoundsVotingSelected: false, TwoRoundsVotingHide: false,
      ManyRoundsVotingSelected: false, ManyRoundsVotingHide: false,
      InstantRoundsVotingSelected: false, InstantRoundsVotingHide: false,

      ProportionalSystemSelected: false, ProportionalSystemHide: false,
      PartyListOpenVotingSelected: false, PartyListOpenVotingHide: false,
      PartyListClosedVotingSelected: false, PartyListClosedVotingHide: false,
      TransferableVotingSelected: false, TransferableVotingHide: false,

      MixedSystemSelected: false, MixedSystemHide: false,
      TBD1Selected: false, TBD1Hide: false,
      TBD2Selected: false, TBD2Hide: false,
      TBD3Selected: false, TBD3Hide: false,

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
