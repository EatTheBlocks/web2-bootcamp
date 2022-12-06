import React from 'react'

class BirthdayReminder extends React.Component {
  constructor(props) {
    super(props)

    // Get the current list of birthdays from localStorage, or an empty array if there is no data
    const storedBirthdays = JSON.parse(localStorage.getItem('birthdays')) || []

    // Set the initial state of the component to include the stored birthdays
    this.state = {
      birthdays: storedBirthdays,
    }
  }

  isBirthdayToday = (birthdate) => {
    const today = new Date()
    const birthdayDate = new Date(birthdate)
    return (
      birthdayDate.getMonth() === today.getMonth() &&
      birthdayDate.getDate() + 1 === today.getDate()
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const date = event.target.date.value
    this.setState({
      birthdays: [...this.state.birthdays, { name, date }],
    })
    localStorage.setItem(
      'birthdays',
      JSON.stringify([...this.state.birthdays, { name, date }])
    )
  }

  render() {
    const todaysBirthdays = this.state.birthdays.filter((birthday) => {
      return this.isBirthdayToday(birthday.date)
    })
    return (
      <div>
        <h1>Birthday Reminder</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' name='name' />
          </label>
          <label>
            Date:
            <input type='date' name='date' />
          </label>
          <input type='submit' value='Add' />
        </form>
        <h2>Today's Birthdays</h2>
        <ul>
          {todaysBirthdays.map((birthday) => (
            <li>{birthday.name}</li>
          ))}
        </ul>
        <h2>Upcoming Birthdays</h2>
        <ul>
          {this.state.birthdays.map((birthday) => (
            <li>
              {birthday.name} - {birthday.date}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default BirthdayReminder
