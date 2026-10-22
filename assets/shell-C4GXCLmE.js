const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tab-story-BcZqWq0O.js","assets/dom-D5s8RAx_.js","assets/deaths-CzCtiC1R.js","assets/index-BzosGPHw.js","assets/furniture-kinds-DxfvGOd9.js","assets/traits-DfnRvnA1.js","assets/geometry-Bo7jsnxJ.js","assets/looks--cloPBnj.js","assets/index-d0sNP09P.css","assets/form-Amak2zmk.js","assets/tab-cast-B33mygH_.js","assets/draft-B6BocoHo.js","assets/tab-places-CcEtE6_C.js","assets/preview3d-CHIW_9EK.js","assets/tab-evening-Dna6eqhE.js","assets/acts-DZwP-b_Q.js","assets/diorama-DN9Zmtba.js","assets/tab-clues-BA3DZFmT.js","assets/worker-client-D0Cph6xa.js","assets/tab-interviews-B3MhL_s1.js","assets/tab-words-doOULTpj.js","assets/tab-cutscenes-Dak_YYl_.js","assets/tab-check-DIcT0x-5.js"])))=>i.map(i=>d[i]);
import{n as e}from"./dom-D5s8RAx_.js";import{t}from"./deaths-CzCtiC1R.js";import{C as n,o as r,s as i,t as a}from"./index-BzosGPHw.js";import{blankDraft as o,deleteDraft as s,draftFrom as c,fromFile as l,listDrafts as u,loadDraft as d,saveDraft as f,toFile as p}from"./draft-B6BocoHo.js";import{n as m,t as h}from"./worker-client-D0Cph6xa.js";import{a as g,n as _,t as v}from"./form-Amak2zmk.js";function y(t){let n=[],r=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g,i=0;for(let a of t.matchAll(r)){a.index>i&&n.push(t.slice(i,a.index));let r=a[0];if(r.startsWith(`**`))n.push(e(`strong`,{},...y(r.slice(2,-2))));else if(r.startsWith("`"))n.push(e(`code`,{},r.slice(1,-1)));else if(r.startsWith(`[`)){let[,t,i]=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(r);n.push(e(`a`,{href:i,target:`_blank`,rel:`noopener`},t))}else n.push(e(`em`,{},...y(r.slice(1,-1))));i=a.index+r.length}return i<t.length&&n.push(t.slice(i)),n}function b(t){let n=e(`div`,{class:`dz-md`}),r=t.split(`
`),i=0;for(;i<r.length;){let t=r[i];if(!t.trim()){i++;continue}let a=/^(#{1,4})\s+(.*)$/.exec(t);if(a)n.append(e(`h${a[1].length+1}`,{},...y(a[2]))),i++;else if(/^---+$/.test(t.trim()))n.append(e(`hr`)),i++;else if(t.startsWith(`|`)){let t=[];for(;i<r.length&&r[i].startsWith(`|`);){let e=r[i].split(`|`).slice(1,-1).map(e=>e.trim());e.every(e=>/^:?-+:?$/.test(e))||t.push(e),i++}let[a,...o]=t;n.append(e(`div`,{class:`dz-table-wrap`},e(`table`,{},e(`thead`,{},e(`tr`,{},...(a??[]).map(t=>e(`th`,{},...y(t))))),e(`tbody`,{},...o.map(t=>e(`tr`,{},...t.map(t=>e(`td`,{},...y(t)))))))))}else if(/^\s*([-*]|\d+\.)\s+/.test(t)){let a=/^\s*\d+\./.test(t),o=e(a?`ol`:`ul`);for(;i<r.length&&/^\s*([-*]|\d+\.)\s+/.test(r[i]);){let t=r[i].replace(/^\s*([-*]|\d+\.)\s+/,``);for(i++;i<r.length&&/^\s{2,}\S/.test(r[i])&&!/^\s*([-*]|\d+\.)\s+/.test(r[i]);)t+=` `+r[i++].trim();o.append(e(`li`,{},...y(t)))}n.append(o)}else{let a=t;for(i++;i<r.length&&r[i].trim()&&!/^(#|\||-{3,}|\s*([-*]|\d+\.)\s)/.test(r[i]);)a+=` `+r[i++].trim();n.append(e(`p`,{},...y(a)))}}return n}var x=`# Designing a Cingöz case: lessons from *Lord Edgware Dies*

This note studies one classic whodunit, *Lord Edgware Dies*, to find the tools it uses to build and tell a murder mystery. It then turns each tool into something a Cingöz case can do, and that the case designer (\`#/designer\`) helps with.

The example is the ITV *Agatha Christie's Poirot* episode (series 7, episode 2), first shown on 19 February 2000. It was written by Anthony Horowitz, directed by Brian Farnham, and stars David Suchet. It follows Christie's 1933 novel closely.

I could not watch the YouTube upload itself. This analysis therefore rests on the story's well-documented plot and structure ([Wikipedia](https://en.wikipedia.org/wiki/Lord_Edgware_Dies), [IMDb](https://www.imdb.com/title/tt0235681)) and on the conventions of that series. Points about the screen version are kept general on purpose.

The note discusses the solution openly.

---

## 1. The story in one breath

An actress, Jane Wilkinson, wants to be free of her cold, cruel husband, Lord Edgware, so that she can marry the Duke of Merton. She asks Poirot to obtain a divorce for her. Edgware tells Poirot that he agreed to the divorce long ago, by letter; Jane says that letter never came.

That night Edgware is stabbed in his library. His butler and his secretary both saw "Lady Edgware" arrive. Yet Jane was at a dinner party across London, in front of a dozen guests.

Then the clever young impersonator Carlotta Adams dies of an overdose. Earlier in the story we watched her mimic Jane on stage.

The police arrest Edgware's nephew, who inherits and is in debt. A dinner guest, Donald Ross, realises something about that party and is killed before he can tell Poirot.

A chance remark in the street gives Poirot the answer. Jane killed her husband herself while Carlotta, dressed as Jane, sat at the dinner. Jane then silenced Carlotta, and later Ross, who had noticed that the "Jane" at the dinner knew her classics and the real one did not.

The motive was hidden in plain sight. The Duke, a devout Catholic, would never marry a divorced woman, but he would marry a widow.

---

## 2. How the mystery is built (the tools)

### 2.1 The Double: two places at once

The central device is an **alibi made by a double**. The murderer is *seen at the crime* and *seen elsewhere* at the same moment. Both sightings are honest. The audience assumes there is one Jane, so one sighting must be false. In fact both are true, but one of them is of a different person.

- **What makes it work:** every witness reports **what they saw** (a woman with Jane's looks who gave Jane's name), never who it truly was. Testimony is true; the inference from it is false.
- **What makes it fair:** the capability is **planted at the very start**. Carlotta's stage act, in which she impersonates Jane while Jane watches, plays as entertainment. It is really the method shown to us.

### 2.2 The murderer in plain sight

Jane is the first person we meet with a motive. She even says aloud that she could take a taxi round and finish him off. Saying the motive openly works *against* suspicion: it reads as a joke, and her alibi then seems to clear her.

She also brings the detective in herself, as the **murderer-as-client**. This lets her plant a story in his mind: that she never received the divorce letter.

### 2.3 A hidden rule behind the motive

The motive depends on a fact the audience does not weigh: the Duke's religion. A divorce does not free her; only death does.

A good motive often needs **one rule of the world** that the reader learns but does not connect. Here it is a church's view of divorce. In other stories it might be a will's clause, a train timetable, or a law of inheritance.

### 2.4 Red herrings that have real secrets

Every other suspect is hiding *something*, so each one lies or acts guiltily:

| Suspect | What looks bad | What they are really hiding |
|---|---|---|
| The nephew | Inherits; was in debt; was near the house | Money troubles and a borrowed alibi |
| The daughter | Hated her father | Her own visit that night |
| The actor who loved Jane | Seen near the house, jealous | A private quarrel with Jane |
| The butler | Flees with money | A plain theft, unrelated to the murder |

The lesson: **a red herring is a suspect with an innocent secret**. Their guilt-like behaviour has a cause the audience can later accept. This feels far better than a suspect who is merely nearby.

### 2.5 Consequences that escalate: silencing

The first murder creates a witness, the double. She must be silenced, and her death creates a new witness, Ross, who must be silenced too.

Each new death raises the stakes and **adds a clue**:

- Carlotta's letter to her sister proves she was hired.
- Ross's interrupted phone call proves there is something to notice about the dinner.

### 2.6 Physical clues with something slightly wrong

- **An inscription with the wrong date.** A gold box engraved to look six months old was in fact made a week before the murder, under a false name. A clue that is *right in kind but wrong in detail* points to planning.
- **Altered evidence.** A letter with its corner torn so that "she" reads as "he". The evidence is genuine but has been cut to mislead. Note that the cut itself is the clue.
- **An object in the wrong hands.** Pince-nez belonging to the maid turn up in Carlotta's bag. Objects tie people together in ways testimony does not.

### 2.7 The knowledge slip

The decisive clue is not physical. At a luncheon, Jane takes "Paris" (of Troy) to mean the city. So the woman at the dinner, who talked easily about Greek legend, cannot have been Jane.

This is a **character clue**: a person cannot know or do something, and someone did it. It is fair because we saw both halves.

### 2.8 The chance remark

The solution is triggered by an unrelated remark overheard in a crowd. This is a classic Christie beat. The detective already *has* every piece, and the remark only rearranges them.

For the audience, this marks the point where **all clues have been shown**. Fair play requires that the reader could now solve it.

### 2.9 Gathering and reconstruction

The dénouement gathers the suspects and **replays the night**. Scenes we have already watched are shown again with the hidden layer revealed: Jane slipping out, Carlotta taking her place.

On screen, this series typically does it with flashbacks in a changed colour and tone, cut against the detective's narration. Each assumption is dismissed in turn: the red herrings, then the double, then the motive.

### 2.10 The Watson and the inspector

Hastings asks the audience's questions and draws the audience's wrong conclusions. Japp represents the obvious solution: he arrests the nephew.

Together they let the detective explain without lecturing. They also make the false solution vivid enough to believe.

### 2.11 Structure (beats)

| # | Beat | In *Lord Edgware Dies* |
|---|------|------------------------|
| 1 | **Overture / plant** | The impersonation act at the theatre (the method, shown as entertainment) |
| 2 | **The request** | The future murderer asks the detective for help, stating her motive |
| 3 | **The victim** | We meet Edgware: cold, cruel, a collector, so a dozen people might wish him dead |
| 4 | **The crime** | The stabbing in the library, discovered next morning |
| 5 | **The paradox** | Seen at the house *and* at the dinner |
| 6 | **The obvious answer** | The heir is arrested; the butler flees |
| 7 | **Escalation** | Carlotta's death, then Ross's |
| 8 | **The turn** | The chance remark |
| 9 | **Reconstruction** | Gathering, flashbacks, the double explained, the motive revealed |
| 10 | **Coda** | The murderer, unrepentant, writes from prison |

### 2.12 Screen craft

These are typical of the series, not a shot-by-shot account:

- **Establishing shots with period detail** (Art Deco interiors, cars, the theatre) to set the hour and the class of the people.
- **Inserts of objects** (a letter, a box, a pair of glasses) to plant clues without comment. A reaction shot of the detective marks one as significant.
- **The theatre motif** (stage, mirrors, make-up) to rhyme visually with the impersonation.
- **Flashbacks in a different tone**, so the audience knows it is seeing the truth replayed.
- **Music cues** for menace and for the moment of insight.

---

## 3. From the story to a Cingöz case

Cingöz states facts as positions: where everyone stood at each hour of the evening. Every testimony and piece of evidence is true. The coroner's finding fixes the fatal hour, and the one suspect alone with the victim at that hour did it.

The table shows how each tool above becomes something a case can do.

| Tool | In Cingöz | Where in the designer |
|---|---|---|
| The double (2.1) | **Appearances** (\`scene.dress\`): in a given scene a person can appear with other traits, such as someone else's hat and pearls. Clues about traits ("someone wearing a hat was at dinner at nine") refer to how people *looked* at that hour. The game shows each scene's appearances on the cast cards, so it stays fair. | Scenes → Appearances |
| True testimony, false inference (2.1) | Write witness statements about **what they saw**: traits, a room, a piece of furniture. Do not write "Lady X was there". | Clues → *Who:* "someone with a trait" |
| Plant the method (2.1) | The letter (intro), or a prologue shot, shows the capability as colour, such as a costume ball or a magic act. | Words → Intro; Cutscenes → Prologue |
| Murderer in plain sight (2.2) | The murderer gives early, true, reassuring testimony. The first question unlocked is theirs. | Interviews → order and unlocks |
| Hidden rule (2.3) | State the rule in the letter or the forensic report; let the dénouement use it. | Story → Motive; Words |
| Red herrings with secrets (2.4) | The victim alone with *other* suspects at *other* hours (the game requires at least one). Give each a motive and an innocent secret. | Story → Suspects; Check → red herrings |
| Escalation (2.5) | Later scenes add pressure and clues. Interviews unlock new questions as testimony is heard. | Interviews → \`after\` |
| Physical clues (2.6) | **Evidence** cards (a steward's statement, a register, a ticket). Partial but true facts can mislead: "at least one", "some", "nobody in a hat". | Clues → Evidence |
| Knowledge slip (2.7) | A testimony that is true but quietly impossible for the speaker to know unless they were there. It suits the dénouement narration well; the logic must still rest on positions. | Words → Dénouement |
| Chance remark (2.8) | Sergeant Hobbs points at the next deduction and never gives the answer. The grader's step at which "who" is settled is the turn. | Check → WHEN/WHO steps |
| Reconstruction (2.9) | The **reconstruction cutscene**: a flashback over the dioramas with everyone where they truly stood, then the fatal moment. | Cutscenes → Reconstruction |
| Watson (2.10) | Sergeant Hobbs (and the player). | — |
| Beats (2.11) | Letter → scenes → interviews → accusation → reconstruction. | Story → Beats |

### 3.1 How to design a case (the method)

1. **Start from the truth.** Decide who, when, where and why. Write the motive as one sentence that depends on a hidden rule.
2. **Choose the trick.** Pick a device: the double, a misleading but true alibi, a red-herring meeting, or a repeated location ("I never left my chair").
3. **Draw the places**, then **lay out the evening**: 2–4 scenes with increasing times. Place everyone, the victim included.
   - At the fatal hour, the victim shares a room with exactly one suspect.
   - At least one other hour has the victim alone with a different suspect.
4. **Write the coroner's finding** about the victim's own placement (a room, a piece of furniture, a window) so that it fits exactly one scene.
5. **Write the clues backwards from the answer.** Each clue is something a person could truthfully say or that an object proves. Prefer appearance ("in spectacles"), furniture ("beside the gramophone") and company ("alone with").
6. **Check.** The designer's checks must show exactly one possible accusation. The grader must name the hour before the murderer, and should not need guessing (tier ≤ 3).
7. **Make every suspect lie by omission.** Give each one a secret and a question that makes them evasive.
8. **Write the words**:
   - the letter: overture, plant, cast and stakes;
   - the collapse;
   - the dénouement: red herrings first, then the fatal moment, then the why.
9. **Direct the cutscenes.** The prologue shows the places and hours; the reconstruction replays the truth. Auto-direct, then adjust the shots.
10. **Play-test**, then translate and record the narration.

### 3.2 Fair-play rules the designer checks

- Exactly one accusation (murderer, hour, room) fits every clue.
- The coroner's finding fits exactly one scene of the intended evening.
- At the fatal hour, exactly one suspect is with the victim.
- The victim is alone with some other suspect at another hour (a red herring).
- Deduction settles the hour before (or together with) the murderer.
- Every testimony is drawn out by exactly one question; unlocks only wait on clues that exist.
- Every appearance (dress) is shown to the player; trait clues name traits someone shows at that hour.
- The letter plants any special capability the solution needs.

---

## 4. A worked example: *First Night at the Coronet* (Case V)

Case V was made in the designer to put the method to the test. Its file, \`src/cases/designed/coronet.cingoz.json\`, is an exported draft: open it with **Import a case file…** to see every tab filled in.

**The truth.** Miss Vivienne Lisle, the star of the Coronet Theatre, poisons Sir Julius Marlowe's whisky in his office during the interval of a first night. She wears her understudy's spectacles. Meanwhile her understudy, Miss Kitty Fane, sits at the star's mirror in Vivienne's plumed hat and pearls. Kitty believes she is doing it for a wager.

**How each tool is used.**

| Tool | In the case |
|---|---|
| The double | At 21:00, Kitty appears with **hat and pearls** and Vivienne with **spectacles** (Evening → Looking different). |
| True testimony, false inference | The stage manager saw the star at her mirror: “everyone wearing pearls was in the dressing room.” The call-boy saw “a lady in spectacles” with Sir Julius. Both are true, and both point at the wrong woman unless you read the cast cards for that hour. |
| Plant | The letter: at Saturday's matinée Kitty went on as Vivienne, and half the stalls never knew. In the interviews, Kitty boasts that she can play anybody. |
| Murderer in plain sight | Vivienne asked M. Verbeke to free her from her contract. She can be questioned from the start, and her first answer is true and reassuring: she sat at her mirror before curtain-up. |
| Hidden rule | Her contract is personal to Sir Julius and ends only when he does. He jokes about it to Verbeke, and she says it outright in a remark. |
| Red herrings with secrets | At 18:30, Sir Julius is alone with the leading man, who is in debt to him. At 23:00, he is alone with his daughter, who is secretly married to that leading man. The stage manager is nervous about the box office takings. |
| “I never left my chair” | At 21:00, Kitty sits on the very stool Vivienne used at 18:30 (a clue comparing two hours at the same place). |
| Objects and witnesses | Four evidence cards: the call-boy (twice), the stage-door keeper's book and the barman. |
| Escalation | Kitty's question opens only after Pike has described the star at her mirror. Pike's opens only after Vivienne's alibi. Imogen's opens after Rex's. |
| Knowledge slip | The woman at the mirror said “Macbeth” aloud. Vivienne would never say it in a theatre (dénouement). |
| Reconstruction | A scripted cutscene. It shows the two red-herring meetings, then Kitty at the mirror in the star's hat, then Vivienne in spectacles pouring the whisky. The last shot is Vivienne at the party, startled. |

**What the designer reports.** Exactly one accusation fits: Miss Lisle, 21:00, the Office. The grader solves it in 20 steps without guessing. The hardest step is tier 3, the hour is settled at step 12 and the murderer at step 20. Every clue is used, and every fair-play check passes.
`,S=`# More from Christie: twelve cases, twelve tools

This continues the study of *Lord Edgware Dies* (\`story-design.md\`). Christie rarely repeated a trick. Each of her best puzzles turns on one structural idea, and the rest of the novel is built to hide it.

Below are twelve such ideas, each with the case that showed it best, the reason it works, and how a Cingöz case can use it. They are listed in order of publication. The notes discuss the solutions openly.

Two of these ideas need more than the game had: several deaths in one case, and several hands in one death. Cingöz now supports both (§13).

---

## 1. *The Mysterious Affair at Styles* (1920): the delay

**The trick.** A strychnine poisoning is timed so that the death comes hours after the dose, at a moment when the murderer has a perfect alibi. The murderer is the obvious suspect, and he courts suspicion early. Once he has been publicly cleared of one charge, he cannot be tried for it again.

**Why it works.** The reader fixes the crime at the moment of death, not the moment of the dose. And an over-obvious suspect makes the reader look elsewhere.

**In Cingöz.** This is the game's founding rule: every poison is delayed, and the coroner's finding, not the collapse, fixes the fatal hour. Use the gap to your advantage. Place the collapse somewhere public, at a time when the murderer is plainly elsewhere.

**Designer.** Words → collapse; Clues → the finding. Check that the grader settles the hour before the murderer.

## 2. *The Murder of Roger Ackroyd* (1926): the trusted voice

**The trick.** The narrator, the detective's helper and the reader's guide, is the murderer. Every word he writes is true, but he leaves out ten minutes.

**Why it works.** We never suspect the voice we rely on. Fair play survives because nothing he says is false; the lie is entirely one of omission.

**In Cingöz.** Every testimony is true, so the device is natural here. Make the murderer the most helpful witness: give them the most testimony, all of it true and useful, and none about the fatal hour.

**Designer.** The *trusted voice* device notices when the murderer gives more testimony than anyone else.

## 3. *Peril at End House* (1932): the intended victim

**The trick.** A young woman survives a series of “accidents” and begs the detective to protect her. A cousin with the same name is shot by mistake. The supposed target is the murderer, and the attempts on her life were staged.

**Why it works.** The detective's sympathy, and the reader's, goes to the endangered one. The motive comes from a will, and the name confusion hides who would inherit.

**In Cingöz.** The murderer is the person who wrote to M. Verbeke (the request beat), afraid for their life. Give them a red-herring hour alone with the victim that looks like a threat to *them*.

**Designer.** Story → the request beat; a red-herring hour.

## 4. *Murder on the Orient Express* (1934): many hands

**The trick.** Twelve passengers each strike one blow. Every alibi is true, because each one is given by another conspirator. The clues contradict one another only because they were planted to point at a stranger who never existed.

**Why it works.** A detective looks for *one* liar. When everyone lies in concert, the solution is the one case nobody tests.

**In Cingöz.** A death can now have **several culprits**: everyone in the victim's room at the fatal hour had a hand in it. The case tells the player how many hands there were, so the puzzle stays fair. Conspirators' testimony about one another is true, but it covers only the hours that do not matter.

**Designer.** Clues → the death → *hands*: 2 or more.

## 5. *The ABC Murders* (1936): the camouflage series

**The trick.** Alphabetical murders, A, B, C and D, look like the work of a madman. Only one victim mattered to the murderer; the others were chosen to hide that one inside a pattern.

**Why it works.** The pattern draws all the attention, so the motive behind one particular death is never looked for.

**In Cingöz.** A case can now have **several deaths**, each with its own finding and fatal hour. Make them look alike (the same poison, the same kind of seat) and let the dénouement show that only one had a motive.

**Designer.** Clues → ＋ Another death. The *camouflage series* device notices three or more deaths.

## 6. *Cards on the Table* (1936): records that count

**The trick.** Four suspects play bridge while the host is stabbed in the same room. The bridge scores show how often each player was dummy and free to leave the table, and how each person's mind works.

**Why it works.** A dry record, kept for another purpose, is impartial. It counts things nobody remembers to lie about.

**In Cingöz.** Clues that count across the evening: “sat down at exactly two of the three hours”, “was in the same room as X only once”. An evidence card such as a register, a scorecard or a dance card is the natural source.

**Designer.** Clues → *over several hours*. The *records* device counts such clues.

## 7. *Death on the Nile* (1937): the pair

**The trick.** A husband and his former lover stage a public quarrel, then a shooting that gives the husband an alibi. Their hatred is the performance; their love is the motive.

**Why it works.** We do not imagine conspirators who seem to be enemies.

**In Cingöz.** Two culprits for one death (*hands: 2*). Give them a red-herring hour alone together that reads as a quarrel, and testimony from each that clears the other of some *other* hour.

**Designer.** Hands: 2. Use Story → suspects to note the performance.

## 8. *Appointment with Death* (1938): the hour that was misread

**The trick.** A tyrannical matriarch is found dead in her chair at a camp in Petra. Several family members, each of whom believed another had killed her, lie to protect one another. That shifts the time of death everyone reports. The killer was an outsider with a past to hide.

**Why it works.** Innocent people lie for innocent reasons, and their lies hide the real hour.

**In Cingöz.** Every testimony is true, so nobody can lie. But witnesses can stay silent about an hour. Let several suspects' testimony skip the fatal hour, each for a reason the dénouement explains. Pair this with the double (dress) to fake a sighting.

**Designer.** The *silent hour* device notices when the fatal hour gets fewer clues than the other hours.

## 9. *Hercule Poirot's Christmas* (1938): a stranger in plain sight

**The trick.** A brutal patriarch is killed in a locked room on Christmas Eve. The murderer is a policeman investigating the crime, the old man's unacknowledged son. His uniform made him invisible.

**Why it works.** Some roles make people disappear: a uniform, a servant, an official. We look through them, not at them.

**In Cingöz.** Dress someone in a **uniform** (or a waiter's tray, a nurse's cap) at the fatal hour, using appearances. Clues about “someone in uniform” then point to them without naming them.

**Designer.** Evening → Looking different, with *uniform*. The device notices a uniform worn as a disguise.

## 10. *And Then There Were None* (1939): the closed circle

**The trick.** Ten people on an island are killed one by one, according to a nursery rhyme. Nobody else is on the island. The murderer fakes his own death in order to go on killing.

**Why it works.** In a closed circle every death removes a suspect, so the reader keeps narrowing the field toward a solution that has already been removed.

**In Cingöz.** Every Cingöz case is a closed circle, since the plans hold everybody. Several deaths now make the circle shrink. “Nobody else was in the room” statements (alone, empty rooms) seal it.

**Designer.** Several deaths; Clues → empty rooms, alone. The *closed circle* device counts such seals.

## 11. *Evil Under the Sun* (1941): the false body

**The trick.** A woman is found strangled on a beach. Her “body” was seen there earlier than the murder: it was the murderer's wife, posing as the corpse, giving her husband an alibi for the real time.

**Why it works.** The finding of the body is taken as the time of death. A second person and a costume move that moment.

**In Cingöz.** Several hands and the double together. One culprit appears as the victim at a misleading hour (dressed in the victim's traits), and trait clues about that hour then speak of the wrong person.

**Designer.** Hands: 2, plus appearances. Dress a culprit in the victim's traits.

## 12. *Five Little Pigs* (1942): five accounts

**The trick.** A painter's murder, sixteen years old, is reconstructed from five written accounts by five witnesses. Each is honest and each saw only part of the truth; laid side by side, they show something none of them understood.

**Why it works.** Partial truths, compared, are more revealing than any confession.

**In Cingöz.** This is the game's own shape. Make sure every suspect owns a piece of the truth (at least one testimony each), and that no single testimony solves the case alone.

**Designer.** The *five accounts* device checks that every suspect testifies.

---

## 13. What changed in the game

**Several deaths in one case.** A case lists its deaths in order:
- Each death has a victim, a coroner's finding (it must fit exactly one hour), a collapse line and a number of hands.
- Every death follows the delayed-poison rule. All the poisoning happens during the evening's hours, and every victim collapses after the last hour, so every victim is still on the plans at every hour.
- One person may poison two people. A later victim may even be an earlier murderer, as when a silenced witness had helped.

**Several hands in one death.** At the fatal hour, everyone who shares the victim's room had a hand in it, and the case tells how many hands there were (one, unless it says otherwise).

**The accusation** asks, for each death, who (as many people as there were hands), when and where.

**The solvers, the grader, the hints, the consistency checks and the designer's checks** all apply the rules to each death in turn. A case is settled when every death has exactly one possible answer.

**The reconstruction** replays the misleading meetings, then each fatal moment in turn, then the why.

---

## 14. The method, revised

1. Choose the shape:
   - one death with one hand, the classic;
   - one death with several hands (Orient Express, Nile);
   - several deaths with one murderer (ABC, a silenced witness);
   - several deaths with several hands.
2. Choose the hiding place for the shape:
   - a pattern, as in ABC;
   - a performance, as in the Nile quarrel;
   - a uniform, as at Christmas;
   - a costume, as with the double;
   - a trusted voice, as in Ackroyd;
   - a misread hour, as in Petra.
3. For each death, draw its fatal hour and its herrings. One person can be a herring for one death and a culprit of another.
4. Write clues until each death has exactly one answer. Let the grader settle the first death before the second, so the second murder means something.
5. Write the dénouement in movements:
   - the herrings;
   - each fatal moment in order;
   - the why, the hidden rule, the character.
`,C=[{id:`story`,label:`Story`,load:async()=>(await a(async()=>{let{renderStory:e}=await import(`./tab-story-BcZqWq0O.js`);return{renderStory:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))).renderStory},{id:`cast`,label:`Cast`,load:async()=>(await a(async()=>{let{renderCast:e}=await import(`./tab-cast-B33mygH_.js`);return{renderCast:e}},__vite__mapDeps([10,5,6,4,1,2,3,7,8,11,9]))).renderCast},{id:`places`,label:`Places`,load:async()=>(await a(async()=>{let{renderPlaces:e}=await import(`./tab-places-CcEtE6_C.js`);return{renderPlaces:e}},__vite__mapDeps([12,4,1,3,5,6,7,2,8,11,9,13]))).renderPlaces},{id:`evening`,label:`Evening`,load:async()=>(await a(async()=>{let{renderEvening:e}=await import(`./tab-evening-Dna6eqhE.js`);return{renderEvening:e}},__vite__mapDeps([14,5,6,4,1,2,3,7,8,11,9,15,16,13]))).renderEvening},{id:`clues`,label:`Clues`,load:async()=>(await a(async()=>{let{renderClues:e}=await import(`./tab-clues-BA3DZFmT.js`);return{renderClues:e}},__vite__mapDeps([17,4,5,1,2,3,6,7,8,11,18,9]))).renderClues},{id:`interviews`,label:`Interviews`,load:async()=>(await a(async()=>{let{renderInterviews:e}=await import(`./tab-interviews-B3MhL_s1.js`);return{renderInterviews:e}},__vite__mapDeps([19,1,2,3,4,5,6,7,8,11,9]))).renderInterviews},{id:`words`,label:`Words`,load:async()=>(await a(async()=>{let{renderWords:e}=await import(`./tab-words-doOULTpj.js`);return{renderWords:e}},__vite__mapDeps([20,1,9]))).renderWords},{id:`cutscenes`,label:`Cutscenes`,load:async()=>(await a(async()=>{let{renderCutscenes:e}=await import(`./tab-cutscenes-Dak_YYl_.js`);return{renderCutscenes:e}},__vite__mapDeps([21,1,3,4,5,6,7,2,8,11,9,15]))).renderCutscenes},{id:`check`,label:`Check`,load:async()=>(await a(async()=>{let{renderCheck:e}=await import(`./tab-check-DIcT0x-5.js`);return{renderCheck:e}},__vite__mapDeps([22,1,2,3,4,5,6,7,8,9]))).renderCheck}];function w(e,t){document.title=`Case designer · Cingöz`;let[n,r]=t,i=n?d(n):null;return n&&!i?(location.hash=`#/designer`,()=>{}):i?O(e,i,C.find(e=>e.id===r)?.id??`story`):D(e)}function T(t){let n=new Blob([JSON.stringify(p(t),null,2)],{type:`application/json`}),r=e(`a`,{href:URL.createObjectURL(n),download:`${t.case.title.replace(/[^\w]+/g,`-`).toLowerCase()||`case`}.cingoz.json`});document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(r.href),1e3)}function E(){let t=r({title:`The study`,className:`paper dz-study`}),n=e(`div`,{}),i=e=>{n.replaceChildren(b(e===0?x:S)),a.forEach((t,n)=>t.classList.toggle(`on`,n===e))},a=[`Lord Edgware Dies`,`Twelve more cases`].map((e,t)=>_(e,()=>i(t),`small`));t.body.append(e(`div`,{class:`dz-row`},...a),n),i(0)}function D(t){let r=e=>{f(e),location.hash=`#/designer/${e.id}`},a=e(`input`,{type:`file`,accept:`.json,application/json`,hidden:!0});a.addEventListener(`change`,async()=>{let e=a.files?.[0];if(e)try{r(l(await e.text()))}catch(e){i(e.message,`bad`)}});let p=()=>{let i=u();t.replaceChildren(e(`div`,{class:`dz dz-list`},e(`header`,{class:`dz-top`},e(`a`,{class:`dz-btn ghost`,href:`#/`},`‹ Cingöz`),e(`h1`,{},`Case designer`)),e(`section`,{class:`dz-hero`},e(`p`,{},`Design a murder for M. Verbeke: the cast, the places and the hours of the evening, the clues and interviews, the letter, the dénouement and the cutscenes. The designer checks as you go that exactly one accusation fits, that a careful player can deduce it, and that the case plays fair.`),e(`div`,{class:`dz-row`},_(`＋ New case`,()=>r(o()),`gold`),_(`Import a case file…`,()=>a.click()),_(`Read the study (Lord Edgware Dies)`,E,`ghost`),a),e(`p`,{class:`dz-note`},`Or start from one of the game’s own cases, to see how it is built:`),e(`div`,{class:`dz-row`},...n.map(e=>_(e.title,()=>r(c(e)),`small`)))),e(`section`,{class:`dz-drafts`},e(`h2`,{},`Your drafts`),i.length?e(`ul`,{},...i.map(t=>e(`li`,{},e(`a`,{href:`#/designer/${t.id}`,class:`dz-draft-title`},t.title),e(`span`,{class:`dz-muted`},new Date(t.updated).toLocaleString()),e(`span`,{class:`dz-row`},e(`a`,{class:`dz-btn small`,href:`#/draft/${t.id}`},`▶ Play-test`),_(`Export`,()=>T(d(t.id)),`small`),_(`Duplicate`,()=>{let e=d(t.id),n=c(e.case,e.notes);n.case.title+=` (copy)`,f(n),p()},`small`),g(`Delete`,`Delete this draft?`,()=>{s(t.id),p()}))))):e(`p`,{class:`dz-muted`},`None yet. Drafts are kept in this browser; export them to keep a copy or to share.`))))};return p(),()=>{}}function O(n,r,i){let a=!1,o=e(`span`,{class:`dz-saved`},`Saved`),s=e(`aside`,{class:`dz-side`}),c=e(`main`,{class:`dz-main`}),l=e(`nav`,{class:`dz-tabs`}),u=e(`span`,{class:`dz-title`},r.case.title),d=0,p=0,g=0,y=[],b={draft:r,analysis:null,sel:{location:0,scene:0,person:0},change(e,t=!1){e(r.case,r),u.textContent=r.case.title,o.textContent=`Saving…`,clearTimeout(d),d=window.setTimeout(()=>{o.textContent=f(r)?`Saved`:`Could not save (storage full?)`},300),x(),t&&b.redraw()},redraw:()=>void w(),go(e){location.hash=`#/designer/${r.id}/${e}`},onAnalysis(e){y.push(e)}};function x(){clearTimeout(p),s.classList.add(`busy`),p=window.setTimeout(()=>{h(r.case).then(e=>{if(!a){if(b.analysis=e,s.classList.remove(`busy`),S(),i===`check`)w();else for(let e of y)e()}}).catch(t=>{t.message!==`superseded`&&(s.classList.remove(`busy`),s.replaceChildren(e(`p`,{class:`dz-bad`},`Checks failed: ${t.message}`)))})},500)}function S(){let n=b.analysis;if(!n)return;let i=n.answers,a=r.case,o=e=>a.people[e]?.short??`?`,c=[e(`h3`,{},`Verdict`),n.errors.length?e(`p`,{class:`dz-bad`},`${n.errors.length} error(s) — see Check.`):null,...i?t(a).map((n,r)=>{let s=i.filter(e=>e.death===r),c=t(a).length>1?`${a.people.find(e=>e.id===n.victim)?.short??`?`}: `:``;return s.length===1&&s[0].intended?e(`p`,{class:`dz-good`},`✓ ${c}one accusation fits: ${s[0].murderers.map(o).join(` & `)}, ${a.scenes[s[0].scene]?.time}.`):e(`p`,{class:`dz-bad`},`${c}${s.length} accusations fit. Add clues until only the intended one is left.`)}):[e(`p`,{class:`dz-muted`},n.answersNote??`Not checked yet.`)],n.grade?e(`p`,{class:n.grade.answered?`dz-good`:`dz-warn`},n.grade.answered?`✓ Deducible (hardest step: tier ${n.grade.maxTier}, ${n.grade.steps} steps).`:`The grader cannot settle it without guessing.`):null,e(`h3`,{},`Fair play`),e(`ul`,{class:`dz-fair`},...n.fair.map(t=>e(`li`,{},v(t.ok,t.text)))),_(`Open the full check`,()=>b.go(`check`),`small`)];s.replaceChildren(...c.filter(e=>!!e))}async function w(){let t=++g;l.replaceChildren(...C.map(t=>e(`a`,{class:`dz-tab ${t.id===i?`on`:``}`,href:`#/designer/${r.id}/${t.id}`},t.label)));let n=await C.find(e=>e.id===i).load();y=[];let o=await n(b);if(t!==g||a)return;let s=c.scrollTop;c.replaceChildren(o),c.scrollTop=s}return n.replaceChildren(e(`div`,{class:`dz dz-editor`},e(`header`,{class:`dz-top`},e(`a`,{class:`dz-btn ghost`,href:`#/designer`},`‹ Drafts`),u,o,e(`span`,{class:`dz-grow`}),_(`Study`,E,`ghost small`),_(`Export`,()=>T(r),`small`),e(`a`,{class:`dz-btn gold small`,href:`#/draft/${r.id}`},`▶ Play-test`)),l,e(`div`,{class:`dz-body`},c,s))),s.append(e(`p`,{class:`dz-muted`},`Checking…`)),w(),x(),()=>{a=!0,clearTimeout(p),d&&f(r),clearTimeout(d),m()}}export{w as mountDesigner,E as showStudy};