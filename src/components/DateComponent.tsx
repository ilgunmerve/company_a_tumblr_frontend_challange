import React from 'react';
import './DateComponent.scss';

interface DateProps{
    date: Date
}

const DateComponent = (props: DateProps) =>{

    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    const { date } = props;

    return(
        <div className="date-box">
            <p>{days[date.getDay()]}</p>
            <div className="month-box">
                <p>{months[date.getMonth()]}</p>
                <p>{date.getDate()}TH</p>
            </div>
        </div>
    );
}

export default DateComponent;