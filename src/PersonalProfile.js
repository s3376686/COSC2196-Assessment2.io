const PersonalProfile = () => {
    return (
        <div className="container">
            <h1>Personal Profile</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"><a href="http://www.16personalities.com/" target="_blank" rel="noreferrer">Myers-Briggs</a></h5>
                    <p className="card-text">
                        Personality type: Virtuoso (ISTP-T)<br></br>
                        Traits: Introverted – 66%, Observant – 52%, Thinking – 54%, Prospecting – 67%, Turbulent – 85%<br></br>
                        Role: Explorer<br></br>
                        Strategy: Constant Improvement
                    </p>
                    <p>
                    The results of the say that I have a Virtuoso personality type. In a team, my introverted nature might prefer independent or small-group work, while my observant and thinking traits contribute to suggesting solutions to problems. The prospecting trait reflects openness to possibilities, although higher turbulence means I might feel more stress when the team is busy. When forming a team, I would be conscious of the need to force myself to collaborate and mindful about managing stress during busy periods.
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <a href="http://www.educationplanner.org/students/self-assessments/learning-styles-quiz.shtml" target="_blank" rel="noreferrer">What's Your Learning Style?</a><br></br>
                        </h5>
                    <p className="card-text">

                     The Results<br></br>
                        Your Scores:<br></br>
                        Auditory: 25%<br></br>
                        Visual: 30%<br></br>
                        Tactile: 45%<br></br>
                        You are a Tactile learner! Check out the information below, or view all of the learning styles.
                    </p>
                    <p>
                    Based on the results, I prefer learning through demonstrations. In a team setting, I would be inclined to utilize approaches such as paired programming to learn from my teammates and understand their techniques. Additionally, I would encourage other team members to showcase their work or proposed solutions, as demonstrations can provide a clearer understanding compared to verbal explanations alone.
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"><a href="https://www.gradtests.com.au/test/starttest/TestType/2/TestId/45/practice/1" target="_blank" rel="noreferrer">Numerical Reasoning</a></h5>
                    <p className="card-text">
                        <table>
                            <thead>
                                <tr>
                                    <th>VERSION</th>
                                    <th>NUMBER OF ATTEMTPS</th>
                                    <th>AVERAGE SCORE VS AVERAGE USER</th>
                                    <th>OVERALL PERCENTILE RANKING</th>
                                    <th>AVERAGE TIME TAKEN</th>
                                    <th>LAST ATTEMPT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Numerical Reasoning Test 4</td>
                                    <td>1</td>
                                    <td>13/25 (52%) vs 10.72/25 (42.89%)</td>
                                    <td>70th</td>
                                    <td>17:43</td>
                                    <td>16/06/2023 13/25 (52%)</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                    <p>
                    The results show I am okay at Numerical Reasoning but not particularly good. Unfortunately, I am probably not suited to software engineering or data science, but I still should have the capacity for more basic programming involved in Test Automation and DevOps. In a team I may ask for more assistance with tasks that require strong numerical skills.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PersonalProfile