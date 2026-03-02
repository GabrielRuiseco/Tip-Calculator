import { useMemo, useCallback } from "react"
import type { OrderItem } from "../Types/types"
import { formatCurrency } from "../Helpers/helpers"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number
}

export default function OrderTotal({ order, tip }: OrderTotalProps) {

    //const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    //const tipAmount = useMemo(() => subTotalAmount * tip, [subTotalAmount, tip])
    //const totalAmount = useMemo(() => tipAmount + subTotalAmount, [subTotalAmount, tipAmount])
    const subTotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useCallback(() => subTotalAmount() * tip, [subTotalAmount, tip])
    const totalAmount = useCallback(() => tipAmount() + subTotalAmount(), [subTotalAmount, tipAmount])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-bold text-2xl">Totales y Propina</h2>
                <p className="">Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subTotalAmount())}</span>
                </p>
                <p className="">Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount())}</span>
                </p>
                <p className="">Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount())}</span>
                </p>

            </div>
            <button></button>
        </>
    )
}
