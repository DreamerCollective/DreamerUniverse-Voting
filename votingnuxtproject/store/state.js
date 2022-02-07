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

      PluralitySystemVoteForOneSelected: false, PluralitySystemVoteForOneHide: false,
      PluralitySystemVoteForManySelected: false, PluralitySystemVoteForManyHide: false,
      PluralitySystemVoteForFewSelected: false, PluralitySystemVoteForFewHide: false,
      PluralitySystemVoteForOneOfManySelected: false, PluralitySystemVoteForOneOfManyHide: false,

      MajoritySystemTwoRoundsVotingSelected: false, MajoritySystemTwoRoundsVotingHide: false,
      MajoritySystemManyRoundsVotingSelected: false, MajoritySystemManyRoundsVotingHide: false,
      MajoritySystemInstantRoundsVotingSelected: false, MajoritySystemInstantRoundsVotingHide: false,

      ProportionalSystemPartyListOpenVotingSelected: false, ProportionalSystemPartyListOpenVotingHide: false,
      ProportionalSystemPartyListClosedVotingSelected: false, ProportionalSystemPartyListClosedVotingHide: false,
      ProportionalSystemTransferableVotingSelected: false, ProportionalSystemTransferableVotingHide: false,

      MixedSystemTBD1Selected: false, MixedSystemTBD1Hide: false,
      MixedSystemTBD2Selected: false, MixedSystemTBD2Hide: false,
      MixedSystemTBD3Selected: false, MixedSystemTBD3Hide: false,

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

      PluralitySystemVoteForOneSelected: false, PluralitySystemVoteForOneHide: false,
      PluralitySystemVoteForManySelected: false, PluralitySystemVoteForManyHide: false,
      PluralitySystemVoteForFewSelected: false, PluralitySystemVoteForFewHide: false,
      PluralitySystemVoteForOneOfManySelected: false, PluralitySystemVoteForOneOfManyHide: false,

      MajoritySystemTwoRoundsVotingSelected: false, MajoritySystemTwoRoundsVotingHide: false,
      MajoritySystemManyRoundsVotingSelected: false, MajoritySystemManyRoundsVotingHide: false,
      MajoritySystemInstantRoundsVotingSelected: false, MajoritySystemInstantRoundsVotingHide: false,

      ProportionalSystemPartyListOpenVotingSelected: false, ProportionalSystemPartyListOpenVotingHide: false,
      ProportionalSystemPartyListClosedVotingSelected: false, ProportionalSystemPartyListClosedVotingHide: false,
      ProportionalSystemTransferableVotingSelected: false, ProportionalSystemTransferableVotingHide: false,

      MixedSystemTBD1Selected: false, MixedSystemTBD1Hide: false,
      MixedSystemTBD2Selected: false, MixedSystemTBD2Hide: false,
      MixedSystemTBD3Selected: false, MixedSystemTBD3Hide: false,

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
