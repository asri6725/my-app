import app from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAeHl1Oi2IjVRVOq66fmNRKOGiq46yg66s",
    authDomain: "sheetmanipulation.firebaseapp.com",
    databaseURL: "https://sheetmanipulation.firebaseio.com",
    projectId: "sheetmanipulation",
    storageBucket: "sheetmanipulation.appspot.com",
    messagingSenderId: "605686044813",
    appId: "1:605686044813:web:854602913e6b3407446ac4",
    measurementId: "G-MLLTK8522B"
  };
class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig)
    }
}

export default Firebase;