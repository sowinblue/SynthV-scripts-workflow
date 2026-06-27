function getClientInfo() {
    return {
        "name": "Select Next Note",
        "category": "Workflow",
        "author": "sowinblue",
        "versionNumber": 1,
        "minEditorVersion": 65540
    };
}

function getSortedNotes() {
    var group = SV.getMainEditor().getCurrentGroup().getTarget();
    var allNotes = [];
    for (var i = 0; i < group.getNumNotes(); i++) {
        allNotes.push(group.getNote(i));
    }
    allNotes.sort(function (a, b) {
        return a.getOnset() - b.getOnset();
    });
    return allNotes;
}

function scrollToNote(note) {
    var navigation = SV.getMainEditor().getNavigation();
    var timeRange = navigation.getTimeViewRange();
    var noteOnset = note.getOnset();

    if (noteOnset < timeRange[0] || noteOnset > timeRange[1]) {
        navigation.setTimeLeft(noteOnset);
    }
}


function selectNextNote(currentNote, allNotes) {
    for (var i = 0; i < allNotes.length; i++) {
        if (allNotes[i].getOnset() === currentNote.getOnset()) {
            if (i === allNotes.length - 1) {
                return;
            }
            var nextNote = allNotes[i + 1];
            var selection = SV.getMainEditor().getSelection();
            selection.clearNotes();
            selection.selectNote(nextNote);
            scrollToNote(nextNote);
            return;
        }
    }
}

function main() {
    var selection = SV.getMainEditor().getSelection();
    var selectedNotes = selection.getSelectedNotes();

    if (selectedNotes.length === 0) {
        SV.finish();
        return;
    }

    selectedNotes.sort(function (a, b) {
        return a.getOnset() - b.getOnset();
    });

    if (selectedNotes.length > 1) {
        selection.clearNotes();
        selection.selectNote(selectedNotes[0]);
        scrollToNote(selectedNotes[0]);
        SV.finish();
        return;
    }

    var allNotes = getSortedNotes();
    selectNextNote(selectedNotes[0], allNotes);
    SV.finish();
}