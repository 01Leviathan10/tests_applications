'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER threshold
 */

function processLogs(logs, threshold) {
    if(logs<1 || logs>100000) {return []}
    if(threshold<1 || threshold>logs){return []}
    
    // Write your code here
    const transactions = {}
    const allUserIDs = []
    const wantedIDs = []
    logs.forEach( log => {
        const split = log.split(" ")
        if(split[0] === split[1]){
        allUserIDs.push(split[1])
        }
        else if(split.length === 3){
        allUserIDs.push(split[0])
        allUserIDs.push(split[1])   
        }
        
    })
    allUserIDs.forEach( id => {
        transactions[id] = transactions[id] ? (transactions[id] +1) : 1
    })
    const keys = Object.keys(transactions)
    keys.forEach(key => {
        transactions[key] >= threshold && wantedIDs.push(Number(key))
    })
    wantedIDs.sort()
    return wantedIDs.map(number => String(number))
}

function main() {