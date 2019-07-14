export const formatTemperature = (temperature) => Math.round(parseFloat(temperature) - 273.15)

export const leftZero = (str: number) => str < 10 ? '0' + str : str

export const formatDate = (date) => {
  const d = new Date(date)

  return `${this.leftZero(d.getHours())}:${this.leftZero(d.getMinutes())} ${this.leftZero(d.getDate())}-${this.leftZero(d.getMonth() + 1)}`
}
