export const userData = {
    user: {
        id: "NG-1023",
        name: "Chinedu Okonkwo",
        age: 58,
        conditions: ["Type 2 Diabetes", "Stage 2 CKD"],
        location: "Lagos, Nigeria",
        vitals: {
            blood_pressure: "135/85",
            heart_rate: 78,
            weight_kg: 82,
            eGFR: 72
        },
        diet_preferences: ["No Pork", "Loves Pounded Yam"],
        language_preference: "Pidgin"
    },
    actionPlan: [
        { id: 1, text: "Check glucose level (Morning)", completed: true },
        { id: 2, text: "Take blood pressure medication", completed: false },
        { id: 3, text: "Walk for 30 mins", completed: false },
        { id: 4, text: "Drink 500ml water", completed: true },
    ]
};
