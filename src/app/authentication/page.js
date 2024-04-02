import React from 'react'

function Authentication() {
  return (
    <>
       <main className="h-[80vh] flex flex-col items-center justify-center gap-6 mx-auto">
        <h1 className="text-4xl">This is the Authentication Page</h1>
        <form>
        <input type="text"></input>
        </form>
        <button className="text-lg font-semibold rounded-lg px-4 py-2  bg-gradient-to-r from-green-400 to-blue-500 hover:-translate-y-1 ">
          Submit
        </button>
      </main>
    </>
  )
}

export default Authentication