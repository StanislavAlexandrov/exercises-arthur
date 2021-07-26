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
];

const startApp = () => {
    startButton.disabled = true;
    dataArrayUpdated.map((element, index) => {
        setTimeout(() => {
            shownSentence.innerText = element.sentence;
            shownAnswer.innerText = element.answer;

            if (index === 19) {
                startButton.disabled = false;
            }
        }, 2000 * index);
    });
};
/* 
const pushButton = () => {
    dataArrayUpdated.map((element, index) => {
        setTimeout(() => {
            arrayIndexRef
                .set({
                    arrayIndex: index,
                })
                .then(function () {
                    arrayIndexRef.onSnapshot(function (doc) {
                        if (doc && doc.exists) {
                            const myData = doc.data(); //extract the contents of the document as an object
                            console.log(myData.arrayIndex);
                            shownSentence.innerText =
                                dataArrayUpdated[myData.arrayIndex].sentence;
                        }
                    });
                });
        }, 2000 * index);
    });
}; */

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
            if (index === 14) {
                startButton.disabled = false;
            }
        }, 2500 * index);
    });
};
