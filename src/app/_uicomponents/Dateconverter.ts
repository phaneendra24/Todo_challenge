const convert = (date: Date) => {
  const inputDate: Date = new Date(date);

  const outputDateString: string = `${inputDate.getDate()}/${
    inputDate.getMonth() + 1
  }/${inputDate.getFullYear()}`;

  return outputDateString;
};

export default convert;
