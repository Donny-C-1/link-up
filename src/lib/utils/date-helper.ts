export function formatDate(date: Date): string {
    let today = new Date();
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    // * Check for today
    if (date.toDateString() === today.toDateString()) {
        let hours = String(date.getHours()).padStart(2, '0');
        let minutes = String(date.getMinutes()).padStart(2, '0');
        // let time = date.toTimeString().slice(0, 5); //* Alternatively
        return `${hours}:${minutes}`;
    }

    // * Check for yesterday 
    if (yesterday.toDateString() === date.toDateString()) {
        return 'Yesterday';
    }

    // * Return the date
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; // Returns "DD/MM/YYYY"
}