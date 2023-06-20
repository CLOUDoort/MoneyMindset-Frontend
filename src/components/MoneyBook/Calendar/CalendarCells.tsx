import { addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from "date-fns"

const CalendarCells = ({ currentMonth }: any) => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const rows = []
    let days = []
    let day = startDate
    let formattedDate = ''

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd')
            const cloneDay = day
            days.push(
                <div className={`w-full gap-1 border rounded pb-[12%] text-end ${format(currentMonth, 'M') !== format(day, 'M') ? 'bg-black/10' : 'cursor-pointer'}`} key={formattedDate}>
                    <span className="p-3">{formattedDate}</span>
                </div>
            )
            day = addDays(day, 1)
        }
        rows.push(
            <div className="flex w-full gap-1">
                {days}
            </div>
        )
        days = []
    }

    return (
        <div className="flex items-center flex-col justify-between min-w-[45rem] w-[50rem] lg:w-[51rem] border border-t-0 border-collapse p-1 gap-1 rounded-t-none">
            {rows}
        </div>
    )
}

export default CalendarCells