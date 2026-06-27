function getClientInfo() {
    return {
        "name": "Expand Short Notes",
        "category": "Workflow",
        "author": "sowinblue",
        "versionNumber": 1,
        "minEditorVersion": 65540
    };
}

function getOneBeatBlicks(onset) {
    var timeAxis = SV.getProject().getTimeAxis();
    var timeSig = timeAxis.getMeasureMarkAtBlick(onset);
    var denominator = timeSig.denominator;
    return SV.QUARTER * 4 / (denominator * 2);
}

function expandShortNotes(notes) {
    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        var oneBeat = getOneBeatBlicks(note.getOnset());
        note.setDuration(oneBeat);
    }
}

function main() {
    var selection = SV.getMainEditor().getSelection();
    var selectedNotes = selection.getSelectedNotes();

    if (selectedNotes.length === 0) {
        SV.finish();
        return;
    }

    expandShortNotes(selectedNotes);
    SV.finish();
}