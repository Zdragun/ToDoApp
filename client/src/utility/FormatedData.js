export const FormatedData = (createdAt) => {
    const objdata = new Date(createdAt);
    const getYear = objdata.getFullYear()
    const getMonth = (objdata.getMonth() + 1).toString();
    const getDay = objdata.getDate().toString();
    const getHours = objdata.getHours();
    const getMinutes = objdata.getMinutes();
    const formattedMonth = +getMonth < 10 ? `0${getMonth}` : getMonth;
    const formattedDay = +getDay < 10 ? `0${getDay}` : getDay;
    const formattedMinutes = +getMinutes < 10 ? `0${getMinutes}` : getMinutes;
    return `${getYear}-${formattedMonth}-${formattedDay}  ${getHours}:${formattedMinutes}`;

}
