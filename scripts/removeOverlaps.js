function getClientInfo() {
    return {
        "name": "Remove Overlaps",
        "category": "Workflow",
        "author": "sowinblue",
        "versionNumber": 1,
        "minEditorVersion": 65540
    };
}

function sortByOnset(notes) {
    notes.sort(function (a, b) {
        return a.getOnset() - b.getOnset();
    });

    return notes;
}

function hasDuplicateOnset(notes) {
    var timeAxis = SV.getProject().getTimeAxis();
    var duplicates = [];

    for (var i = 0; i < notes.length - 1; i++) {
        if (notes[i].getOnset() === notes[i + 1].getOnset()) {
            var measure = timeAxis.getMeasureAt(notes[i].getOnset()) + 1;
            duplicates.push("bar " + measure);
        }
    }

    if (duplicates.length > 0) {
        SV.showMessageBox(
            "Remove Overlaps",
            "Cannot remove overlaps because some notes share the same start position.\n" +
            "Conflicting bars: " + duplicates.join(", ")
        );
        return true;
    }
    return false;
}


function isOverlapping(noteA, noteB) {
    return noteA.getEnd() > noteB.getOnset();
}

function removeOverlaps(notes) {
    for (var i = 0; i < notes.length - 1; i++) {
        var current = notes[i];
        var next = notes[i + 1];

        if (isOverlapping(current, next)) {
            current.setDuration(next.getOnset() - current.getOnset());
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


    var sorted = sortByOnset(selectedNotes);

    if (hasDuplicateOnset(sorted)) {
        SV.finish();
        return;
    }

    removeOverlaps(sorted);
    SV.finish();
}