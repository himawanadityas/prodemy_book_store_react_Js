import namor from "namor";

import axios from "axios";
import {useState} from "react";

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {

    return {
        firstName: namor.generate({words: 1, numbers: 0}),
        lastName: namor.generate({words: 1, numbers: 0}),
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        // status:
        //     statusChance > 0.66
        //         ? "relationship"
        //         : statusChance > 0.33 ? "complicated" : "single"
    };
};

export function makeData() {
    return range(10).map((data) => {
        return {
            // ...newPerson(),
            firstName: 4,
            lastName: 1,
            age: 2,
            visits: 2,
            progress: 2,
            // children: range(10).map(newPerson)
        };
    });
}

