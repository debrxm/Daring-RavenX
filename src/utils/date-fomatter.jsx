export const fomatDate = (data, leng) => {
  console.log({ data, leng });

  const date = new Date(data * 1000),
    monthS = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    monthL = [
      'January',
      'Febuary',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    currentMonth =
      leng === 'short' ? monthS[date.getMonth()] : monthL[date.getMonth()],
    currentDate = date.getDate(),
    year = date.getFullYear(),
    output = `${currentMonth} ${currentDate}, ${year}`;
  return output;
};
