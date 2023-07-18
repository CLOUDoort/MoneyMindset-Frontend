import { end_date, start_date } from "../MoneyBookNav"
import { useGetFlowData, useGetFlowList, } from "../../../react-query/Expense/ExpenseFlowData"

import ExpenseInput from './ExpenseInput'
import ExpenseItemList from "./ExpenseItemList"
import Loading from "../../Loading"
import { end_date_string } from "../MaginotLine/MoneyBookMaginotLine"
import { start_date_string } from "../MaginotLine/MoneyBookMaginotLine"
import { useState } from "react"

const MoneyBookExpense = () => {
    const { data } = useGetFlowList()
    const { data: flow_data } = useGetFlowData({ start_date, end_date })
    const [showCalendar, setShowCalendar] = useState<boolean>(false)
    const [flowList, setFlowList] = useState(false)
    const handleFlowList = () => setFlowList(!flowList)
    const clickFalse = () => {
        setShowCalendar(false)
        setFlowList(false)
    }
    let income_sum = 0;
    let outcome_sum = 0;
    flow_data?.data.forEach((item: any) => {
        if (item.flow_id <= 4) {
            income_sum += item.amount
        }
        if (item.flow_id > 4) {
            outcome_sum += item.amount
        }
    })
    return (
        <>
            {flow_data ? <div className="lg:ml-52 ml-14 relative bg-white min-w-[47rem] w-full flex flex-col justify-center items-center" onClick={clickFalse}>
                <div className='flex items-center lg:w-[75%] mt-10 max-w-[70rem] w-[80%] text-2xl gap-3 font-semibold'>
                    <div>{start_date_string} ~</div>
                    <div>{end_date_string}</div>
                </div>
                <div className="flex flex-col items-center justify-center lg:w-[75%] max-w-[70rem] w-[80%]">
                    <div className="flex flex-col w-full p-10 m-10 border rounded">
                        <ExpenseInput showCalendar={showCalendar} setShowCalendar={setShowCalendar} handleFlowList={handleFlowList} data={data} setFlowList={setFlowList} flowList={flowList} />
                    </div>
                </div>
                {flow_data && <ExpenseItemList data={flow_data?.data} />}
                <div className='flex items-center lg:w-[75%] mb-10 max-w-[70rem] w-[80%] text-2xl gap-3 font-semibold'>
                    <div className='text-start w-[50%] text-blue-500'>수입: {income_sum} 원</div>
                    <div className='text-start w-[50%] text-red-500'>지출: {outcome_sum} 원</div>
                </div>
            </div> : <Loading />}
        </>
    )
}

export default MoneyBookExpense