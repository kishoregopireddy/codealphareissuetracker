document.getElementById('issueForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var status = document.getElementById('status').value;

    // Create a unique ID (you may want to implement a more robust ID generation)
    var id = new Date().getTime();

    // Create an issue object
    var issue = {
        id: id,
        title: title,
        description: description,
        status: status
    };

    // Add the issue to the table and local storage
    addIssueToTable(issue);
    addIssueToLocalStorage(issue);

    // Clear the form fields
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('status').value = 'open';
});

// Function to add an issue to the table
function addIssueToTable(issue) {
    var table = document.getElementById('issueTable').getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    row.innerHTML = '<td>' + issue.id + '</td><td>' + issue.title + '</td><td>' + issue.description + '</td><td>' + issue.status + '</td>';
}

// Function to add an issue to local storage
function addIssueToLocalStorage(issue) {
    var issues = JSON.parse(localStorage.getItem('issues')) || [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
}

// Function to load issues from local storage on page load
function loadIssuesFromLocalStorage() {
    var issues = JSON.parse(localStorage.getItem('issues')) || [];
    issues.forEach(function(issue) {
        addIssueToTable(issue);
    });
}

// Load issues from local storage when the page is loaded
loadIssuesFromLocalStorage();