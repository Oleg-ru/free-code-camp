const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if (value === '') {
        delete records[id][prop];
        return records;
    }
    if (prop !== 'tracks' && value !== '') {
        records[id][prop] = value;
        return records;
    }
    if (prop === 'tracks' && value !== '') {
        if (Object.keys(records[id]).find(key => key === prop)) {
            records[id][prop].push(value);
            return records;
        }
        else {
            records[id].tracks = [value];
            return records;
        }
    }
}

updateRecords(recordCollection, 5439, "artist", "ABBA")
updateRecords(recordCollection, 1245, "albumTitle", "Riptide")

console.log(recordCollection)