//Unique Firebase Object
const firebaseConfig = {
  apiKey: "AIzaSyDcM_eT0buUrjv1WTCjxL1uPIOtu14qM4I",
  authDomain: "puremath-site-81da5.firebaseapp.com",
  projectId: "puremath-site-81da5",
  storageBucket: "puremath-site-81da5.firebasestorage.app",
  messagingSenderId: "377509506170",
  appId: "1:377509506170:web:0db7cfb1e9febde962dfc3"
};
  
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  //Variable to access database collection
  const db = firestore.collection("contactInfo");
  
  //Get Submit Form
  let submitButton = document.getElementById("submit");
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault();
  
    //Get Form Values
    let fullName = document.getElementById("fname").value;
    let phoneNumber = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    firestore
      .collection("contactInfo")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const fn = doc.data().fullName;
          if (fullName === fn) {
            console.log("Already Exists");
          }
  
          // console.log("data", doc.data().fname);
        });
      });
    //Save Form Data To Firebase
    db.doc()
      .set({
        fullName: fullName,
        Number: phoneNumber,
        email: email,
        message: message,
      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  
    //alert
    alert("Your Form Has Been Submitted Successfully");
  
    //clear form after submission
    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });