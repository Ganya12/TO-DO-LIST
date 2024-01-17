import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CheckIcon, PlusIcon } from '@heroicons/react/20/solid'
import axios from 'axios';



const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '$24',
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  },
]

function classNames(...classes) {
  

  return classes.filter(Boolean).join(' ')
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    //вызовется 1 раз после загрузки компонента
    axios.get('http://localhost:3000/api/todos')
      .then(data => {
        //console.log(data, "data")
        setTodos(data.data);

      })
      .catch((error) => console.log(error, "error"))
  }, []);

  useEffect(() => {
    console.log(todos, "todos");
  }, [todos]);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">TO DO LIST</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Разработка TO DO LIST с возможностью добавления задач
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Цель: Разработать веб-приложение, которое позволяет пользователям создавать, просматривать и управлять списком дел, сначала без бэкенда, а затем интегрировать его с сервером через API.
        </p>
        <br></br>
        <br></br>
        <fieldset>
          {todos?.map((todo) => {
            return (
              <>
                {todo?.id} - {todo?.name} - {todo?.isDone}
              </>
            );
          })}
          {/* */}
          {/* */}
          {/* */}
          <legend className="sr-only">Notifications</legend>
          <div className="space-y-5 text-left">
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3 text-md leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900 text-left">
                  Продумать дизайн to do list
                </label>
                <p id="comments-description" className="text-gray-500">
                  Разработать в figma дизайн to do list со всеми составляющими
                </p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="candidates"
                  aria-describedby="candidates-description"
                  name="candidates"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3 text-md leading-6">
                <label htmlFor="candidates" className="font-medium text-gray-900">
                  Candidates
                </label>
                <p id="candidates-description" className="text-gray-500">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="offers"
                  aria-describedby="offers-description"
                  name="offers"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3 text-md leading-6">
                <label htmlFor="offers" className="font-medium text-gray-900">
                  Offers
                </label>
                <p id="offers-description" className="text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>
        </fieldset>
        <br></br>

        <div className="relative" >
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <PlusIcon className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              Добавить задачу
            </button>
          </div>
        </div>





      </div>
    </div>
  )
}