//Number1
const submissions = [
    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true}
]

//Number2
function addSubmission(array, newName, newScore, newDate) {
    let newPassed;
    if (newScore < 60) {
        newPassed = false;
        // newTrueOrFalse = false;
    } else {
        newPassed = true;
        // newTrueorFalse = true;
    }
    const obj1 = {name: newName, score: newScore, date: newDate, passed: newPassed};
    array.push(obj1);
}
addSubmission(submissions, 'Janet', 20, '2020-11-11');
addSubmission(submissions, 'Julia', 95, '2020-10-19');
addSubmission(submissions, 'John', 70, '2020-09-23');
console.log(submissions);

//Number3
function deleteSubmissionByIndex(array, index) {
    array.splice(index,1);
    // console.log(array);
}
deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

//Number4
function deleteSubmissionByName(array, name) {
    var index = array.findIndex(i => i.name === name);
    array.splice(index,1);
  }
  deleteSubmissionByName(submissions,'Jack');
  console.log(submissions);

//Number5
function editSubmission(array, index, score) {
    submissions[index].score = score;
    if (score < 60) {
        submissions[index].passed = false;
    } else {
        submissions[index].passed = true;
    }
}
editSubmission(submissions, 0, 100);
console.log(submissions);

//Number6
function findSubmissionByName(array, name) {
    let findName = array.find(i => i.name == name);
    return findName;
}
console.log(findSubmissionByName(submissions, 'Jane'));

// Number7
function findLowestScore(array) {
    let lowScore = null;
    array.forEach(function (submission) {
        if (lowScore === null || lowScore.score > submission.score) {
            lowScore = submission;
        }
    }
    );
    return lowScore;}
console.log(findLowestScore(submissions));

//Number8
function findAverageScore(array) {
    let sum = 0;
    for (const student of array) {
        sum += student.score;
    }
    let avg = sum / array.length;
    console.log(avg);
}
console.log(findAverageScore(submissions));

//Number9
function filterPassing(array) {
    const result = array.filter(i => i.score >= 60);
    return result;
}
console.log(filterPassing(submissions));

//Number10
function filter90AndAbove(array) {
    const result1 = array.filter(i => i.score >= 90);
    return result1;
}
console.log(filter90AndAbove(submissions));


