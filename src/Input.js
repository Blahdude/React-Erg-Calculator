import React, { useState } from "react";
import { Button, Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

const Input = () => {
    const [timemin, setTimeMin] = useState('0');
    const [timesec, setTimeSec] = useState('00');
    const [splitmin, setSplitMin] = useState('0');
    const [splitsec, setSplitSec] = useState('00');
    const [distance, setDistance] = useState('0');

    const calculateTime = (e, splitminvar, splitsecvar, distance) => {
        e.preventDefault();
        var value = Number(distance) / 500
        var split = Number(splitsecvar) + (Number(splitminvar) * 60)
        var tseconds = value * split
        var minutes = Math.floor(tseconds / 60)
        var seconds = Math.floor(tseconds % 60)
        if (seconds === 0) {
            seconds = "00"
        }
        if (String(splitsecvar).length === 1) {
            splitsecvar = "0" + splitsecvar
        }
        if (String(seconds).length === 1) {
            seconds = "0" + seconds
        }
        setTimeMin(minutes)
        setTimeSec(seconds)
        setSplitMin(splitminvar)
        setSplitSec(splitsecvar)
        setDistance(distance)
    }

    const calculateSplit = (e, tminutes, tseconds, distance) => {
        e.preventDefault();
        var ttime = (Number(tminutes) * 60) + Number(tseconds)
        var value = distance / 500
        var split = ttime / value
        var minutes = Math.floor(split / 60)
        var seconds = split % 60
        setTimeMin(tminutes)
        setTimeSec(tseconds)
        setSplitMin(minutes)
        setSplitSec(seconds)
        setDistance(distance)
    }

    const calculateDistance = (e, tminutes, tseconds, sminutes, sseconds) => {
        e.preventDefault();
        var ttime = (Number(tminutes) * 60) + Number(tseconds)
        var stime = Number(sseconds) + (Number(sminutes) * 60)
        var value = ttime / stime
        var distance = value * 500
        setTimeMin(tminutes)
        setTimeSec(tseconds)
        setSplitMin(sminutes)
        setSplitSec(sseconds)
        setDistance(distance)
    }

    return (
        <div className="Input">
            <form>
            <h1 class="display-h1">Erg Calculator</h1>
            <h3 class="display-h3">Michigan Men's Rowing</h3>
            <p class="Output">Time: {timemin}:{timesec}</p>
            <p class="Output">Split: {splitmin}:{splitsec}</p>
            <p class="Output">Distance: {distance}</p>
            <div class="calculator">
            <div className="containerme">
                    <div className="rowme">
                        <div className="col">
                            <Button class="btn btn-primary" onClick={evente => {
                                calculateTime(evente, splitmin, splitsec, distance);
                            }}>
                                Find Time
                            </Button>
                            <div class="containerme">
                            <p>
                                Mins:  
                                <input
                                    type="text"
                                    value={timemin}
                                    onChange={(a) => setTimeMin(a.target.value)}
                                />
                                Secs: 
                                <input
                                    type="text"
                                    value={timesec}
                                    onChange={(b) => setTimeSec(b.target.value)}
                                />
                            </p>
                            </div>
                        </div>
                        <div className="col">
                            <Button class="btn btn-primary" onClick={evente => {
                                calculateSplit(evente, timemin, timesec, distance);
                            }}>
                                Find Split
                            </Button>
                        <div class="containerme">
                            <p>
                                Mins:
                                <input
                                    type="text"
                                    value={splitmin}
                                    onChange={(c) => setSplitMin(c.target.value)}
                                />
                                Secs:
                                <input
                                    type="text"
                                    value={splitsec}
                                    onChange={(d) => setSplitSec(d.target.value)}
                                />
                            </p>
                        </div>
                        </div>
                        <div className="col">
                            <Button class="btn btn-primary" onClick={evente => {
                                calculateDistance(evente, timemin, timesec, splitmin, splitsec);
                            }}>
                                Find Distance
                            </Button>
                        <div class="containerme">
                            <p>
                                Meters:
                                <input
                                    type="text"
                                    value={distance}
                                    onChange={(e) => setDistance(e.target.value)}
                                />
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quote-main">
                <p class="quote">Sometimes all you need is a little more push</p>
                <p class="quote-footer">GGG</p>
            </div>
            </form>
        </div>
    );
}

export default Input;