document.addEventListener('DOMContentLoaded', function() {
  document.getElementsByTagName('form')[0].onsubmit = function(evt) {
    evt.preventDefault();
    checkWord();
    window.scrollTo(0, 150);
  }
  document.getElementById('terminalTextInput').focus();
  var textInputValue = document.getElementById('terminalTextInput').value.trim();
  // spelling error check later with css
  var textInputValue = document.getElementById('terminalResultsCont').innerHTML;
  var clearInput = function(){
    document.getElementById('terminalTextInput').value = "";
  }
  var scrollToBottomOfResults = function() {
    //another spelling error
    var terminalResultsDiv = document.getElemenetById('terminalResultsCont');
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  }
  scrollToBottomOfResults();
  var addTextToResults = function(textToAdd) {
    //another one
    document.getElementById('terminalResultsCont').innerHTML +- "<p>" + textToAdd + "</p>";
    scrollToBottomOfResults();
  }
  var helpKeyWords = [
    "- Open + Website URL",
    "- Google + keyword",
    "- Youtube + keyword",
    "- Wiki + keyword",
    "- 'Time'",
    "- Date",
    "- tech",
    "* There are more keyword you have to find yourslef."
  ].join('<br>');
  addTextToResults(helpKeyWords);
}
var getTimeAndDate = function(postTimeDay) {
  var timeAndDate = new Date();
  var timeHours = timeAndDate.getHours();
  var timeMinutes = timeAndDate.getMinutes();
  var dateDay = timeAndDate.getDate();
  console.log(dateDay);
  var dateMonth = timeAndDate.getMonth() + 1;
  var dateYear = timeAndDate.getFullYear();
  if (timeHours) < 10 {
    timeHours = "0" + timeHours;
  }
  if (timeMinutes) < 10 {
    timeMinutes = "0" + timeMinutes;
  }
  var currentTime = timeHours + ":" + timeMinutes;
  var currentDate = dateDay "/" + dateMonth + "/" + dateYear;
  if(postTimeDay = "time") {
     addTextInResults(currentTime);
  }
  if(postTimeDay = "date") {
     addTextInResults(currentDate);
  }
}
var openLinkInNewWindow = function(LinkToOpen) {
  window.open(linkToOpen, '_blank');
  clearInput();
}
var textReplies = function() {
  switch(textInputValueLowerCase) {
    case "code":
      clearInput();
      addTextToResults("1337");
      break;
    case "Creator":
      clearInput();
      addTextToResults("HiGuyss");
      break;
    case "HiGuyss":
    case "Hi_Guys":
      clearInput();
      addTextToResults("If you read this you are a n00b");
      break;
    case "Creator":
    case "founder":
      clearInput();
      addTextToResults("IT WAS ME! HiGuyss");
      break;
    case "I love you":
    case "love you":
    case "love":
      clearInput();
      addTextToResults("I hate you.... JK");
      break;
    case "date":
      clearInput();
      getTimeAndDate("date");
      break;
    
  }
}






