  var API_KEY = 'AIzaSyBMOawKKr4zxMxzay8qOA-pWd3T3-WjIRY';
  var CLIENT_ID = '128246237578-qibaiukb82ubm9b3bkbb15ift36j0rvt.apps.googleusercontent.com';
  var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
  var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

  var spreadsheetId = '1TZLh4YGQIpW3Z7qOPPoOV46Xx95bfpt0oKHsS4bjR-o';
  var range = 'Tutor!A1:Z';

  var data;

  function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

  function initClient() {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function () {
      readData();
    }, function(error) {
      console.log(JSON.stringify(error, null, 2));
    });
  }
  function readData() {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range
    }).then((response) => {
      var result = response.result;
      var numRows = result.values ? result.values.length : 0;
      data = result.values;
      console.log(`${numRows} rows retrieved.`);
      loadData();
    });
  }


