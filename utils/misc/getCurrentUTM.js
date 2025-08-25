export default function getCurrentUTMMonth() {
    const now = new Date();
    const monthNames = [
        'Janu', 'Febr', 'Marc', 'Apri', 'May', 'June',
        'July', 'Augu', 'Sept', 'Octo', 'Nove', 'Dece'
    ];
    const month = monthNames[now.getMonth()].substring(0, 4);
    const year = now.getFullYear();
    return `${month}${year}`;
}