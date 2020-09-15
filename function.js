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
}
