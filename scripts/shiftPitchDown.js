function getClientInfo() {
    return {
        "name": "Shift Pitch Down",
        "category": "Workflow",
        "author": "sowinblue",
        "versionNumber": 1,
        "minEditorVersion": 65540
    };
}

function shiftPitchDown(notes) {
    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        note.setPitch(Math.max(note.getPitch() - 1, 13));
    }
}

function main() {
    var selection = SV.getMainEditor().getSelection();
    var selectedNotes = selection.getSelectedNotes();

    if (selectedNotes.length === 0) {
        SV.finish();
        return;
    }

    shiftPitchDown(selectedNotes);
    SV.finish();
}