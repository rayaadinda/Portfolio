"use server"

import React from "react"
import { Resend } from "resend"
import { validateString, getErrorMessage } from "@/lib/utils"
import ContactFormEmail from "@/email/contact-form-email"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get("senderEmail")
	const message = formData.get("message")

	// Type check and validation
	if (!senderEmail || typeof senderEmail !== "string") {
		return {
			error: "Invalid sender email",
		}
	}
	if (!message || typeof message !== "string") {
		return {
			error: "Invalid message",
		}
	}

	// simple server-side validation
	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid sender email",
		}
	}
	if (!validateString(message, 5000)) {
		return {
			error: "Invalid message",
		}
	}

	let data
	try {
		data = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: "rayaadinda78@gmail.com",
			subject: "Message from contact form",
			reply_to: senderEmail as string,
			react: React.createElement(ContactFormEmail, {
				message: message,
				senderEmail: senderEmail,
			}),
		})
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		}
	}

	return {
		data,
	}
}
