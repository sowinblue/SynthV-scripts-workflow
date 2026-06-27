function getClientInfo() {
    return {
        "name": "Move Playhead Forward 1 Beat",
        "category": "Workflow",
        "author": "sowinblue",
        "versionNumber": 1,
        "minEditorVersion": 65540
    };
}

function getPlayheadBlick() {
    var seconds = SV.getPlayback().getPlayhead();
    var timeAxis = SV.getProject().getTimeAxis();
    return timeAxis.getBlickFromSeconds(seconds);
}

function getOneBeatBlicks(currentBlick) {
    var timeAxis = SV.getProject().getTimeAxis();
    var timeSig = timeAxis.getMeasureMarkAtBlick(currentBlick);
    var denominator = timeSig.denominator;
    return SV.QUARTER * 4 / denominator;
}

function seekToBlick(blick) {
    var timeAxis = SV.getProject().getTimeAxis();
    var seconds = timeAxis.getSecondsFromBlick(blick);
    SV.getPlayback().seek(seconds);
}

function snapToBeat(blick, oneBeat) {
    var snapped = SV.blickRoundTo(blick, oneBeat);
    var tolerance = 10;
    if (snapped <= blick + tolerance) {
        return snapped + oneBeat;
    }
    return snapped;
}

function main() {
    var currentBlick = getPlayheadBlick();
    var oneBeat = getOneBeatBlicks(currentBlick);
    var snappedBlick = snapToBeat(currentBlick, oneBeat);
    seekToBlick(snappedBlick);
    SV.finish();
}