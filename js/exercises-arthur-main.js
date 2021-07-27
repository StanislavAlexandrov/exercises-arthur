const shownSentence = document.querySelector('.shownSentence');
const shownAnswer = document.querySelector('.shownAnswer');
const startButton = document.querySelector('.startButton');

firebase.initializeApp({
    apiKey: 'AIzaSyB9l86GgrlST_kNlUhVqLwAHXgE3Ljph8I',
    authDomain: 'basic-chat-3f218.firebaseapp.com',
    projectId: 'basic-chat-3f218',
});

var firestore = firebase.firestore();
const commonRef = firestore.collection('samples');
const questionsRef = firestore.doc('samples/questions');
const answersRef = firestore.doc('samples/answers');
const arrayIndexRef = firestore.doc('samples/arrayIndex');

commonRef.onSnapshot(function (doc) {
    if (doc && doc.exists) {
        const myData = doc.data(); //extract the contents of the document as an object

        shownSentence.innerText = myData;
    }
});

const dataArrayUpdated = [
    { sentence: 'question1', answer: 'yes or no?' },
    { sentence: 'question2', answer: 'yes or no?' },
    { sentence: 'question3', answer: 'yes or no?' },
    { sentence: 'question4', answer: 'yes or no?' },
    { sentence: 'question5', answer: 'yes or no?' },
    { sentence: 'question6', answer: 'yes or no?' },
    { sentence: 'question7', answer: 'yes or no?' },
    { sentence: 'question8', answer: 'yes or no?' },
    { sentence: 'question9', answer: 'yes or no?' },
    { sentence: 'question10', answer: 'yes or no?' },
    { sentence: 'question11', answer: 'yes or no?' },
    { sentence: 'question12', answer: 'yes or no?' },
    { sentence: 'question13', answer: 'yes or no?' },
    { sentence: 'question14', answer: 'yes or no?' },
    { sentence: 'question15', answer: 'yes or no?' },
    { sentence: 'question16', answer: 'yes or no?' },
    { sentence: 'question17', answer: 'yes or no?' },
    { sentence: 'question18', answer: 'yes or no?' },
    { sentence: 'question19', answer: 'yes or no?' },
    { sentence: 'question20', answer: 'yes or no?' },
    { sentence: 'question21', answer: 'yes or no?' },
];

console.log(dataArrayUpdated.length);

const pushButton = () => {
    startButton.disabled = true;

    dataArrayUpdated.map((element, index) => {
        setTimeout(() => {
            arrayIndexRef.set({
                arrayIndex: index,
            });

            questionsRef.onSnapshot(function (doc) {
                if (doc && doc.exists) {
                    const myData = doc.data(); //extract the contents of the document as an object

                    shownSentence.innerText = myData[index];
                }
            });
            answersRef.onSnapshot(function (doc) {
                if (doc && doc.exists) {
                    const myData = doc.data(); //extract the contents of the document as an object

                    shownAnswer.innerText = myData[index];
                }
            });
            if (index >= dataArrayUpdated.length - 1) {
                startButton.disabled = false;
            }
        }, 2500 * index);
    });
};
