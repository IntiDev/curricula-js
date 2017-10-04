function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
  var extraGrade = getExtraGrade(score);
  score = parseInt(score);
  switch (score) {
    case score >= 0 && score <= 59:
      return "F";

    case score <= 69:
      return "D" + extraGrade;

    case score <= 79:
      return "C" + extraGrade;

    case score <= 89:
      return "B" + extraGrade;

    case score <= 100:
      return "A" + extraGrade;

    default:
      return "INVALID SCORE";
  }
}

function getExtraGrade(score) {
  var extraGrade = "";
  if (score >= 60 && score <= 99) {
    var string = score.toString();
    var lastNumber = parseInt(string.charAt(string.length - 1));

    if (lastNumber >= 0 && lastNumber <= 2) {
      extraGrade += "-";
    } else if (lastNumber >= 8 && lastNumber <= 9) {
      extraGrade += "+";
    }
  }
  return extraGrade;
}

var output = convertScoreToGradeWithPlusAndMinus(98);
console.log(output); // --> 'A-'
