function startclassification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/OCqkQfDC3/model.json", modelReady)

}

function modelReady() {
    classifier.classify(gotResult)
}

function gotResult() {
    console.log("Result");
}