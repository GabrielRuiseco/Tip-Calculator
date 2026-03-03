
import type { Dispatch, SetStateAction } from "react"

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
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

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
    return (
        <>
            <div>
                <h3 className="font-bold text-2xl">Propina:</h3>
                <form action="">
                    {tipOptions.map(tipOption => (
                        <div key={tipOption.id} className="flex gap-2">
                            <label htmlFor={tipOption.id}>{tipOption.label}</label>
                            <input
                                type="radio"
                                id={tipOption.id}
                                name="tip"
                                value={tipOption.value}
                                // e.target.value is a string, using + fixes the value type issue
                                onChange={e => setTip(+e.target.value)}
                                checked={tipOption.value === tip}
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
