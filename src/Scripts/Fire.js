import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";


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
        // console.log("getUser");
        // console.log("ran");
        let users = db.collection("Web").doc("Web");
        let data;
        await users.get().then((doc) => {
            // console.log(doc.data());
            data = doc.data();
            // console.log(data, "inner");

        })
        // console.log(data, "outer");
        return data;
    }

    let upload = (data) => {

        db.collection("Web").doc("Web").set(data)
            .then(() => {
                console.log("doc uploaded");
            }).catch((err) => {
                console.error(err);
            })


    }


    let uploadImage = async (data, name) => {
        let storage = firebase.storage();
        let storageRef = storage.ref("images");
        let fileRef = storageRef.child(name);

        await fileRef.put(data);
        let url = await fileRef.getDownloadURL();
        return url;
    }


    let fetchProduct = async (product) => {
        let data;
        let prod = db.collection("Product").doc(product);
        await prod.get().then((doc) => {
            data = doc.data();
        })
        return data;
    }

    let uploadMember = async (details) => {
        db.collection("Members").doc(details.id).set(details)
            .then(() => {
                console.log("details uploaded");
            }).catch((err) => {
                console.error(err);
            })
    }

    let getMember = async (inpMember) => {
        let data;

        let member = db.collection("Members").doc(inpMember);

        await member.get().then((doc) => {
            if (doc.exists) {
                data = doc.data();
                // console.log(data);
            }

            else {
                console.log("ERR : could not find member");
                data = {}
            }
        })


        return data;

    }


    return { init, getUser, upload, uploadImage, fetchProduct, getMember, uploadMember };
})();
export default fire;