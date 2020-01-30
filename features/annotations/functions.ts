const add = (a: number, b: number) => {
  return a + b;
};

function subtract(a: number, b: number) {
  a - b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);

  // void can return null of undefined
};

const throwError = (message: string): never => {
  throw new Error(message);

  // function will never return anything
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
