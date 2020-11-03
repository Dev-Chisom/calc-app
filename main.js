 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAiJmTBbQL5dTlPt--u4PKIJ579lUGq-Pw",
    authDomain: "calc-app-539b3.firebaseapp.com",
    databaseURL: "https://calc-app-539b3.firebaseio.com",
    projectId: "calc-app-539b3",
    storageBucket: "calc-app-539b3.appspot.com",
    messagingSenderId: "743158712885",
    appId: "1:743158712885:web:3a74268ba0c9b45f0aff7c",
    measurementId: "G-5L4BR61XV3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const calc = () => {
      //get message
    const num1 = parseFloat(document.getElementById("n1").value)
    const num2 = parseFloat(document.getElementById("n2").value)
    // const result = document.getElementById("result");
    const operate = document.getElementById("opr").value;


    const show = document.querySelector('.show');

    if(operate === '+'){
       let ans = document.getElementById('result').value = num1+num2;
       document.querySelector('.show').innerHTML = `${num1} ${operate} ${num2} = ${ans}`;
    }
    if(operate === '-'){
       let ans = document.getElementById('result').value = num1-num2;
       document.querySelector('.show').innerHTML = `${num1} ${operate} ${num2} = ${ans}`;
    }
    if(operate === '/'){
        let ans = document.getElementById('result').value = num1/num2;
        document.querySelector('.show').innerHTML = `${num1} ${operate} ${num2} = ${ans}`;
    }
    if(operate === 'x'){
       let ans = document.getElementById('result').value = num1*num2;
       document.querySelector('.show').innerHTML = `${num1} ${operate} ${num2} = ${ans}`;
    }
    if(operate === '%'){
       let ans = document.getElementById('result').value = num1%num2;
       document.querySelector('.show').innerHTML = `${num1} ${operate} ${num2} = ${ans}`;
    }

    //save in database
    firebase.database().ref('results').push().set({
        "n1": num1,
        "n2": num2,
        "opr":operate,
        "show": show,
        "result": result
       
    })

      return false;
  }

  //Listen for incoming messages
  firebase.database().ref("results").on("child_added", function(snapshot) {
    let html ="";
    // give each message a unique id
    html += "<p id='message-" + snapshot.key + "'>";
    html += "<p>";
    html += snapshot.val().sender + " : " + snapshot.val().message;
    html += "</p>";

    document.getElementById("result").innerHTML += html

  })

