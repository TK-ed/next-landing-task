export async function GET() {
  if (req.method === "POST") return NextResponse.json({ msg: "Hello, World" });
}
