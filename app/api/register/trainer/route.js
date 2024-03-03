import { APITable } from "apitable"
import { NextResponse } from "next/server"

export async function POST(req, res) {
	if (req.method === "POST") {
		const { formData } = await req.json()
		const apitable = new APITable({
			token: process.env.NEXT_PUBLIC_AITABLE_API_KEY,
		})
		const datasheet = apitable.datasheet(
			process.env.NEXT_PUBLIC_DATASHEET_COACH
		)
		try {
			const response = await datasheet.records.create([
				{
					fields: {
						Name: formData.Name,
						"Contact Number": formData.contact_number,
						Email: formData.email,
						Sports: formData.sports,
						Age: formData.age,
						City: formData.city,
					},
				},
			])
			
			return NextResponse.json({ response: response.data.records })
		} catch (err) {
			console.error("Error:", err)
			return NextResponse.json({
				error: "An error occurred while creating records.",
			})
		}
	} else {
		return NextResponse.status(405).end()
	}
}
