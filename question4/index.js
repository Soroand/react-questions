// FIRST PROBLEM
// As far as I can tell the probleme here would be on line #36
// where we assign server_echo response object. Response object
// can be consumed only once in order to fix it we need to clone it
// server_echo = response.clone().json().echo. I am not really sure about the
// '.echo' part, looks like it's from PHP or should be in response object,
// but pretty sure it won't work without clone()

// SECOND PROBLEM
// We calling 'server_echo.forEach' while fetch is executing therefore 'server_echo'
// is going to be undefined and will throw an error when we try to use forEach on it

// THIRD PROBLEM
// We are trying to assign a promise value to 'server_echo' which we won't be able to
// iterate over and 'forEach' won't execute on 'server_echo' throwing an error,
// if we would've been able to assign it in the first place.

//----------- ORIGINAL -------//
var server_echo;
var json = {
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
};
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
    server_echo = response.json().echo; //server_echo = response.clone().json() - "not sure if the echo should be here"
    return response.json();
})
.then(function (result) {
    alert(result);
})
.catch (function (error) {
    console.log('Request failed', error);
});
server_echo.forEach(
    element => console.log(element)
)


//---------- SOLUTION ---------//
// We can wrap everything in async function and await the result
// after we finish exicution we can work with server_info and run forEach
// Also server_info assignment shoud move to second 'then' so we assign the
// result of the request and not the promise

var server_echo;
var json = {
  json: JSON.stringify({
    a: 1,
    b: 2
  }),
  delay: 3
};
async function getFetchResult() {
  await fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    server_echo = result;
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });
  server_echo.forEach(
    element => console.log(element)
    )
}
getFetchResult()