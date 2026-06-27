function getClientInfo() {
    return {
        "name": "Split Note",
        "category": "Workflow",
        "author": "sowinblue",
        "versionNumber": 1,
        "minEditorVersion": 65540
    };
}

function getPlayheadPos() {
    var seconds = SV.getPlayback().getPlayhead();
    var timeAxis = SV.getProject().getTimeAxis();
    return timeAxis.getBlickFromSeconds(seconds);
}

function getNoteAt(notes, pos) {
    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];

        if (note.getOnset() < pos && note.getEnd() > pos) {
            return note;
        }
    }
    return null;
}

function splitAtPlayhead(note, pos, group) {
    var newNote = SV.create("Note");
    newNote.setOnset(pos);
    newNote.setDuration(note.getEnd() - pos);
    newNote.setLyrics("-");
    newNote.setPitch(note.getPitch());

    note.setDuration(pos - note.getOnset());

    group.addNote(newNote);
    return newNote;
}

function main() {
    var pos = getPlayheadPos();

    var group = SV.getMainEditor().getCurrentGroup().getTarget();
    var allNotes = [];
    for (var i = 0; i < group.getNumNotes(); i++) {
        allNotes.push(group.getNote(i));
    }

    var target = getNoteAt(allNotes, pos);

    if (target === null) {
        SV.finish();
        return;
    }

    var newNote = splitAtPlayhead(target, pos, group);

    var selection = SV.getMainEditor().getSelection();
    selection.clearNotes();
    selection.selectNote(newNote);

    SV.finish();
}