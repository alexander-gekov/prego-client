<template>
<div>
  <div class="flex justify-between">
    <div class="m-12 ml-48 w-1/3">
      <h2>Welcome, employee_name! </h2>
      <div class="below-title links">
        <span>Review your daily schedule </span>
      </div>
    </div>
  </div>
  <div class="container ml-5">
    <FullCalendar :options="calendarOptions"
    >
      <template #eventContent="{ timeText, event }">
        <b>{{ timeText }}</b>
        <i>{{ event.title }}</i>
      </template>
    </FullCalendar>
  </div>

  <!--        Modal       -->
  <div v-if="toggleModal"
       class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
    <div class="relative mx-auto w-1/3">
      <div class="bg-white w-full rounded shadow-2xl flex flex-col p-5">
        <div class="text-2xl font-bold text-center verdana">Appointment details</div>
        <table class="text-lg ">
          <tbody>
          <tr>
            <td>Date: </td>
            <td>16-12-2020</td>
          </tr>
          <tr>
            <td>Time: </td>
            <td>11am - 12 pm</td>
          </tr>
          <tr>
            <td>Visitor name: </td>
            <td>Adam Sandler</td>
          </tr>
          <tr>
            <td>Reason for visit: </td>
            <td>Discussing a business offer</td>
          </tr>
          </tbody>
        </table>

          <br>

          <div class="flex items-center ">
            <button
                class="bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-32 rounded focus:outline-none focus:shadow-outline left"
                @click="toggleModal = false" type="button">
              Close
            </button>
            <button
                @click="addEmployee()"
                class="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline right"
                type="button">
              Send email
            </button>
            <button
                class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline right"
                @click="deleteAppointment(1)" type="button">
              Cancel visit
            </button>
          </div>

      </div>
    </div>
  </div>
  <!--              End modal-->
</div>
</template>

<script>

// require('@fullcalendar/core/main.min.css')
require('@fullcalendar/daygrid/main.min.css')
require('@fullcalendar/timegrid/main.min.css')

import FullCalendar from '@fullcalendar/vue'
import DayGridPlugin from '@fullcalendar/daygrid'
import TimeGridPlugin from '@fullcalendar/timegrid'
import InteractionPlugin from '@fullcalendar/interaction'
import ListPlugin from '@fullcalendar/list'

export default {
  name: 'EmployeeDashboard',
  components: {
    FullCalendar,
  },
  data() {
    return {
      appointments: [
        { title: 'event 4', date: '2020-11-10' },
        { title: 'event 5', date: '2020-11-11' }
      ],
      toggleModal: false,
      calendarOptions: {
        plugins: [
          DayGridPlugin,
          TimeGridPlugin,
          InteractionPlugin,
          ListPlugin
        ],
        initialView: 'dayGridMonth',
        headerToolbar: {
        start: 'title',
        center: 'dayGridMonth, timeGridWeek, timeGridDay, list',
        end: 'prev today next'
        },
        selectable: 'true',
        editable: true,
        selectMirror: true,
        dayMaxEvents: true,
        initialEvents: this.appointments,
        events: [
          { title: 'event 1', date: '2020-11-11' },
          { title: 'event 2', date: '2020-11-02' },
          {
            title: 'Lunch',
            start: new Date().toISOString().replace(/T.*$/, '') + 'T12:00:00'
          },
        ],
        eventSet:this.handleEvents,
        select: this.handleDateSelect,
        // dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      }
    }
  },
  methods: {

    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
    },
    handleDateSelect(selectInfo) {
      let title = prompt('Please enter a new title for your event')
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: 111,
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    },
    handleEvents(events) {
      this.appointments = events
    },
    handleEventClick() {
      this.toggleModal = !this.toggleModal;
    },
    deleteAppointment(id){
        if (confirm(`Are you sure you want to delete the appointment`)) {
          // clickInfo.event.remove()
          console.log(id)
        }
    }
  }
}
</script>

<style scoped>

.links {
  text-transform: uppercase;
  letter-spacing: 2px;
}

.below-title {
  border-top: dotted 1px #999;
  border-bottom: dotted 1px #999;
  padding-top: 10px;
  padding-bottom: 10px;
  color: darkgray;
  font-size: smaller;
}


h2 {
  font-size: 35px;
  line-height: 1.4em;
}

tr{
line-height: 300%;
  font-size: large;
  font-family: Verdana;
}
.verdana{
  font-family: Verdana;
  padding: 15px;
}
</style>
