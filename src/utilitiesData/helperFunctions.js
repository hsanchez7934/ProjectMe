export const cleanArray = (array, limit) => {
  let tempArr = [];
  for (let i = 0; i < array.length - limit; i++) {
    let object = Object.assign({
      year: array[i].Year,
      percentage: parseFloat(array[i].Percentage)
    });
    tempArr.push(object);
  }
  return tempArr;
};

export const returnDay = () => {
  const dateNow = new Date();
  const weekDay = dateNow.getDay();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return days[weekDay];
};

export const returnDate = () => {
  const dateNow = new Date();
  const date = dateNow.getDate();
  const year = dateNow.getFullYear();
  const month = dateNow.getMonth();
  const months = [
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
    'Dec'
  ];

  return `${months[month]} ${date}, ${year}`;
};

export const returnTime = () => {
  const dateNow = new Date();
  const hours = dateNow.getHours();
  const minutes = dateNow.getMinutes();
  const seconds = dateNow.getSeconds();

  const returnedTime = new Date(
    0, 0, 0, hours, minutes, seconds
  ).toTimeString();
  return returnedTime;
};

export const hoverLink = query => {
  switch (query) {
  case `feedyourmind`:
    return `Travel stories teach geography; insect
    stories lead the child into natural science;
    and so on. Reading, in short, introduces people
    to the most varied subjects; and the moment they
    have been thus started, they can go on to any limit
    guided by the single passion for reading. Explore a
    selection of interesting articles to read from finance,
    science, tech and more.`;
  case `schooldata`:
    return `Motivation is when you get hold of an
     idea and carry it through to its conclusion,
     and inspiration is when an idea gets hold of
     you and carries you where you are intended to go.
     The backstory to what inspired the creation of ProjectMe.`;
  case `goalstracker`:
    return `Our goals can only be reached through a vehicle
    of a plan, in which we must fervently believe,
    and upon which we must vigorously act. There is no other
    route to success. Plan your goals here and move relentlessly
    into the direction of your dreams.`;
  default:
    return `ProjectMe was created to be your daily
      source of inspiration and motivation and as
      a tool where you can store your most precious goals
      that you wish to accomplish in your life. Hover over
      the links to the left to explore ProjectMe.`;
  }
};
