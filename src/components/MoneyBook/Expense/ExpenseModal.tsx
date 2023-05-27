import ExpenseModalItem from "./ExpenseModalItem"
import { useNavigate } from "react-router"

const ExpenseModal = ({ setModal, item, modalData }: any) => {
    const navigate = useNavigate()
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-white bg-opacity-90" onClick={() => setModal(false)}>
            <div onClick={(e) => e.stopPropagation()} className="flex flex-col z-1000 bg-white max-w-[50rem] w-[30rem] lg:ml-52 ml-14 border rounded">
                <div className="flex items-center justify-between pt-10 pb-5 font-semibold px-14 bg-gray">
                    <div className="text-2xl">{modalData}</div>
                    <div className="cursor-pointer" onClick={() => navigate('/money-book/statistics')}>통계</div>
                </div>
                <div className="overflow-y-scroll">
                    {item.map((item: any) => (
                        <ExpenseModalItem key={item.idx} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExpenseModal