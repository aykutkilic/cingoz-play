const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tab-story-CUCtisSz.js","assets/dom-D5s8RAx_.js","assets/avatar-DpujoioV.js","assets/looks--cloPBnj.js","assets/deaths-CzCtiC1R.js","assets/model-BpIdEYgZ.js","assets/evaluate-TdsZ49FF.js","assets/clues-B3g8c_Vi.js","assets/geometry-Bo7jsnxJ.js","assets/furniture-kinds-DxfvGOd9.js","assets/form-Amak2zmk.js","assets/tab-cast-CiYMtyS2.js","assets/define-CpCYnceM.js","assets/story-BpwfkGnO.js","assets/traits-DfnRvnA1.js","assets/index-C7NN6GV-.js","assets/i18n-Bm8NcTqk.js","assets/investigation-BJI2Wv05.js","assets/cutscene-Dcd1AU_Q.js","assets/persist-CfJkqGW2.js","assets/index-BCrpQhX0.css","assets/draft-CITpu15v.js","assets/tab-places-D0HDRkOT.js","assets/warn-Cjh9SJzF.js","assets/preview3d-DVu6k9_y.js","assets/tab-evening-BGPcL7eu.js","assets/acts-CN5FNHo5.js","assets/diorama-Df30_D8M.js","assets/tab-clues-BK5uwrDI.js","assets/worker-client-D9VrAEm8.js","assets/tab-office-Bj_nq3gb.js","assets/shots-wHq5wL3h.js","assets/story-ui-C8r0sxn8.js","assets/tab-visits-1iM4_ETW.js","assets/tab-talks-CSZZ2FZd.js","assets/tab-terms-Cgd1t35E.js","assets/tab-pages-KTRJeSeG.js","assets/tab-words-86XeqwtI.js","assets/tab-cutscenes-BcZSm_UD.js","assets/tab-check-BR2I3dcl.js"])))=>i.map(i=>d[i]);
import{n as e}from"./dom-D5s8RAx_.js";import{n as t,o as n,r,t as i}from"./index-C7NN6GV-.js";import{blankDraft as a,deleteDraft as o,draftFrom as s,fromFile as c,listDrafts as l,loadDraft as u,saveDraft as d,toFile as f}from"./draft-CITpu15v.js";import{n as p,t as m}from"./worker-client-D9VrAEm8.js";import{a as h,n as g,t as _}from"./form-Amak2zmk.js";function v(t){let n=[],r=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g,i=0;for(let a of t.matchAll(r)){a.index>i&&n.push(t.slice(i,a.index));let r=a[0];if(r.startsWith(`**`))n.push(e(`strong`,{},...v(r.slice(2,-2))));else if(r.startsWith("`"))n.push(e(`code`,{},r.slice(1,-1)));else if(r.startsWith(`[`)){let[,t,i]=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(r);n.push(e(`a`,{href:i,target:`_blank`,rel:`noopener`},t))}else n.push(e(`em`,{},...v(r.slice(1,-1))));i=a.index+r.length}return i<t.length&&n.push(t.slice(i)),n}function y(t){let n=e(`div`,{class:`dz-md`}),r=t.split(`
`),i=0;for(;i<r.length;){let t=r[i];if(!t.trim()){i++;continue}let a=/^(#{1,4})\s+(.*)$/.exec(t);if(a)n.append(e(`h${a[1].length+1}`,{},...v(a[2]))),i++;else if(/^---+$/.test(t.trim()))n.append(e(`hr`)),i++;else if(t.startsWith(`|`)){let t=[];for(;i<r.length&&r[i].startsWith(`|`);){let e=r[i].split(`|`).slice(1,-1).map(e=>e.trim());e.every(e=>/^:?-+:?$/.test(e))||t.push(e),i++}let[a,...o]=t;n.append(e(`div`,{class:`dz-table-wrap`},e(`table`,{},e(`thead`,{},e(`tr`,{},...(a??[]).map(t=>e(`th`,{},...v(t))))),e(`tbody`,{},...o.map(t=>e(`tr`,{},...t.map(t=>e(`td`,{},...v(t)))))))))}else if(/^\s*([-*]|\d+\.)\s+/.test(t)){let a=/^\s*\d+\./.test(t),o=e(a?`ol`:`ul`);for(;i<r.length&&/^\s*([-*]|\d+\.)\s+/.test(r[i]);){let t=r[i].replace(/^\s*([-*]|\d+\.)\s+/,``);for(i++;i<r.length&&/^\s{2,}\S/.test(r[i])&&!/^\s*([-*]|\d+\.)\s+/.test(r[i]);)t+=` `+r[i++].trim();o.append(e(`li`,{},...v(t)))}n.append(o)}else{let a=t;for(i++;i<r.length&&r[i].trim()&&!/^(#|\||-{3,}|\s*([-*]|\d+\.)\s)/.test(r[i]);)a+=` `+r[i++].trim();n.append(e(`p`,{},...v(a)))}}return n}var b=`# Designing a the game case: lessons from *Lord Edgware Dies*

> **Note (October 2026).** the game is now played as an investigation (see \`case-format.md\`): a client tells the case in M. Verbeke’s office, the player looks, questions and notes words, and fills the blanks of deduction pages. What follows about structure, misdirection and fair play still holds; where it speaks of placing people on the plans, read it as the evening the dénouement replays, and the pages that lead the player to it.

This note studies one classic whodunit, *Lord Edgware Dies*, to find the tools it uses to build and tell a murder mystery. It then turns each tool into something a the game case can do, and that the case designer (\`#/designer\`) helps with.

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

## 3. From the story to a the game case

the game states facts as positions: where everyone stood at each hour of the evening. Every testimony and piece of evidence is true. The coroner's finding fixes the fatal hour, and the one suspect alone with the victim at that hour did it.

The table shows how each tool above becomes something a case can do.

| Tool | In the game | Where in the designer |
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
`,x=`# More from Christie: twelve cases, twelve tools

> **Note (October 2026).** The game is now played as an investigation (\`case-format.md\`). The devices below are unchanged; they now live in the client’s account, the things to look at, the questions, and the deduction pages, while the evening on the plans is what the dénouement replays.

This continues the study of *Lord Edgware Dies* (\`story-design.md\`). Christie rarely repeated a trick. Each of her best puzzles turns on one structural idea, and the rest of the novel is built to hide it.

Below are twelve such ideas, each with the case that showed it best, the reason it works, and how a case of this game can use it. They are listed in order of publication. The notes discuss the solutions openly.

Two of these ideas need more than the game had: several deaths in one case, and several hands in one death. The game now supports both (§13).

---

## 1. *The Mysterious Affair at Styles* (1920): the delay

**The trick.** A strychnine poisoning is timed so that the death comes hours after the dose, at a moment when the murderer has a perfect alibi. The murderer is the obvious suspect, and he courts suspicion early. Once he has been publicly cleared of one charge, he cannot be tried for it again.

**Why it works.** The reader fixes the crime at the moment of death, not the moment of the dose. And an over-obvious suspect makes the reader look elsewhere.

**In the game.** This is the game's founding rule: every poison is delayed, and the coroner's finding, not the collapse, fixes the fatal hour. Use the gap to your advantage. Place the collapse somewhere public, at a time when the murderer is plainly elsewhere.

**Designer.** Words → collapse; Clues → the finding. Check that the grader settles the hour before the murderer.

## 2. *The Murder of Roger Ackroyd* (1926): the trusted voice

**The trick.** The narrator, the detective's helper and the reader's guide, is the murderer. Every word he writes is true, but he leaves out ten minutes.

**Why it works.** We never suspect the voice we rely on. Fair play survives because nothing he says is false; the lie is entirely one of omission.

**In the game.** Every testimony is true, so the device is natural here. Make the murderer the most helpful witness: give them the most testimony, all of it true and useful, and none about the fatal hour.

**Designer.** The *trusted voice* device notices when the murderer gives more testimony than anyone else.

## 3. *Peril at End House* (1932): the intended victim

**The trick.** A young woman survives a series of “accidents” and begs the detective to protect her. A cousin with the same name is shot by mistake. The supposed target is the murderer, and the attempts on her life were staged.

**Why it works.** The detective's sympathy, and the reader's, goes to the endangered one. The motive comes from a will, and the name confusion hides who would inherit.

**In the game.** The murderer is the person who wrote to M. Verbeke (the request beat), afraid for their life. Give them a red-herring hour alone with the victim that looks like a threat to *them*.

**Designer.** Story → the request beat; a red-herring hour.

## 4. *Murder on the Orient Express* (1934): many hands

**The trick.** Twelve passengers each strike one blow. Every alibi is true, because each one is given by another conspirator. The clues contradict one another only because they were planted to point at a stranger who never existed.

**Why it works.** A detective looks for *one* liar. When everyone lies in concert, the solution is the one case nobody tests.

**In the game.** A death can now have **several culprits**: everyone in the victim's room at the fatal hour had a hand in it. The case tells the player how many hands there were, so the puzzle stays fair. Conspirators' testimony about one another is true, but it covers only the hours that do not matter.

**Designer.** Clues → the death → *hands*: 2 or more.

## 5. *The ABC Murders* (1936): the camouflage series

**The trick.** Alphabetical murders, A, B, C and D, look like the work of a madman. Only one victim mattered to the murderer; the others were chosen to hide that one inside a pattern.

**Why it works.** The pattern draws all the attention, so the motive behind one particular death is never looked for.

**In the game.** A case can now have **several deaths**, each with its own finding and fatal hour. Make them look alike (the same poison, the same kind of seat) and let the dénouement show that only one had a motive.

**Designer.** Clues → ＋ Another death. The *camouflage series* device notices three or more deaths.

## 6. *Cards on the Table* (1936): records that count

**The trick.** Four suspects play bridge while the host is stabbed in the same room. The bridge scores show how often each player was dummy and free to leave the table, and how each person's mind works.

**Why it works.** A dry record, kept for another purpose, is impartial. It counts things nobody remembers to lie about.

**In the game.** Clues that count across the evening: “sat down at exactly two of the three hours”, “was in the same room as X only once”. An evidence card such as a register, a scorecard or a dance card is the natural source.

**Designer.** Clues → *over several hours*. The *records* device counts such clues.

## 7. *Death on the Nile* (1937): the pair

**The trick.** A husband and his former lover stage a public quarrel, then a shooting that gives the husband an alibi. Their hatred is the performance; their love is the motive.

**Why it works.** We do not imagine conspirators who seem to be enemies.

**In the game.** Two culprits for one death (*hands: 2*). Give them a red-herring hour alone together that reads as a quarrel, and testimony from each that clears the other of some *other* hour.

**Designer.** Hands: 2. Use Story → suspects to note the performance.

## 8. *Appointment with Death* (1938): the hour that was misread

**The trick.** A tyrannical matriarch is found dead in her chair at a camp in Petra. Several family members, each of whom believed another had killed her, lie to protect one another. That shifts the time of death everyone reports. The killer was an outsider with a past to hide.

**Why it works.** Innocent people lie for innocent reasons, and their lies hide the real hour.

**In the game.** Every testimony is true, so nobody can lie. But witnesses can stay silent about an hour. Let several suspects' testimony skip the fatal hour, each for a reason the dénouement explains. Pair this with the double (dress) to fake a sighting.

**Designer.** The *silent hour* device notices when the fatal hour gets fewer clues than the other hours.

## 9. *Hercule Poirot's Christmas* (1938): a stranger in plain sight

**The trick.** A brutal patriarch is killed in a locked room on Christmas Eve. The murderer is a policeman investigating the crime, the old man's unacknowledged son. His uniform made him invisible.

**Why it works.** Some roles make people disappear: a uniform, a servant, an official. We look through them, not at them.

**In the game.** Dress someone in a **uniform** (or a waiter's tray, a nurse's cap) at the fatal hour, using appearances. Clues about “someone in uniform” then point to them without naming them.

**Designer.** Evening → Looking different, with *uniform*. The device notices a uniform worn as a disguise.

## 10. *And Then There Were None* (1939): the closed circle

**The trick.** Ten people on an island are killed one by one, according to a nursery rhyme. Nobody else is on the island. The murderer fakes his own death in order to go on killing.

**Why it works.** In a closed circle every death removes a suspect, so the reader keeps narrowing the field toward a solution that has already been removed.

**In the game.** Every case here is a closed circle, since the plans hold everybody. Several deaths now make the circle shrink. “Nobody else was in the room” statements (alone, empty rooms) seal it.

**Designer.** Several deaths; Clues → empty rooms, alone. The *closed circle* device counts such seals.

## 11. *Evil Under the Sun* (1941): the false body

**The trick.** A woman is found strangled on a beach. Her “body” was seen there earlier than the murder: it was the murderer's wife, posing as the corpse, giving her husband an alibi for the real time.

**Why it works.** The finding of the body is taken as the time of death. A second person and a costume move that moment.

**In the game.** Several hands and the double together. One culprit appears as the victim at a misleading hour (dressed in the victim's traits), and trait clues about that hour then speak of the wrong person.

**Designer.** Hands: 2, plus appearances. Dress a culprit in the victim's traits.

## 12. *Five Little Pigs* (1942): five accounts

**The trick.** A painter's murder, sixteen years old, is reconstructed from five written accounts by five witnesses. Each is honest and each saw only part of the truth; laid side by side, they show something none of them understood.

**Why it works.** Partial truths, compared, are more revealing than any confession.

**In the game.** This is the game's own shape. Make sure every suspect owns a piece of the truth (at least one testimony each), and that no single testimony solves the case alone.

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

---

## 15. A worked example: *Snowbound at the Alpenrose* (Case VI)

Case VI was made in the designer to put several deaths and several hands to work. Its file is \`src/cases/designed/alpenrose.cingoz.json\`.

**The truth.** Gerald Ashby and Simone Duval have been lovers for years behind a public feud. At coffee they dose Lady Rosamund Ashby's cup together in the winter garden (two hands). At eleven, Simone, in a maid's uniform, gives the night porter his veronal in the lodge: he had recognised them from Cannes (a silenced witness).

| Device | In the case |
|---|---|
| The pair (§7) | The waiter served coffee for three: the victim, her husband and the woman who “hates” them. |
| The staged quarrel | At five, the barman watched them quarrel alone in the bar, and she threw her glass. |
| Several deaths (§5, §10) | Two findings: Lady Rosamund drank hers upright on a plain chair; Hans drank his on his feet. |
| A stranger in plain sight (§9) | At 23:00, Simone appears in a **uniform**. “Everyone in uniform was in the Porter's Lodge” then means Hans and her. |
| The closed circle (§10) | The pass has been closed by snow since noon: nobody came and nobody left. |
| Red herrings | The Colonel by the fire at tea (a debt), the niece in the library at eleven (the heir), and the doctor in the lodge at five (the powders). |
| Hidden rule | The trust passes Lady Rosamund's fortune to her husband only if she dies his wife. |

**What the designer reports.** Each death has exactly one answer:
- Mr Ashby and Mlle Duval, at 20:30, in the Winter Garden;
- Mlle Duval, at 23:00, in the Porter's Lodge.

Both can be deduced without guessing (hardest step: tier 3). Every fair-play check passes, and there are no logic warnings.
`,S="# Writing a case: the investigation\n\nA case is played as an investigation:\n\n1. A client climbs the stairs to M. Verbeke's rooms in London and tells the story.\n2. M. Verbeke and Sergeant Hobbs go to the places.\n3. They look at things and question people. The player picks the question or the topic, and Hobbs puts it.\n4. The player notes the words that matter by tapping them, and fills the blanks of the detective's deduction pages with them.\n5. When the last page is right, the dénouement plays: the evening replayed as it truly was. Then a last short scene follows, back in the office.\n\nThere is no grid puzzle. The plans, the hours of the evening and where everyone truly stood are still part of a case. They are what the theatre shows when the client's account and the dénouement replay the evening.\n\nThe format is `Case.story` (`src/core/story.ts`). **Case I (`src/cases/c1-wexley.ts`) is the reference.** Read it before writing a story.\n\n## The parts\n\n### The client\n`client` is a person id. The client may be someone of the case (often a suspect, sometimes the culprit, never a victim). They may also be a visitor in `story.visitors`: a full `Person` who was not there that evening, such as an inspector, a solicitor or a relative. Visitors need a voice in `tools/narration/cast.ts`.\n\n### Words (`terms`)\n- **Known from the start:** every person (the word's id is the person id), every room (the room id) and every hour (the scene id, shown as its time).\n- **To find:** add 8–15 terms of kind `thing`, `deed`, `motive` or `other`. Kinds `person`, `place` and `time` are also allowed, for a town, a stranger or \"midnight\".\n- Ids are lowercase and unique among all words: people, rooms, hours and terms.\n- **Marking a word in any text:** write `[[id]]` (shows the term's text) or `[[id|shown words]]` (shows other words that note the same term).\n  - Mark a word wherever it is natural, and mark each needed word in at least one place the player will surely reach.\n  - People, rooms and hours may be marked too: `[[terrace]]`.\n\n### Visits\n- The first visit has `id: 'office'` and `location: 'office'`.\n  - `cast: {}` seats everyone as usual: M. Verbeke at his desk (square 8), Hobbs by the fire (12), the client across the desk (20).\n  - Run `npx tsx tools/show-plans.ts office` for the square numbers.\n- The other visits show the case's locations as they are now: the morning after, a week later, the cars in the sidings.\n  - `cast` places whoever is there on free squares: open floor, or a seat, bed or rug, never one marked `#`. Two people may not share a square.\n  - `verbeke` and `hobbs` may stand in a visit too.\n  - Run `npx tsx tools/show-plans.ts <case id>` to see the squares.\n- `opening`: shots played on first arrival (see Shots).\n  - For the office, this is the client's arrival and account, with flashbacks of the evening.\n  - For other places, a title card and a line or two from whoever greets them.\n- `after`: what must be done first. Usually the other visits wait for the first page (`after: ['p-client']`).\n\n### Spots: things to look at\n`{ id, piece | cell | person, title, text, by?, after? }`\n- `piece` is a piece id from the plan (e.g. `armchair1`, `table`); `cell` is a square; `person` is someone present on this visit (an observation, Holmes-style).\n- `by: 'hobbs'` when Hobbs reads a document out (a report, a statement, a register). Otherwise M. Verbeke speaks: an observation, in his voice.\n- The old evidence clues (statements, registers, the medical report) become spots, mostly read by Hobbs.\n- 3–5 spots a place. Every spot's text should earn its place: a word to note, a fact for a page, or a misleading picture.\n\n### Talks: questions and answers\n`{ id, person, topic?, ask, by?, say, mood?, after? }`\n- **Without `topic`:** the question is offered to the player as it is (\"Where were you after dinner?\"). These carry the main testimony.\n- **With `topic`:** it is asked when the player picks that topic, a word or a spot id (showing the thing). Use these for confronting someone with evidence, or for asking about a person or a motive.\n- `ask` is what Hobbs says (or M. Verbeke with `by: 'detective'`); `say` is the answer.\n- The old testimony clues and questions become talks; keep their prose.\n- A person can be questioned wherever they are in a visit already reached. Give each suspect 3–6 talks.\n- `after` lets one answer open another question (\"Miss Hart waited in the hall. And you, madame?\").\n- `shrugs`: each person's stock reply to a topic they know nothing of.\n\n### Deductions: the pages\n`{ id, title, text: string[], solved, after? }`\n- Each string is a sentence with blanks:\n  - `{{answer}}`: the answer is a word id;\n  - `{{a|b}}`: either answer counts;\n  - `{{gerald@1}} and {{simone@1}}`: blanks of one group, which take their answers in any order (two culprits).\n- A blank accepts only words of its answer's kind. When the page is full it is checked: right, \"one or two wrong\", or \"more than two wrong\".\n- `solved` is what M. Verbeke says when the page comes right.\n- **Usual plan, 4–6 pages:**\n  1. **Our client.** A Holmes-style reading of the client from 2–3 observation spots in the office. Easy; it teaches the game. The visits open after it.\n  2. **The poison / the method:** the medical report.\n  3. **The fatal hour:** the finding and where the victim sat, giving the hour and the room.\n  4. **The evening:** who was where, so that the misleading meetings fall away.\n  5. **The murderer:** who, and why (the motive word). This is the last page.\n- With several deaths, give each death its own fatal-hour page, and name every culprit.\n- Every blank must follow from what can be seen and heard. Leave the reasoning to the player: the texts give facts, not conclusions.\n- **For translators:** keep blanks where they need no grammatical ending or article that depends on the word. Put them as subjects, after a colon, or as a name.\n\n### Shots (openings and the coda)\nThese are the cutscene shots of `src/core/types.ts`.\n- **`scene`:**\n  - an hour (scene id), shown as it truly was (`cast: 'truth'`, `look: 'flashback'` for the client's memories);\n  - a visit id, shown as it is (`cast: 'truth'` = the visit's cast);\n  - or `'office'`.\n- `cast` can also be `{ person: square }` for people who move: the client at the door (29) while Hobbs (28) shows them in.\n- `focus`, `frame` (`wide` | `medium` | `close`), `angle`, `turn`, `acts`, `hold`, `card: { id, title, sub }` (a title card; its `id` keys its translation, and `id-sub` the line under it).\n- `say: { id, who, text }`\n  - `id` is unique in the case.\n  - `who` is a person id, `'hobbs'` or `'detective'`.\n  - `text` may mark words.\n- **The office opening, about 8–12 shots:**\n  1. a title card (city, month and year);\n  2. M. Verbeke and Hobbs;\n  3. the client announced at the door;\n  4. the client's account, with flashbacks of the hours in sepia;\n  5. a question from Hobbs;\n  6. M. Verbeke's invitation to look at the client.\n- **`coda`:** 2–3 shots in the office afterwards (a letter, a last remark).\n\n### The dénouement\n`denouement` (paragraphs) and the reconstruction stay as they are. The director stages them from the plans and the truth. Adjust a paragraph only if the story changed a fact.\n\n## Voice\n- M. Verbeke is Belgian, courteous and a little vain, and calls Hobbs \"mon ami\".\n- Hobbs is a plain-spoken police sergeant who says \"sir\".\n- The player is never addressed or gendered.\n- Everything is original: no Christie titles or characters, no famous detectives' names.\n- Everything shown or said is true. People may withhold, never lie in a way the case relies on.\n\n## Checks\n- `npx tsc --noEmit`\n- `npx vitest run tests/story.test.ts` checks:\n  - ids are unique and references exist;\n  - every word is findable;\n  - cast squares are free;\n  - the case plays through to the end.\n\n  The translation checks fail until the translations are written.\n",C=[{id:`story`,label:`Story`,load:async()=>(await i(async()=>{let{renderStory:e}=await import(`./tab-story-CUCtisSz.js`);return{renderStory:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))).renderStory},{id:`cast`,label:`Cast`,load:async()=>(await i(async()=>{let{renderCast:e}=await import(`./tab-cast-CiYMtyS2.js`);return{renderCast:e}},__vite__mapDeps([11,12,13,9,14,8,1,2,3,4,15,7,16,17,5,6,18,19,20,21,10]))).renderCast},{id:`places`,label:`Places`,load:async()=>(await i(async()=>{let{renderPlaces:e}=await import(`./tab-places-D0HDRkOT.js`);return{renderPlaces:e}},__vite__mapDeps([22,9,17,13,16,1,4,15,7,12,8,2,3,5,6,18,19,20,21,10,23,24]))).renderPlaces},{id:`evening`,label:`Evening`,load:async()=>(await i(async()=>{let{renderEvening:e}=await import(`./tab-evening-BGPcL7eu.js`);return{renderEvening:e}},__vite__mapDeps([25,14,8,9,1,2,3,4,5,6,7,15,13,12,16,17,18,19,20,21,10,26,27,24]))).renderEvening},{id:`clues`,label:`Deaths`,load:async()=>(await i(async()=>{let{renderClues:e}=await import(`./tab-clues-BK5uwrDI.js`);return{renderClues:e}},__vite__mapDeps([28,7,9,14,1,4,5,6,8,15,13,12,16,17,2,3,18,19,20,21,29,10,23]))).renderClues},{id:`office`,label:`Office`,load:async()=>(await i(async()=>{let{renderOffice:e}=await import(`./tab-office-Bj_nq3gb.js`);return{renderOffice:e}},__vite__mapDeps([30,13,9,12,1,21,10,23,31,17,16,4,18,2,3,19,15,7,8,5,6,20,26,32]))).renderOffice},{id:`visits`,label:`Places to go`,load:async()=>(await i(async()=>{let{renderVisits:e}=await import(`./tab-visits-1iM4_ETW.js`);return{renderVisits:e}},__vite__mapDeps([33,13,9,1,21,12,10,23,31,17,16,4,18,2,3,19,15,7,8,5,6,20,26,32]))).renderVisits},{id:`talks`,label:`Questions`,load:async()=>(await i(async()=>{let{renderTalks:e}=await import(`./tab-talks-CSZZ2FZd.js`);return{renderTalks:e}},__vite__mapDeps([34,17,9,13,16,1,4,2,3,21,12,10,23,32,15,7,8,5,6,18,19,20,31,26]))).renderTalks},{id:`terms`,label:`Words`,load:async()=>(await i(async()=>{let{renderTerms:e}=await import(`./tab-terms-Cgd1t35E.js`);return{renderTerms:e}},__vite__mapDeps([35,13,9,17,16,1,4,21,12,10,23,32,2,3,15,7,8,5,6,18,19,20,31,26]))).renderTerms},{id:`pages`,label:`Deductions`,load:async()=>(await i(async()=>{let{renderPages:e}=await import(`./tab-pages-KTRJeSeG.js`);return{renderPages:e}},__vite__mapDeps([36,17,9,13,16,1,4,21,12,10,23,32,2,3,15,7,8,5,6,18,19,20,31,26]))).renderPages},{id:`words`,label:`Dénouement`,load:async()=>(await i(async()=>{let{renderWords:e}=await import(`./tab-words-86XeqwtI.js`);return{renderWords:e}},__vite__mapDeps([37,1,10,23]))).renderWords},{id:`cutscenes`,label:`Reconstruction`,load:async()=>(await i(async()=>{let{renderCutscenes:e}=await import(`./tab-cutscenes-BcZSm_UD.js`);return{renderCutscenes:e}},__vite__mapDeps([38,1,15,7,9,13,12,16,17,4,8,2,3,5,6,18,19,20,10,23,31,21,26]))).renderCutscenes},{id:`check`,label:`Check`,load:async()=>(await i(async()=>{let{renderCheck:e}=await import(`./tab-check-BR2I3dcl.js`);return{renderCheck:e}},__vite__mapDeps([39,17,9,13,16,1,4,2,3,5,15,7,12,8,6,18,19,20,10]))).renderCheck}];function w(e,t){document.title=`Case designer · Detective Achille`;let[n,r]=t,i=n?u(n):null;return n&&!i?(location.hash=`#/designer`,()=>{}):i?O(e,i,C.find(e=>e.id===r)?.id??`story`):D(e)}function T(t){let n=new Blob([JSON.stringify(f(t),null,2)],{type:`application/json`}),r=e(`a`,{href:URL.createObjectURL(n),download:`${t.case.title.replace(/[^\w]+/g,`-`).toLowerCase()||`case`}.cingoz.json`});document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(r.href),1e3)}function E(){let n=t({title:`The study`,className:`paper dz-study`}),r=e(`div`,{}),i=e=>{r.replaceChildren(y([S,b,x][e])),a.forEach((t,n)=>t.classList.toggle(`on`,n===e))},a=[`Writing a case`,`Lord Edgware Dies`,`Twelve more cases`].map((e,t)=>g(e,()=>i(t),`small`));n.body.append(e(`div`,{class:`dz-row`},...a),r),i(0)}function D(t){let i=e=>{d(e),location.hash=`#/designer/${e.id}`},f=e(`input`,{type:`file`,accept:`.json,application/json`,hidden:!0});f.addEventListener(`change`,async()=>{let e=f.files?.[0];if(e)try{i(c(await e.text()))}catch(e){r(e.message,`bad`)}});let p=()=>{let r=l();t.replaceChildren(e(`div`,{class:`dz dz-list`},e(`header`,{class:`dz-top`},e(`a`,{class:`dz-btn ghost`,href:`#/`},`‹ Detective Achille`),e(`h1`,{},`Case designer`)),e(`section`,{class:`dz-hero`},e(`p`,{},`Design a case for M. Verbeke: the cast, the places and the hours of the evening as they truly were; then the investigation: the client in the office, the places to go, the things to look at, the questions, the words to note and the pages of deductions; and the dénouement. The designer checks as you go that every page can be solved from what can be seen and heard, and that the case plays fair.`),e(`div`,{class:`dz-row`},g(`＋ New case`,()=>i(a()),`gold`),g(`Import a case file…`,()=>f.click()),g(`Read the study (Lord Edgware Dies)`,E,`ghost`),f),e(`p`,{class:`dz-note`},`Or start from one of the game’s own cases, to see how it is built:`),e(`div`,{class:`dz-row`},...n.map(e=>g(e.title,()=>i(s(e)),`small`)))),e(`section`,{class:`dz-drafts`},e(`h2`,{},`Your drafts`),r.length?e(`ul`,{},...r.map(t=>e(`li`,{},e(`a`,{href:`#/designer/${t.id}`,class:`dz-draft-title`},t.title),e(`span`,{class:`dz-muted`},new Date(t.updated).toLocaleString()),e(`span`,{class:`dz-row`},e(`a`,{class:`dz-btn small`,href:`#/draft/${t.id}`},`▶ Play-test`),g(`Export`,()=>T(u(t.id)),`small`),g(`Duplicate`,()=>{let e=u(t.id),n=s(e.case,e.notes);n.case.title+=` (copy)`,d(n),p()},`small`),h(`Delete`,`Delete this draft?`,()=>{o(t.id),p()}))))):e(`p`,{class:`dz-muted`},`None yet. Drafts are kept in this browser; export them to keep a copy or to share.`))))};return p(),()=>{}}function O(t,n,r){let i=!1,a=e(`span`,{class:`dz-saved`},`Saved`),o=e(`aside`,{class:`dz-side`}),s=e(`main`,{class:`dz-main`}),c=e(`nav`,{class:`dz-tabs`}),l=e(`span`,{class:`dz-title`},n.case.title),u=0,f=0,h=0,v=[],y={draft:n,analysis:null,sel:{location:0,scene:0,person:0},change(e,t=!1){e(n.case,n),l.textContent=n.case.title,a.textContent=`Saving…`,clearTimeout(u),u=window.setTimeout(()=>{a.textContent=d(n)?`Saved`:`Could not save (storage full?)`},300),b(),t&&y.redraw()},redraw:()=>void S(),go(e){location.hash=`#/designer/${n.id}/${e}`},onAnalysis(e){v.push(e)}};function b(){clearTimeout(f),o.classList.add(`busy`),f=window.setTimeout(()=>{m(n.case).then(e=>{if(!i){if(y.analysis=e,o.classList.remove(`busy`),x(),r===`check`)S();else for(let e of v)e()}}).catch(t=>{t.message!==`superseded`&&(o.classList.remove(`busy`),o.replaceChildren(e(`p`,{class:`dz-bad`},`Checks failed: ${t.message}`)))})},500)}function x(){let t=y.analysis;if(!t)return;let r=n.case,i=e=>r.people[e]?.short??`?`,a=t.playthrough,s=r.story?.deductions.length??0,c=[e(`h3`,{},`The case`),t.errors.length?e(`p`,{class:`dz-bad`},`${t.errors.length} error(s) — see Check.`):null,t.verdict?e(`p`,{class:`dz-good`},`✓ The dénouement shows: ${t.verdict.deaths.map(e=>`${e.murderers.map(i).join(` & `)}, ${r.scenes[e.scene]?.time}`).join(`; `)}.`):e(`p`,{class:`dz-bad`},`The evening does not yet give one fatal hour with the right hands (see Deaths and Evening).`),s?a&&!a.stuck.length?e(`p`,{class:`dz-good`},`✓ All ${s} pages can be solved from what is seen and heard.`):e(`p`,{class:`dz-bad`},`${a?.stuck.length??`?`} of ${s} pages can never be filled.`):e(`p`,{class:`dz-warn`},`No pages of deductions yet.`),t.warnings.length?e(`div`,{},e(`h3`,{},`Warnings (${t.warnings.length})`),e(`ul`,{class:`dz-warnbox`},...t.warnings.slice(0,6).map(t=>e(`li`,{class:`dz-wline ${t.level}`},e(`a`,{href:`#/designer/${n.id}/${t.tab}`},`${t.level===`error`?`✗`:`⚠`} ${t.target}: `),t.text)))):null,e(`h3`,{},`Fair play`),e(`ul`,{class:`dz-fair`},...t.fair.map(t=>e(`li`,{},_(t.ok,t.text)))),g(`Open the full check`,()=>y.go(`check`),`small`)];o.replaceChildren(...c.filter(e=>!!e))}async function S(){let t=++h;c.replaceChildren(...C.map(t=>e(`a`,{class:`dz-tab ${t.id===r?`on`:``}`,href:`#/designer/${n.id}/${t.id}`},t.label)));let a=await C.find(e=>e.id===r).load();v=[];let o=await a(y);if(t!==h||i)return;let l=s.scrollTop;s.replaceChildren(o),s.scrollTop=l}return t.replaceChildren(e(`div`,{class:`dz dz-editor`},e(`header`,{class:`dz-top`},e(`a`,{class:`dz-btn ghost`,href:`#/designer`},`‹ Drafts`),l,a,e(`span`,{class:`dz-grow`}),g(`Study`,E,`ghost small`),g(`Export`,()=>T(n),`small`),e(`a`,{class:`dz-btn gold small`,href:`#/draft/${n.id}`},`▶ Play-test`)),c,e(`div`,{class:`dz-body`},s,o))),o.append(e(`p`,{class:`dz-muted`},`Checking…`)),S(),b(),()=>{i=!0,clearTimeout(f),u&&d(n),clearTimeout(u),p()}}export{w as mountDesigner,E as showStudy};