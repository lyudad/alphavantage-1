export function getDatesInRange(startDate: string, endDate: string) {
    let start = new Date(startDate);
    let end = new Date(endDate);

    let dateArray = [];

    while (start <= end) {
        // Push the current date to the array in YYYY-MM-DD format
        dateArray.push(start.toISOString().split('T')[0]);

        start.setDate(start.getDate() + 1);
    }

    return dateArray;
}

export function isFromDateLessThanToDate(fromDate, toDate) {
    let from = new Date(fromDate);
    let to = new Date(toDate);

    return from < to;
}