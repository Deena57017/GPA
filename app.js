let score = prompt("Score have your:")
if (score >= 80) {
    document.getElementById("result").innerHTML = "your have GPA :A "
} else if (score >= 70) {
    document.getElementById("result").innerHTML = "your have GPA : B"
} else if (score >= 60) {
    document.getElementById("result").innerHTML = "your have GPA : C"

} else if (score >= 50) {
    document.getElementById("result").innerHTML = "your have GPA : D"

}
else {
    document.getElementById("result").innerHTML = "your have GPA :E"
}