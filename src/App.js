import './App.css';
// import { Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import axe from './img/axe.jpg';
import knife from './img/knife.webp';
import amaze from './img/amaze.png';
import zebra from './img/zebra.webp';
import shark from './img/shark.jpg';
import leo from './img/leo.webp';
import goat from './img/goat.jpg';
import cockroach from './img/cockroach.jpg';
import yes from './img/yes.png';
import no from './img/no.jpg';
import meat from './img/meat.webp';
import veggie from './img/veggie.jpg';
import {
    Box,
    Button,
    TextField,
    Card,
    Container,
    Grid,
    CardMedia,
    Typography,
    CardContent,
    CardActionArea
} from "@mui/material";

import {useState} from "react";


function App() {
    const [currentStep, setCurrentStep] = useState(1);


    const steps = [

        {
            id: 1,
            title: 'Are You Psycho?',
            type: 'image',
            options: [
                {id: '1a', imagePic: yes},
                {id: '1b', imagePic: no},
            ]
        },
        {
            id: 2,
            title: 'Which picture do you like more?',
            type: 'image',
            options: [
                {id: '1a', imagePic: axe},
                {id: '1b', imagePic: knife},
            ]
        },
        {
            id: 3,
            title: 'Do you like meat or veggie?',
            type: 'image',
            options: [
                {id: '1a', imagePic: meat},
                {id: '1b', imagePic: veggie},
            ]
        },
        {
            id: 4,
            title: 'Do you like JS or ice cream?',
            type: 'textAnswers',
            options: [
                {id: '1a', content: 'JS'},
                {id: '1b', content: 'ice cream'},
                {id: '1c', content: 'sleep'},]
        },
        {
            id: 5,
            title: 'Which animal do you like better?',
            type: 'image',
            options: [
                {id: '1a', imagePic: zebra},
                {id: '1b', imagePic: goat},
                {id: '1c', imagePic: leo},
                {id: '1d', imagePic: shark},
                {id: '1f', imagePic: cockroach},
            ]
        },
    ];


    const optionClick = (option, stepId) => {
        console.log(option, stepId);
        setCurrentStep(stepId + 1)
    }


    return (
        <div>
            <h1 className='title'>QUIZ</h1>

        <div className='quiz'>
                        {steps.map((step) => (
                            <div key={step.id}>
                                {step.id === currentStep &&
                                    <div>
                                        <h2>{step.title}</h2>
                                        <div>
                                            <h1 >{step.content}

                                        {step.type === 'textAnswers' &&
                                            <div>
                                                {step.options.map((option) => (
                                                    <div key={option.id} onClick={() => optionClick(option, step.id)}>
                                                        <span>{option.title}</span>
                                                        <div>{option.content}</div>
                                                        <Button variant="contained">Press here</Button>
                                                    </div>
                                                ))}
                                            </div>
                                        }


                                            {step.type === 'image' &&
                                                <div>
                                                    {step.options.map((option) => (
                                                        <div key={option.id}
                                                             onClick={() => optionClick(option, step.id)}>
                                                            <h4>{option.title}</h4>
                                                            <img src={option.imagePic} alt={option.title} width={200}/>
                                                            <ul>
                                                                <Button variant="contained">Press here</Button>
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            }
                                            </h1>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}

            {currentStep === 6 && (
                <div>

                    <h1> We did not expect such a result from you...</h1>
                    <img className='amaze' src={amaze} alt={amaze}/>
                    <h3>Fill out the form for get result</h3>


                    <ul>
                        <TextField id="filled-basic" label="First Name" variant="filled">'Name'</TextField>
                    </ul>
                    <ul>
                        <TextField id="filled-basic" label="Last Name" variant="filled">'Name'</TextField>
                    </ul>
                    <ul>
                        <TextField id="filled-basic" label="Phone number" variant="filled">Phone</TextField>
                    </ul>
                    <ul>
                        <TextField id="filled-basic" label="Email" variant="filled">Email</TextField>
                    </ul>

                    <Button variant="contained">Get result</Button>

                </div>
            )}


</div>
        </div>
);

}

export default App;


