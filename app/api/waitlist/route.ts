import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  console.log("GOOGLE_SHEET_ID =", process.env.GOOGLE_SHEET_ID);
  console.log("GOOGLE_CLIENT_EMAIL =", process.env.GOOGLE_CLIENT_EMAIL);

  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }
    console.log("KEY START:");
console.log(process.env.GOOGLE_PRIVATE_KEY?.substring(0, 80));

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A:B",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toISOString(), email]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}