function getIssues() {
  fetch(`https://api.github.com/repos/gooddb67/javascript-fetch-lab/issues`, {
    method: 'get',
    headers:{
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  const issues = document.getElementById('issues');
  const issueHolder = document.createElement('ol');

  json.forEach((issue)=>{
    item = document.createElement("li");
    item.innerText = issue.title
    issueHolder.appendChild(item)
    issues.appendChild(issueHolder)
  })

   console.log(json)
}

function createIssue() {
   const repo = "/gooddb67/javascript-fetch-lab"
   const issueTitle = document.getElementById('title').value
   const text = document.getElementById('body').value
   const postData = {
     title: issueTitle,
     body: text
   };

   fetch(`https://api.github.com/repos/gooddb67/javascript-fetch-lab/issues`, {
     method: "post",
     body: JSON.stringify(postData),
     headers:{
       Authorization: `token ${getToken()}`
     }
   }).then(getIssues())
}

function showResults(json) {
  const results = document.getElementById("results");
  const linkHolder = document.createElement("a");
  const link = linkHolder.setAttribute("href", json.html_url);
  linkHolder.innerText = "Link to Repo"
  results.appendChild(linkHolder)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers:{
      Authorization: `token ${getToken()}`
    }

  }).then(resp => resp.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
