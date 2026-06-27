function getClientInfo() {
    return {
        "name": "Shift Pitch Up",
        "category": "Workflow",
        "author": "sowinblue",
        "versionNumber": 1,
        "minEditorVersion": 65540
    };
}

function shiftPitchUp(notes) {
    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        note.setPitch(Math.min(note.getPitch() + 1, 111));
    }
}

function main() {
    var selection = SV.getMainEditor().getSelection();
    var selectedNotes = selection.getSelectedNotes();

    if (selectedNotes.length === 0) {
        SV.finish();
        return;
    }
    
    shiftPitchUp(selectedNotes);
    SV.finish();
}