import { NextApiRequest, NextApiResponse } from "next"
import sharp from "sharp"
import { promises as fs } from "fs"
import path from "path"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { url, width, height } = req.query

	if (!url || typeof url !== "string") {
		res.status(400).json({ error: "Image URL is required" })
		return
	}

	console.log(
		`Received request to generate thumbnail for URL: ${url} with width: ${width} and height: ${height}`
	)

	try {
		// Resolve the path to the local image
		const filePath = path.join(process.cwd(), "public", url)

		// Read the image file from the filesystem
		const buffer = await fs.readFile(filePath)

		console.log(`Successfully read image from path: ${filePath}`)

		// Process the image with Sharp
		const resizedImage = await sharp(buffer)
			.resize(parseInt(width as string, 30), parseInt(height as string, 30))
			.png()
			.toBuffer()

		console.log(`Successfully resized image`)

		// Define the path to save the thumbnail
		const thumbnailPath = path.join(process.cwd(), "public", "thumbnail.png")

		// Save the resized image to the filesystem
		await fs.writeFile(thumbnailPath, resizedImage)

		console.log(`Successfully saved thumbnail to ${thumbnailPath}`)

		// Respond with the URL to the saved thumbnail
		const thumbnailUrl = "/thumbnail.png"
		res.status(200).json({ thumbnailUrl })
	} catch (error: unknown) {
		console.error("Error generating thumbnail:", error)

		// Safely cast error to Error type
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error"
		res
			.status(500)
			.json({ error: "Failed to generate thumbnail", details: errorMessage })
	}
}

export default handler
