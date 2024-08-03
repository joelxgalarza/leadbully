dialCount = 0;
acceptedCallCount = 0;
voicemailCount = 0;
canceledCallCount = 0;
dialsToNextConversation = -999;


//increments counters for  amount of calls made
function incrementDialCount(){
    dialCount++;
    elements = document.querySelectorAll(".calls-made");
    elements.forEach(element => {
        element.textContent = dialCount;
    });
    document.getElementById("call-actions-modal").showModal();
}
function incrementAcceptedCalls(){
    acceptedCallCount++;
    document.getElementById("call-actions-modal").close();
    element = document.getElementById("calls-accepted");
    element.textContent = acceptedCallCount;
    calculateDialsToNextConversation();
}
function incrementVoicemailCount(){
    voicemailCount++;
    document.getElementById("call-actions-modal").close();
    decrementDialsToNextConversation();
}
function incrementCanceledCallCount(){
    canceledCallCount++;
    document.getElementById("call-actions-modal").close();
    decrementDialsToNextConversation();
}

function calculateAcceptedPercentage(){
    return (acceptedCallCount/dialCount)*100;
}
function calculateDialsToNextConversation(){
    dialsToNextConversation = Math.floor(dialCount/acceptedCallCount)+1;
    document.getElementById("dials-to-conversation").textContent = dialsToNextConversation;
    return dialsToNextConversation
}
function decrementDialsToNextConversation(){
    if(dialsToNextConversation < 1){
        document.getElementById("dials-to-conversation").textContent = "Recalculating";
    }
    else {
        dialsToNextConversation--;
        document.getElementById("dials-to-conversation").textContent = dialsToNextConversation;
    }
}