import { useState } from "react"
import {
  BiDownvote,
  BiUpvote,
  BiSolidUpvote,
  BiSolidDownvote,
} from "react-icons/bi"
import { GoDotFill } from "react-icons/go"
import { BsDot } from "react-icons/bs"
import Tags from "./Tags"

function FapPost() {
  const [downvote, setDownvote] = useState(false)
  const [upvote, setUpvote] = useState(false)
  return (
    <div className="min-h-4 border bg-zinc-900 hover:bg-zinc-800/75 border-zinc-700 rounded-lg p-4">
      <div className="flex justify-between items-center pb-4">
        <div className="flex gap-2 items-center">
          <img
            className=" size-6 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          />
          <p className="select-none">User69420</p>
          <BsDot className="text-gray-500" />
          <p className="text-gray-400 text-xs select-none">15 hrs..</p>
        </div>
        <div className="flex font-medium text-xs w-fit gap-2 items-center bg-green-400/10 border-green-800 p-1 rounded-full text-green-400 pr-2 hover:bg-green-800 hover:text-green-">
          <GoDotFill />
          <p className="select-none">VPN</p>
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="flex-initial">
          <img
            className="rounded-md size-36 select-none"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          />
        </div>
        <div className="text-xl flex flex-col flex-1 justify-between">
          <div>
            <a className="hover:text-blue-300 hover:" href="#">
              Hot Indian Bhabhi with young devar full masti mms leak
            </a>
            <p className="text-gray-500">Brazzers</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Tags tagName="Indian" />
            <Tags tagName="Desi" />
            <Tags tagName="Devar" />
            <Tags tagName="Doggystyle" />
            <Tags tagName="MMS" />
            <Tags tagName="Sex" />
            <Tags tagName="Bhabhi" />

            <Tags tagName="BBC" />
          </div>
          <div className="flex  self-end gap-2">
            {!upvote ? (
              <BiUpvote
                onClick={() => setUpvote(true)}
                className="text-red-500 size-6"
              />
            ) : (
              <BiSolidUpvote
                onClick={() => setUpvote(false)}
                className="text-red-500 size-6"
              />
            )}
            <p>100</p>
            {!downvote ? (
              <BiDownvote
                onClick={() => setDownvote(true)}
                className="text-red-500 size-6"
              />
            ) : (
              <BiSolidDownvote
                onClick={() => setDownvote(false)}
                className="text-red-500 size-6"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FapPost
