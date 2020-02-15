## Errors

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[authorship](#authorship)**

- **[balances](#balances)**

- **[contracts](#contracts)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[finalityTracker](#finalitytracker)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[recovery](#recovery)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[treasury](#treasury)**

- **[utility](#utility)**

- **[vesting](#vesting)**


___


## authorship
 
### GenesisUncle
- **summary**:   The uncle is genesis. 
 
### InvalidUncleParent
- **summary**:   The uncle parent not in the chain. 
 
### OldUncle
- **summary**:   The uncle isn't recent enough to be included. 
 
### TooHighUncle
- **summary**:   The uncle is too high in chain. 
 
### TooManyUncles
- **summary**:   Too many uncles. 
 
### UncleAlreadyIncluded
- **summary**:   The uncle is already included. 
 
### UnclesAlreadySet
- **summary**:   Uncles already set in the block. 

___


## balances
 
### DeadAccount
- **summary**:   Beneficiary account must pre-exist 
 
### ExistentialDeposit
- **summary**:   Value too low to create account due to existential deposit 
 
### ExistingVestingSchedule
- **summary**:   A vesting schedule already exists for this account 
 
### InsufficientBalance
- **summary**:   Balance too low to send value 
 
### KeepAlive
- **summary**:   Transfer/payment would kill account 
 
### LiquidityRestrictions
- **summary**:   Account liquidity restrictions prevent withdrawal 
 
### Overflow
- **summary**:   Got an overflow after adding 
 
### VestingBalance
- **summary**:   Vesting balance too high to send value 

___


## contracts
 
### InvalidContractOrigin
- **summary**:   An origin TrieId written in the current block. 
 
### InvalidDestinationContract
- **summary**:   Cannot restore to nonexisting or alive contract. 
 
### InvalidScheduleVersion
- **summary**:   A new schedule must have a greater version than the current one. 
 
### InvalidSourceContract
- **summary**:   Cannot restore from nonexisting or tombstone contract. 
 
### InvalidSurchargeClaim
- **summary**:   An origin must be signed or inherent and auxiliary sender only provided on inherent. 
 
### InvalidTombstone
- **summary**:   Tombstones don't match. 

___


## council
 
### AlreadyInitialized
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **summary**:   Account is not a member 
 
### ProposalMissing
- **summary**:   Proposal must exist 
 
### WrongIndex
- **summary**:   Mismatched index 

___


## democracy
 
### AlreadyCanceled
- **summary**:   Cannot cancel the same proposal twice 
 
### AlreadyProxy
- **summary**:   Already a proxy 
 
### AlreadyVetoed
- **summary**:   Identity may not veto a proposal twice 
 
### BadIndex
- **summary**:   Unknown index 
 
### DuplicatePreimage
- **summary**:   Preimage already noted 
 
### DuplicateProposal
- **summary**:   Proposal already made 
 
### Early
- **summary**:   Too early 
 
### Imminent
- **summary**:   Imminent 
 
### InvalidHash
- **summary**:   Invalid hash 
 
### NoneWaiting
- **summary**:   No proposals waiting 
 
### NoProposal
- **summary**:   No external proposal 
 
### NotDelegated
- **summary**:   Not delegated 
 
### NotExpired
- **summary**:   The lock on the account to be unlocked has not yet expired. 
 
### NotImminent
- **summary**:   Not imminent 
 
### NotLocked
- **summary**:   The target account does not have a lock. 
 
### NotProxy
- **summary**:   Not a proxy 
 
### NotSimpleMajority
- **summary**:   Next external proposal not simple majority 
 
### PreimageInvalid
- **summary**:   Invalid preimage 
 
### PreimageMissing
- **summary**:   Preimage not found 
 
### ProposalBlacklisted
- **summary**:   Proposal still blacklisted 
 
### ProposalMissing
- **summary**:   Proposal does not exist 
 
### ReferendumInvalid
- **summary**:   Vote given for invalid referendum 
 
### ValueLow
- **summary**:   Value too low 
 
### WrongProxy
- **summary**:   Wrong proxy 

___


## elections
 
### DuplicatedCandidate
- **summary**:   Duplicated candidate submission. 
 
### InsufficientCandidateFunds
- **summary**:   Candidate does not have enough funds. 
 
### InvalidOrigin
- **summary**:   Origin is not a candidate, member or a runner up. 
 
### LowBalance
- **summary**:   Cannot vote with stake less than minimum balance. 
 
### MaximumVotesExceeded
- **summary**:   Cannot vote more than maximum allowed. 
 
### MemberSubmit
- **summary**:   Member cannot re-submit candidacy. 
 
### MustBeVoter
- **summary**:   Must be a voter. 
 
### NotMember
- **summary**:   Not a member. 
 
### NoVotes
- **summary**:   Must vote for at least one candidate. 
 
### ReportSelf
- **summary**:   Cannot report self. 
 
### RunnerSubmit
- **summary**:   Runner cannot re-submit candidacy. 
 
### TooManyVotes
- **summary**:   Cannot vote more than candidates. 
 
### UnableToPayBond
- **summary**:   Voter can not pay voting bond. 
 
### UnableToVote
- **summary**:   Cannot vote when no candidates or members exist. 

___


## finalityTracker
 
### AlreadyUpdated
- **summary**:   Final hint must be updated only once in the block 
 
### BadHint
- **summary**:   Finalized height above block number 

___


## grandpa
 
### ChangePending
- **summary**:   Attempt to signal GRANDPA change with one already pending. 
 
### PauseFailed
- **summary**:   Attempt to signal GRANDPA pause when the authority set isn't live (either paused or already pending pause). 
 
### ResumeFailed
- **summary**:   Attempt to signal GRANDPA resume when the authority set isn't paused (either live or already pending resume). 
 
### TooSoon
- **summary**:   Cannot signal forced change so soon after last. 

___


## identity
 
### EmptyIndex
- **summary**:   Empty index. 
 
### FeeChanged
- **summary**:   Fee is changed. 
 
### InvalidIndex
- **summary**:   The index is invalid. 
 
### InvalidJudgement
- **summary**:   Invalid judgement. 
 
### InvalidTarget
- **summary**:   The target is invalid. 
 
### JudgementGiven
- **summary**:   Judgement given. 
 
### NoIdentity
- **summary**:   No identity found. 
 
### NotFound
- **summary**:   Account isn't found. 
 
### NotNamed
- **summary**:   Account isn't named. 
 
### StickyJudgement
- **summary**:   Sticky judgement. 
 
### TooManyFields
- **summary**:   Too many additional fields. 
 
### TooManySubAccounts
- **summary**:   Too many subs-accounts. 

___


## imOnline
 
### DuplicatedHeartbeat
- **summary**:   Duplicated heartbeat. 
 
### InvalidKey
- **summary**:   Non existent public key. 

___


## recovery
 
### AlreadyRecoverable
- **summary**:   This account is already set up for recovery 
 
### AlreadyStarted
- **summary**:   A recovery process has already started for this account 
 
### AlreadyVouched
- **summary**:   This user has already vouched for this recovery 
 
### DelayPeriod
- **summary**:   The friend must wait until the delay period to vouch for this recovery 
 
### MaxFriends
- **summary**:   Friends list must be less than max friends 
 
### NotAllowed
- **summary**:   User is not allowed to make a call on behalf of this account 
 
### NotEnoughFriends
- **summary**:   Friends list must be greater than zero and threshold 
 
### NotFriend
- **summary**:   This account is not a friend who can vouch 
 
### NotRecoverable
- **summary**:   This account is not set up for recovery 
 
### NotSorted
- **summary**:   Friends list must be sorted and free of duplicates 
 
### NotStarted
- **summary**:   A recovery process has not started for this rescuer 
 
### Overflow
- **summary**:   There was an overflow in a calculation 
 
### StillActive
- **summary**:   There are still active recovery attempts that need to be closed 
 
### Threshold
- **summary**:   The threshold for recovering this account has not been met 
 
### ZeroThreshold
- **summary**:   Threshold must be greater than zero 

___


## session
 
### DuplicatedKey
- **summary**:   Registered duplicate key. 
 
### InvalidProof
- **summary**:   Invalid ownership proof. 
 
### NoAssociatedValidatorId
- **summary**:   No associated validator ID for account. 

___


## society
 
### AlreadyBid
- **summary**:   User has already made a bid. 
 
### AlreadyCandidate
- **summary**:   User is already a candidate. 
 
### AlreadyFounded
- **summary**:   Society already founded. 
 
### AlreadyMember
- **summary**:   User is already a member. 
 
### AlreadyVouching
- **summary**:   Member is already vouching or banned from vouching again. 
 
### BadPosition
- **summary**:   An incorrect position was provided. 
 
### Founder
- **summary**:   Cannot remove the founder. 
 
### Head
- **summary**:   Cannot remove the head of the chain. 
 
### InsufficientPot
- **summary**:   Not enough in pot to accept candidate. 
 
### MaxMembers
- **summary**:   Too many members in the society. 
 
### NoPayout
- **summary**:   Nothing to payout. 
 
### NotCandidate
- **summary**:   User is not a candidate. 
 
### NotFounder
- **summary**:   The caller is not the founder. 
 
### NotHead
- **summary**:   The caller is not the head. 
 
### NotMember
- **summary**:   User is not a member. 
 
### NotSuspended
- **summary**:   User is not suspended. 
 
### NotVouching
- **summary**:   Member is not vouching. 
 
### Suspended
- **summary**:   User is suspended. 

___


## staking
 
### AlreadyBonded
- **summary**:   Stash is already bonded. 
 
### AlreadyPaired
- **summary**:   Controller is already paired. 
 
### DuplicateIndex
- **summary**:   Duplicate index. 
 
### EmptyTargets
- **summary**:   Targets cannot be empty. 
 
### InsufficientValue
- **summary**:   Can not bond with value less than minimum balance. 
 
### InvalidSlashIndex
- **summary**:   Slash record index out of bounds. 
 
### NoMoreChunks
- **summary**:   Can not schedule more unlock chunks. 
 
### NotController
- **summary**:   Not a controller account. 
 
### NotStash
- **summary**:   Not a stash account. 
 
### NoUnlockChunk
- **summary**:   Can not rebond without unlocking chunks. 

___


## sudo
 
### RequireSudo
- **summary**:   Sender must be the Sudo account 

___


## system
 
### FailedToExtractRuntimeVersion
- **summary**:   Failed to extract the runtime version from the new runtime. 

  Either calling `Core_version` or decoding `RuntimeVersion` failed. 
 
### ImplVersionNotAllowedToDecrease
- **summary**:   The implementation version is not allowed to decrease between the current runtime and the new runtime. 
 
### InvalidSpecName
- **summary**:   The name of specification does not match between the current runtime and the new runtime. 
 
### SpecOrImplVersionNeedToIncrease
- **summary**:   The specification or the implementation version need to increase between the current runtime and the new runtime. 
 
### SpecVersionNotAllowedToDecrease
- **summary**:   The specification version is not allowed to decrease between the current runtime and the new runtime. 

___


## technicalCommittee
 
### AlreadyInitialized
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **summary**:   Account is not a member 
 
### ProposalMissing
- **summary**:   Proposal must exist 
 
### WrongIndex
- **summary**:   Mismatched index 

___


## treasury
 
### AlreadyKnown
- **summary**:   The tip was already found/started. 
 
### InsufficientProposersBalance
- **summary**:   Proposer's balance is too low. 
 
### InvalidProposalIndex
- **summary**:   No proposal at that index. 
 
### NotFinder
- **summary**:   The account attempting to retract the tip is not the finder of the tip. 
 
### Premature
- **summary**:   The tip cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **summary**:   The reason given is just too big. 
 
### StillOpen
- **summary**:   The tip cannot be claimed/closed because there are not enough tippers yet. 
 
### UnknownTip
- **summary**:   The tip hash is unknown. 

___


## utility
 
### AlreadyApproved
- **summary**:   Call is already approved by this signatory. 
 
### NoApprovalsNeeded
- **summary**:   Call doesn't need any (more) approvals. 
 
### NotFound
- **summary**:   Multisig operation not found when attempting to cancel. 
 
### NoTimepoint
- **summary**:   No timepoint was given, yet the multisig operation is already underway. 
 
### NotOwner
- **summary**:   Only the account that originally created the multisig is able to cancel it. 
 
### SenderInSignatories
- **summary**:   The sender was contained in the other signatories; it shouldn't be. 
 
### SignatoriesOutOfOrder
- **summary**:   The signatories were provided out of order; they should be ordered. 
 
### TooFewSignatories
- **summary**:   There are too few signatories in the list. 
 
### TooManySignatories
- **summary**:   There are too many signatories in the list. 
 
### UnexpectedTimepoint
- **summary**:   A timepoint was given, yet no multisig operation is underway. 
 
### WrongTimepoint
- **summary**:   A different timepoint was given to the multisig operation that is underway. 
 
### ZeroThreshold
- **summary**:   Threshold is too low (zero). 

___


## vesting
 
### ExistingVestingSchedule
- **summary**:   An existing vesting schedule already exists for this account that cannot be clobbered. 
 
### NotVesting
- **summary**:   The account given is not vesting. 
