export function formatDateTime(dateTimeString: string) {
  try {
    const [datePart, timePart] = dateTimeString.split(' ')
    const [year, month, day] = datePart.split('-').map(Number)
    const [hours, minutes] = timePart.split(':').slice(0, 2).map(Number)
    const offsetMinutes = Number.parseInt(timePart.slice(-3), 10) * 60

    const date = new Date(Date.UTC(year, month - 1, day, hours, minutes - offsetMinutes)) // Month is 0-indexed; subtract offset from minutes

    const formattedDay = String(date.getUTCDate()).padStart(2, '0')
    const formattedMonth = String(date.getUTCMonth() + 1).padStart(2, '0')
    const formattedYear = date.getUTCFullYear()
    const formattedHours = String(date.getUTCHours()).padStart(2, '0') // getUTCHours will return hours based on UTC time
    const formattedMinutes = String(date.getUTCMinutes()).padStart(2, '0')

    return `${formattedDay}.${formattedMonth}.${formattedYear} ${formattedHours}:${formattedMinutes}`
  }
  catch (error) {
    return 'Invalid date and time string'
  }
}
