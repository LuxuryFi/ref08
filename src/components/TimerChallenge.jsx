import { useState } from "react";

let timer;
export default function TimerChallenge({ title, targetTime }) {   
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    
    const handlerStart = () => {
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    const handlerStop = () => {
        clearTimeout(timer);
    }

    return <section className="challenge">
        <h2>
            {title}
        </h2>
        {timerExpired && <p>You Lost</p>}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerStarted ? handlerStop : handlerStart }>
                Start Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
            {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
    </section>
}