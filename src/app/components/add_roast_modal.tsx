'use client'

import React from "react";
import { addRoast } from "../actions/add_roast";
import Modal from "./modal"

const AddRoastModal = () => {
	const ref = React.useRef<HTMLFormElement>(null);
	return (
		<Modal title="Add Roast">
			<form ref={ref} id="add-new-roast-form" action={async (formData) => {
				await addRoast(formData);
				ref.current?.reset();
			}}>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
						Name
					</label>
					<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" id="name" type="text" placeholder="Name"></input>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roaster">
						Roaster
					</label>
					<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="roaster" id="roaster" type="text" placeholder="Roaster"></input>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origin">
						Origin
					</label>
					<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="origin" id="origin" type="text" placeholder="Origin"></input>
				</div>
				<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
					<button
						className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</Modal>
	)
}

export default AddRoastModal;
