function startclassification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/OCqkQfDC3/model.json", modelReady)

}

function modelReady() {
    classifier.classify(gotResult)
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        document.getElementById("rusultlabel").innerHTML = "i can hear " + result[0].label
        document.getElementById("resultacurracy").innerHTML = "confidence " + (result[0].confidence * 100).toFixed(2) + " %"
        console.log(result);


        if (result[0].label == 'goat') {
            document.getElementById("img").src = "goat.jpeg"
        } else if (result[0].label == 'dog') {
            document.getElementById("img").src = "dog.jpeg"
        }
        else if (result[0].label == 'aligator') {
            document.getElementById("img").src = "aligator.jpeg"
        }
        else if (result[0].label == 'cow') {
            document.getElementById("img").src = "cow.jpeg"
        } else {
            document.getElementById("img").src = "soundicon.jpeg"

        }


    }



}



