'use strict';
/*
 * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 * http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */


/**
 * Questions library
 *
 * Use this file to create your own set of questions.
 *
 * Object properties:
 *      index:          The index of the question in this list
 *      question:       The question you want Alexa to ask
 *      answers:        The list of available answers
 *      correct_answer: The correct answer to the question
 *
 * When adding or updating questions and answers, you must take the list of all values
 * in each of the 'answers' arrays for all questions and add them to a custom slot
 * in your skill called 'answers'.
 *
 * The 'answers' custom slot is be mapped to a couple of intents in the interaction model.
 * One intent, named 'AnswerOnlyIntent', contains only the slot, by itself, in order
 * to maximize the accuracy of the model.
 *
 * For example:
 *      AnswerOnlyIntent {answers}
 *
 * The other intent, 'AnswerQuestionIntent', provides more complex speech patterns
 * to match other utternaces users may include with their answers.
 *
 * For example:
 *      AnswerQuestionIntent is it {answers}
 *      AnswerQuestionIntent it is {answers}
 *      AnswerQuestionIntent the answer is {answers}
 *      AnswerQuestionIntent I think the answer is {answers}
 *
 * See model file at models/en-US.json for a complete example.
 */
module.exports = Object.freeze({
    questions_en_US: [
        {
            index: 1,
            question: 'What are the building blocks of the neural information system?',
            answers: ['glia', 'axon', 'dendrite', 'neuron'],
            correct_answer: 'neuron'
        },
        {
          index: 2,
          question: 'What is the junction between sending and receiving ends of an axon?',
          answers: ['agonists', 'endorphins', 'myelin sheath', 'synapse'],
          correct_answer: 'synapse'
        },
        {
            index: 3,
            question: 'What type of neurotransmitter influences muscle action, learning, and memory?',
            answers: ['serotonin', 'glutamate', 'acetylcholine', 'dopamine'],
            correct_answer: 'acetylcholine'
        },
        {
            index: 4,
            question: 'Which nervous system controls glands and internal organs?',
            answers: ['somatic nervous system', 'autonomic nervous system'],
            correct_answer: 'autonomic nervous system'
        },
        {
            index: 5,
            question: 'Which nervous system gathers information from sensory and motor neurons?',
            answers: ['endocrine system', 'peripheral neuron system', 'sympathetic nervous system', 'central nervous system'],
            correct_answer: 'peripheral neuron system'
        },
        {
            index: 6,
            question: 'Which is the oldest region of the brain structure?',
            answers: ['pons', 'thalamus', 'medulla', 'brainstem'],
            correct_answer: 'brainstem'
        },
        {
            index: 7,
            question: 'What is the name for the two wrinkled halves of the brain?',
            answers: ['amygdala', 'cerebellum', 'hippocampus'],
            correct_answer: 'cerebellum'
        },
        {
            index: 8,
            question: 'What is the term for the impairment of language due to brain damage?',
            answers: ['adrenal', 'endocrine', 'aphasia', 'amnesia'],
            correct_answer: 'aphasia'
        },
        {
            index: 9,
            question: 'Which brain component connects the two hemispheres?',
            answers: ['hippocampus', 'hypothalamus', 'corpus callosum', 'frontal cortex'],
            correct_answer: 'corpus collosum'
        },
        {
            index: 10,
            question: 'Which scan uses radioactive glucose to measure brain perforamnce?',
            answers: ['electroencephalogram', 'positron emission tomograhy', 'magnetic imaging resonance'],
            correct_answer: 'positron emission tomography'
        },

        {
            index: 11,
            question: 'Which of the following are not examples of selective attention?',
            answers: ['inattentional blindness', 'transduction', 'change blindness', 'perception'],
            correct_answer: 'perception'
        },

        {
            index: 12,
            question: 'Which color is not part of the three colors involved in Young Helmholtz trichromatic theory are?',
            answers: ['red', 'green', 'black', 'blue'],
            correct_answer: 'black'
        },
	  {
            index: 13,
            question: 'Which of the following is not one of the basic skin sensations?',
            answers: ['pressure', 'warmth', 'cold', 'itch'],
            correct_answer: 'itch'
        },
        {
            index: 14,
            question: 'Which is not one of the gestalt principles?',
            answers: ['proximity', 'similarity', 'continuity', 'clarity'],
            correct_answer: 'clarity'
        },
	  {
            index: 15,
            question: 'Which is not one of the depth perception cues?',
            answers: ['relative size', 'interposition', 'relative detail', 'proximity'],
            correct_answer: 'proximity'
        },
        {
            index: 16,
            question: 'If person A smelled a skunk before person B did, person A has a lower?',
            answers: ['absolute threshold', 'tolerance level', 'olfactory treshold', 'accommodation'],
            correct_answer: 'aboslute treshold'
        },
	  {
            index: 17,
            question: 'No longer feeling a sensation after being exposed to it for a few minutes is called?',
            answers: ['sensory adaptation', 'noticeable difference', 'gate control theory', 'blind spot'],
            correct_answer: 'sensory adaptation'
        },
	  {
            index: 18,
            question: 'How do we organize, interpret, and recognize sensations?',
            answers: ['perception', 'sorting', 'papillae', 'sensation'],
            correct_answer: 'perception'
        }









    ],
    questions_en_GB: [
        {
            index: 1,
            question: 'What are the building blocks of the neural information system?',
            answers: ['glia', 'axon', 'dendrite', 'neuron'],
            correct_answer: 'neuron'
        },
        {
          index: 2,
          question: 'What is the junction between sending and receiving ends of an axon?',
          answers: ['agonists', 'endorphins', 'myelin sheath', 'synapse'],
          correct_answer: 'synapse'
        },
        {
            index: 3,
            question: 'What type of neurotransmitter influences muscle action, learning, and memory?',
            answers: ['serotonin', 'glutamate', 'acetylcholine', 'dopamine'],
            correct_answer: 'acetylcholine'
        },
        {
            index: 4,
            question: 'Which nervous system controls glands and internal organs?',
            answers: ['somatic nervous system', 'autonomic nervous system'],
            correct_answer: 'autonomic nervous system'
        },
        {
            index: 5,
            question: 'Which nervous system gathers information from sensory and motor neurons?',
            answers: ['endocrine system', 'peripheral neuron system', 'sympathetic nervous system', 'central nervous system'],
            correct_answer: 'peripheral neuron system'
        },
        {
            index: 6,
            question: 'Which is the oldest region of the brain structure?',
            answers: ['pons', 'thalamus', 'medulla', 'brainstem'],
            correct_answer: 'brainstem'
        },
        {
            index: 7,
            question: 'What is the name for the two wrinkled halves of the brain?',
            answers: ['amygdala', 'cerebellum', 'hippocampus'],
            correct_answer: 'cerebellum'
        },
        {
            index: 8,
            question: 'What is the term for the impairment of language due to brain damage?',
            answers: ['adrenal', 'endocrine', 'aphasia', 'amnesia'],
            correct_answer: 'aphasia'
        },
        {
            index: 9,
            question: 'Which brain component connects the two hemispheres?',
            answers: ['hippocampus', 'hypothalamus', 'corpus callosum', 'frontal cortex'],
            correct_answer: 'corpus collosum'
        },
        {
            index: 10,
            question: 'Which scan uses radioactive glucose to measure brain perforamnce?',
            answers: ['electroencephalogram', 'positron emission tomograhy', 'magnetic imaging resonance'],
            correct_answer: 'positron emission tomography'
        },

        {
            index: 11,
            question: 'Which of the following are not examples of selective attention?',
            answers: ['inattentional blindness', 'transduction', 'change blindness', 'perception'],
            correct_answer: 'perception'
        },

        {
            index: 12,
            question: 'Which color is not part of the three colors involved in Young Helmholtz trichromatic theory are?',
            answers: ['red', 'green', 'black', 'blue'],
            correct_answer: 'black'
        },
	  {
            index: 13,
            question: 'Which of the following is not one of the basic skin sensations?',
            answers: ['pressure', 'warmth', 'cold', 'itch'],
            correct_answer: 'itch'
        },
        {
            index: 14,
            question: 'Which is not one of the gestalt principles?',
            answers: ['proximity', 'similarity', 'continuity', 'clarity'],
            correct_answer: 'clarity'
        },
	  {
            index: 15,
            question: 'Which is not one of the depth perception cues?',
            answers: ['relative size', 'interposition', 'relative detail', 'proximity'],
            correct_answer: 'proximity'
        },
        {
            index: 16,
            question: 'If person A smelled a skunk before person B did, person A has a lower?',
            answers: ['absolute threshold', 'tolerance level', 'olfactory treshold', 'accommodation'],
            correct_answer: 'aboslute treshold'
        },
	  {
            index: 17,
            question: 'No longer feeling a sensation after being exposed to it for a few minutes is called?',
            answers: ['sensory adaptation', 'noticeable difference', 'gate control theory', 'blind spot'],
            correct_answer: 'sensory adaptation'
        },
	  {
            index: 18,
            question: 'How do we organize, interpret, and recognize sensations?',
            answers: ['perception', 'sorting', 'papillae', 'sensation'],
            correct_answer: 'perception'
        }


  ]
});
