dialCount = 0;
acceptedCallCount = 0;
voicemailCount = 0;
canceledCallCount = 0;
dialsToNextConversation = -999;
demoCallCount = 0;
dialsToNextDemo = -999;
notInterestedCount = 0;
followUpCount = 0;


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
    document.getElementById("accepted-calls-modal").showModal();

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
function incrementDemoCallCount(){
    demoCallCount++;
    document.getElementById('demo-calls-booked').textContent = demoCallCount;
    document.getElementById('accepted-calls-modal').close();
    calculateDialsToNextDemo();
}
function incrementNotInterestedCount(){
    notInterestedCount++;
    document.getElementById('accepted-calls-modal').close();
    decrementDialsToDemo();
}
function incrementFollowUpCount(){
    followUpCount++;
    document.getElementById('accepted-calls-modal').close();
    decrementDialsToDemo();
}
function calculateDialsToNextDemo(){
    dialsToNextDemo = Math.floor(dialCount/demoCallCount)+1;
    document.getElementById("dials-to-next-demo").textContent = dialsToNextDemo;
    console.log(dialsToNextDemo);
    return dialsToNextDemo;
}
function decrementDialsToDemo(){
    if(dialsToNextDemo < 1){
        document.getElementById("dials-to-next-demo").textContent = "Recalculating";
    }
    else {
        dialsToNextDemo--;
        document.getElementById("dials-to-next-demo").textContent = dialsToNextDemo;
    }
}
