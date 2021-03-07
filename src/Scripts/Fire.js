import firebase from "firebase/app";
import "firebase/firestore";


let fire = (() => {
    let db;
    var firebaseConfig = {
        apiKey: "AIzaSyCqv81xBNvvdOreFB2pA4K2Zo33uSaa0LI",
        authDomain: "ledautomation-1f46e.firebaseapp.com",
        databaseURL: "https://ledautomation-1f46e.firebaseio.com",
        projectId: "ledautomation-1f46e",
        storageBucket: "ledautomation-1f46e.appspot.com",
        messagingSenderId: "545877391848",
        appId: "1:545877391848:web:d9931d1eea8c1124e50c5d",
        measurementId: "G-PNVQ2P0ZM7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    let init = () => {
        db = firebase.firestore();
    }

    let getUser = async () => {
        let users = db.collection("Web").doc("Web");
        let data;
        await users.get().then((doc) => {
            data = doc.data();
        })

        return (data);
    }

    return { init, getUser };
})();
export default fire;