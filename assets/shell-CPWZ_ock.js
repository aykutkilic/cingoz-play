const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tab-story-cZv9OARK.js","assets/dom-D5s8RAx_.js","assets/index-CkisLMYj.js","assets/furniture-kinds-DxfvGOd9.js","assets/traits-DfnRvnA1.js","assets/geometry-Bo7jsnxJ.js","assets/looks--cloPBnj.js","assets/index-BRH_D5qz.css","assets/form-Amak2zmk.js","assets/tab-cast-Gu9vww89.js","assets/draft-peO743VF.js","assets/tab-places-CQsknyo6.js","assets/preview3d-Wi3mjIRn.js","assets/tab-evening-CNQ9hc8Q.js","assets/acts-D83DDC-P.js","assets/diorama-DRJBPW0r.js","assets/tab-clues-CDXXsR4k.js","assets/worker-client-BQlq88C6.js","assets/tab-interviews-CmH1qKFI.js","assets/tab-words-DSZh4SxL.js","assets/tab-cutscenes--m3qXGC5.js","assets/tab-check-C1zvj_9D.js"])))=>i.map(i=>d[i]);
import{n as e}from"./dom-D5s8RAx_.js";import{C as t,o as n,s as r,t as i}from"./index-CkisLMYj.js";import{blankDraft as a,deleteDraft as o,draftFrom as s,fromFile as c,listDrafts as l,loadDraft as u,saveDraft as d,toFile as f}from"./draft-peO743VF.js";import{n as p,t as m}from"./worker-client-BQlq88C6.js";import{a as h,n as g,t as _}from"./form-Amak2zmk.js";function v(t){let n=[],r=/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g,i=0;for(let a of t.matchAll(r)){a.index>i&&n.push(t.slice(i,a.index));let r=a[0];if(r.startsWith(`**`))n.push(e(`strong`,{},...v(r.slice(2,-2))));else if(r.startsWith("`"))n.push(e(`code`,{},r.slice(1,-1)));else if(r.startsWith(`[`)){let[,t,i]=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(r);n.push(e(`a`,{href:i,target:`_blank`,rel:`noopener`},t))}else n.push(e(`em`,{},...v(r.slice(1,-1))));i=a.index+r.length}return i<t.length&&n.push(t.slice(i)),n}function y(t){let n=e(`div`,{class:`dz-md`}),r=t.split(`
`),i=0;for(;i<r.length;){let t=r[i];if(!t.trim()){i++;continue}let a=/^(#{1,4})\s+(.*)$/.exec(t);if(a)n.append(e(`h${a[1].length+1}`,{},...v(a[2]))),i++;else if(/^---+$/.test(t.trim()))n.append(e(`hr`)),i++;else if(t.startsWith(`|`)){let t=[];for(;i<r.length&&r[i].startsWith(`|`);){let e=r[i].split(`|`).slice(1,-1).map(e=>e.trim());e.every(e=>/^:?-+:?$/.test(e))||t.push(e),i++}let[a,...o]=t;n.append(e(`div`,{class:`dz-table-wrap`},e(`table`,{},e(`thead`,{},e(`tr`,{},...(a??[]).map(t=>e(`th`,{},...v(t))))),e(`tbody`,{},...o.map(t=>e(`tr`,{},...t.map(t=>e(`td`,{},...v(t)))))))))}else if(/^\s*([-*]|\d+\.)\s+/.test(t)){let a=/^\s*\d+\./.test(t),o=e(a?`ol`:`ul`);for(;i<r.length&&/^\s*([-*]|\d+\.)\s+/.test(r[i]);){let t=r[i].replace(/^\s*([-*]|\d+\.)\s+/,``);for(i++;i<r.length&&/^\s{2,}\S/.test(r[i])&&!/^\s*([-*]|\d+\.)\s+/.test(r[i]);)t+=` `+r[i++].trim();o.append(e(`li`,{},...v(t)))}n.append(o)}else{let a=t;for(i++;i<r.length&&r[i].trim()&&!/^(#|\||-{3,}|\s*([-*]|\d+\.)\s)/.test(r[i]);)a+=` `+r[i++].trim();n.append(e(`p`,{},...v(a)))}}return n}var b=`# Designing a Cingöz case: lessons from *Lord Edgware Dies*

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
`,x=[{id:`story`,label:`Story`,load:async()=>(await i(async()=>{let{renderStory:e}=await import(`./tab-story-cZv9OARK.js`);return{renderStory:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]))).renderStory},{id:`cast`,label:`Cast`,load:async()=>(await i(async()=>{let{renderCast:e}=await import(`./tab-cast-Gu9vww89.js`);return{renderCast:e}},__vite__mapDeps([9,4,5,3,1,2,6,7,10,8]))).renderCast},{id:`places`,label:`Places`,load:async()=>(await i(async()=>{let{renderPlaces:e}=await import(`./tab-places-CQsknyo6.js`);return{renderPlaces:e}},__vite__mapDeps([11,3,1,2,4,5,6,7,10,8,12]))).renderPlaces},{id:`evening`,label:`Evening`,load:async()=>(await i(async()=>{let{renderEvening:e}=await import(`./tab-evening-CNQ9hc8Q.js`);return{renderEvening:e}},__vite__mapDeps([13,4,5,3,1,2,6,7,10,8,14,15,12]))).renderEvening},{id:`clues`,label:`Clues`,load:async()=>(await i(async()=>{let{renderClues:e}=await import(`./tab-clues-CDXXsR4k.js`);return{renderClues:e}},__vite__mapDeps([16,3,4,1,2,5,6,7,10,17,8]))).renderClues},{id:`interviews`,label:`Interviews`,load:async()=>(await i(async()=>{let{renderInterviews:e}=await import(`./tab-interviews-CmH1qKFI.js`);return{renderInterviews:e}},__vite__mapDeps([18,1,2,3,4,5,6,7,10,8]))).renderInterviews},{id:`words`,label:`Words`,load:async()=>(await i(async()=>{let{renderWords:e}=await import(`./tab-words-DSZh4SxL.js`);return{renderWords:e}},__vite__mapDeps([19,1,8]))).renderWords},{id:`cutscenes`,label:`Cutscenes`,load:async()=>(await i(async()=>{let{renderCutscenes:e}=await import(`./tab-cutscenes--m3qXGC5.js`);return{renderCutscenes:e}},__vite__mapDeps([20,1,2,3,4,5,6,7,10,8,14]))).renderCutscenes},{id:`check`,label:`Check`,load:async()=>(await i(async()=>{let{renderCheck:e}=await import(`./tab-check-C1zvj_9D.js`);return{renderCheck:e}},__vite__mapDeps([21,1,2,3,4,5,6,7,8]))).renderCheck}];function S(e,t){document.title=`Case designer · Cingöz`;let[n,r]=t,i=n?u(n):null;return n&&!i?(location.hash=`#/designer`,()=>{}):i?E(e,i,x.find(e=>e.id===r)?.id??`story`):T(e)}function C(t){let n=new Blob([JSON.stringify(f(t),null,2)],{type:`application/json`}),r=e(`a`,{href:URL.createObjectURL(n),download:`${t.case.title.replace(/[^\w]+/g,`-`).toLowerCase()||`case`}.cingoz.json`});document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(r.href),1e3)}function w(){n({title:`The study: Lord Edgware Dies`,className:`paper dz-study`}).body.append(y(b))}function T(n){let i=e=>{d(e),location.hash=`#/designer/${e.id}`},f=e(`input`,{type:`file`,accept:`.json,application/json`,hidden:!0});f.addEventListener(`change`,async()=>{let e=f.files?.[0];if(e)try{i(c(await e.text()))}catch(e){r(e.message,`bad`)}});let p=()=>{let r=l();n.replaceChildren(e(`div`,{class:`dz dz-list`},e(`header`,{class:`dz-top`},e(`a`,{class:`dz-btn ghost`,href:`#/`},`‹ Cingöz`),e(`h1`,{},`Case designer`)),e(`section`,{class:`dz-hero`},e(`p`,{},`Design a murder for M. Verbeke: the cast, the places and the hours of the evening, the clues and interviews, the letter, the dénouement and the cutscenes. The designer checks as you go that exactly one accusation fits, that a careful player can deduce it, and that the case plays fair.`),e(`div`,{class:`dz-row`},g(`＋ New case`,()=>i(a()),`gold`),g(`Import a case file…`,()=>f.click()),g(`Read the study (Lord Edgware Dies)`,w,`ghost`),f),e(`p`,{class:`dz-note`},`Or start from one of the game’s own cases, to see how it is built:`),e(`div`,{class:`dz-row`},...t.map(e=>g(e.title,()=>i(s(e)),`small`)))),e(`section`,{class:`dz-drafts`},e(`h2`,{},`Your drafts`),r.length?e(`ul`,{},...r.map(t=>e(`li`,{},e(`a`,{href:`#/designer/${t.id}`,class:`dz-draft-title`},t.title),e(`span`,{class:`dz-muted`},new Date(t.updated).toLocaleString()),e(`span`,{class:`dz-row`},e(`a`,{class:`dz-btn small`,href:`#/draft/${t.id}`},`▶ Play-test`),g(`Export`,()=>C(u(t.id)),`small`),g(`Duplicate`,()=>{let e=u(t.id),n=s(e.case,e.notes);n.case.title+=` (copy)`,d(n),p()},`small`),h(`Delete`,`Delete this draft?`,()=>{o(t.id),p()}))))):e(`p`,{class:`dz-muted`},`None yet. Drafts are kept in this browser; export them to keep a copy or to share.`))))};return p(),()=>{}}function E(t,n,r){let i=!1,a=e(`span`,{class:`dz-saved`},`Saved`),o=e(`aside`,{class:`dz-side`}),s=e(`main`,{class:`dz-main`}),c=e(`nav`,{class:`dz-tabs`}),l=e(`span`,{class:`dz-title`},n.case.title),u=0,f=0,h=0,v=[],y={draft:n,analysis:null,sel:{location:0,scene:0,person:0},change(e,t=!1){e(n.case,n),l.textContent=n.case.title,a.textContent=`Saving…`,clearTimeout(u),u=window.setTimeout(()=>{a.textContent=d(n)?`Saved`:`Could not save (storage full?)`},300),b(),t&&y.redraw()},redraw:()=>void T(),go(e){location.hash=`#/designer/${n.id}/${e}`},onAnalysis(e){v.push(e)}};function b(){clearTimeout(f),o.classList.add(`busy`),f=window.setTimeout(()=>{m(n.case).then(e=>{if(!i){if(y.analysis=e,o.classList.remove(`busy`),S(),r===`check`)T();else for(let e of v)e()}}).catch(t=>{t.message!==`superseded`&&(o.classList.remove(`busy`),o.replaceChildren(e(`p`,{class:`dz-bad`},`Checks failed: ${t.message}`)))})},500)}function S(){let t=y.analysis;if(!t)return;let r=t.answers,i=n.case,a=[e(`h3`,{},`Verdict`),t.errors.length?e(`p`,{class:`dz-bad`},`${t.errors.length} error(s) — see Check.`):null,r?r.length===1&&r[0].intended?e(`p`,{class:`dz-good`},`✓ One accusation fits: ${(e=>i.people[e]?.short??`?`)(r[0].murderer)}, ${i.scenes[r[0].scene]?.time}.`):e(`p`,{class:`dz-bad`},`${r.length} accusations fit. Add clues until only the intended one is left.`):e(`p`,{class:`dz-muted`},t.answersNote??`Not checked yet.`),t.grade?e(`p`,{class:t.grade.answered?`dz-good`:`dz-warn`},t.grade.answered?`✓ Deducible (hardest step: tier ${t.grade.maxTier}, ${t.grade.steps} steps).`:`The grader cannot settle it without guessing.`):null,e(`h3`,{},`Fair play`),e(`ul`,{class:`dz-fair`},...t.fair.map(t=>e(`li`,{},_(t.ok,t.text)))),g(`Open the full check`,()=>y.go(`check`),`small`)];o.replaceChildren(...a.filter(e=>!!e))}async function T(){let t=++h;c.replaceChildren(...x.map(t=>e(`a`,{class:`dz-tab ${t.id===r?`on`:``}`,href:`#/designer/${n.id}/${t.id}`},t.label)));let a=await x.find(e=>e.id===r).load();v=[];let o=await a(y);if(t!==h||i)return;let l=s.scrollTop;s.replaceChildren(o),s.scrollTop=l}return t.replaceChildren(e(`div`,{class:`dz dz-editor`},e(`header`,{class:`dz-top`},e(`a`,{class:`dz-btn ghost`,href:`#/designer`},`‹ Drafts`),l,a,e(`span`,{class:`dz-grow`}),g(`Study`,w,`ghost small`),g(`Export`,()=>C(n),`small`),e(`a`,{class:`dz-btn gold small`,href:`#/draft/${n.id}`},`▶ Play-test`)),c,e(`div`,{class:`dz-body`},s,o))),o.append(e(`p`,{class:`dz-muted`},`Checking…`)),T(),b(),()=>{i=!0,clearTimeout(f),u&&d(n),clearTimeout(u),p()}}export{S as mountDesigner,w as showStudy};