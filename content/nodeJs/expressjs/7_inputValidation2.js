//User Input Validation with JOI Validating Nested Object and Arrays
//Doesn't work ******

const Joi = require('joi');

// const arrayString = string[];
const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [{example: 'example1'},{example: 'example2'},{example: 'example3'}];
const userInput = { personalInfo: {
                        streetAddress: '12343434',
                        city: 'Boston',
                        state: 'fl'
                    },
                    preferences: arrayString}; //change to arrayObjects

//Schema for personal info
const personalInfoSchema = Joi.object().keys({
    streetAddress: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required()
})

//Schema for preferences with Array String
const preferencesSchema = Joi.array().items(Joi.string());
//Schema for preferences with Array Objects
// const preferencesSchema = Joi.array().items(Joi.object().keys({
//     example : Joi.string().required()
// }));
// preferences: arrayString};

const schema = Joi.object().keys({
    presonalInfo: personalInfoSchema,
    preferences : preferencesSchema
});


Joi.valid(userInput,schema,(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
});