
import type { Dispatch, SetStateAction } from "react"

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
}

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .30,
        label: '30%'
    },
]

export default function TipPercentageForm({ setTip }: TipPercentageFormProps) {
    return (
        <>
            <div>
                <h3 className="font-bold text-2xl">Propina:</h3>
                <form action="">
                    {tipOptions.map(tip => (
                        <div key={tip.id} className="flex gap-2">
                            <label htmlFor={tip.id}>{tip.label}</label>
                            <input
                                type="radio"
                                id={tip.id}
                                name="tip"
                                value={tip.value}
                                // e.target.value is a string, using + fixes the value type issue
                                onChange={e => setTip(+e.target.value)}
                            />
                        </div>
                    ))}
                    <div>

                    </div>
                </form>
            </div>
        </>
    )
}
