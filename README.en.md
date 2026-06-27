# SynthV-script-workflow

[🇰🇷 한국어](README.md) | 🇺🇸 English

---

A collection of automation scripts for Dreamtonics **Synthesizer V Studio Pro 2**.

These scripts cover features that were missing or worked differently in SynthV compared to other DAWs, built to make the workflow more comfortable. This project is open-sourced so other users who want the same workflow can use it freely.

---

## Scripts

### Note Editing

| File | Function |
|---|---|
| `removeOverlaps.js` | Remove overlaps between selected notes |
| `splitNote.js` | Split a note at the current playhead position |
| `expandShortNotes.js` | Expand selected notes to a minimum half-beat length |
| `autoFillNoteGaps.js` | Fill silences between selected notes automatically |

### Pitch

| File | Function |
|---|---|
| `shiftPitchUp.js` | Shift selected notes up by one semitone |
| `shiftPitchDown.js` | Shift selected notes down by one semitone |

### Playhead

| File | Function |
|---|---|
| `movePlayheadForward1Beat.js` | Move playhead forward by one beat |
| `movePlayheadBackward1Beat.js` | Move playhead backward by one beat |

### Note Selection

| File | Function |
|---|---|
| `selectNextNote.js` | Select next note with auto-scroll |
| `selectPrevNote.js` | Select previous note with auto-scroll |

---

## Installation

Scripts are located inside the `scripts/` folder.

1. Download or clone this repository.
2. Open Synthesizer V Studio Pro 2.
3. Go to **Scripts** → **Open Scripts Folder** from the top menu.
4. Copy the `.js` files from the `scripts/` folder into that folder.
5. Go to **Scripts** → **Rescan Scripts** to refresh the script list.

> **Note:** If you added or updated scripts, restart Synthesizer V for them to work properly. If you encounter any errors, try restarting first.

---

## Usage

Each script can be run directly from the **Scripts** menu, or assigned to a keyboard shortcut.

It is recommended to assign shortcuts based on your own workflow and preferences.

---

## License

[MIT License](LICENSE)

---

## Credits

**Author:** [sowinblue](https://github.com/sowinblue)

Feature planning and design were carried out directly by the author, while AI tools (Claude by Anthropic) were used as a supplementary aid during the code writing process. The written code was directly executed and verified, with testing and debugging performed by the author.