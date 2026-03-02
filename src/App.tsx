import './App.css'
import MenuItem from './Components/MenuItem'
import OrderContents from './Components/OrderContents'
import { menuItems } from './DB/db'
import useOrder from './Hooks/useOrder'
import OrderTotal from './Components/OrderTotal'
import TipPercentageForm from './Components/TipPercentageForm'

function App() {

  const { order, addItem, removeItem, tip, setTip } = useOrder()

  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-bold'>Caculadora de propinas y consumo</h1>
      </header>
      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        <div className='p-5'>
          <h2 className='text-4xl font-bold'>Menú</h2>
          <div className='space-y-2 mt-10'>
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className='border border-dashed border-slate-300 rounded-lg space-y-10 p-5'>
          <OrderContents
            order={order}
            removeItem={removeItem}
          />
          <TipPercentageForm
            setTip={setTip}
          />
          <OrderTotal
            order={order}
            tip={tip}
          />
        </div>
      </main>
    </>
  )
}

export default App
